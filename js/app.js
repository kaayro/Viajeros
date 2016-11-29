var app = {
	ready: function(){
		document.addEventListener("deviceready",app.init,false);
	},
	init: function(){
		//Search Events
		$(document).on('tap','#category a.icon',app.search);
		$(document).on('tap','#tourinner .button-next a',app.nextTourinner);
		$(document).on('tap','#tourinner .button-in a',app.showMap);
		//Register Events
		$(document).on('tap','#rsend',user.setNew);
	},
	ajax: function(url, data){
		/*$.ajax({
			type: 'POST',
			url: url,
			// post payload:
			data: JSON.stringify(data),
			success: function(msg){
				alert(msg);
			},
			error: function(e){
				alert(e);
			}
		});*/
		$.post(url, data, function(msg){
			alert(msg);
		});
	},
	search: function(){
		var category = $(this).attr('rel');
		/*$.ajax({
			type: 'POST',
			url: 'http://tourin.igitapps.com/',
			// data to be added to query string:
			data: { name: 'Zepto.js' },
			// type of data we are expecting in return:
			dataType: 'json',
			success: function(data){
				alert(data);
			},
			error: function(xhr, type){
				alert('Ajax error!');
			}
		});*/
		var data = '[{"name":"Luis Romero Chilaca","country":"México","age":"39","academy":"Derecho","languages":"Francés, Inglés y Español","description":"Poblano de nacimiento y amante de la ciudad desde que tengo memoria, explorador de lugares místicos y timbero de corazón... Conoce conmigo los mejores lugares para divertirte y pasar un rato muy ameno en la ciudad.","image":"https://scontent-dfw1-1.xx.fbcdn.net/v/t1.0-9/13336103_10206646402903107_8094949296329747966_n.jpg?oh=02ae61c62b090078a73cbfdb4b2bb581&oe=5835D593"},{"name":"Carlos Celma Tavera","country":"México","age":"27","academy":"Ciencias de la Computación","languages":"Inglés y Español","description":"Poblano de nacimiento y amante de la ciudad desde que tengo memoria, explorador de lugares místicos y timbero de corazón... Conoce conmigo los mejores lugares para divertirte y pasar un rato muy ameno en la ciudad.","image":"https://s-media-cache-ak0.pinimg.com/736x/21/ef/aa/21efaa9029105fbb9a0fe6de8029a7af.jpg"},{"name":"Ana Elena Pavana","country":"México","age":"24","academy":"Comunicación y Antropología","languages":"Inglés, Alemán y Español","description":"Poblana de sentimiento , llevo viviendo 10 años en esta maravillosa ciudad en la que cada edificio cuenta una historia…descubre conmigo los secretos de la época colonial, sus calles más representativas y la gente que habita la zona.","image":"http://superiorplatform.com/pictures-of/faces/happy/01-very-happy-face.jpg"}]';
		app.tourinnersList(JSON.parse(data));
	},
	tourinnersList: function(data){
		//alert(data.length);
		var div = '';
		for(i=0;i<data.length;i++){
			var hidden = '';
			if(i>0) hidden = 'tourinner-hidden';
			if(i == (data.length - 1)){
				div += '<div id="tourinner-'+i+'" class="tourinner-card '+hidden+'"><div class="ti-tourinner-id-card-head"><div class="pickture"><img src="'+data[i].image+'"></div><div class="personal-data"><div class="name">'+data[i].name+'</div><div class="from">'+data[i].country+', '+data[i].age+'</div></div></div><div class="ti-tourinner-id-card-body"><div class="credentials"><p>Estudié '+data[i].academy+'</p><p>Hablo '+data[i].languages+'</p></div><div class="description">'+data[i].description+'</div></div><div class="ti-tourinner-id-card-buttons"><div class="ti-tourinner-row"><div class="ti-tourinner-col-2 button-in"><a href="#">IN</a></div><div class="ti-tourinner-col-2 button-next"></div></div></div></div>';
			}else{
				div += '<div id="tourinner-'+i+'" class="tourinner-card '+hidden+'"><div class="ti-tourinner-id-card-head"><div class="pickture"><img src="'+data[i].image+'"></div><div class="personal-data"><div class="name">'+data[i].name+'</div><div class="from">'+data[i].country+', '+data[i].age+'</div></div></div><div class="ti-tourinner-id-card-body"><div class="credentials"><p>Estudié '+data[i].academy+'</p><p>Hablo '+data[i].languages+'</p></div><div class="description">'+data[i].description+'</div></div><div class="ti-tourinner-id-card-buttons"><div class="ti-tourinner-row"><div class="ti-tourinner-col-2 button-in"><a href="#">IN</a></div><div class="ti-tourinner-col-2 button-next"><a href="#">Siguiente</a></div></div></div></div>';
			}
		}
		
		$('#tourinner .scroll').html(div);
		window.location.href = '#tourinner';
	},
	nextTourinner: function(){
		var card = $(this).parent().parent().parent().parent();
		var id = parseInt(card.attr('id').substr(10));
		card.hide();
		$('#tourinner-'+(id+1)).show();
	},
	showMap: function(){
		var latlng = new google.maps.LatLng(19.044236, -98.198010);
		var myOptions = {
			zoom: 15,
			center: latlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("ti-map-map"),myOptions);
		//Marcador
		var marker = new google.maps.Marker({
			position: latlng, 
			map: map, 
			title:"Mi posición"
		});
		
		var triangleCoords = [
			{lat: 19.033019, lng: -98.199981},
			{lat: 19.039185, lng: -98.196076}, 
			{lat: 19.040706, lng: -98.194070},
			{lat: 19.042491, lng: -98.192450},
			{lat: 19.044874, lng: -98.191710},
			{lat: 19.045979, lng: -98.193877},
			{lat: 19.045188, lng: -98.194295},
			{lat: 19.046719, lng: -98.197278},
			{lat: 19.047469, lng: -98.196870},
			{lat: 19.048270, lng: -98.198351},
			{lat: 19.046744, lng: -98.199241},
			{lat: 19.049898, lng: -98.205271},
			{lat: 19.050719, lng: -98.204960},
			{lat: 19.051317, lng: -98.206065},
			{lat: 19.050627, lng: -98.206408},
			{lat: 19.050084, lng: -98.205357},
			{lat: 19.047534, lng: -98.206682},
			{lat: 19.044461, lng: -98.200647},
			{lat: 19.036033, lng: -98.205652},
			{lat: 19.033019, lng: -98.199981},
		];

		// Construct the polygon.
		var bermudaTriangle = new google.maps.Polygon({
			paths: triangleCoords,
			strokeColor: '#ff9900',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#ff9900',
			fillOpacity: 0.1
		});
		bermudaTriangle.setMap(map);
		
		window.location.href = '#map';
	}
};

$(app.ready);