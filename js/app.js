/*Use the following data below to create cards for each Game of Thrones house (and if you aren't watching GOT, then you are missing out on half of life!) that will display in the browswer. Each card should have the following information:

image of the crest
House: House of Arryn
Region: The Vale of Arryn
Lord: Robin Arryn
Allegiance: House Stark

Please also use CSS to style up your work 

*/


var kingdoms = [
{crest: "https://vignette4.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153", 
house: "House Arryn",
region: "The Vale of Arryn",
lord: "Robin Arryn", 
allegiance: "House Stark"},
{ crest: "https://vignette1.wikia.nocookie.net/gameofthrones/images/e/e6/House-Frey-Main-Shield.PNG/revision/latest?cb=20170523011255", 
house: "House Frey",
region: "The Riverlands",
lord: "Unknown", 
allegiance: "House Lanister"},
{ crest: "https://vignette3.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest?cb=20170523015836", 
house: "House Greyjoy",
region: "Iron Islands",
lord: "King Euron Greyjoy", 
allegiance: "Sovereign"},
{ crest: "http://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/250px-House_Lannister.svg.png", 
house: "House Lannister",
region: "The Crownlands",
lord: "Queen Cersei", 
allegiance: "House Targaryen"},
{ crest: "http://vignette4.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142", 
house: "House Stark",
region: "The North",
lord: "King Jon Snow", 
allegiance: "Sovereign"},
{ crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320", 
house: "House Targaryen",
region: "Dragonstone",
lord: "Queen Daenerys", 
allegiance: "Sovereign"}
];
for(var i=0; i<kingdoms.length; i++){
	
var crestPic = document.createElement("img");
crestPic.src= kingdoms[i].crest;
main.appendChild(crestPic);

var houseName = document.createElement("div");
houseName.className= "houses";
houseName.innerHTML= kingdoms[i].house;
main.appendChild(houseName);

var regionName= document.createElement("div");
regionName.className= "regions";
regionName.innerHTML= kingdoms[i].region;
main.appendChild(regionName);

var lordName= document.createElement("div");
lordName.className="lords";
lordName.innerHTML= kingdoms[i].lord;
main.appendChild(lordName);

var allegianceName= document.createElement("div");
allegianceName.className="allegiances";
allegianceName.innerHTML=kingdoms[i].allegiance;
main.appendChild(allegianceName);
}




