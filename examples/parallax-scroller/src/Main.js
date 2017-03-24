/**
 * Created by zyh on 17/3/17.
 */
function Main(){
    var Container = PIXI.Container,
        autoDetectRenderer = PIXI.autoDetectRenderer
        ;
    var canvas_element = document.getElementById('game-canvas');

    this.stage = new Container();
    this.renderer = autoDetectRenderer(
                            canvas_element.width,
                            canvas_element.height,
                            {
                                view: canvas_element
                            }
    );

    this.stage.interactive = true;


    this.scrollSpeed = Main.MIN_SCROLL_SPEED;

    this.loadSpriteSheet();
}

Main.MIN_SCROLL_SPEED = 5;
Main.MAX_SCROLL_SPEED = 15;
Main.SCROLL_ACCELERATION = 0.005;

Main.prototype.update = function() {
    this.scroller.moveViewportXBy(this.scrollSpeed);
    this.scrollSpeed += Main.SCROLL_ACCELERATION;
    if(this.scroller.front.firstSliceHeight){
        // console.log(this.scroller.front.firstSliceHeight);
        this.runner.pixie.y = this.scroller.front.firstSliceHeight + 20;
    }else{
        this.runner.pixie.state.setAnimation(0, 'jump', false);
        this.runner.pixie.state.addAnimation(0,'running', true, 0);
    }


    if(this.scrollSpeed > Main.MAX_SCROLL_SPEED){
        this.scrollSpeed = Main.MAX_SCROLL_SPEED;
    }

    this.renderer.render(this.stage);
    requestAnimationFrame(this.update.bind(this));
};

Main.prototype.loadSpriteSheet = function () {
    var loader = PIXI.loader;
    loader.add('wall', './resources/wall.json');
    loader.add('bg-mid', './resources/bg-mid.png');
    loader.add('bg-far', './resources/bg-far.png');
    loader.add('pixie', './resources/Pixie.json');
    loader.once('complete', this.spriteSheetLoaded.bind(this));
    loader.load();
};

Main.prototype.spriteSheetLoaded = function (loader, resources) {

    this.scroller = new Scroller(this.stage);

    this.runner = new Runner(this.stage,resources.pixie.spineData);
    this.update();
};

