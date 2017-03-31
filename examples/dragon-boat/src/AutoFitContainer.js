/**
 * Created by zyh on 17/3/31.
 */
function AutoFitContainer(width,height,windowWidth, widthHeight){
    PIXI.Container.call(this);
    this.originalWidth = width;
    this.originalHeight = height;

    console.log('width:%s,height:%s,winWidth:%s,winHeight:%s',width,height,windowWidth,widthHeight)

    this.resize(windowWidth, widthHeight);
}

AutoFitContainer.prototype = Object.create(PIXI.Container.prototype);

AutoFitContainer.prototype.resize = function (windowWidth, windowHeight) {
    var n = this.originalWidth / this.originalHeight;   //canvas宽高比
    var i = windowWidth / windowHeight;   //屏幕的宽高比

    //如果canvas相对于屏幕来说是扁平的,那以宽度比例为准
    var scale = n>=i ? windowWidth/this.originalWidth : windowHeight/this.originalHeight;

    console.log('缩放比例:%s',scale);
    this.scale.set(scale);
};


function a(e, o, t) {
    PIXI.AutoFitContainer = function(e, o, t, n) {
        PIXI.Container.call(this),
            this.originalWidth = e,
            this.originalHeight = o,
            this.resize(t, n)
    },
        PIXI.AutoFitContainer.prototype = Object.create(PIXI.Container.prototype),
        PIXI.AutoFitContainer.constructor = PIXI.AutoFitContainer,
        PIXI.AutoFitContainer.prototype.resize = function(e, o) {
        var t, n = this.originalWidth / this.originalHeight,
            i = e / o;
        t = n >= i ? e / this.originalWidth : o / this.originalHeight,
            t = e / this.originalWidth,
            this.scale.set(t, t),
            this.position.set(.5 * (e - this.originalWidth * t),
                .5 * (o - this.originalHeight * t))
    }
}

//new PIXI.AutoFitContainer(ye, xe, window.innerWidth, window.innerHeight)
