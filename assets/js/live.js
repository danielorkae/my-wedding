(() => {
  const weddingDate = new Date("2020-08-01 16:00");

  const setTimeDiff = (weddingDate) => {
    let now = new Date();

    let diff = weddingDate.getTime() - now.getTime();

    let diffInHours = diff / 1000 / 60 / 60;

    let days = Math.floor(diffInHours / 24);
    let hours = Math.floor(diffInHours - days * 24);
    let minutes = Math.floor((diffInHours - (days * 24 + hours)) * 60);

    $(".days .days__value").html(days);
    $(".hours .hours__value").html(hours);
    $(".minutes .minutes__value").html(minutes);
  };

  const init = () => {
    setTimeDiff(weddingDate);
    setInterval(() => setTimeDiff(weddingDate), 30 * 1000);
  };

  init();
})();
