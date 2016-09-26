/**
 * Created by eason on 8/2/16.
 */
angular.module('WalleMap').factory('AnimateInitMap',function(ConfigProvider,AnimateUtils){
    var AnimateInitMap = {
        'animate1':[function(stage) {
            stage.x = ConfigProvider.RENDER_LENGTH/2;
            stage.y = ConfigProvider.RENDER_WIDTH/2;
        },function(element,x,y){
            element.x = Math.round((28-x)*20-Math.random()*60);
            element.y = Math.round((y-13)*20-Math.random()*60);
            element.speed = Math.round(5-Math.random()*3);
        }],
        'animate2':[function(stage) {
        },function(element,x,y){
            element.x = Math.round((28-x)*20-Math.random()*60);
            element.y = Math.round((y-13)*20-Math.random()*60);
            element.path = AnimateUtils.Bezier([
                {x:element.x,y:element.y},
                {x:element.x/4,y:element.y*9/7},
                {x:element.x*3/4,y:element.y*9/7},
                {x:0,y:0}
            ]);
        }]
    };
    
    return AnimateInitMap;
});
