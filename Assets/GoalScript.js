﻿#pragma strict

public static var goal : boolean;

function Start () {
	goal = false;
}

function OnTriggerEnter(col : Collider) {
	goal = true;
	Application.LoadLevel("GameClear");
}