document.getElementById('playerRojo').addEventListener("mouseover",PuntoRojo);


function mover() {
    rNum =  Math.round(Math.random()*500);
    rNum2 =  Math.round(Math.random()*500);
    rNum3 =  Math.round(Math.random()*500);
    rNum4 =  Math.round(Math.random()*500);
    document.getElementById("playerRojo").style.marginTop =rNum + "px";
    document.getElementById("playerRojo").style.marginLeft =rNum2 + "px";
    document.getElementById("playerAmarillo").style.marginTop =rNum3 + "px";
    document.getElementById("playerAmarillo").style.marginLeft =rNum4 + "px";
}

puntos = 0;
tiempo = 10;
function PuntoRojo(){
   	alert("perdiste");
    tiempo=10;
    puntos=0;
}

function restarTiempo() {

	tiempo--;
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+tiempo; 
	if (tiempo == 0) {
		alert("tu puntaje:"+puntos);
		tiempo = 10;
		puntos = 0;
	}
}
setInterval(restarTiempo,1000);
setInterval(mover,1000);
//setTimeout(mover('playerAmarillo'),300);

document.getElementById('playerAzul').addEventListener("mouseover",sumarPuntos2)
function sumarPuntos2(){
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos +"  </b>";
    randNum =  Math.round(Math.random()*500);
    randNum2 =  Math.round(Math.random()*500);
    document.getElementById("playerAzul").style.marginTop =randNum + "px";
    document.getElementById("playerAzul").style.marginLeft =randNum2 + "px";
 }

document.getElementById('playerAmarillo').addEventListener("mouseover",sumarPuntos3)
function sumarPuntos3(){
    puntos=puntos+2;
 }
