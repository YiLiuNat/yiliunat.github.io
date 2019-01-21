// $(document).ready(function() {
	
var map;
var faisalabad = {lat:52.449970, lng:-1.930870};
var navDest = "1.01, 1.01";
var mulGate = true;


function addYourLocationButton(map, marker) 
{
    var controlDiv = document.createElement('div');

    var firstChild = document.createElement('button');
    firstChild.style.backgroundColor = '#fff';
    firstChild.style.border = 'none';
    firstChild.style.outline = 'none';
    firstChild.style.width = '0.6rem';
    firstChild.style.height = '0.6rem';
    firstChild.style.borderRadius = '0.04rem';
    firstChild.style.boxShadow = '0 0 0.01rem rgba(0,0,0,0.3)';
    firstChild.style.cursor = 'pointer';
    firstChild.style.marginRight = '0.17rem'; //button's margin
    firstChild.style.padding = '0rem';
    firstChild.title = 'Your Location';
    controlDiv.appendChild(firstChild);

    var secondChild = document.createElement('div');
    secondChild.style.margin = '0.1rem';
    secondChild.style.width = '0.36rem';
    secondChild.style.height = '0.36rem';
    secondChild.style.backgroundImage = 'url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)';
    secondChild.style.backgroundSize = '3.6rem 0.36rem';
    secondChild.style.backgroundPosition = '0px 0px';
    secondChild.style.backgroundRepeat = 'no-repeat';
    secondChild.id = 'you_location_img';
    firstChild.appendChild(secondChild);

    google.maps.event.addListener(map, 'dragend', function() {
        $('#you_location_img').css('background-position', '0px 0px');
    });

    firstChild.addEventListener('click', function() {
        var imgX = '0';
        var animationInterval = setInterval(function(){
            if(imgX == '-18') imgX = '0';
            else imgX = '-18';
            $('#you_location_img').css('background-position', imgX+'px 0px');
        }, 500);
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); //定位之后的坐标
                marker.setPosition(latlng);
                map.setCenter(latlng);
                clearInterval(animationInterval);
                $('#you_location_img').css('background-position', '-144px 0px');
            });
        }
        else{
            clearInterval(animationInterval);
            $('#you_location_img').css('background-position', '0px 0px');
        }
    });

    controlDiv.index = 1;
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
}





