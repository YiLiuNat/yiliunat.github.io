// $(document).ready(function() {
	
			var map;
			var faisalabad = {lat:52.449970, lng:-1.930870};

			function addYourLocationButton(map, marker) 
			{
			    var controlDiv = document.createElement('div');

			    var firstChild = document.createElement('button');
			    firstChild.style.backgroundColor = '#fff';
			    firstChild.style.border = 'none';
			    firstChild.style.outline = 'none';
			    firstChild.style.width = '0.56rem';
			    firstChild.style.height = '0.56rem';
			    firstChild.style.borderRadius = '0.04rem';
			    firstChild.style.boxShadow = '0 0.02rem 0.08rem rgba(0,0,0,0.3)';
			    firstChild.style.cursor = 'pointer';
			    firstChild.style.marginRight = '0.2rem'; //button's margin
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
			        mapTypeControl: false
			    });
			    var myMarker = new google.maps.Marker({
			        map: map,
			        animation: google.maps.Animation.DROP,
			        position: faisalabad
			    });
			    addYourLocationButton(map, myMarker);

			    //DIRECTION
				var directionsService = new google.maps.DirectionsService;
				var directionsDisplay = new google.maps.DirectionsRenderer;
				directionsDisplay.setMap(map);
				var onChangeHandler = function() {
			          calculateAndDisplayRoute(directionsService, directionsDisplay);
			        };
			        document.getElementById('building').addEventListener('change', onChangeHandler);
			    }

			    function calculateAndDisplayRoute(directionsService, directionsDisplay) {
			    	
			    	//GET CURRENT LOCATION
			    	navigator.geolocation.getCurrentPosition(function(position) {
			    	//CREATE A VAR FOR CURRENT LOCATION
        			var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			        directionsService.route({

			          origin: latlng,
			          destination: {lat:52.449970, lng:-1.930870},//document.getElementById('end').value,
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

			

			$(document).ready(function(e) {
			    initMap();
			}); 
		// });