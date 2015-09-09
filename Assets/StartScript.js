#pragma strict

var sound : AudioClip;

function Update () {
	for (var touch : Touch in Input.touches) {
		if (touch.phase == TouchPhase.Began) {
			GetComponent.<AudioSource>().Play();
			Application.LoadLevel("Main");
		}
	}
}