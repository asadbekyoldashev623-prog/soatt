let s = document.querySelector(".s")
let m = document.querySelector(".m")
let h = document.querySelector(".h")


// console.log(s, m, h);




// console.log(data);

function clock(){
    let data = new Date()
    let sec = data.getSeconds()
    let min = data.getMinutes()
    let hour = data.getHours()

    // console.log(sec, min, hour);
    

    s.style.transform = `rotate(${sec * 6}deg)`

 setTimeout(() => {
    clock()
 }, 1000);
}
clock()


