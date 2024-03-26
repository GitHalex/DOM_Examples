const d = document;
const ls = localStorage;
export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn);
  const $selectors = d.querySelectorAll("[data-dark]");
  // console.log($selectors);
  let moon = "🌙",
    sun = "☀";

  const lightMode = () => {
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.texContent = moon;
    ls.setItem("theme", "light");
  };
  const darktMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.texContent = sun;
    ls.setItem("theme", "dark");
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      console.log($themeBtn.texContent);
      if ($themeBtn.texContent === moon) {
        darktMode();
      } else {
        lightMode();
      }
    }
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");

    if (ls.getItem("theme") == "light") lightMode();

    if (ls.getItem("theme") == "dark") darktMode();
  });
}
