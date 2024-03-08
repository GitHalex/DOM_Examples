import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { alarm, digitalClock } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("../assets/alarma_5.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "May 23, 2024 03:23:19",
    "Feliz Cumpleaños amigo y docente digital"
  );
  scrollTopButton(".scroll-top-btn");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
