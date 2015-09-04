#pragma strict

import UnityEngine.UI;

var time : float;

function Update () {
	time += Time.deltaTime;
	var t : int = Mathf.FloorToInt(time);
	var uiText : Text = GetComponent.<Text>();
	uiText.text = "Time : " + t.ToString();
}