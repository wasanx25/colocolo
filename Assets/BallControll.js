#pragma strict
var rb : Rigidbody;

function Start() {
	rb = GetComponent.<Rigidbody>();
}

function Update () {
	// pc用
	var horizMove : float = Input.GetAxis("Horizontal");
	var vertMove : float = Input.GetAxis("Vertical");

	// sp用
	// transform.position += Vector3(horizMove * 0.1, 0, vertMove * 0.1);
	var rotation : float = Input.gyro.attitude;
	rb.AddForce(rotation * 10, 0, rotation * 10);
	// rb.AddForce(horizMove * 10, 0, vertMove * 10);

	// 下に落ちたらスタート地点に戻る
	if (transform.position.y < -10) {
		transform.position = Vector3(0,1,0);
		transform.rotation = Quaternion.Euler(0, 0, 0);
	}
}