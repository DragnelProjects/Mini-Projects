const hourDiv=document.getElementById("hourDiv");
const minDiv=document.getElementById("minDiv");
const secDiv=document.getElementById("secDiv");
const merdDiv=document.getElementById("merdDiv");
const displayDate = document.getElementById("displayDate");
const toggleBtn=document.getElementById("toggleBtn");
let is24Hour=true;

function toUpdatedClock() {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, 0);
  const seconds = date.getSeconds().toString().padStart(2, 0);


  if(is24Hour){
    hours=hours.toString().padStart(2,0);
    hourDiv.innerText=`${hours}`;
    minDiv.innerText=`${minutes}`;
    secDiv.innerText=`${seconds}`;
  }else{
    let  merideium= hours >= 12 ? "PM": "AM";
    hours= hours % 12 || 12;
    hours= hours.toString().padStart(2,0);

    hourDiv.innerText=`${hours}`;
    minDiv.innerText=`${minutes}`;
    secDiv.innerText=`${seconds}`;
    merdDiv.innerText=`${merideium}`;
  }
}
 setInterval(toUpdatedClock, 1000);

toggleBtn.addEventListener("click", ()=>{
    is24Hour = !is24Hour;
});

function toDisplayDate() {
  const date = new Date();
  const toDay = date.getDate();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  let newDay;
  switch (day) {
    case 1:
      newDay = "Monday";
      break;
    case 2:
      newDay = "Tuesday";
      break;
    case 3:
      newDay = "Wednesday";
      break;
    case 4:
      newDay = "Thrusday";
      break;
    case 5:
      newDay = "Friday";
      break;
    case 6:
      newDay = "Saturady";
      break;
    case 7:
      newDay = "Sunday";
      break;
    default:
      break;
  }
  let newMonth;
  switch (month) {
    case 0:
        newMonth="January";
        break;
    case 1:
      newMonth = "Febuary";
      break;
    case 2:
      newMonth = "March";
      break;
    case 3:
      newMonth = "April";
      break;
    case 4:
      newMonth = "May";
      break;
    case 5:
      newMonth = "June";
      break;
    case 6:
      newMonth = "July";
      break;
    case 7:
      newMonth = "August";
      break;
    case 8:
      newMonth = "September";
      break;
    case 9:
      newMonth = "Octuber";
      break;
    case 10:
      newMonth = "November";
      break;
    case 11:
      newMonth = "December";
      break;
    default:
      break;
  }

  displayDate.innerText = `${toDay} ${newDay} ${newMonth} ${year}`;
}
toDisplayDate();
