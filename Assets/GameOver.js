﻿var style : GUIStyle;

function OnGUI() {
  GUI.Label(Rect(10,10,100,30), "Game Over", style);
  Invoke("Restart", 3);
}

function Restart() {
	Application.LoadLevel("main");
}