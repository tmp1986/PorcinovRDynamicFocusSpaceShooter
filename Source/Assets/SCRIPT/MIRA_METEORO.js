#pragma strict


var on : Texture;
var off : Texture;


function Start () {
renderer.material.mainTexture = off;
}

function Update () {

}

function OnTriggerEnter (other : Collider) {
   if(other.gameObject.tag == "COLISOR"){
   renderer.material.mainTexture = on;
  }
  }
  function OnTriggerExit (other : Collider) {
   if(other.gameObject.tag == "COLISOR"){
   renderer.material.mainTexture = off;
  }
  }