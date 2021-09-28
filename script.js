

let acc_btn = document.querySelectorAll(".accordion-header");

for(let i=0; i<acc_btn.length; i++) {
    
    acc_btn[i].addEventListener('click', function(event) {
        
        let panel = this.nextElementSibling;

        let arrow = this.getElementsByTagName('i');
        console.log("value: " + arrow.length);

        if (panel.style.display === "block") {
            panel.style.display = "none";
            arrow[0].style['transform'] = "rotate(360deg)";
        } else {
            panel.style.display = "block";
            arrow[0].style['transform'] = "rotate(180deg)";
        }
    });
}

let button = document.querySelector(".button");
let place = document.querySelector(".name");
let desc = document.querySelector(".desc");
let temp = document.querySelector(".temp");
let card = document.querySelector(".card");

button.addEventListener("click" , function() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Dhaka,Bangladesh&appid=ddf29ddefd5a6176ef455c301a342fff")
    .then( response => response.json())
    .then(data => {
        console.log(data);
        let nameValue = data['name'];
        let tempValue = data['main']['temp'];
        let descValue = data['weather'][0]['description'];

        // set the modal value 
        place.innerHTML = "Weather information " + nameValue;
        temp.innerHTML = (tempValue - 273.0).toFixed(2) + "<span> &#8451;</span>";
        desc.innerHTML = descValue;
        card.style['background-color'] = "black";
        card.style['opacity'] = "1";
        card.style['color'] = "white";
        card.style['text-align'] = "center";
        card.style['margin'] = "10px 0 10px 0";
        card.style['padding'] = "5px";
        card.style['border'] = "5px";
        card.style['width'] = "180px";
        card.style['display'] = "block";
        card.style['border'] = "2px blue solid";

        setTimeout(function() {
            $('.card').fadeOut('fast');
        }, 5000); // <-- time in milliseconds

    })
    .catch(err=>alert("An error occure"));
})



