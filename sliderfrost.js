/*-------Slider----------------------*/

$(document).ready(function(){
    $(document).mousemove(function(event){
        console.log(event.pageX);
        margin=((window.innerWidth)*23/100);
        document.getElementById("frostN").style.clip="rect(0px,500px, 500px," + (event.pageX-margin) + "px)";
        document.getElementById("frostP").style.clip="rect(0px," + (event.pageX-margin) + "px,500px,0px)";
    });
});


/*

object.style.clip="rect(0px,50px,50px,0px)"
$("span").text(event.pageX + ", " + event.pageY);
var largeur = event.pageX;
mousemove
*/