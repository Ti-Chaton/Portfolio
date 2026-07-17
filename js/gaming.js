// MENU MOBILE

function toggleMenu(){

let menu=document.getElementById("navMenu");

menu.classList.toggle("active");

}





// JEUX PRINCIPAUX


const games=[


{

title:"🎮 Fortnite",

description:"Un jeu compétitif basé sur la construction, la stratégie et la précision.",

info:[

"Temps de jeu : +8000 heures depuis 2018",

"Mode préféré : 2v2 Piece Control",

"Style : Compétitif",

"Objectif : Participer aux FNCS avec ma team"

]

},



{

title:"🔺 Geometry Dash",

description:"Un jeu de rythme demandant précision, mémorisation et persévérance.",

info:[

"Temps de jeu : +10000 heures depuis 2013",

"Niveau actuel : Medium Demon",

"Progression : Medium Demon Tier 11",

"Objectif : Réussir Cytokinesis"

]

},




{

title:"⭕ osu!",

description:"Un jeu musical basé sur la rapidité et la précision des clics.",

info:[

"Style : Jeu de rythme",

"Compétences : Aim et timing",

"Objectif : S'améliorer et prendre du plaisir"

]

},




{

title:"🎯 Overwatch",

description:"Un FPS en équipe basé sur la coopération et la stratégie.",

info:[

"Style : FPS coopératif",

"Gameplay : Héros et équipe",

"Objectif : Progresser"

]

},




{

title:"🌍 Minecraft",

description:"Un jeu de création et d'exploration dans un monde ouvert.",

info:[

"Style : Sandbox",

"Mode : Survie / Création",

"Objectif : m'amuser avec la redstone"

]

}


];







// OUVERTURE DES FENETRES


function openGame(index){



// AUTRES JEUX

if(index===5){


document.getElementById("otherModal").style.display="flex";


return;


}





let modal=document.getElementById("gameModal");


document.getElementById("gameTitle").innerHTML=
games[index].title;



document.getElementById("gameDescription").innerHTML=
games[index].description;




let list=document.getElementById("gameInfo");


list.innerHTML="";



games[index].info.forEach(item=>{


list.innerHTML+=`

<li>
• ${item}
</li>

`;


});



modal.style.display="flex";


}






// FERMER MODAL JEU


function closeGame(){


document.getElementById("gameModal").style.display="none";


}







// FERMER AUTRES JEUX


function closeOther(){


document.getElementById("otherModal").style.display="none";


}
