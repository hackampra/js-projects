const hourEl=document.getElementById("hour")
const minuteEl=document.getElementById("minutes")
const secondEl=document.getElementById("seconds")
const ampmEl=document.getElementById("ampm")
const showtimeBtn=document.getElementById("showtime-btn")

// showtimeBtn.addEventListener("click",()=>
//     setTimeout(() => {
//         let h=new Date().getHours()
//         let m=new Date().getMinutes()
//         let s=new Date().getSeconds()
//         let ampm="AM"
//         if (h>12){
//             h=h-12
//         ampm="PM"
//         }else if(h==0 && ampm=="AM"){
//         h=h+12
//         }
//         hourEl.innerHTML=h
//         minuteEl.innerHTML=m
//         secondEl.innerHTML=s
//         ampmEl.innerHTML=ampm
//     }, 1000)
// )

// showtimeBtn.addEventListener("click",()=>{
//     let h=new Date().getHours()
//     let m=new Date().getMinutes()
//     let s=new Date().getSeconds()
//     let ampm="AM"
//     if (h>12){
//         h=h-12
//     ampm="PM"
//     }else if(h==0 && ampm=="AM"){
//     h=h+12
//     }
//     setTimeout(() => {
//         hourEl.innerHTML=h
//         minuteEl.innerHTML=m
//         secondEl.innerHTML=s
//         ampmEl.innerHTML=ampm  
//     }, 1000);
// })


let Updateclock=()=>{
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let ampm="AM"
    if (h>12){
        h=h-12
    ampm="PM"
    }else if(h==0 && ampm=="AM"){
        h=h+12
    }
    if(m<10){
        m="0"+m
    }
    if(h<10){
        h="0"+h
    }
    if(s<10){
        s="0"+s
    }
    // h=h<10 ? "0"+h:h
    // m=m<10 ? "0"+m:m
    // s=s<10 ? "0"+s:s
    hourEl.innerHTML=h
    minuteEl.innerHTML=m
    secondEl.innerHTML=s
    ampmEl.innerHTML=ampm
    setTimeout(() => {
        Updateclock()
    }, 1000);
}
showtimeBtn.addEventListener("click",Updateclock)
