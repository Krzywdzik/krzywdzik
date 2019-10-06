var obroty = 0

var licznik = document.getElementById("licznik");
var napis = document.getElementById("napis");
var coIle = 5;

var zwyklyNapis ="KOWAL SPIN";
var zwyklyKolor = "#FFFFFF";


var czasTrwaniaNapisu = 2000;

var teksty = ["No i elegancko", "No to co idziemy na setunie?", "HACKED BY KOWAL"];

function zmienNapis(nowyNapis)
{
		napis.innerHTML = nowyNapis;
		napis.style.color = "#FFFFFF";
		
		setTimeout(function()
		{
			napis.innerHTML = zwyklyNapis;
			napis.style.color = zwyklyKolor;
		}, czasTrwaniaNapisu);
}

setInterval(function(){
	obroty++;
	licznik.innerHTML = obroty;
	
	if( obroty % coIle == 0)
	{
		zmienNapis(teksty[Math.floor(Math.random()*teksty.length)]);
	}
	
}, 1000);
