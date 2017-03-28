/**
 * Created by zyh on 17/3/22.
 */
function MapBuilder(walls){
    this.walls = walls;
    this.createMap();
}

MapBuilder.WALL_HEIGHTS = [
    256,    //lowest slice
    224,
    192,
    160,
    128     //Highest slice
];

MapBuilder.prototype.createMap = function () {


    this.createWallSpan(4,22);
    this.createGap(1);
    this.createWallSpan(2,20);
    this.createGap(1);
};

MapBuilder.prototype.createGap = function (spanLength) {
    for(var i=0; i<spanLength; i++){
        this.walls.addSlice(SliceType.GAP);
    }
};

MapBuilder.prototype.createWallSpan = function (
    heightIndex, spanLength, noFront, noBack
) {
    noFront = noFront || false;
    noBack = noBack || false;
    if(noFront==false && spanLength>0){
        this.addWallFront(heightIndex);
        spanLength--;
    }

    var midSpanLength = spanLength - (noBack ? 0 : 1);
    if(midSpanLength > 0){
        this.addWallMid(heightIndex, midSpanLength);
        spanLength -= midSpanLength;
    }

    if(noBack == false && spanLength > 0){
        this.addWallBack(heightIndex)
    }
};

MapBuilder.prototype.createSteppedWallSpan = function (
    heightIndex, spanALength, spanBLength
) {
      if(heightIndex < 2){
          heightIndex = 2;
      }

    this.createWallSpan(heightIndex, spanALength, false, true);
    this.addWallStep(heightIndex-2);
    this.createWallSpan(heightIndex - 2, spanBLength-1, true, false);
};

MapBuilder.prototype.addWallFront = function (heightIndex) {
    var y = MapBuilder.WALL_HEIGHTS[heightIndex];

    this.walls.addSlice(SliceType.FRONT, y);
};

MapBuilder.prototype.addWallBack = function (heightIndex) {
    var y = MapBuilder.WALL_HEIGHTS[heightIndex];

    this.walls.addSlice(SliceType.BACK, y);
};

MapBuilder.prototype.addWallMid = function (heightIndex, spanLength) {
    var y = MapBuilder.WALL_HEIGHTS[heightIndex];
    for(var i=0; i<spanLength; i++){
        if(i%2 == 0){
            this.walls.addSlice(SliceType.WINDOW, y);
        } else{
            this.walls.addSlice(SliceType.DECORATION, y);
        }
    }
};

MapBuilder.prototype.addWallStep = function(heightIndex) {
    var y = MapBuilder.WALL_HEIGHTS[heightIndex];
    this.walls.addSlice(SliceType.STEP, y);
};