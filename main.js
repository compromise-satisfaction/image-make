enchant();

function Game_load(width,height){
  var core = new Core(width, height);
  core.fps = 30;
  core.onload = function(){
    var StartScene = function(){
       var scene = new Scene();

       var i = 0;
       var Image = [];
       var Datas = {
         x:(1600-1217)/2,
         y:0,
         width:1217,
         height:900,
         url:"デュエルフィールド.png"
       };

       Images();

       function Images(){
         Image[i] = new Sprite();
         Image[i]._element = document.createElement("img");
         Image[i]._element.src = Datas.url;
         Image[i].width = Datas.width;
         Image[i].height = Datas.height;
         Image[i].x = Datas.x;
         Image[i].y = Datas.y;
         scene.addChild(Image[i]);
         return;
       };

       return scene;
    };
    core.replaceScene(StartScene());
  }
  core.start();
};
