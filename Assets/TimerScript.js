#pragma strict

import UnityEngine.UI;

var time : float;

function Update () {
	time += Time.deltaTime;
	var uiText : Text = GetComponent.<Text>();
	uiText.text = "Time : " + time;
}