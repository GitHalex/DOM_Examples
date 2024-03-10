const d = document;
export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn);
  const $selectors = d.querySelectorAll("[data-dark]");
  // console.log($selectors);
  let moon = "🌙",
    sun = "☀";
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      console.log($themeBtn.texContent);
      if ($themeBtn.texContent === moon) {
        $selectors.forEach((el) => el.classList.add(classDark));
        $themeBtn.texContent = sun;
      } else {
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.texContent = moon;
      }
    }
  });
}
