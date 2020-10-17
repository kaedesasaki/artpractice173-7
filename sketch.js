const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const BG_COLOR = [122, 240, 107];
let kiki;
let kikiAnim;

function preload() {
  const kikiSpritesheet = loadSpriteSheet("img/kiki.png", 64, 64, 6);
  kikiAnim = loadAnimation(kikiSpritesheet);
  kiki = createSprite(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 64, 64);
  kiki.moveSpeed = 5;
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  kiki.addAnimation("move", kikiAnim);
  kiki.addImage("still", loadImage("img/kiki1.png"));
  kiki.setDefaultCollider();
}

function update(object) {
  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("move");
  } else {
    object.changeImage("still");
  }
  kiki.limitSpeed(kiki.moveSpeed);
  drawSprite(object);
}

function draw() {
  background(BG_COLOR);
  update(kiki);
}