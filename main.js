

// document.getElementById("count-el").innerText = 5


let countEl = document.getElementById("count-el");
let count = 0;

function increment () {
    
    count ++
    
    countEl.innerText = count
    color()
    
}

function decrease () {
    count --
    countEl.innerText = count
    color()
}
    
function reset () {
   
    count = 0   
    countEl.innerText = count
    color()
}

function color() {
   if (count > 0) {
            countEl.style.color = 'green'
 
        } else if (count < 0){
           countEl.style.color = 'red'        
        }else {

            countEl.style.color = 'white'
        }
 }