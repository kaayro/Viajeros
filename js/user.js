var user = {
	setNew: function(){
		var name = $("#rname").val();
		var mail = $("#rmail").val();
		var pass = $("#rpass").val();
		var coun = $("#rcountry").val();
		var lang = $("#rlang").val();
		var date = $("#rbdate").val();
		
		
		if(name != undefined && name != '' && mail != undefined && mail != '' && pass != undefined && pass != '' && coun != undefined && coun != '' && lang != undefined && lang != '' && date != undefined && date != ''){
			var data = { action:'setNewUser',name:name,mail:mail,pass:pass,country:coun,languages:lang,bdate:date};
			$.post('http://tourindigital.com/app/registro.app.php', data, function(response){
				if(response == '1'){
					//Guardar datos en bd interna... 
					window.location.href = '#profile';
				}else
					alert('Hubo un error en el registro, intenta de nuevo.');
			});
		}else
			alert("Todos los campos son requeridos");
	},
	getLogin: function(){
		var mail = $('#loginMail').val();
		var pass = $('#loginPass').val();
		
		if(mail != undefined && name != '' && pass != undefined && pass != ''){
			var data = {action:'getLogin',mail:mail,pass:pass};
			window.location.href = '#profile';
		}else
			alert('Todos los campos son requeridos');
	}
};