function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: faisalabad,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [ //Map style descipt
		    {
		        "stylers": [
		            {
		                "saturation": -100
		            },
		            {
		                "gamma": 1
		            }
		        ]
		    },
		    {
		        "elementType": "labels.text.stroke",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.business",
		        "elementType": "labels.text",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.business",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.place_of_worship",
		        "elementType": "labels.text",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.place_of_worship",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "saturation": 50
		            },
		            {
		                "gamma": 0
		            },
		            {
		                "hue": "#50a5d1"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.neighborhood",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "color": "#333333"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "labels.text",
		        "stylers": [
		            {
		                "weight": 0.5
		            },
		            {
		                "color": "#333333"
		            }
		        ]
		    },
		    {
		        "featureType": "transit.station",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "gamma": 1
		            },
		            {
		                "saturation": 50
		            }
		        ]
		    }
		]
    });

    //MY LOCATION
    var myMarker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        //position: faisalabad
    });

    addYourLocationButton(map, myMarker);



    //DIRECTION SERVICE
	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;
	directionsDisplay.setMap(map);
	var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
    };




    //GATE POP-UP START
    //$("#building").change(function() {
    
    //有效的
    //document.getElementById('building').addEventListener('change',function(){
    var isRefresh = false;
    $('#building').change(function(){
    	// javascript
		// if (document.getElementById('building').value === '52.449216, -1.931401'){
		// 	$("#panel").fadeOut();
		// 	}

		// jquery if
		// if ($("#building").val('52.449216, -1.931401')){
		//  	$("#gatePop").animate({bottom:'0'});
		//  	break;
		// }

		switch ($("#building").val()){
			case ("AstonWebbBBlock"):
				mulGate = false;				
				navDest = "52.449216, -1.931401";
				$("#gatePop").animate({bottom:'-3rem'},onChangeHandler);
				break;

				// if($("#gateA").click()){
				// 	//$("#gateA").click(function(){
				// 	navDest = "52.449216, -1.931401";
				// 	//});
				// 	document.getElementById('gateA').addEventListener('click',onChangeHandler)
				// }else if($("#gateB").click()){
				// 	navDest = "52.450322, -1.929126"
				// 	document.getElementById('gateB').addEventListener('click',onChangeHandler)
				// }
				
			case ("AstonWebbGreatHall"):
				mulGate = true;
				//navDest = "52.449093, -1.930821"
				if(isRefresh == false){$("#gatePop").animate({bottom:'-3rem'});}
				//$("#gatePop").animate({bottom:'-3rem'});
				//$("#gatePop").animate({bottom:'0'});
				$("#gateA").append("<img id='pic' src='../img/greathall1.png'/>");
				$("#gateB").append("<img id='pic' src='../img/greathall2.png'/>");
				if(isRefresh == false){$("#gatePop").animate({bottom:'0'});}
				//$("#gatePop").animate({bottom:'0'});
				if(navDest == latlngData.AstonWebbGreatHallG1 | navDest == latlngData.AstonWebbGreatHallG2){
					$("#gatePop").animate({bottom:'0'},onChangeHandler);;
				}//if you keep the selection, then refresh directly
				$("#gateA").click(function(){
					navDest = latlngData.AstonWebbGreatHallG1;
				});
				document.getElementById('gateA').addEventListener('click',onChangeHandler);
				$("#gateB").click(function(){
					navDest = latlngData.AstonWebbGreatHallG2;
				});
				document.getElementById('gateB').addEventListener('click',onChangeHandler);
				break;
			case ("ComputerScience"):
				mulGate = false;
				navDest = latlngData.ComputerScience;
				$("#gatePop").animate({bottom:'-3rem'},onChangeHandler);
				break;
			case ("WatsonBuilding"):
				mulGate = false;
				navDest = latlngData.WatsonBuilding;
				$("#gatePop").animate({bottom:'-3rem'},onChangeHandler);
				break;
			case ("StaffHouse"):
				if(isRefresh == false){$("#gatePop").animate({bottom:'-3rem'});}
				//$("#gatePop").animate({bottom:'0'});
				$("#gateA").append("<img id='pic' src='../img/staffhouse1.png'/>");
				$("#gateB").append("<img id='pic' src='../img/staffhouse2.png'/>");
				if(isRefresh == false){$("#gatePop").animate({bottom:'0'});}
				if(navDest == latlngData.StaffHouseG1 | navDest == latlngData.StaffHouseG2){
					$("#gatePop").animate({bottom:'0'},onChangeHandler);
				}
				$("#gateA").click(function(){
					navDest = latlngData.StaffHouseG1;
				});
				document.getElementById('gateA').addEventListener('click',onChangeHandler);
				$("#gateB").click(function(){
					navDest = latlngData.StaffHouseG2;
				});
				document.getElementById('gateB').addEventListener('click',onChangeHandler);
				break;
			case ("Library"):
				if(isRefresh == false){$("#gatePop").animate({bottom:'-3rem'});}
				//$("#gatePop").animate({bottom:'0'});
				$("#gateA").append("<img id='pic' src='../img/library1.png'/>");
				$("#gateB").append("<img id='pic' src='../img/library2.jpg'/>");
				if(isRefresh == false){$("#gatePop").animate({bottom:'0'});}
				if(navDest == latlngData.LibraryG1 | navDest == latlngData.LibraryG2){
					$("#gatePop").animate({bottom:'0'},onChangeHandler);
				}
				$("#gateA").click(function(){
					navDest = latlngData.LibraryG1;
				});
				document.getElementById('gateA').addEventListener('click',onChangeHandler);
				$("#gateB").click(function(){
					navDest = latlngData.LibraryG2;
				});
				document.getElementById('gateB').addEventListener('click',onChangeHandler);
				break;
			case ("SportsandExercise"):
				mulGate = false;
				navDest = latlngData.SportsandExercise;
				$("#gatePop").animate({bottom:'-3rem'},onChangeHandler);
				break;
		}

	}); //GATE POP-UP END
	 // 	 var onChangeHandler = function() {
	 //          calculateAndDisplayRoute(directionsService, directionsDisplay);
	 //        };
	 //        document.getElementById('building').addEventListener('change', onChangeHandler);
	 //        if this building is a multi gate building
	 //        document.getElementById('gateA').addEventListener('click', onChangeHandler)
	        
	 //        if (mulGate === true) {
	 //        	document.getElementById('gateA').addEventListener('click', onChangeHandler);
	 //        } else {
	 //        	document.getElementById('building').addEventListener('change', onChangeHandler);
	 //        }


	//READ TIMETABLE
	//local storage read
    $('#uploadBtn').click(function(){
    	$('#tableUpload').click();
    });
    var filename = localStorage.getItem("filename");//filename in localstorage
    var fileresult = localStorage.getItem("fileresult");//file content in storage(string）
    function isLoad(){
	    if(filename && fileresult){//if already have this file in localstorage
	        //storageFile：通过localStorage中的文件内容和文件名构建的File对象
	        var storageFile = new File([fileresult], {"type":"text/plain"});//File继承自Blob，可以用Blob的构造函数
	        Object.defineProperty(storageFile,'name',{value:filename});
	        
	        $("#uploadBtn").text("Timetable Loaded");
	        $("#uploadBtn").css("width","3.4rem");
	        $("#panel").append("<button id ='clear' type='button'>&#10005;</button>");
	        $("#clear").click(function(){
	        	localStorage.removeItem("filename");
	        	localStorage.removeItem("fileresult");
	        	window.location.reload();
	        });
	        alert(localStorage.getItem("fileresult"));
	    }
	}
	isLoad();
    function loadFile(file){
        var fileReader = new FileReader();
        fileReader.onload = function(){
            var result = this.result;//文件内容
            //确定，将文件保存到本地存储中，替换现有的
            try {
                localStorage.setItem("filename", file.name);
                localStorage.setItem("fileresult", result);
                window.location.reload();
            }
            catch (e) {
                console.log("Storage failed: " + e);
            }
        };
        fileReader.readAsText(file);
    }

    $("#tableUpload").change(function(){
    	loadFile(this.files[0]);
    });



	//-----------------------------------	
    // $('#uploadBtn').click(function(){
    // 	$('#tableUpload').click();
    // });
    // var filename_1 = localStorage.getItem("filename_1");//filename in localstorage
    // var fileresult_1 = localStorage.getItem("fileresult_1");//file content in storage(string）
   
    // if(filename_1 && fileresult_1){//if already have this file in localstorage
    //     //storageFile：通过localStorage中的文件内容和文件名构建的File对象
    //     var storageFile = new File([fileresult_1], {"type":"text/plain"});//File继承自Blob，可以用Blob的构造函数
    //     Object.defineProperty(storageFile,'name',{value:filename_1});
        
    //     $("#uploadBtn").text("Timetable Loaded");
    //     $("#uploadBtn").css("width","3.4rem");
    //     $("#uploadBtn").append("<button id ='clear' type='button'>&#10005;</button>");
    //     $("#clear").click(function(){
    //     	localStorage.removeItem("filename_1");
    //     	localStorage.removeItem("fileresult_1");
    //     	window.location.reload();
    //     });
    //     alert(localStorage.getItem("fileresult_1"));
    // }

    // function loadFile(file){
    //     var fileReader = new FileReader();
    //     fileReader.onload = function () {
    //         var result = this.result;//文件内容
    //         //确定，将文件保存到本地存储中，替换现有的
    //         try {
    //             localStorage.setItem("filename_1", file.name);
    //             localStorage.setItem("fileresult_1", result);
    //         }
    //         catch (e) {
    //             console.log("Storage failed: " + e);
    //         }
    //         alert(result);
    //     };
    //     fileReader.readAsText(file);
    // }
