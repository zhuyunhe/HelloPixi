/**
 * Created by zyh on 17/3/28.
 */
function GameOverStage() {
    this.stage = new PIXI.Container;

    var messgae = new PIXI.Text(
        "The End!",
        {fontSize: "64px", fill: "white"}
    );

    this.stage.addChild(messgae);

}
