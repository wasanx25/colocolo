#pragma strict

import UnityEngine.UI;

public static var time : float;

function Update () {
	if (!GoalScript.goal) {
		time += Time.deltaTime;
		var uiText : Text = GetComponent.<Text>();
		uiText.text = "Time : " + time;
	}
}