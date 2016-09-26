/**
 * Created by eason on 7/30/16.
 */
angular.module('WalleMap').service('AnimateService',function(AnimateMap,AnimateInitMap,TweenQueue){
    var self = this,
        stage,
        d = 20,
        isFinish = false;
    
    this.animate = function(isStart){
        if(isStart&&!isFinish){
            if(d <= 23){
                stage.visible = false;
            }else{
                stage.visible = true;
            }

            if (d < 250)
            {
                d++;
            }
            
            var count = 0;
            
            for(var index in stage.getChildAt(0).children){
                var element = stage.getChildAt(0).getChildAt(index);
                if(Math.floor(element.x) == 0 && Math.floor(element.y) == 0) count++;
                AnimateMap[self.animateName][0](element,d);
            }

            if(count == stage.getChildAt(0).children.length) {
                isFinish = true;
                self.onFinished();
            }
                
            if(AnimateMap[self.animateName][1](stage,d)){
                isFinish = true;
                self.onFinished(isFinish);
            }
            
        }else if(!TweenQueue.isEmpty()){
            TweenQueue.animate();
        }
    };

    this.setAnimate = function(animateName,_stage){
        self.animateName = animateName;

        stage = _stage;

        AnimateInitMap[self.animateName][0](stage);
    };
    
    this.initElement = function(element,x,y){
        AnimateInitMap[self.animateName][1](element,x,y);
    };
    
    this.tween = function(element,id,data) {
        TweenQueue.push(element, id, data);
    };
    
    this.onFinished = function(){
        
    };
});

