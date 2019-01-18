
function getViewportOffset(){

	if(window.innerWidth){
		return{
			w: window.innerWidth,
			h: window.innerHeight,
		}
	}else if(document.compatMode == "BackCompat"){
		return{
			w: document.body.clientWidth,
			h: document.body.clientHeight,
		}
	}else{
		return{
			w: document.documentElement.clientWidth,
			h: document.documentElement.clientHeight,
		}
	}
}

window.onload = function(){
	var open = document.getElementById('header-right1');
	var shut = document.getElementById('guan') ;
	var menus = document.getElementById('menu');
	var dh2 = document.getElementById('dh2-fff');
	var dh3 = document.getElementById('dh3');
	var dh4 = document.getElementById('dh4');
	var dh5 = document.getElementById('dh5');
	var dh6 = document.getElementById('dh6');
	var dh8 = document.getElementById('dh8-fff');
	console.log(dh2);
	var windowSize = new getViewportOffset();
	menus.style.height = windowSize.h+"px";

	open.onclick = function(){
		menus.style.animation = "dhmenu 1.5s linear forwards";
		dh2.style.animation = "dh2 1s 1.5s linear forwards";
		dh3.style.animation = "dh3 1s 1.5s linear forwards";
		dh4.style.animation = "dh4 0.8s 2.5s linear forwards";
		dh5.style.animation = "dh5 0.8s 2.5s linear forwards";
		dh6.style.animation = "dh6 1s 3.3s linear forwards";
		dh8.style.animation = "dh8 1s 3.3s linear forwards";

	}
	shut.onclick = function(){
		menus.style.animation = "dhmenus 1.5s linear forwards";
	}
}
