import UnityEngine.UI;

var score : Text;
function Updata() {

	score.text = "Score : ";
}

function OnRestart() {
	Application.LoadLevel("Main");
}