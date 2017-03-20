/**
 * Created by zyh on 17/3/20.
 */
//http://www.yeahbutisitflash.com/?p=6496
function WallSpritesPool(){
    this.createWindows();
}

WallSpritesPool.prototype.createWindows = function () {
    this.windows = [];

    this.addWindowSpirites(6,'window_01');
    this.addWindowSpirites(6,'window_02');

    this.shuffle(this.windows);
}


WallSpritesPool.prototype.addWindowSpirites = function (amount, frameId) {
    for(var i=0; i<amount; i++){
        var sprite = PIXI.Sprite.fromFrame(frameId);
        this.windows.push(sprite);
    }
};
WallSpritesPool.prototype.shuffle = function(array) {
    var len = array.length;
    var shuffles = len * 3;
    for (var i = 0; i < shuffles; i++)
    {
        var wallSlice = array.pop();
        var pos = Math.floor(Math.random() * (len-1));
        array.splice(pos, 0, wallSlice);
    }
};
