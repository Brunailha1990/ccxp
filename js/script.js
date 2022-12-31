// Set the date we're counting down to
let extraTime = 1000 * 60 * 60 * 24 * 3;
let countDownDate = new Date().getTime() + extraTime;

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  let seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "D " + hours + "H " + minutes + "M " + seconds + "S";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "COMEÇOU!";
  }
}, 1000);