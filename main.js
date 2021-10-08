enchant();

var Image_urls = [];

function Game_load(width,height){
  var core = new Core(width, height);
  core.fps = 30;
  core.onload = function(){
    var StartScene = function(){
       var scene = new Scene();

       var i = 0;
       var Image = [];

       for(var i = 0; i < Image_urls.length; i++) Images();

       function Images(){
         Image[i] = new Sprite();
         Image[i]._element = document.createElement("img");
         Image[i]._element.src = Image_urls[i][0];
         Image[i].width = Image_urls[i][1].w;
         Image[i].height = Image_urls[i][1].h;
         if(Image_urls[i][1].x) Image[i].x = Image_urls[i][1].x;
         if(Image_urls[i][1].y) Image[i].y = Image_urls[i][1].y;
         scene.addChild(Image[i]);
         return;
       };

       return scene;
    };

    var URL = "https://script.google.com/macros/s/AKfycbw2Dx5NjCfQRv1TlpH0kSnvzvZrrLXoWI55JSpuda8XYxwEwbMd/exec";
    var Body = {};
    var Options = {
      method: "POST",
      body:JSON.stringify(Body)
    };
    fetch(URL,Options).then(res => res.json()).then(result => {
      for(var i = 0; i < result.length; i++){
        Image_urls[i] = [result[i].url,JSON.parse(result[i].data)];
      };
      core.replaceScene(StartScene());
      return;
    },);
  }
  core.start();
};
