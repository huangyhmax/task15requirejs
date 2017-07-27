define(['jquery'], function($){
    function Wrapperhover($target){
        this.$target=$target;
        this.bindEvent();
    }
    Wrapperhover.prototype.bindEvent=function(){
        this.$target.on('mouseenter','li',function(){
            console.log(1)
            $(_this).addClass('change').siblings().removeClass('change')
        }).on('mouseleave','li',function(){
            $(_this).removeClass('change')
        })
    }
    return Wrapperhover;
});

$('.portfolio-wrapper')