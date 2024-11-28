const cards = document.querySelectorAll(".card");
const content = document.querySelectorAll(".content")
const main = document.getElementsByClassName("main")
const content1 = document.querySelectorAll(".A")
const content2 = document.querySelectorAll(".B")
const content3 = document.querySelectorAll(".C")

const headings = document.querySelectorAll(".heading")

function hideAllContent() {
    content1.forEach(content => content.style.opacity="0");
    content2.forEach(content => content.style.opacity="0");
    content3.forEach(content => content.style.opacity="0");
}
hideAllContent()
cards.forEach(card => {

    console.log("hovered");
    card.addEventListener("click", (event) => {
        if(card.style.transform == "translateX(730px)" || card.style.transform == "translate(730px, -100px)"){
            goBack()
            
        }
        else{
            goBack()
            goIn(card)
        }
         
        
        
    });

});

function goBack(){
    cards.forEach(card=>{
        card.style.transform = "translateX(0px)";
        
        card.style.backgroundColor = "#9073be73";
        card.style.opacity = "1";
    })
    main[0].style.transform = "translateY(0px)";

    hideAllContent()
    headings[0].style.color = "#554b6f";
    headings[1].style.color = "#554b6f";
    headings[2].style.color = "#554b6f";
   
}
function goIn(card){
    
    card.style.backgroundColor = "#2E353C";
    setTimeout(()=>{headings[Array.from(cards).indexOf(card)].style.color = "#7D7ACF"}, 300)
    card.style.transform = "translateX(730px)";   
    if(card == cards[1]){
        card.style.transform = "translate(730px, -100px)";   
    }
    main[0].style.transform = "translateY(620px)";
    switch(card){
        case cards[0]:
            console.log("!!!")
            content1.forEach(content =>{
                content.style.opacity = "1";
            })
            break;
        case cards[1]:
            content2.forEach(content =>{
                content.style.opacity = "1";
            })
            break;
        case cards[2]:
            content3.forEach(content =>{
                content.style.opacity = "1";
            })
            break;

    }
    
}
function redirect1(){
    window.location.href = "index2.html"
}
function redirect2(){
    window.location.href = "index3.html"
}
function homePg(){
    window.location.href = "index.html"
}