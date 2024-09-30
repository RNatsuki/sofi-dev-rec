"use client";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
  faVolumeUp,
  faVolumeMute,
  faExpand,
  faCompress,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import "./VideoPlayer.css";

interface VideoPlayerProps {
  src: string;
  thumbnail?: string;
  width?: number;
  height?: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, thumbnail }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [controlsTimeout, setControlsTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragProgress, setDragProgress] = useState<number | null>(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showSpeedSelector, setShowSpeedSelector] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
      setCurrentTime(video.currentTime);
    };

    const updateDuration = () => {
      setDuration(video.duration);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("loadedmetadata", updateDuration);

    const savedTime = localStorage.getItem("videoPlayerCurrentTime");
    if (savedTime) {
      video.currentTime = parseFloat(savedTime);
    }

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("videoPlayerCurrentTime", currentTime.toString());
  }, [currentTime]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  useEffect(() => {
    const handleFullScreenChange = () => {
      const fullScreenElement =
        document.fullscreenElement ||
        (document as Document & { webkitFullscreenElement?: Element })
          .webkitFullscreenElement;
      setIsFullScreen(fullScreenElement === videoRef.current);
      setControlsVisible(fullScreenElement === videoRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullScreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullScreenChange);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const muted = !isMuted;
    videoRef.current.muted = muted;
    setIsMuted(muted);
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
      if (videoRef.current) videoRef.current.muted = false;
    }
  };

  const seek = (time: number) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = time;
  };

  const handleForward = () => {
    if (!videoRef.current) return;
    seek(Math.min(videoRef.current.currentTime + 10, videoRef.current.duration));
  };

  const handleRewind = () => {
    if (!videoRef.current) return;
    seek(Math.max(videoRef.current.currentTime - 10, 0));
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !progressBarRef.current) return;
    const clickPosition = e.nativeEvent.offsetX / progressBarRef.current.offsetWidth;
    const newTime = clickPosition * videoRef.current.duration;
    seek(newTime);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (videoRef.current && dragProgress) {
      videoRef.current.currentTime = (dragProgress / 100) * videoRef.current.duration;
    }
    setDragProgress(null);
  };

  const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !progressBarRef.current) return;
    const clickPosition = e.nativeEvent.offsetX / progressBarRef.current.offsetWidth;
    setDragProgress(clickPosition * 100);
  };

  const showControls = () => {
    setControlsVisible(true);
    if (controlsTimeout) {
      clearTimeout(controlsTimeout);
    }

    const newTimeout = setTimeout(() => {
      if (!isFullScreen) {
        setControlsVisible(false);
      }
    }, 3000);

    setControlsTimeout(newTimeout);

  };

  const hideControls = () => {
    if (isFullScreen) {
      setControlsVisible(false);
    }
    const newTimeout = setTimeout(() => {
      if (!isFullScreen) {
        setControlsVisible(false);
      }
    }, 3000);
    setControlsTimeout(newTimeout);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${padZero(minutes)}:${padZero(secs)}`;
  };

  const padZero = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString();
  };

  const toggleFullScreen = () => {
    const videoContainer = videoRef.current?.parentElement;

    if (!document.fullscreenElement && videoContainer) {
      if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullScreen(false);
    }
  };

  const handlePlayBackRateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPlaybackRate(parseFloat(e.target.value));
  };

  const toggleSpeedSelector = () => {
    setShowSpeedSelector(!showSpeedSelector);
  };

  return (
    <div
      className="relative w-full max-w-[800px] mx-auto bg-black overflow-hidden"
      onMouseMove={showControls}
      onMouseLeave={hideControls}
    >
      {currentTime === 0 && !isPlaying && thumbnail && (
        <img
          src={thumbnail}
          alt="Thumbnail"
          className="absolute top-0 left-0 w-full h-full object-cover cursor-pointer"
          onClick={togglePlayPause}
        />
      )}
      <video
        ref={videoRef}
        src={src}
        className="video w-full h-auto block m-auto"
        controls={false}
        onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime ?? 0)}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <button
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl"
          onClick={togglePlayPause}
        >
          <FontAwesomeIcon icon={faPlay} />
        </button>
      )}

      {controlsVisible && (
        <div className="video-controls absolute bottom-0 left-0 right-0 flex justify-between items-center p-2.5 bg-[rgba(0,0,0,0)] text-white transition-colors ease-in-out hover:bg-[rgba(0,0,0,0.5)]">
          <button onClick={handleRewind} className="bg-transparent border-none text-white p-[5px_10px] cursor-pointer hover:scale-125 w-10 text-center">
            <FontAwesomeIcon icon={faBackward} />
          </button>
          <button onClick={togglePlayPause} className="bg-transparent border-none text-white p-[5px_10px] cursor-pointer hover:scale-125 w-10 text-center">
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
          </button>
          <button onClick={handleForward} className="bg-transparent border-none text-white p-[5px_10px] cursor-pointer hover:scale-125 w-10 text-center">
            <FontAwesomeIcon icon={faForward} />
          </button>
          <button onClick={toggleMute} className="bg-transparent border-none text-white p-[5px_10px] cursor-pointer hover:scale-125 w-10 text-center">
            <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={changeVolume}
            className="volume-slider"
          />
          <div
            ref={progressBarRef}
            className="progress-bar"
            onClick={handleProgressBarClick}
            onMouseDown={handleDragStart}
            onMouseUp={handleDragEnd}
            onMouseMove={handleDrag}
          >
            <div className="progress" style={{ width: `${progress}%` }}>
              <div
                className="time-tooltip"
                style={{ transform: `translateX(-50%)`, left: `${progress}%` }}
              >
                {formatTime(currentTime)}
              </div>
            </div>
          </div>
          <div className="time-display flex items-center space-x-2" style={{ width: "100px" }}>
            <span className="current-time">{formatTime(currentTime)}</span>
            <span className="duration-time">{formatTime(duration)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={toggleSpeedSelector} className="relative">
              <FontAwesomeIcon icon={faCog} />
              {showSpeedSelector && (
                <div className="absolute bg-gray-800 text-white p-2 rounded-lg right-0 top-[-150%] z-10 shadow-lg">
                  <select
                    value={playbackRate}
                    onChange={handlePlayBackRateChange}
                    className="bg-gray-700 text-white p-1 rounded"
                  >
                    <option value="0.5">0.5x</option>
                    <option value="1">1x (Normal)</option>
                    <option value="1.5">1.5x</option>
                    <option value="2">2x</option>
                  </select>
                </div>
              )}
            </button>
            <button onClick={toggleFullScreen}>
              <FontAwesomeIcon icon={isFullScreen ? faCompress : faExpand} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
