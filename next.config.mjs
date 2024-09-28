/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
          port: '', // Deja el puerto vacío si no se utiliza
          pathname: '/**', // Esto permite todas las rutas del dominio
        },
      ],
    },
  };

  export default nextConfig;
