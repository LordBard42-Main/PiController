import { DrawQueue } from './drawQueue.js';
import { Item } from './item.js';

const drawQueue = new DrawQueue();
const item1 = new Item("#33453F", 10, 200, 50, 50);
const item2 = new Item("#AE333F", 100, 200, 100, 200);

// Enqueue the items
drawQueue.enqueue(item1);
drawQueue.enqueue(item2);

var canvas = document.createElement("canvas");
let speed = 5; // movement speed

function createCanvas() {
  canvas.width = 720;
  canvas.height = 480;
  var div = document.getElementById("window-outer")
  div.appendChild(canvas);

}

function Draw() {
  // Update game state

  // Draw on the canvas
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#33333F";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  drawQueue.items.forEach(element => {
    element.draw(ctx);
  });

  requestAnimationFrame(Draw);

}

function  Update(){
  
}

(function() {
  createCanvas();

  document.addEventListener('keydown', event => {
    console.log(event);
    switch(event.keyCode) {
      case 87: // W key
        drawQueue.items[0].y -= speed;
        break;
      case 65: // A key
        item1.x -= speed;
        break;
        case 83: // S key
      item1.y += speed;
        break;
      case 68: // D key
        item1.x += speed;
        break;
    }
  });
})();

(function() {
  requestAnimationFrame(Draw);
})();
