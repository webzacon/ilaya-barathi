// reveal animation

function reveal(){

var reveals=document.querySelectorAll(".reveal");

for(var i=0;i<reveals.length;i++){

var windowHeight=window.innerHeight;

var elementTop=reveals[i].getBoundingClientRect().top;

if(elementTop<windowHeight-100){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);

reveal();



// particles background

const canvas=document.createElement("canvas");

document.getElementById("particles").appendChild(canvas);

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particlesArray=[];

for(let i=0;i<100;i++){

particlesArray.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:2

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particlesArray.forEach(p=>{

ctx.fillStyle="#38bdf8";

ctx.fillRect(p.x,p.y,p.size,p.size);

});

requestAnimationFrame(animate);

}

animate();




const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if(pageYOffset >= sectionTop - 200){

current = section.getAttribute("id");

}

});

navLinks.forEach(a => {

a.classList.remove("active");

if(a.getAttribute("href") === "#" + current){

a.classList.add("active");

}

});

});


const skillBars = document.querySelectorAll(".skill-progress");

function animateSkills(){

skillBars.forEach(bar => {

const rect = bar.getBoundingClientRect();

if(rect.top < window.innerHeight){

bar.style.width = bar.getAttribute("data-width");

}

});

}

window.addEventListener("scroll", animateSkills);

animateSkills();