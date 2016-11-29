var user = {
	setNew: function(){
		var name = $("#rname").val();
		var mail = $("#rmail").val();
		var pass = $("#rpass").val();
		var coun = $("#rcountry").val();
		var lang = $("#rlang").val();
		var date = $("#rbdate").val();
		
		if(name =! undefined && name != '' && mail != undefined && mail != '' && pass != undefined && pass != '' && coun != undefined && coun != '' && lang != undefined && lang != '' && date != undefined && date != ''){
			var data = {action:'setNewUser',name:name,mail:mail,pass:pass,country:coun,languages:lang,bdate:date};
			alert(data);
			app.ajax('http://tourindigital.com/app/registro.app.php',data);
		}else
			alert("Todos los campos son requeridos");
	}
};