var Canvas=new fabric.Canvas('myCanvas');

player_x=10;
player_y=10;

block_height=30;
block_width =30;

var player_object="";
var block_object="";

function player_update(){
fabric.Image.fromURL("player.png",function (Img){ player_object=Img;
     player_object.scaleToWidth(150); 
     player_object.scaleToHeight(150); 
     player_object.set({ top:player_y,left:player_x});
    Canvas.add(player_object);
    }
    );
}

function new_image(get_Image){
    fabric.Image.fromURL(get_Image,function (Img){ block_object=Img;
      block_object.scaleToWidth(block_width); 
        block_object.scaleToHeight(block_height); 
      block_object.set({ top:player_y,left:player_x});
       Canvas.add(block_object);
       }
       );

}

window.addEventListener("keydown",key_move);
function key_move(e){
  var key_presseed=e.keyCode;
  console.log(key_presseed);


if( e.shiftKey == true && key_presseed=="80" )
{
  console.log("p+shif preseed");
block_height=block_height+10;
block_width=block_width+10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}

if( e.shiftKey && key_presseed=="77" )
{
  console.log("m+shif preseed");
block_height=block_height-10;
block_width=block_width-10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;
}

if (key_presseed =="38" )
{
  up();
  console.log("up key presed");
}
if (key_presseed =="40" )
{
  down();
  console.log("down key presed");
}
if (key_presseed =="37" )
{
  left();
  console.log("left key presed");
}
if (key_presseed =="39" )
{
  right();
  console.log("right key presed");
}

if (key_presseed =="87" )
{
  new_image("wall.jpg");
  console.log("wall image");
}

if (key_presseed == "71" )
{
  new_image("ground.png");
  console.log("ground image");
}

if (key_presseed =="76" )
{
  new_image("light_green.png");
  console.log("light green image");
}

if (key_presseed =="84" )
{
  new_image("trunk.jpg");
  console.log("trunk image");
}

if (key_presseed =="82" )
{
  new_image("roof.jpg");
  console.log("roof image");
}

if (key_presseed =="89" )
{
  new_image("yellow_wall.png");
  console.log(" yellow wall image");
}

if (key_presseed =="68" )
{
  new_image("dark_green.png");
  console.log("dark green wall image");
}

if (key_presseed =="67" )
{
  new_image("cloud.jpg");
  console.log("cloud image");
}

if (key_presseed =="85" )
{
  new_image("unique.png");
  console.log("unique image");
}



}
function up()
{   if ( player_y>=0){
  player_y = player_y-block_height;
  console.log(block_height+ "block height");
  console.log(player_y+ " when up is presed player y");
  console.log( player_x + "when up is presend player x " );
  Canvas.remove(player_object);
  player_update();
}
}



function down()
{   if ( player_y<=500){
  player_y = player_y+block_height;
  console.log(block_height+ "block height");
  console.log(player_y + " when down is presed player y");
  console.log( player_x + "when down is presend player x " );
  Canvas.remove(player_object);
  player_update();
}
}

function left()
{   if ( player_x>=0){
  player_x = player_x-block_width;
  console.log(block_width + "block width");
  console.log(player_y+ " when left is presed player y");
  console.log( player_x + "when left is presend player x " );
  Canvas.remove(player_object);
  player_update();
}
}


function right()
{   if ( player_x<=850){
  player_x = player_x+block_width;
  console.log(block_width + "block width");
  console.log(player_y+ " when right is presed player y");
  console.log( player_x + "when right is presend player x " );
  Canvas.remove(player_object);
  player_update();
}
}






