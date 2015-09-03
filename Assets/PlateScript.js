#pragma strict

var enemy : Transform;
var i : int;
var k : int;
var z : int;

function Update () {
	if (i < 20) {
		if (Time.frameCount % 10 == 0) {
			i++;
			// 素数だったら
			if (checkPrime(i)) {
				Instantiate(enemy, Vector3(5 * (k - 1), 0, 5 * z), transform.rotation);
				z++;
			} else {
				Instantiate(enemy, Vector3(5 * k, 0, 5 * z), transform.rotation);
				k++;
			}
		}
	}
}


// 素数をチェック
private function checkPrime(i : int) {
	if (i > 2) {
		for (var j = 2; j < i; j++) {
			if (i % j == 0) {
				return false;
			}
		}
	} else {
		return false;
	}
	return true;
}