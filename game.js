// the javascript simple game free
/*Author Caio Cutrim this is a pac-man game :)*/
// the global variables settings
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.width=800;
canvas.height=600;

//the image of pacman


var pacmanTiles = {//construction of pacman-tiles
	loaded:false,
	image: new Image(),
	tileWidth:64,
	tileHeight:64
}

pacmanTiles.image.onload = function(){
	pacmanTiles.loaded = true;
}
pacmanTiles.image.src = 'pacman.png';

// var objetc sprite

var mySprite = {
	x:200,
	y:200,
	width:64,
	height:64,
	speed:200,
	state:0

}; /*this is the object construction spriter end*/

 	// the itens
 	//count
	var  itemCount = 0;
 	var item = {
 		x: Math.random() * canvas.width,
 		y: Math.random() * canvas.height,
 		width:20,
 		height:20,
 		color:'#FFD10C'
 	}


// functions actions...

function update(mod) {
	if(37 in keysDown) {//left
	    mySprite.state = 2;
		mySprite.x -= mySprite.speed * mod;
	}
	if(38 in keysDown) {//up
	    mySprite.state = 3;
		mySprite.y -= mySprite.speed * mod;
	}
	if(39 in keysDown) {//right
	    mySprite.state = 0;
		mySprite.x += mySprite.speed * mod;
	}
	if(40 in keysDown) {//down
	    mySprite.state = 1;
		mySprite.y += mySprite.speed * mod;
	}
	//colision sprites
 	if (
			mySprite.x < item.x + item.width &&
			mySprite.x + mySprite.width > item.x &&
			mySprite.y < item.y + item.height &&
			mySprite.y + mySprite.height > item.y
		)
 	{
			item.x = Math.random() * canvas.width;
			item.y = Math.random() * canvas.height;
			itemCount++;
	}

};
function render() {
	ctx.fillStyle ="#000000";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	if(pacmanTiles.loaded){
		ctx.drawImage(
			pacmanTiles.image,
			mySprite.state * pacmanTiles.tileWidth,
			0,
			mySprite.width,
			mySprite.height,
			Math.round(mySprite.x),
			Math.round(mySprite.y),
			mySprite.width,
			mySprite.height
		);
	};

	ctx.fillStyle = item.color;
    ctx.fillRect(item.x, item.y, item.width, item.height);

    //to count
    ctx.font = '25px arial';
    ctx.fillStyle= '#FFFFFF';
    ctx.textBaseline= 'top';
    ctx.fillText(itemCount, 10, 10);

};//end of render function
function run() {
	update((Date.now() - time)/1000);
	render();
	time = Date.now();
};
var time = Date.now();
setInterval(run,10);


/*the key events*/
 var keysDown = {
 }
 	window.addEventListener('keydown', function(e){
 		keysDown[e.keyCode] = true;
 	});
 	window.addEventListener('keyup', function(e){
 		delete keysDown[e.keyCode];
 	});




