/**
 * Created by zyh on 17/3/24.
 */
function Runner(stage,spineData) {
    this.pixie = new PIXI.spine.Spine(spineData);
    this.init(stage);
}

Runner.prototype.init = function (stage) {
    var scale = 0.2;
    var pixie = this.pixie;

    this.pixie.x = 200;
    this.pixie.y = 200;

    this.pixie.scale.x = this.pixie.scale.y = scale;

    stage.addChild(this.pixie);

    this.pixie.stateData.setMix('running', 'jump', 0.2);
    this.pixie.stateData.setMix('jump', 'running', 0.4);

    this.pixie.state.setAnimation(0, 'running', true);


    stage.on('pointerdown', pointerdown);

    //点击屏幕时
    function pointerdown() {
        pixie.state.setAnimation(0, 'jump', false);
        pixie.state.addAnimation(0,'running', true, 0);
    }
};
