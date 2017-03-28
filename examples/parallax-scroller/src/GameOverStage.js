/**
 * Created by zyh on 17/3/28.
 */
function GameOverStage() {
    this.stage = new PIXI.Container;

    var messgae = new PIXI.Text(
        "The End!",
        {font: "64px Future", fill: "white"}
    );

    this.stage.addChild(messgae);

}
