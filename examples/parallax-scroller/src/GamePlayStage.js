/**
 * Created by zyh on 17/3/28.
 */
function GamePlayStage(){
    this.stage = new PIXI.Container();

    this.scroller;

    this.runner;

    this.gapFlag = false;

    this.scrollSpeed = GamePlayStage.MIN_SCROLL_SPEED;



}

GamePlayStage.MIN_SCROLL_SPEED = 4.5;
GamePlayStage.MAX_SCROLL_SPEED = 15;
GamePlayStage.SCROLL_ACCELERATION = 0.005;

GamePlayStage.prototype.play = function () {
    this.scroller.moveViewportXBy(this.scrollSpeed);
    // this.scrollSpeed += Main.SCROLL_ACCELERATION;

    //碰撞检测
    if(this.hitTest(this.runner.pixie, this.scroller.front.hitSlice)){
        console.log('要撞了');
        this.gameOverStage.stage.visible = true;
    }

    if(this.scrollSpeed > Main.MAX_SCROLL_SPEED){
        this.scrollSpeed = Main.MAX_SCROLL_SPEED;
    }
};

GamePlayStage.prototype.hitTest = function (pixie, slice) {
    var hit;

    hit = false;

    var threshold = 30;

    //r2存在说明有墙体
    if(slice.sprite){

        if(this.gapFlag){
            this.gapFlag = false;
        }
        //更新高度
        pixie.state.addAnimation(0,'running', true, 0);
        pixie.y = slice.y+30;



        if ((pixie.y-threshold) > slice.y) {
            //There's definitely a collision happening
            hit = true;
        } else {
            //There's no collision on the y axis
            hit = false;
        }




    }else{  //如不存在说明是个gap
        if(!this.gapFlag){
            this.gapFlag = true;
            pixie.state.setAnimation(0, 'jump', false);
        }
    }

    return hit;

};
