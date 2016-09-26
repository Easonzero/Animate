/**
 * Created by eason on 8/2/16.
 */
angular.module('WalleMap').factory('AnimateMap',function(ConfigProvider){
    
    var AnimateMap = {
        'animate1':[function(element,d){
            if(element.x < 0) {
                element.x += element.speed*d/180;
                if(Math.abs(element.x) < element.speed) element.x = 0;
            }
            if(element.x > 0) {
                element.x -= element.speed*d/180;
                if(Math.abs(element.x) < element.speed) element.x = 0;
            }
            if(element.y < 0) {
                element.y += element.speed*d/180;
                if(Math.abs(element.y) < element.speed) element.y = 0;
            }
            if(element.y > 0) {
                element.y -= element.speed*d/180;
                if(Math.abs(element.y) < element.speed) element.y = 0;
            }

            element.width = (ConfigProvider.ITEM_LENGTH-1)*d/250;
            element.height = (ConfigProvider.ITEM_LENGTH-1)*d/250;
        },function(stage,d){
            if(stage.x < 1) stage.x = 0;
            else stage.x = ConfigProvider.RENDER_LENGTH/2 * (1-d/250);
            if(stage.y < 1) stage.y = 0;
            else stage.y = ConfigProvider.RENDER_WIDTH/2 * (1-d/250);
            return false;
        }],
        'animate2':[function(element,d){
            var point = element.path.getPoint(d/250);
            element.x = point.x;
            element.y = point.y;
        },function(stage,d){
            if(d == 250){
                return true;
            }
            return false;
        }]
    };
    
    return AnimateMap;
});
