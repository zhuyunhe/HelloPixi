/**
 * Created by zyh on 17/3/28.
 */
function GameReadyStage() {

    this.stage = new PIXI.Container();

    var messgae = new PIXI.Text(
        "准备开始",
        {font: "100px Future", fill: "white"}
    );

    this.stage.addChild(messgae);
}
