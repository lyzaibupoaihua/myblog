 	function log(){
 		console.log.apply(console,arguments)
 		}
 	//给p标签增加一个背景改变动画
 	//鼠标hover

 	function pall(){
 	var pstar= document.querySelectorAll('p')
 	for (let i = 0; i < pstar.length; i++) {
 		pstar[i].addEventListener("mouseover", function(event){
 	    // var target = event.target
 	    // log("event",event)
 	    starshine();
         var a = event.srcElement.childElementCount
         // log(a)
         if( a < 1){
            event.target.parentNode.classList.add('hei');
         }
 	      event.target.classList.add('hei');
 	    // event.path[0].classList.remove('hei');
 	    
 	    })
 	}
    for (let i = 0; i < pstar.length; i++) {
    	pstar[i].addEventListener("mouseout", function(event){
        // var target = event.targe
        	// log("event",event)
        	event.srcElement.classList.remove('hei');
        	// event.path[0].classList.remove('hei');
        	starhidden();
        	})
		}
}
 
 	function starshine(){
 		var star = document.querySelectorAll('.star')
 		for (var i = 0; i < star.length; i++) {
 			star[i].classList.add('shining')
 		}
 	}
 	function starhidden(){
 		var star = document.querySelectorAll('.star')
 		for (var i = 0; i < star.length; i++) {
 			star[i].classList.remove('shining')
 		}
 	}
 	pall();
 	//动态写入html
 	//配合css来实现动态效果
 	function divstar(){
 		//0~99随机数的产生
 		for(let i = 0; i < 30; i++ ){
 		let n = Math.floor((Math.random()*100)%100)
 		let m = Math.floor((Math.random()*100)%100) 		
 		// log(m,n)
 		var div = document.createElement("div");
 		div.id = "t-" + n + "-l-" + m + "";
 		div.innerHTML = "";
 		document.body.appendChild(div);
 		document.getElementById(div.id).classList.add('star')
		}
 		// var str ="<div class =\"star\tt-" + n + "-l-" + m + "\"></div>"
		// document.getElementsByTagName("body").innerHTML=str
		// log(m,n)
 		}
 		// Math.floor((Math.random()*100)%100)
 		function _main(){
 			divstar();
 			pall
 		}
 		_main();

	