//-------------------------------------------------------------------------------------
	//localStorage.setItem('testKey','testvaluedata');
	// alert(localStorage.getItem('testKey'));


	// ajax read
	// $.ajax({
	// 	url:'../timetable/my.bham - University of Birmingham_files/timeout.html',
	// 	type:'GET',
	// 	success: function(data){
	// 		$('#hah').html(data);
	// 	}

	// })



	//$("div").load("../timetable/my.bham - University of Birmingham_files/timeout.html")
	// $("#frameset").hide();
	// var e = setInterval(function(){alert($('title:eq(1)').html());},3000);
	// $("td").each(function(){
	// 	var tdVal = $(this).text();
	// 	alert(tdVal);
	// });
	// $(document).ready(function(){
	// 	alert($('title:eq(1)').html());
	// });



    //LECTURE REMINDER
    var lectBuildStr = undefined;
    var refreshTimetable = setInterval(lecture, 15000);//Refresh Timetable every 15s
    function lecture(){
		var date = new Date()
		  , minutes = date.getMinutes()
		  , time = parseInt(date.getHours()+''+minutes)//Get current time (returns int eg1100)
		  , week = date.getDay()//Get the day of week (returns num eg1,2,3)
		  , _week = 0;//week - 1; //First element in JS is [0]
		if(minutes < 10){minutes = '0'+minutes;}
		//getMinutes() can only get single number when minute smaller than 10, eg 20:03 = 3 rather than 03

	    var forcebreak = 0;
	    for (var j = _week; j < 7; j++){

	    	if (j > 4){j = 0; time = 800;}//if today is Sat or Sun, set it as Mon 8 AM
	    	if (j == 4 & timeTable[4].lectures[0] == undefined){//if Today is Friday, and no lecture today
	    		j = 0;//set j as Monday.
	    		time = 800;
	    	}
	    	
	    	if (timeTable[j].lectures[0] !== undefined){ //if there's lecture on jst day 
	    		var i = 0;
	    		try{
		    		while(time > timeTable[j].lectures[i].time){ //comapre current time with the first lecture's time
			    		i += 1;//if lecture's time past, check next lecture's time.
			   		}
			   		var lectStr = timeTable[j].lectures[i].lect
			   		  , lectTimeStr = timeTable[j].lectures[i].time.toString()
			   		  , lectBuildStr = timeTable[j].lectures[i].location;

		    		$("#lecture").html('<span>' + lectStr + '</span>');//show lecture name
		    		$("#time").html('<span>' + lectTimeStr.substring(0,2) + ':' + lectTimeStr.substring(2,4) + '</span>');
					$("#building").val(lectBuildStr);//Change the OPTION value
					//alert(timeTable[j].lectures[i].location);
					$("#building").change();
		    		break;
		    	}catch(err){//if all today's lecture past, continue the loop.
		    		time = 800; // reset time as 0, make sure the time always doesn't past the next lecture's.
		    		if (j == 4){j = -1;}// If today is Friday, set j as Monday (-1, loop will make j+1 = 0).
		    	}
	    	}
	    	forcebreak += 1;
	    	if(forcebreak == 14){forcebreak = 0; alert("Timetable Error"); break;}//break the loop in case of infinity
	    }
	};
	lecture();
	$("#building").click(function(){//if user changed the selection,
		clearInterval(refreshTimetable);//then clear the timetable refresh interval
		var refreshCustomLoca = setInterval(function(){
			isRefresh = true;//State this is a auto refresh(cancel the animation)
			$("#building").change();//set a new interval that triggers location refresh
		}, 15000);
	});
	
	//alert(lectBuildStr);
	// if ($("#building").val() !== lectBuildStr){
	// 	clearInterval(refreshTimetable);
	// 	alert($("#building").click());
	// }
	


    // try{
	//     while(time > _timetable.lectures[i].time){ //if lectures[i] is defined, show ongoing lecture
	//     	i = i+1;
	//     }
	//     $("#lecture").append('<span>' + _timetable.lectures[i].lect + '</span>');
	// }catch(err){//return err means lectures[i] is undefined
	// 	try{//show tomorrow's lecture
	// 		$("#lecture").append('<span>' + timeTable[week].lectures[0].lect + '</span>');
	// 	}catch(err){//return err means no 'tomorrow' in your list
	// 		try{//try tomorrow+1
	// 			$("#lecture").append('<span>' + timeTable[week+1].lectures[0].lect + '</span>');
	// 		}catch(err){
	// 			try{//try tomorrow+2
	// 				$("#lecture").append('<span>' + timeTable[week+2].lectures[0].lect + '</span>');
	// 			}catch(err){//show Monday's first lecture then.
	// 				$("#lecture").append('<span>' + _timetableMon.lectures[0].lect + '</span>');
	// 			}
	// 		}
			
	// 	}
	// }
	
    //$("#lecture").append('<span>' + _timetableMon.lectures[0].lect + '</span>');
    //$("#lecture").append('<span>' + _timetable.lectures[i].lect + '</span>');
    
	   //  if(_timetable.lectures[i].lect == undefined){ //if no more lectures today
	   //  	if(timeTable[_week+1] == undefined){//and no 'next day' in the list, then return Monday's first lec
	   //  		$("#lecture").append('<span>' + _timetableMon.lectures[0].lect + '</span>');
	   //  	}
	   //  	else{//then return next day's first lec
	   //  		$("#lecture").append('<span>' + timeTable[_week+1].lectures[0].lect + '</span>');
	   //  	}
	   //  }
	
    // else{//means today still has left lectures, just return next lecture
    // 	$("#lecture").append('<span>' + _timetable.lectures[i].lect + '</span>');
    // }

    //$("#lecture").append('<span>' + _timetable.lectures[0].lect + time +'</span>');


}


function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	
	//GET CURRENT LOCATION
	navigator.geolocation.getCurrentPosition(function(position) {
		//CREATE A VAR FOR CURRENT LOCATION
		
		var currentLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		
        //DIRECTIONS SERVICE
        directionsService.route({
          origin: currentLocation,
          destination: navDest,//document.getElementById('building').value,//GET OPTIONS FROM HTML
          travelMode: 'WALKING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
      });
  });
}
