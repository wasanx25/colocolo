#pragma strict

var obj : GameObject;
var offset : Vector3;

function Update () {
	var position : Vector3;
    position = obj.transform.localPosition;
    transform.localPosition = position + offset;
}