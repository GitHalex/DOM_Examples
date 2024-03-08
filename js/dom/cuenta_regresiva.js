const d = document;
export default function countdown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id);
  const $countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime();
    // console.log(now);
    let limitTime = $countdownDate - now;
    // console.log(limitTime);
    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
    // console.log(days);
    let hours = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).slice(-2);
    // console.log(hours);
    let minutes = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
    ).slice(-2);
    // console.log(minutes);
    let seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(
      -2
    );
    // console.log(seconds);

    $countdown.innerHTML = `<h2>Faltan: ${days} dias - ${hours} horas - ${minutes} minutos - ${seconds} segundos</h2>`;

    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
    }
  }, 1000);
}
