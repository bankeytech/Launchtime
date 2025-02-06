window.onload = () => {
  document.querySelector('#set').onclick = set;
}

let date1 = " "
let time1 = " "

function set () {
  date1 = document.querySelector("#date1").value;
  time1 = document.querySelector("#time1").value;

  const contime = () => {
    const endDate  = new Date(date1).getTime();
    const now = new Date().getTime();
  
  
    const difference = endDate - now
    
    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24
  
    let timeDays = Math.floor(difference/days)
    let timeHours = Math.floor((difference % days) / hours)
    let timeMinutes = Math.floor((difference % hours) / minutes)
    let timeSeconds = Math.floor((difference % minutes) / seconds)
  
    timeDays = timeDays <10 ? "0" + timeDays : timeDays
    timeHours = timeHours < 10 ? "0" + timeHours : timeHours
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds
  
    document.getElementById("days").innerHTML = timeDays
    document.getElementById("hours").innerHTML = timeHours
    document.getElementById("minutes").innerHTML = timeMinutes
    document.getElementById("seconds").innerHTML = timeSeconds
  
  }
  setInterval(contime,1000)
  return 
} 


