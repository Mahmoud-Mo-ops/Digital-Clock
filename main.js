
setInterval(()=>{
    const time =document.querySelector("#time")
    let date = new Date();
    let Hours=date.getHours()
   let minutes=date.getMinutes()
   let second=date.getSeconds()
   let day_night="AM"
if(Hours < 10){
    Hours="0"+Hours;
}
if(Hours >12){
    let day_night="PM"
    Hours= Hours-12
}
if(minutes <10){
   minutes="0"+minutes
}

if(second <10){
    second = "0"+second
 }
    time.textContent=Hours+":"+minutes+":"+second +" "+ day_night;

})