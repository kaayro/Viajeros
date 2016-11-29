<?php
	if($_SERVER['REQUEST_METHOD'] === 'POST'){
		//archivos requeridos
		require_once("procedures.sql.php");
	
		//Acceso a Base de datos
		$sql = new procedures();
		$register = new register($sql);
		switch($_POST["action"]){
			case "setNewUser":
				$register->setNewUser($_POST["name"],$_POST["mail"],$_POST["pass"],$_POST["country"],$_POST["languages"],$_POST["bdate"]);
				break;
			case "getLogin":
				$register->getLogin($_POST["mail"],$_POST["pass"]);
				break;
			default:
				echo "Error 404";
		}
		
		exit();
	}else{
		echo "Error 404";	
	}

	class register{
		private $sql = null;
		public function __constructor($sql){
			$this->sql = $sql;
		}
		public function setNewUser($name,$mail,$pass,$country,$languages,$bdate){
			if($this->sql->setNewUser($name,$mail,$pass,$country,$languages,$bdate) == "t")
				echo 1;
			else
				echo 0;
		}
		public function getLogin($mail,$pass){
			if($res = $this->sql->getLogin($mail,$pass)){
				echo $res->num_row;
			}else{
				echo 0;
			}
		}
	}
?>