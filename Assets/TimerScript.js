#pragma strict

import UnityEngine.UI;

public static var timeScore : float;

function Update() {
	if (!GoalScript.goal) {
		timeScore += Time.deltaTime;
		var uiText : Text = GetComponent.<Text>();
		uiText.text = "Time : " + timeScore;
	}
}