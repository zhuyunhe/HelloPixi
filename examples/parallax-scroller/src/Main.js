/**
 * Created by zyh on 17/3/17.
 */
function Main(){
    var Container = PIXI.Container,
        autoDetectRenderer = PIXI.autoDetectRenderer
        ;
    var canvas_element = document.getElementById('game-canvas');

    this.stage = new Container();

    this.ticker = new PIXI.ticker.Ticker();

    //游戏准备舞台
    this.gameReadyStage = new GameReadyStage();

    //游戏主舞台
    this.gamePlayStage = new GamePlayStage();
    this.gamePlayStage.stage.visible = false;
    this.message;
    this.score = 0;


    //游戏结束舞台
    this.gameOverStage = new GameOverStage();
    this.gameOverStage.stage.visible = false;

    this.stage.addChild(this.gameReadyStage.stage);
    this.stage.addChild(this.gamePlayStage.stage);
    this.stage.addChild(this.gameOverStage.stage);

    scaleToWindow(canvas_element);

    this.renderer = autoDetectRenderer(
                            canvas_element.width,
                            canvas_element.height,
                            {
                                view: canvas_element
                            }
    );


    this.stage.interactive = true;

    this.loadSpriteSheet();
}

/*Main.prototype.play = function () {
    this.gamePlayStage.play();
    this.renderer.render(this.stage);
    requestAnimationFrame(this.play.bind(this));
};*/

Main.prototype.play = function () {
    this.ticker.add(function () {
        this.gamePlayStage.play();
        this.renderer.render(this.stage);
    }.bind(this));
    this.ticker.start();
}

Main.prototype.loadSpriteSheet = function () {
    var loader = PIXI.loader;
    loader.add('wall', './resources/wall.json');
    loader.add('bg-mid', './resources/bg-mid.png');
    loader.add('bg-far', './resources/bg-far.png');
    loader.add('pixie', './resources/Pixie.json');
    loader.once('complete', this.spriteSheetLoaded.bind(this));
    loader.load();

    loader.on("progress",this.loadProgressHandler.bind(this));

};

//显示资源加载进度
Main.prototype.loadProgressHandler = function (loader, resource) {
    this.renderer.render(this.stage);
    this.gameReadyStage.message.text = loader.progress+"%";
}

//资源加载完后处理
Main.prototype.spriteSheetLoaded = function (loader, resources) {
    //隐藏预备场景/显示游戏场景
    this.gameReadyStage.stage.visible = false;
    this.gamePlayStage.stage.visible = true;

    this.gamePlayStage.init(resources);

    //开始游戏主循环
    this.play();
};


//按比例缩放canvas
function scaleToWindow(canvas, backgroundColor) {

    backgroundColor = backgroundColor || "#2C3539";
    var scaleX, scaleY, scale, center;

    //1. Scale the canvas to the correct size
    //Figure out the scale amount on each axis
    scaleX = window.innerWidth / canvas.offsetWidth;
    scaleY = window.innerHeight / canvas.offsetHeight;

    //Scale the canvas based on whichever value is less: `scaleX` or `scaleY`
    scale = Math.min(scaleX, scaleY);
    canvas.style.transformOrigin = "0 0";
    canvas.style.transform = "scale(" + scale + ")";
    console.log(scaleX)

    //2. Center the canvas.
    //Decide whether to center the canvas vertically or horizontally.
    //Wide canvases should be centered vertically, and
    //square or tall canvases should be centered horizontally
    if (canvas.offsetwidth > canvas.offsetHeight) {
        if (canvas.offsetWidth * scale < window.innerWidth) {
            center = "horizontally";
        } else {
            center = "vertically";
        }
    } else {
        if (canvas.offsetHeight * scale < window.innerHeight) {
            center = "vertically";
        } else {
            center = "horizontally";
        }
    }

    //Center horizontally (for square or tall canvases)
    var margin;
    if (center === "horizontally") {
        margin = (window.innerWidth - canvas.offsetWidth * scale) / 2;
        canvas.style.marginTop = 0;
        canvas.style.marginBottom = 0;
        canvas.style.marginLeft = margin + "px";
        canvas.style.marginRight = margin + "px";
    }

    //Center vertically (for wide canvases)
    if (center === "vertically") {
        margin = (window.innerHeight - canvas.offsetHeight * scale) / 2;
        canvas.style.marginTop = margin + "px";
        canvas.style.marginBottom = margin + "px";
        canvas.style.marginLeft = 0;
        canvas.style.marginRight = 0;
    }

    //3. Remove any padding from the canvas  and body and set the canvas
    //display style to "block"
    canvas.style.paddingLeft = 0;
    canvas.style.paddingRight = 0;
    canvas.style.paddingTop = 0;
    canvas.style.paddingBottom = 0;
    canvas.style.display = "block";

    //4. Set the color of the HTML body background
    document.body.style.backgroundColor = backgroundColor;

    //Fix some quirkiness in scaling for Safari
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf("safari") != -1) {
        if (ua.indexOf("chrome") > -1) {
            // Chrome
        } else {
            // Safari
            //canvas.style.maxHeight = "100%";
            //canvas.style.minHeight = "100%";
        }
    }

    //5. Return the `scale` value. This is important, because you'll nee this value
    //for correct hit testing between the pointer and sprites
    return scale;
}
