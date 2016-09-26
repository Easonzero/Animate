/**
 * Created by eason on 8/2/16.
 */
angular.module('WalleMap').service('AnimateUtils',function(){
    this.Bezier = function(cp){
        var ax, bx, cx,ay, by, cy;

        cx = 3.0 * (cp[1].x - cp[0].x);
        bx = 3.0 * (cp[2].x - cp[1].x) - cx;
        ax = cp[3].x - cp[0].x - cx - bx;

        cy = 3.0 * (cp[1].y - cp[0].y);
        by = 3.0 * (cp[2].y - cp[1].y) - cy;
        ay = cp[3].y - cp[0].y - cy - by;

        var bezier = {};

        bezier.getPoint = function(t){
            var tSquared, tCubed,result = {x:0,y:0};

            tSquared = t * t;
            tCubed = tSquared * t;

            result.x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x;
            result.y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y;

            return result;
        };

        return bezier;
    } 
});
