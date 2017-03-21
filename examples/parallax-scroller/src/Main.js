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

    this.loadSpriteSheet();
}

Main.SCROLL_SPEED = 5;

Main.prototype.update = function() {
    this.scroller.moveViewportXBy(Main.SCROLL_SPEED);
    this.renderer.render(this.stage);
    requestAnimationFrame(this.update.bind(this));
};

Main.prototype.loadSpriteSheet = function () {
    var loader = PIXI.loader;
    loader.add('wall', './resources/wall.json');
    loader.add('bg-mid', './resources/bg-mid.png');
    loader.add('bg-far', './resources/bg-far.png');
    loader.once('complete', this.spriteSheetLoaded.bind(this));
    loader.load();
};

Main.prototype.spriteSheetLoaded = function () {
    this.scroller = new Scroller(this.stage);

    requestAnimationFrame(this.update.bind(this));

};

