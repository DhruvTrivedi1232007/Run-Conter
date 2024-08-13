// alert("Please switch in desktop site if you are using this in mobile")

let run = document.querySelector('#run-count')
let btns = document.querySelectorAll('.btnss')
let WicketBtn = document.querySelector("#wicket-count")
let OverCount = document.querySelector("#over-count")
let LineBalls = document.querySelectorAll(".ball")
// let LineTxt = document.querySelectorAll(".com")
// let LineCount = document.querySelectorAll(".LineCtt")
// let LineArr = Array.from(LineCount)


let Line1 = document.querySelector(".com1")
let Line2 = document.querySelector(".com2")
let Line3 = document.querySelector(".com3")
let Line4 = document.querySelector(".com4")
let Line5 = document.querySelector(".com5")
let Line6 = document.querySelector(".com6")

let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")

let numArray = [one, two, three, four, five, six]

let LineArray = [Line1, Line2, Line3, Line4, Line5, Line6]
var LineCtr = 0;

let arr = Array.from(btns)
let ball = 1
let over = 0
let i;


arr.forEach((e)=>{
    
    e.addEventListener("click", (evt)=>{

        console.log(evt.target.innerHTML)

        if(evt.target.innerHTML == 1){
            run.innerHTML++;

            OverCount.innerHTML =`${over}.${ball}`
            ball++
            if(ball > 5){
                ball = 0;
                over++
            }

            
            if(LineCtr > 5){
                
                OverFinish()
                LineCtr = 0
                numArray[LineCtr].style.backgroundColor = "rgb(0, 145, 255)"
                LineArray[LineCtr].innerHTML = evt.target.innerHTML
                numArray[LineCtr].style.color = "white"
                numArray[LineCtr].style.border = "5px solid white"
                
            }
            
            numArray[LineCtr].style.backgroundColor = "rgb(0, 145, 255)"
            LineArray[LineCtr].innerHTML = evt.target.innerHTML
            numArray[LineCtr].style.color = "white"
            numArray[LineCtr].style.border = "5px solid white"
            LineCtr++
            
            
        } else if(evt.target.innerHTML == 2){
            for(i=0;i<2;i++){
                run.innerHTML++
            }

            OverCount.innerHTML =`${over}.${ball}`
            ball++
            if(ball > 5){
                ball = 0;
                over++
            }

            if(LineCtr > 5){
                
                OverFinish()
                LineCtr = 0
                numArray[LineCtr].style.backgroundColor = "rgb(0, 145, 255)"
                LineArray[LineCtr].innerHTML = evt.target.innerHTML
                numArray[LineCtr].style.color = "white"
                numArray[LineCtr].style.border = "5px solid white"
                
            }

            numArray[LineCtr].style.backgroundColor = "rgb(0, 145, 255)"
            LineArray[LineCtr].innerHTML = "2"
            numArray[LineCtr].style.color = "white"
            numArray[LineCtr].style.border = "5px solid white"
            LineCtr++

            


        } else if(evt.target.innerHTML == 3){
            for(i=0;i<3;i++){
                run.innerHTML++
            }

            OverCount.innerHTML =`${over}.${ball}`
            ball++
            if(ball > 5){
                ball = 0;
                over++
            }

            if(LineCtr > 5){
                
                OverFinish()
                LineCtr = 0
                numArray[LineCtr].style.backgroundColor = "rgb(0, 145, 255)"
                LineArray[LineCtr].innerHTML = evt.target.innerHTML
                numArray[LineCtr].style.color = "white"
                numArray[LineCtr].style.border = "5px solid white"
            }

            numArray[LineCtr].style.backgroundColor = "rgb(0, 145, 255)"
            LineArray[LineCtr].innerHTML = "3"
            numArray[LineCtr].style.color = "white"
            numArray[LineCtr].style.border = "5px solid white"
            LineCtr++

        } else if(evt.target.innerHTML == 4){
            for(i=0;i<4;i++){
                run.innerHTML++
            }

            OverCount.innerHTML =`${over}.${ball}`
            ball++
            if(ball > 5){
                ball = 0;
                over++
            }

            if(LineCtr > 5){
                
                OverFinish()
                LineCtr = 0
                numArray[LineCtr].style.backgroundColor = "rgb(0, 145, 255)"
                LineArray[LineCtr].innerHTML = evt.target.innerHTML
                numArray[LineCtr].style.color = "white"
                numArray[LineCtr].style.border = "5px solid white"
                
            }

            numArray[LineCtr].style.backgroundColor = "rgb(0, 145, 255)"
            LineArray[LineCtr].innerHTML = "4"
            numArray[LineCtr].style.color = "white"
            numArray[LineCtr].style.border = "5px solid white"
            LineCtr++

        } else if(evt.target.innerHTML == 6){
            for(i=0;i<6;i++){
                run.innerHTML++
            }
            

            OverCount.innerHTML =`${over}.${ball}`
            ball++
            if(ball > 5){
                ball = 0;
                over++
            }

            if(LineCtr > 5){
                
                OverFinish()
                LineCtr = 0
                numArray[LineCtr].style.backgroundColor = "rgb(0, 145, 255)"
                LineArray[LineCtr].innerHTML = evt.target.innerHTML
                numArray[LineCtr].style.color = "white"
                numArray[LineCtr].style.border = "5px solid white"
                
            }

            numArray[LineCtr].style.backgroundColor = "rgb(0, 145, 255)"
            LineArray[LineCtr].innerHTML = "6"
            numArray[LineCtr].style.color = "white"
            numArray[LineCtr].style.border = "5px solid white"
            LineCtr++

        } else if(evt.target.innerHTML == "Wicket") {
            WicketBtn.innerHTML++;

            OverCount.innerHTML =`${over}.${ball}`
            ball++
            if(ball > 5){
                ball = 0;
                over++
            }


            if(LineCtr > 5){
                
                OverFinish()
                LineCtr = 0
                numArray[LineCtr].style.backgroundColor = "rgb(0, 145, 255)"
                LineArray[LineCtr].innerHTML = evt.target.innerHTML
                numArray[LineCtr].style.color = "white"
                numArray[LineCtr].style.border = "5px solid white"
                
            }


            LineArray[LineCtr].innerHTML = "W"
            
            numArray[LineCtr].style.backgroundColor = "red"
            numArray[LineCtr].style.color = "white"
            numArray[LineCtr].style.border = "5px solid white"
            LineCtr++;

        } else if(evt.target.innerHTML == "No Ball") {
            run.innerHTML++

        } else if(evt.target.innerHTML == "Dot") {
            OverCount.innerHTML =`${over}.${ball}`
            ball++
            if(ball > 5){
                ball = 0;
                over++
            }

            if(LineCtr > 5){
                
                OverFinish()
                LineCtr = 0
                numArray[LineCtr].style.backgroundColor = "rgb(0, 145, 255)"
                LineArray[LineCtr].innerHTML = evt.target.innerHTML
                numArray[LineCtr].style.color = "white"
                numArray[LineCtr].style.border = "5px solid white"
                
            }
            
            LineArray[LineCtr].innerHTML = "⬤";
            numArray[LineCtr].style.border = "5px solid white"
            LineArray[LineCtr].style.color = "black"
            LineCtr++;

           
        } else if(evt.target.innerHTML == "Wide") {
            run.innerHTML++
        }
    })
})

let OverFinish = ()=>{
    
    numArray[0].style.backgroundColor = "white"
    numArray[1].style.backgroundColor = "white"
    numArray[2].style.backgroundColor = "white"
    numArray[3].style.backgroundColor = "white"
    numArray[4].style.backgroundColor = "white"
    numArray[5].style.backgroundColor = "white"
    numArray[0].style.Color = "white"
    numArray[1].style.Color = "white"
    numArray[2].style.Color = "white"
    numArray[3].style.Color = "white"
    numArray[4].style.Color = "white"
    numArray[5].style.Color = "white"
    LineArray[0].innerHTML = " "
    LineArray[1].innerHTML = " "
    LineArray[2].innerHTML = " "
    LineArray[3].innerHTML = " "
    LineArray[4].innerHTML = " "
    LineArray[5].innerHTML = " "
    numArray[0].style.border = "none"
    numArray[1].style.border = "none"
    numArray[2].style.border = "none"
    numArray[3].style.border = "none"
    numArray[4].style.border = "none"
    numArray[5].style.border = "none"
}
