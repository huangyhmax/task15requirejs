define(['jquery'], function($){
    function wrapperhover(){
        this.bindEvent();
    }
    wrapperhover.prototype.bindEvent=function(){
        var _this=this;
        $('.portfolio-wrapper').on('mouseenter','li',function(){
            console.log(1)
            $(_this).addClass('change').siblings().removeClass('change')
        }).on('mouseleave','li',function(){
            $(_this).removeClass('change')
        })
    }
    return wrapperhover;
});