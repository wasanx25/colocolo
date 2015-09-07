#pragma strict

import UnityEngine.UI;

public static var timeScore : float;
public static var test : float;

function Start() {
	test = 10000;
}

function Update () {
	if (!GoalScript.goal) {
		timeScore += Time.deltaTime;
		var uiText : Text = GetComponent.<Text>();
		uiText.text = "Time : " + timeScore;
	}
}