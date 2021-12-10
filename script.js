'use strict'

let root = document.getElementById("root");
let createbuttondiv = document.createElement("div");

//joke button----------------------
let createbuttonjoke = document.createElement("button");
createbuttonjoke.type = "button";

createbuttonjoke.id = "joke";
createbuttonjoke.setAttribute("class", "glow-on-hover") 
createbuttonjoke.textContent = "Get insulted"
//joke div------------------------------------------
let jokediv = document.createElement("div");
jokediv.id = "jokes";
jokediv.style.display = "none";
let jokes = document.getElementById("jokes");

//chuck joke button--------------------------------
let createbuttonchuck = document.createElement("button");
createbuttonchuck.type = "button";
createbuttonchuck.setAttribute("class", "glow-on-hover") 
createbuttonchuck.id = "chuck";
createbuttonchuck.textContent = "Get Chuck joke"
//-------------------------------------------
let easteregg = document.createElement("button");
easteregg.type = "button";
easteregg.id = "easteregg";
easteregg.setAttribute("class", "glow-on-hover")

easteregg.addEventListener("click", openInNewTab);
easteregg.textContent = "DON'T CLICK ME OR ELSE......";
//quote-----------------------
let textspace = document.createElement("q");
      textspace.style = "font-style: italic; font-size: 20px; color: white;"
      textspace.id = "quote";
//img----------------------------------------
let chuckimg = document.createElement("img");
chuckimg.style.display = "none";




//append---------------------------
createbuttondiv.id = "buttons";

jokediv.appendChild(chuckimg);
createbuttondiv.appendChild(createbuttonchuck);
createbuttondiv.appendChild(createbuttonjoke);
createbuttondiv.appendChild(easteregg);
jokediv.appendChild(textspace);
root.appendChild(createbuttondiv);
root.appendChild(jokediv);
//-----------------------------------------------
createbuttonchuck.addEventListener("click", execute);
createbuttonjoke.addEventListener("click", insultme);
//---------------------------------------------------
//tests
// insultme();
// execute();




//insult fetch---------------------------------------------------------
function insultme(){
  fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
  .then(response => response.json())
  .then(data => {
      //console.log(data)
        chuckimg.style.display = "none";

        jokediv.style.display = "flex";
        textspace.innerText = data.insult;   
  }
     );
}
//chuck joke api fetch------------------------------------------------
function execute() {
    const url = "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random";
    const options = {
      method: "GET",
      headers: {
        "accept": "application/json",
        "x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
        "x-rapidapi-key": "e7718047b9mshcfe1c89e887f0ddp143b4cjsn5aef3d9f8282"
      },
    };
    fetch(url, options).then(
      response => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then(err => {
          return Promise.reject({
            status: response.status,
            statusText: response.statusText,
            errorMessage: err,
          });
        });
      })
      .then(data => {
          //working with data-----------------------------------------
          jokediv.style.display = "flex";
          textspace.innerText = data.value; 
          chuckimg.style.display = "block";
          chuckimg.src = data.icon_url;
        

         //console.log(data)
        //end---------------------------------------------------------------
      })
      .catch(err => {
        console.error(err);
      });
  }

  function openInNewTab() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", '_blank').focus();
   }
   