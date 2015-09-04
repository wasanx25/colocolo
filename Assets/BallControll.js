#pragma strict

function Update () {
	// pc用
	var horizMove : float = Input.GetAxis("Horizontal");
	transform.position += Vector3(horizMove * 0.1, 0, 0);

	// sp用
	var vertMove : float = Input.GetAxis("Vertical");
	transform.position += Vector3(0, 0, vertMove * 0.1);

	// 下に落ちたらスタート地点に戻る
	if (transform.position.y < -10) {
		transform.position = Vector3(0,1,0);
		// Application.LoadLevel("GameOver");
	}
}