<?php
	
	class procedures {
		public $dataConnection = null;
		public function __construct(){
			//Pedir Acceso a Base de Datos
			$this->dataConnection = new mysqli("174.142.46.37", "kaayro", "Ab287349", "tourindigital");
			if ($this->dataConnection->connect_errno) {
				printf("Falló la conexión: %s\n", $this->dataConnection->connect_error);
				exit();
			}
		}
		private function query($query){
			$result = $this->dataConnection->query($query);
			return $result;
		}
		
		#UsersProcedures
		public function setNewUser($name,$mail,$pass,$country,$languages,$bdate){
			if($this->query("INSERT INTO users (usrName,usrMail,usrPass,usrCountry,usrLang,usrBDate) VALUES ('".$name."','".$mail."',MD5('".$pass."'),'".$country."','".$languages."','".$bdate."')"))
				return "t";
			else
				return $this->dataConnection->error;
		}
		public function getLogin($mail,$pass){
			if($result = $this->query("SELECT * FROM users WHERE usrMail = '".$mail."' AND usrPass = MD5('".$pass."')"))
				return $result;
			else
				return $this->dataConnection->error;
		}
	}
	
?>