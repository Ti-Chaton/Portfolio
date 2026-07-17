// MENU MOBILE

function toggleMenu(){

let menu=document.getElementById("navMenu");

menu.classList.toggle("active");

}





// INSPIRATIONS


const inspirations=[


{

title:"🎧 Darkside8461",

text:"C'est l'une des premières découvertes qui m'a donné envie de créer de la musique. Son univers et ses productions m'ont fait découvrir le plaisir de transmettre des émotions à travers des sons."

},


{

title:"🎵 Nhezia",

text:"Son univers musical m'a beaucoup marqué. J'ai également eu la chance d'échanger avec lui sur Instagram, ce qui a renforcé mon intérêt pour la création musicale."

},


{

title:"🎶 MacMuzik",

text:"Un artiste qui m'a inspiré par ses productions et sa manière de construire des ambiances musicales."

},


{

title:"🔥 YSOS",

text:"Depuis 2020, YSOS est une grande source d'inspiration pour moi. Ses productions m'ont beaucoup influencé dans ma découverte de la MAO et de la création musicale."

}


];





function openInspiration(index){


let modal=document.getElementById("inspirationModal");


document.getElementById("inspirationTitle").innerHTML=
inspirations[index].title;


document.getElementById("inspirationText").innerHTML=
inspirations[index].text;


modal.style.display="flex";


}





function closeInspiration(){


document.getElementById("inspirationModal").style.display="none";


}








// EQUIPEMENT


const equipment=[


{

title:"🎹 FL Studio",

text:"J'ai commencé la création musicale sur FL Studio Mobile avant de passer sur la version PC. C'est aujourd'hui mon logiciel principal pour créer mes productions."

},


{

title:"🥁 Drum Kits",

text:"Des packs de sons utilisés pour mes productions, notamment les drum kits de YSOS qui m'ont beaucoup inspiré."

}


];





function openEquipment(index){


let modal=document.getElementById("equipmentModal");


document.getElementById("equipmentTitle").innerHTML=
equipment[index].title;


document.getElementById("equipmentText").innerHTML=
equipment[index].text;



let gallery=document.getElementById("drumGallery");


// Afficher la galerie uniquement pour les Drum Kits

if(index===1){

gallery.style.display="grid";

}

else{

gallery.style.display="none";

}



modal.style.display="flex";


}






function closeEquipment(){


document.getElementById("equipmentModal").style.display="none";


}








// STYLES RAP


function openStyles(){


document.getElementById("styleModal").style.display="flex";


}




function closeStyles(){


document.getElementById("styleModal").style.display="none";


}