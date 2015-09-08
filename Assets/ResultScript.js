import UnityEngine.UI;


function Update() {
	var score : Text = GetComponent.<Text>();
	score.text = "Score : " + TimerScript.timeScore;
}

function Tweet() {
	Application.OpenURL("http://twitter.com/intent/tweet?text=" + WWW.EscapeURL("colocoloで" + TimerScript.timeScore + "秒でクリアしました！あなたもやってみよう！ URL #colocolo"));
}