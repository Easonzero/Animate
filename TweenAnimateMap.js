/**
 * Created by eason on 8/13/16.
 */
angular.module('WalleMap').service('TweenAnimateMap',function(){
    var map = {
        'linear':function(t,b,c,d){return c*t/d + b; },
        'quad/easeIn':function(t,b,c,d){return c*(t/=d)*t + b;},
        'quad/easeOut':function(t,b,c,d){return -c *(t/=d)*(t-2) + b;},
        'quad/easeInOut':function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        'cubic/easeIn': function(t,b,c,d){return c*(t/=d)*t*t + b;},
        'cubic/easeOut': function(t,b,c,d){return c*((t=t/d-1)*t*t + 1) + b;},
        'cubic/easeInOut': function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },
        'quart/easeIn': function(t,b,c,d){return c*(t/=d)*t*t*t + b;},
        'quart/easeOut': function(t,b,c,d){return -c * ((t=t/d-1)*t*t*t - 1) + b;},
        'quart/easeInOut': function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        'quint/easeIn': function(t,b,c,d){return c*(t/=d)*t*t*t*t + b;},
        'quint/easeOut': function(t,b,c,d){return c*((t=t/d-1)*t*t*t*t + 1) + b;},
        'quint/easeInOut': function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },
        'sine/easeIn': function(t,b,c,d){return -c * Math.cos(t/d * (Math.PI/2)) + c + b;},
        'sine/easeOut': function(t,b,c,d){return c * Math.sin(t/d * (Math.PI/2)) + b;},
        'sine/easeInOut': function(t,b,c,d){return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;},
        'back/easeIn': function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        'back/easeOut': function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        'back/easeInOut': function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        }
    };
    
    this.get = function(animate,time,begin,change,duration){
        return map[animate](time,begin,change,duration);
    }
});
