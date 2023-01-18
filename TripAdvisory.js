 var logo  = document.getElementById('logo');

setInterval(() => {
    document.body.style.opacity  = "10";
}, 500);

 setInterval(() => {
    logo.style.transition = "5s"
    logo.style.transform = "scaleX(1)";
 },800);