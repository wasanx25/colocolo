#pragma strict

function Update () {
	var horizMove : float = Input.GetAxis("Horizontal");
	transform.position += Vector3(horizMove * 0.1, 0, 0);

	var vertMove : float = Input.GetAxis("Vertical");
	transform.position += Vector3(0, 0, vertMove * 0.1);
}