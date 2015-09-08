#pragma strict

var normalPlate : Transform;
var goalPlate : Transform;
var goalPall : Transform;
var randomPall : Transform;

var style : GUIStyle;
var i : int;
var k : int;
var z : int;

function Update () {
	if (i < 20) {
		if (Time.frameCount % 10 == 0) {
			i++;
			// 素数だったら
			if (checkPrime(i)) {
				Instantiate(normalPlate, Vector3(5 * (k - 1), 0, 5 * z), transform.rotation);
				Instantiate(randomPall, Vector3(5 * (k - 1) * Random.Range(0.9, 1), 0.5, 5 * z * Random.Range(0.9, 1)), transform.rotation);
				Instantiate(randomPall, Vector3(5 * (k - 1) * Random.Range(0.9, 1), 0.5, 5 * z * Random.Range(0.9, 1)), transform.rotation);
				z++;
			} else {
				Instantiate(normalPlate, Vector3(5 * k, 0, 5 * z), transform.rotation);
				Instantiate(randomPall, Vector3(5 * k * Random.Range(0.9, 1), 0.5, 5 * z * Random.Range(0.9, 1)), transform.rotation);
				Instantiate(randomPall, Vector3(5 * k * Random.Range(0.9, 1), 0.5, 5 * z * Random.Range(0.9, 1)), transform.rotation);
				k++;
			}
		}
	}
	if (i == 20) {
		Instantiate(goalPlate, Vector3(5 * k, 0, 5 * z), transform.rotation);
		Instantiate(goalPall, Vector3(5 * k, 0, 5 * z), transform.rotation);
		i++;
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