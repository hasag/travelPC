function getScrollOffset(){
	if(Window.pageXOffset){
		return{
			x: Window.pageXOffset,
			y: Window.pageYOffset
		}
	}else{
		return{
			x: document.body.scrollLeft+document.documentElement.scrollLeft,
			y: document.body.scrollTop+document.documentElement.scrollTop,
		}
	}
}
	window.onscroll = function(){
		var scrolly = new getScrollOffset();
		var wenji = document.getElementsByClassName("wenji")[0];
		var donghua1 = document.getElementsByClassName("donghua1")[0];
		var donghua2 = document.getElementsByClassName("donghua2")[0];
		var donghua3 = document.getElementsByClassName("donghua3")[0];
		var donghua4 = document.getElementsByClassName("donghua4")[0];
		var tu = document.getElementsByClassName("tu-1")[0];
		var catalogtop = document.getElementsByClassName("catalog-top2")[0];
		var one = document.getElementsByClassName("directory1")[0];
		var two = document.getElementsByClassName("directory2")[0];
		var three = document.getElementsByClassName("directory3")[0];
		var four = document.getElementsByClassName("directory4")[0];
		var five = document.getElementsByClassName("directory5")[0];
		console.log(scrolly.y);
		if(scrolly.y>392){
			wenji.style.animation = "wenji linear 1s",
			donghua1.style.animation = "donghua1 linear 1s forwards";
			donghua2.style.animation = "donghua2 linear 1s forwards";
			donghua3.style.animation = "donghua3 linear 1s forwards";
			donghua4.style.animation = "donghua4 linear 1s forwards";
			tu.style.animation = "tu linear 0.8s"; 
		}
		if(scrolly.y>900){
			catalogtop.style.animation = "catalogtop linear 0.5s"
		}
		if(scrolly.y>1130){
			one.style.animation = "one linear 0.8s"
		}
		if(scrolly.y>1450){
			two.style.animation = "two linear 0.8s"
		}
		if(scrolly.y>1845){
			three.style.animation = "three linear 0.8s"
		}
		if(scrolly.y>2220){
			four.style.animation = "four linear 0.8s"
		}
		if(scrolly.y>2600){
			five.style.animation = "five linear 0.8s"
		}
	}
