/**
 * Created by zyh on 17/3/28.
 */
function GameReadyStage() {

    this.stage = new PIXI.Container();

    this.message = new PIXI.Text(
        "准备开始",
        {fontSize: "60px", fill: "white"}
    );

    this.message.x = 60;
    console.log('height:%s,width:%s',this.stage.height,this.stage.width);
    // message.y = this.stage.height / 2 - 30;

    this.stage.addChild(this.message);
}
