let counter = 0;
updateCounter();

function updateCounter() {
    document.getElementById("counter").innerText = counter;
    document.getElementById("counter").style.color = "blue";
    if(counter > 0){
        document.getElementById("counter").style.color = "green";
    }else if(counter < 0) {
        document.getElementById("counter").style.color = "red"; 
    }else if(counter = 0){
        document.getElementById("counter").style.color = "blue";
    }

}    
function increase() {
    counter++;
    if(counter > 99){
        counter = 0;
        alert("Alhamdulillah,99 zikir");
    }    
    updateCounter();
}

function increase5(){
    counter += 5;
    updateCounter();
}

function decrease() {
    counter--;
    updateCounter();
}

function decrease5() {
    counter -= 5;
    updateCounter();
}

function reset() {
    counter = 0;
    updateCounter();
}