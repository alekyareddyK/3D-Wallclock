const hour=document.getElementById("hour");
const minute=document.getElementById("minute");
const second=document.getElementById("second");

setInterval(()=>{
    let date=new Date(),
    hr =date.getHours()*30,
    min = date.getMinutes()*6,
    sec = date.getSeconds()*6;
    hour.style.transform=`rotateZ(${hr+(min/12)}deg)`;
    minute.style.transform=`rotateZ(${min}deg)`;
    second.style.transform=`rotateZ(${sec}deg)`;
})