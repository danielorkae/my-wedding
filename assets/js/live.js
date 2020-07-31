(() => {
  const weddingDate = new Date("2020-08-01 16:00");
  const broadcastUrl = "https://youtu.be/E1SvzFgRGZY";

  var redirectCounter = 5;

  const setTimeDiff = (weddingDate) => {
    let now = new Date();

    let diff = weddingDate.getTime() - now.getTime();

    if (diff <= 0) {
      diff = 0;
    }

    let diffInHours = diff / 1000 / 60 / 60;

    let days = Math.floor(diffInHours / 24);
    let hours = Math.floor(diffInHours - days * 24);
    let minutes = Math.floor((diffInHours - (days * 24 + hours)) * 60);
    let seconds = Math.floor(
      (diffInHours - (days * 24 + hours + minutes / 60)) * 3600
    );

    $(".days .days__value").html(days);
    $(".hours .hours__value").html(hours);
    $(".minutes .minutes__value").html(minutes);
    $(".seconds .seconds__value").html(seconds);
  };

  const redirectCountDown = () => {
    if (redirectCounter <= 0) {
      redirectToBroadcast();
      return;
    }

    redirectCounter--;
    $(".redirect-counter").html(redirectCounter);
  };

  const redirectToBroadcast = () => {
    window.location.href = broadcastUrl;
  };

  const init = () => {
    setTimeDiff(weddingDate);
    setInterval(() => setTimeDiff(weddingDate), 1000);

    setInterval(() => redirectCountDown(redirectCounter), 1000);
  };

  init();
})();
