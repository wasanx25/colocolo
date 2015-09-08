#pragma strict

function OnRestart() {
	Application.LoadLevel("Main");
}

function Tweet() {
	Application.OpenURL("http://twitter.com/intent/tweet?text=" + WWW.EscapeURL("colocoloで" + TimerScript.timeScore + "秒でクリアしました！あなたもやってみよう！ URL #colocolo"));
}