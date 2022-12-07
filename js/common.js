let body = document.body
let icon = document.getElementById("icon");
let canvi = true;


const changeBckgroundColor = () => {
    icon.classList.toggle("fa-moon");
    if(canvi){
        body.style.backgroundColor = "Black"
        body.style.color = "White"
        canvi = false;
    }else if(!canvi){
        body.style.backgroundColor = "White"
        body.style.color = "Black"
        canvi = true;
        
    }
}
