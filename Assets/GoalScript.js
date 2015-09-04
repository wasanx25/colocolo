#pragma strict

public static var goal : boolean;

function Start () {
	goal = false;
}

function OnTriggerEnter(col : Collider) {
	// if (col.gameObject.tag == "Ball") {
		goal = true;
		Application.LoadLevel("GameClear");
	// }
}