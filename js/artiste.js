// MENU MOBILE

function toggleMenu(){

let menu=document.getElementById("navMenu");

let burger=document.querySelector(".hamburger");


menu.classList.toggle("active");


if(menu.classList.contains("active")){

burger.innerHTML="✕";

}else{

burger.innerHTML="☰";

}

}



// ferme le menu après clic

document.querySelectorAll(".nav-menu a").forEach(link=>{


link.onclick=()=>{

document.getElementById("navMenu").classList.remove("active");

document.querySelector(".hamburger").innerHTML="☰";

}

});





// ANIMATION SCROLL

const reveals=document.querySelectorAll(".reveal");


function revealOnScroll(){


reveals.forEach(element=>{


let top=element.getBoundingClientRect().top;


if(top < window.innerHeight - 100){

element.classList.add("active");

}


});


}


window.addEventListener("scroll",revealOnScroll);


revealOnScroll();





// IMAGE EN GRAND

const images=document.querySelectorAll(".art img");


images.forEach(img=>{


img.onclick=()=>{


let viewer=document.createElement("div");


viewer.style.position="fixed";
viewer.style.inset="0";
viewer.style.background="#000000ee";
viewer.style.display="flex";
viewer.style.justifyContent="center";
viewer.style.alignItems="center";
viewer.style.zIndex="999";


let big=document.createElement("img");


big.src=img.src;


big.style.maxWidth="90%";
big.style.maxHeight="90%";
big.style.borderRadius="20px";


viewer.appendChild(big);


document.body.appendChild(viewer);



viewer.onclick=()=>{

viewer.remove();

};


};


});	


const techniques=[

{
title:"✏️ Crayon",
description:"Basée sur les ombrages et les détails.",
material:[
"Crayons 5H > 5B",
"Critérium",
"Gomme mie de pain",
"carnet de dessin/vieux cahier",
"cotton tige"
]
},


{
title:"🖊️ Feutres (peu utilisé)",
description:"créer des couleurs fortes et des contrastes.",
material:[
"Feutres à alcool",
"Feutres classiques",
"Papier 200mg",
]
},


{
title:"🎨 Crayon de couleur",
description:"Permet de mélanger les couleurs et créer des textures.",
material:[
"crayons de couleurs",
"cotton tige",
"Papier épais (optionnel)"
]
},


{
title:"💻 Dessin numérique",
description:"Création réalisée avec un outils numériques.",
material:[
"Téléphone (avec son doigt)",
"Ibis Paint",
]
}

];



function openTechnique(index){


let modal=document.getElementById("techModal");


document.getElementById("techTitle").innerHTML=
techniques[index].title;


document.getElementById("techDescription").innerHTML=
techniques[index].description;



let list=document.getElementById("techMaterial");

list.innerHTML="";


techniques[index].material.forEach(item=>{

list.innerHTML+=`<li>• ${item}</li>`;

});


modal.style.display="flex";


}



function closeTechnique(){

document.getElementById("techModal").style.display="none";

}