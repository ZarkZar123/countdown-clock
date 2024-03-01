// slect html elements
const timeDisplay =document.querySelector(".display__time-left")
const endTimeDisplay =document.querySelector(".display__end-time")
const timeButtons =document.querySelectorAll("[data-time]");
const customTimeBtn =document.querySelector("submit__button")
let countDown;


function timer(seconds){
    clearInterval(countDown)
    timeDisplay.textContent =`00:00`
    const now = Date.now()
    const endTime = now + seconds * 1000

    countDown = setInterval(()=>{
        const timeLeft =  Math.round((endTime - Date.now()) / 1000)
        console.log(timeLeft);
        if(timeLeft<=0){
            clearInterval(countDown)
            timeDisplay.textContent =`00:00`
            return;
        }
        displayCountDown(timeLeft)
    },1000 )

    displayEndTime(endTime)
}

function displayCountDown(seconds){
    const minutes =  Math.floor(seconds / 60)
    const remainderMin = seconds % 60;

    const display =`${minutes}:${remainderMin}`


    timeDisplay.textContent =display
}

function displayEndTime(time){
    const end = new Date(time)
    const hour =end.getHours();
    const formatHour = hour > 12 ? hour -12: hour
    const minutes =end.getMinutes();
    const amPm = hour>=12 ?'PM':'AM';
    console.log(end);
    endTimeDisplay.innerText= `Couter will stop at ${formatHour}:${minutes}${amPm}`
}


function startCountDown(e){
//   const seconds= Number(e.target.dataset.time)
  const seconds= parseInt(e.target.dataset.time)
timer(seconds)
}

document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
   const minutes= this.minutes.value
   console.log(minutes);
   timer(minutes*60)
   this.reset()

})

timeButtons.forEach(button=> button.addEventListener("click",(e)=>startCountDown(e)))
