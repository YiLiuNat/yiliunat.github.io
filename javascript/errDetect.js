function errDetect(){
    alert("有没有弹窗弹出来")
    try{
    	setTimeout(function(){
    		if(window.google){
    			console.log("Google Maps Loaded");
    		}else{
    			alert("Your browser does not support Google Maps API, please try other browsers!")
    		}
    	},2000)
    }catch(e){
    	alert(e);
    }
}
errDetect();
