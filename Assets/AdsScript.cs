using UnityEngine;
using System.Collections;
using UnityEngine.Advertisements;

public class AdsScript : MonoBehaviour {

    void Start () {
        // ゲームIDを入力して、Unity Adsを初期化する
        Advertisement.Initialize ("71779");
    }

    void Update () {
        // Unity Adsを表示する準備ができているか確認する
        if (Advertisement.isReady ()) {
            // Unity Adsを表示する
            Advertisement.Show ();
        }
    }
}
