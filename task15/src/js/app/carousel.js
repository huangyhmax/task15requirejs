
define(function(require) {
    var $=require('jquery');
    var Carousel=(function(){
        function _Carousel($ct){
            this.$ct=$ct;
            this.init();
            this.bind();
        }
        _Carousel.prototype={
            init:function(){
                this.$preBtn=this.$ct.find('.arrow.pre');
                this.$nextBtn=this.$ct.find('.arrow.next');
                this.list=this.$ct.find('.pics>li');
                var imgWidth=this.imgWidth=this.$ct.find('img').width();
                var listCount=this.listCount=this.list.length;
                this.$imgCt=this.$ct.find('.pics');
                this.pageIndex=0;
                this.$tipsBtn=this.$ct.find('.tipchoose>li');
                this.isAminate=false;
                this.$imgCt.css({left:-imgWidth});
                this.$imgCt.append(this.list.first().clone());
                this.$imgCt.prepend(this.list.last().clone());
                this.$imgCt.width(((listCount)+2)*imgWidth);
            },
            bind:function(){
                var _this=this
                this.$preBtn.on('click',function(e){
                    e.preventDefault();
                    _this.playPre(1)
                })
                this.$nextBtn.on('click',function(e){
                    e.preventDefault();
                    _this.playNext(1)
                })
                this.$tipsBtn.on('click',function(){
                    var _thistb=this
                    var index=$(_thistb).index();
                    if(index>_this.pageIndex){
                        _this.playNext(index-_this.pageIndex);
                    }else if(index<_this.pageIndex){
                        _this.playPre(_this.pageIndex-index);
                    }
                })
            },
            playPre:function(len){
                this.len=len;
                var _this=this;
                if(_this.isAminate) return;
                _this.isAminate=true;
                this.$imgCt.animate({left:'+='+this.len*this.imgWidth},function(){
                    _this.pageIndex -=_this.len;
                    if(_this.pageIndex<0){
                        _this.pageIndex=_this.listCount-1;
                        _this.$imgCt.css({left:-_this.imgWidth*_this.listCount});
                    }
                    _this.tipsShow() 
                    _this.isAminate=false;
                })
            },
            playNext:function(len){
                this.len=len;
                var _this=this
                if(_this.isAminate) return;
                _this.isAminate=true;
                _this.$imgCt.animate({left:'-='+this.len*this.imgWidth},function(){
                    _this.pageIndex +=_this.len;
                    if(_this.pageIndex==_this.listCount){
                        _this.pageIndex=0;
                        _this.$imgCt.css({left:-_this.imgWidth});
                    }
                    _this.tipsShow()
                    _this.isAminate=false;
                })  
            },
            tipsShow:function(){
                var _this=this
                _this.$tipsBtn.removeClass('active').eq(_this.pageIndex).addClass('active');
            }
        }
        return{
            init:function($ct){
                $ct.each(function(index,node){
                    new _Carousel($(node));
                })
            }
        }
    })()
    return Carousel;
});