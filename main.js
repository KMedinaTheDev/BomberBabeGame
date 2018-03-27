alert("BomberBabe!")
/*BomberMan "Game"*/

//The user can use the up, down, left, and right keypads (4 event listeners)
//Left: 37
//Up: 38
//Right: 39
//Down: 40
///to move around the bomberman character(use float, position, or margin to move bmc)

 var babe = document.getElementById("babe"),
  babeLeft=0,
  babeUp=0;

document.onkeydown = moveSelection;

function moveSelection(e){
  if (e.keyCode == 37){
    babeLeft += -10;
    babe.style.left = babeLeft + "px";
  }
  if (e.keyCode == 39) {
    babeLeft += 10;
    babe.style.left = babeLeft + "px";
  }
  if (e.keyCode == 38) {
    babeUp += -10;
    babe.style.top = babeUp + "px";
  }
  if (e.keyCode == 40) {
    babeUp += 10;
    babe.style.top = babeUp + "px";
  }
}




//user sees a maze (bg image)
