/**
 * Created by eason on 8/13/16.
 */
angular.module('WalleMap').service('TweenQueue',function(TweenAnimateMap){
    var queue = [];
    var defaultDuration = 100;

    function tween(element,d,aim){
        element.data.animateX = TweenAnimateMap.get(
            element.data.type,
            element.data.time,
            element.data.originX,
            aim.x-element.data.originX,
            d
        );

        element.data.animateY = TweenAnimateMap.get(
            element.data.type,
            element.data.time,
            element.data.originY,
            aim.y-element.data.originY,
            d
        );

        element.data.animateRotation = TweenAnimateMap.get(
            element.data.type,
            element.data.time,
            element.data.originRotation,
            aim.rotation-element.data.originRotation,
            d
        );
        element.data.time++;

        element.data.draw();
    }

    this.isEmpty = function(){
        return queue.length===0;
    };
    
    this.push = function(element,id,data){
        if(element.x==undefined||element.y==undefined||element.rotation==undefined) return;
        if(data.x==undefined||data.y==undefined||data.rotation==undefined||data.type==undefined||data.draw==undefined) return;

        element.id = id;
        element.data = data;
        element.data.originX = element.x;
        element.data.originY = element.y;
        element.data.originRortation = element.rotation;
        element.data.time = 0;
        if(element.data.ctrl != undefined)
            element.data.ctrl.isReach = false;

        var isExist = false;
        for(var i in queue){
            if(queue[i].id == element.id) {
                queue[i].x = queue[i].data.x;
                queue[i].y = queue[i].data.y;
                queue[i].rotation = queue[i].data.rotation;
                queue[i].data = element.data;
                queue[i].data.time /= 2;
                isExist = true;
                return;
            }
        }

        if(!isExist){
            queue.unshift(element);
        }
    };

    this.animate = function(callback){
        for(var i in queue){
            var element = queue.pop();
            if(element.data.ctrl != undefined&&!element.data.ctrl.isReach){
                var d = (element.data.ctrl.duration?element.data.ctrl.duration:defaultDuration/2)-1;

                if(Math.abs(d-element.data.time)<0.001){
                    element.data.animateX = element.data.ctrl.x;
                    element.data.animateY = element.data.ctrl.y;
                    element.data.animateRotation = element.data.ctrl.rotation;
                    element.data.originX = element.x;
                    element.data.originY = element.y;
                    element.data.originRotation = element.rotation;
                    element.data.ctrl.isReach = true;
                    element.data.draw();
                    break;
                }

                tween(element,d,element.data.ctrl);
            }else{
                var d = (element.data.duration?element.data.duration:defaultDuration)-1;

                if(Math.abs(d-element.data.time)<0.001){
                    element.x = element.data.x;
                    element.y = element.data.y;
                    element.rotation = element.data.rotation;
                    element.data.animateX = element.data.x;
                    element.data.animateY = element.data.y;
                    element.data.animateRotation = element.data.rotation;
                    element.data.draw();
                    delete element.data;
                    break;
                }
                queue.unshift(element);
                tween(element,d,element.data);
            }
        }
        if(callback) callback();
    };
});
