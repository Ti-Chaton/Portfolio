const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        e.preventDefault();

        this.style.transform="scale(.96)";

        setTimeout(()=>{

            window.location=this.href;

        },180);

    });

});

function toggleMenu(){

    let menu = document.getElementById("navMenu");

    menu.classList.toggle("active");

}
