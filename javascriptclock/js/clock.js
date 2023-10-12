let username = prompt ("Lütfen isminizi giriniz:..");

let myNameDOM = document.querySelector("#myName");

myNameDOM.innerHTML = `${username}`;

function startTime() {
  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  //Add a zero in front of numbers<10
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("myClock").innerHTML = hr + ":" + min + ":" + sec;
  
  var months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
  var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
  var curWeekDay = days[today.getDay()];
  var curDay = today.getDate();
  var curMonth = months[today.getMonth()];
  var curYear = today.getFullYear();
  var date = curDay+" "+curMonth+" "+curYear+", "+curWeekDay;
  document.getElementById("date").innerHTML = date;
  
  var time = setTimeout(function(){ startTime() }, 1000);
}
function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}
startTime();
