
// WARRIOR-1

const hN1 = document.getElementById("name1");
const intelligence1 = document.getElementById("intel1");
const strength1 = document.getElementById("strength1");
const speed1 = document.getElementById("speed1");
const durability1 = document.getElementById("durability1");
const power1 = document.getElementById("pow1");
const combat1 = document.getElementById("comb1");
const image1 = document.getElementById("img1");


const bn1 = document.querySelector("#button1");
const bn2 = document.querySelector("#button2");
const cd1 = document.querySelector("#cd1");
const cd2 = document.querySelector("#cd2");


//WARRIOR-1

 bn1.addEventListener("click", getDataA);

   function getDataA() 
    {
      let n1 = document.querySelector("#search1").value;
        console.log(n1);

        fetch(`http://cors-anywhere.herokuapp.com/https://superheroapi.com/api/249015386513525/${n1}`,{
            headers: {
              Origin: "localhost",
                },
          })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          let stats = data.powerstats;
          image1.setAttribute("src", data.image.url);
          hN1.innerHTML = `Name:${data.name}`;
          strength1.innerHTML = `Strength:${stats.strength}`;
          speed1.innerHTML = `Speed:${stats.speed}`;
          intelligence1.innerHTML= `Intelligence:${stats.intelligence}`;
          combat1.innerHTML = `Combat:${stats.combat}`;
          power1.innerHTML = `Power:${stats.power}`;
          durability1.innerHTML = `Durability:${stats.durability}`;
          
        })
        .catch(function (error) {
          alert("Some error occured");
          console.error(error);
        });
    };



//WARRIOR-2

const hN2 = document.getElementById("name2");
const intelligence2 = document.getElementById("intel2");
const strength2 = document.getElementById("strength2");
const speed2 = document.getElementById("speed2");
const durability2 = document.getElementById("durability2");
const power2 = document.getElementById("pow2");
const combat2 = document.getElementById("comb2");
const image2 = document.getElementById("img2");


bn2.addEventListener("click", getDataB);

   function getDataB() 
    {
      let n1 = document.querySelector("#search2").value;
        console.log(n1);

        fetch(`http://cors-anywhere.herokuapp.com/https://superheroapi.com/api/249015386513525/${n1}`,{
            headers: {
              Origin: "localhost",
                },
          })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          let stats = data.powerstats;
          image2.setAttribute("src", data.image.url); //image[index].setAttribute("src", data["image"]["url"]);
          hN2.innerHTML = `Name:${data.name}`;
          strength2.innerHTML = `Strength:${stats.strength}`;
          speed2.innerHTML = `Speed:${stats.speed}`;
          intelligence2.innerHTML= `Intelligence:${stats.intelligence}`;
          combat2.innerHTML = `Combat:${stats.combat}`;
          power2.innerHTML = `Power:${stats.power}`;
          durability2.innerHTML = `Durability:${stats.durability}`;
          
        })
        .catch(function (error) {
          alert("Some error occured");
          console.error(error);
        });
    };



    




 