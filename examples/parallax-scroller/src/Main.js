/**
 * Created by zyh on 17/3/17.
 */
function Main(){
    var Container = PIXI.Container,
        autoDetectRenderer = PIXI.autoDetectRenderer
        ;
    var canvas_element = document.getElementById('game-canvas');

    this.stage = new Container();

    //游戏准备舞台
    this.gameReadyStage = new GameReadyStage();

    //游戏主舞台
    this.gamePlayStage = new GamePlayStage();
    this.gamePlayStage.stage.visible = false;


    //游戏结束舞台
    this.gameOverStage = new GameOverStage();
    this.gameOverStage.stage.visible = false;

    this.stage.addChild(this.gameReadyStage.stage);
    this.stage.addChild(this.gamePlayStage.stage);
    this.stage.addChild(this.gameOverStage.stage);


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

Main.prototype.play = function () {
    this.gamePlayStage.play();
    this.renderer.render(this.stage);
    requestAnimationFrame(this.play.bind(this));
};

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

//资源加载进度
Main.prototype.loadProgressHandler = function (loader, resource) {
    this.renderer.render(this.stage);
    console.log('progress:%s%',loader.progress);
}

Main.prototype.spriteSheetLoaded = function (loader, resources) {
    /*this.gameReadyStage.stage.visible = false;
    this.gamePlayStage.stage.visible = true;*/
    this.gamePlayStage.scroller = new Scroller(this.stage);
    this.gamePlayStage.runner = new Runner(this.stage,resources.pixie.spineData);
    this.play();
};
