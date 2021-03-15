function format(num) {
  var kobe = num % 3600;
  var hour = (num - kobe) / 3600;

  var mj = kobe % 60;
  var min = (kobe - mj) / 60;

  var sec = mj;
  var result = hour + ":" + min + ":" + sec;
  console.log(result);
}
format(2);

