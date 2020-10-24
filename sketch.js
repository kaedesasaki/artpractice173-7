var anim_kiki, anim_lala;

function preload(){
  // アニメーションを読み込む
  anim_kiki = loadAnimation("assets/kiki1.png","assets/kiki4.png");
  anim_lala = loadAnimation("assets/lala1.png","assets/lala4.png");

}
	
function setup(){
  createCanvas(1000, 1000);
  var sprite = createSprite(300, 300); //スプライトの作成
  sprite.addAnimation("kiki", anim_kiki); //スプライトにアニメーションを加える
  sprite = createSprite(700, 600); //スプライトの作成
  sprite.addAnimation("lala", anim_lala); //スプライトにアニメーションを加える
}

function draw(){
  background(158, 231, 250);
  drawSprites();

}
