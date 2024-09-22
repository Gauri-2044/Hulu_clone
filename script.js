let div2 = document.querySelector(".div2");
let sportHeading = document.querySelector("#sportHeading");
let newsHeading = document.querySelector("#newsHeading");
let eventHeading = document.querySelector("#eventHeading");
let div2Heading = document.querySelector("#div2Heading");
let div2Para = document.querySelector("#div2Para");

let icon1 = document.querySelector("#icon1");
let icon3 = document.querySelector("#icon3");
let icon4 = document.querySelector("#icon4");
let icon2 = document.querySelector("#icon2");
let icon5 = document.querySelector("#icon5");

// let div2 = document.querySelector(".div2");
newsHeading.addEventListener("click",()=>{
    div2.style.backgroundImage = "url('images/news.jpeg')";
    newsHeading.style.textDecoration = "underline";
    sportHeading.style.textDecoration = "none";
    eventHeading.style.textDecoration = "none";
    div2Heading.textContent = "Breaking News";
    div2Para.textContent = "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.";
    icon1.src ="images/news1.png";
    icon2.src ="images/news2.png";
    icon3.src ="images/news3.png";
    icon4.src ="images/news4.png";
    icon5.src ="";
})
sportHeading.addEventListener("click",()=>{
    div2.style.backgroundImage = "url('images/sport.jpeg')";
    sportHeading.style.textDecoration = "underline";
    newsHeading.style.textDecoration = "none";
    eventHeading.style.textDecoration = "none";
    div2Heading.textContent = "Live Sports";
    div2Para.textContent = "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.";
    icon1.src ="images/sport1.png";
    icon2.src ="images/sport2.png";
    icon3.src ="images/sport3.png";
    icon4.src ="images/sport4.png";
    icon5.src ="images/sport5.png";
})
eventHeading.addEventListener("click",()=>{
    div2.style.backgroundImage = "url('images/event.jpeg')";
    eventHeading.style.textDecoration = "underline";
    sportHeading.style.textDecoration = "none";
    newsHeading.style.textDecoration = "none";
    div2Heading.textContent = "Biggest Events";
    div2Para.textContent = "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.";
    icon1.src ="images/event1.png";
    icon2.src ="images/event2.png";
    icon3.src ="images/event3.png";
    icon4.src ="images/evnt4.jpeg";
    icon5.src ="";
})


let list = document.querySelector(".dropList");
let btn = document.querySelector(".dropBtn");

btn.addEventListener("click",()=>{
    list.style.display = "inline-block";
});

function showDropDown()
{

}

let cross = document.querySelector("#cross_icon");
let pop_card = document.querySelector(".card-pop");
let search = document.querySelector("#search_channel");

let open = ()=>{
    if(pop_card.style.display == "none"){
        pop_card.style.display="block";
    }
   
 }

 let close = ()=>{
    if ( pop_card.style.display=="block") {
        pop_card.style.display="none";
    }
    pop_card.style.display= "none";
     }

 cross.addEventListener("click",close);
 search.addEventListener("click",open);