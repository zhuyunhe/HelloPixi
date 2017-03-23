/**
 * Created by zyh on 17/3/21.
 */
function Walls() {
    PIXI.Container.call(this);

    this.pool = new WallSpritesPool();

    this.createLookupTables();

    this.slices = [];


    this.viewportX = 0;

    this.viewportSliceX = 0;

    this.removedSlicesCount = 0;    //从slices数组中移除了多少个元素
}

Walls.prototype = Object.create(PIXI.Container.prototype);

//视窗宽度
Walls.VIEWPORT_WIDTH = 512;
//视窗内包含slice的个数
Walls.VIEWPORT_NUM_SLICES = Math.ceil(Walls.VIEWPORT_WIDTH/WallSlice.WIDTH) + 1;

Walls.prototype.setViewportX = function (viewportX) {
    this.viewportX = this.checkViewportXBounds(viewportX);


    var prevViewportSliceX = this.viewportSliceX;
    this.viewportSliceX = Math.floor(this.viewportX/WallSlice.WIDTH);


    this.removeOldSlices(prevViewportSliceX);

    this.addNewSlices();

};



Walls.prototype.addSlice = function (sliceType, y) {
    var slice = new WallSlice(sliceType, y);
    this.slices.push(slice);
};

Walls.prototype.createLookupTables = function () {

    this.borrowWallSpriteLookup = [];
    this.borrowWallSpriteLookup[SliceType.FRONT] = this.pool.borrowFrontEdge;
    this.borrowWallSpriteLookup[SliceType.BACK] = this.pool.borrowBackEdge;
    this.borrowWallSpriteLookup[SliceType.STEP] = this.pool.borrowStep;
    this.borrowWallSpriteLookup[SliceType.DECORATION] = this.pool.borrowDecoration;
    this.borrowWallSpriteLookup[SliceType.WINDOW] = this.pool.borrowWindow;

    this.returnWallSpriteLookup = [];
    this.returnWallSpriteLookup[SliceType.FRONT] = this.pool.returnFrontEdge;
    this.returnWallSpriteLookup[SliceType.BACK] = this.pool.returnBackEdge;
    this.returnWallSpriteLookup[SliceType.STEP] = this.pool.returnStep;
    this.returnWallSpriteLookup[SliceType.DECORATION] = this.pool.returnDecoration;
    this.returnWallSpriteLookup[SliceType.WINDOW] = this.pool.returnWindow;

};

Walls.prototype.borrowWallSprite = function (sliceType) {
    return this.borrowWallSpriteLookup[sliceType].call(this.pool);
};

Walls.prototype.returnWallSprite = function(sliceType, sliceSprite) {
    return this.returnWallSpriteLookup[sliceType].call(this.pool, sliceSprite);
};


Walls.prototype.checkViewportXBounds = function(viewportX) {
    var maxViewportX = (this.slices.length + this.removedSlicesCount - Walls.VIEWPORT_NUM_SLICES) * WallSlice.WIDTH;
    if (viewportX < 0)
    {
        viewportX = 0;
    }
    else if (viewportX > maxViewportX)
    {
        viewportX = maxViewportX;
    }

    return viewportX;
};

Walls.prototype.addNewSlices = function () {
    var firstX = -(this.viewportX % WallSlice.WIDTH);
    for (var i = this.viewportSliceX, sliceIndex=0;
         i < this.viewportSliceX + Walls.VIEWPORT_NUM_SLICES;
         i++, sliceIndex++)
    {

        var slice = this.slices[i-this.removedSlicesCount];
        //slice过少时要加上一些
        if(slice.sprite == null && slice.type != SliceType.GAP){

            slice.sprite = this.borrowWallSprite(slice.type);

            slice.sprite.position.x = firstX + (sliceIndex * WallSlice.WIDTH);

            slice.sprite.position.y = slice.y;

            this.addChild(slice.sprite);

        } else if(slice.sprite != null){
            slice.sprite.position.x = firstX + (sliceIndex * WallSlice.WIDTH);
        }



    }
};

//回收滚动出视窗的slice
Walls.prototype.removeOldSlices = function (prevViewportSliceX) {
    //有多少个slice滚动出了viewport
    var numOldSlices = this.viewportSliceX - prevViewportSliceX;

    if (numOldSlices > Walls.VIEWPORT_NUM_SLICES) {
        numOldSlices = Walls.VIEWPORT_NUM_SLICES;
    }


    for (var i = prevViewportSliceX; i < prevViewportSliceX + numOldSlices; i++) {
        var slice = this.slices[i-this.removedSlicesCount];

        if (slice.sprite != null) {
            this.returnWallSprite(slice.type, slice.sprite);
            this.removeChild(slice.sprite);
            slice.sprite = null;
        }


        //测试
        this.removedSlicesCount++;
        this.slices.shift();
    }
};
