
    

define(['jquery'], function($){
    function GoTop(){
        this.target='<div class="gotop"><img src="src/img/gotop.png" alt=""></div>'
    }
    GoTop.prototype.createNode=function(){
        $('body').append(this.target);
    }
    GoTop.prototype.bindEvent=function(){
        var $gotop=$('.gotop')
        $gotop.on('click',function(){
            $(window).scrollTop(0);
            return;
        })
    }
    return GoTop;
});