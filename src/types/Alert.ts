function RenderAlert(icon: string, message: string, color: string) {
  // obtenemos el elemento donde se insertara la alerta
  const alertBody = document.getElementById("insert-alert") as HTMLElement;

  // creamos el elemento que contendrá el icono y el mensaje
  const article = document.createElement("article");
  article.className = `px-5 py-2 flex justify-center items-center absolute space-x-3 rounded-[4px] -top-1/2 text-white`;
  article.style.backgroundColor = `${color}`;

  // limpia los datos del alert body
  alertBody.innerHTML = "";

  // configuramos el icono
  const iconElement = document.createElement("i");
  iconElement.className = `${icon}`;

  // configuramos el mensaje
  const messageElement = document.createElement("p");
  messageElement.className = "text-[15px] font-montserrat";
  messageElement.innerHTML = message;

  // agregamos el estilo de visualización para que se note la alerta
  alertBody.style.display = "flex";

  // agregamos el contenedor de la alerta al elemento que se encarga de mostrar las alertas
  alertBody.appendChild(article);

  // agregamos el icono y el mensaje
  article.appendChild(iconElement);
  article.appendChild(messageElement);

  // tiempo de espera para que se muestre la alerta al usuario
  setTimeout(() => {
    article.style.transition = "all .4s ease";
    article.style.top = "0px";

    // espera unos segundos para que se desaparezca la alerta
    setTimeout(() => {
      article.style.transition = "all .4s ease";
      article.style.opacity = "0";

      // limpiamos el contenedor de la alerta
      setTimeout(() => {
        alertBody.innerHTML = "";
        alertBody.style.display = "none";
      }, 400);
    }, 3000);
  }, 100);
}

// función que se encarga de configurar la alerta que se mostrara al usuario
export function Alert(status: number, message: string) {
  let icon;

  // manejo de los diferentes iconos de las alertas
  if (status === 200) {
    icon = "ri-check-line text-[20px]";
    RenderAlert(icon, message, "#05b20d");
  } else if (status === 300) {
    icon = "ri-alert-fill text-[20px]";
    RenderAlert(icon, message, "#ecb90d");
  } else {
    icon = "ri-close-line text-[20px]";
    RenderAlert(icon, message, "#e23f33");
  }
}
