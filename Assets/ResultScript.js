import UnityEngine.UI;


function Update() {
	var score : Text = GetComponent.<Text>();
	score.text = "Score : " + TimerScript.timeScore;
}
