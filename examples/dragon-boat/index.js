/**
 * Created by zyh on 17/3/31.
 */
function Main() {
    var Container = PIXI.Container,
        autoDetectRenderer = PIXI.autoDetectRenderer;

    var canvas_element = document.getElementById('game-canvas');

    // scaleToWindow(canvas_element);

    this.stage = new AutoFitContainer(750, 1334, window.innerWidth, window.innerHeight);

    //游戏主舞台
    this.playStage = new Container();

    this.ticker = new PIXI.ticker.Ticker();

    this.renderer = autoDetectRenderer(
        Main.WIDTH,
        Main.HEIGHT,
        {
            view: canvas_element,
            transparent: true,
            autoResize: true,
            resolution: 1
        }
    );

    this.loadReadyAsset();
}

Main.HEIGHT = 600;  //游戏区高度
Main.WIDTH = window.innerWidth;  //游戏区高度


//加载ready动画
Main.prototype.loadReadyAsset = function () {
    var loader = PIXI.loader;
    loader.add('loading','image/loading.json');
    loader.once('complete',function () {
       //显示loading层
        var frames = [];
        for(var i=0; i<5; i++){
            frames.push(PIXI.Texture.fromFrame('loading_0000'+i+'.png'));
        }
        var loadingAnim = new PIXI.extras.AnimatedSprite(frames);

        //居中
        // loadingAnim.position.set(.5)
        loadingAnim.anchor.set(.5);
        loadingAnim.position.x = Main.WIDTH / 2 / this.stage.scale.x;
        loadingAnim.position.y = Main.HEIGHT/ 2 / this.stage.scale.y;

        loadingAnim.animationSpeed = .5;

        //帧动画开始
        loadingAnim.play();

        this.stage.addChild(loadingAnim);

        this.play();

        //继续加载主舞台资源
         this.loadAsset();

    }.bind(this));
    loader.load();
};

//加载主舞台的资源
Main.prototype.loadAsset = function () {
    var loader = PIXI.loader;

    //加载声音
    sounds.load([
        'music/bounce.mp3',
        'music/explosion.wav',
        'music/music.wav',
        'music/shoot.wav',
        'music/steam.ogg'
    ]);
    sounds.whenLoaded = function () {
        console.log('声音加载完成 ');
        var steam = sounds['music/steam.ogg'];
        steam.play();
    };



    loader.add('steam', './image/steam/steam.json');
    loader.add('close_eye_01', './image/zz/close_eye_01.json');
    loader.add('open_eye_01', './image/zz/open_eye_01.json');

    loader.once('complete',this.assetLoaded.bind(this));

    loader.load();
};

//主舞台资源加载完成后
Main.prototype.assetLoaded = function (loader, resources) {
    var steamFrames = [];

    //蒸汽
    for(var i=0; i<47; i++){
        var val = i<10 ? '0'+i : i;
        steamFrames.push(PIXI.Texture.fromFrame('fog_000' + val + '.png'));
    }

    var steamAnim = new PIXI.extras.AnimatedSprite(steamFrames);

    steamAnim.play();

    this.stage.addChild(steamAnim);

    //加载一个测试粽子
    var zzFrames = [];
    for(var i=3; i<16; i++){
        var val = i<10 ? '0'+i : i;
        zzFrames.push(PIXI.Texture.fromFrame('a_01_000' + val + '.png'))
    }
    var zzAnim = new PIXI.extras.AnimatedSprite(zzFrames);

    zzAnim.anchor.set(.5);
    zzAnim.position.x = Main.WIDTH / 2 / this.stage.scale.x;
    zzAnim.position.y = Main.HEIGHT/ 2 / this.stage.scale.y;

    zzAnim.play();
    this.stage.addChild(zzAnim);
    zzAnim.stop();

    //再加一个测试粽子
    var zz_open_eye_01_Frames = [];
    for(var i=54; i<63; i++){
        zz_open_eye_01_Frames.push(PIXI.Texture.fromFrame('b_01_001' + i + '.png'))
    }
    var zz_open_eye_01_anim = new PIXI.extras.AnimatedSprite(zz_open_eye_01_Frames);

    zz_open_eye_01_anim.anchor.set(.5);
    zz_open_eye_01_anim.position.x = Main.WIDTH / 2 / this.stage.scale.x;
    zz_open_eye_01_anim.position.y = Main.HEIGHT/ 2 / this.stage.scale.y;

    zz_open_eye_01_anim.play();
    zz_open_eye_01_anim.animationSpeed = .5;

    this.stage.addChild(zz_open_eye_01_anim);





    this.stage.removeChild(this.stage.children[0]);

    zz_open_eye_01_anim.stop();
};

Main.prototype.play = function () {
    this.ticker.add(function () {
        this.renderer.render(this.stage);
    }.bind(this));
    this.ticker.start();
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
