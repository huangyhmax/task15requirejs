define(['jquery','gotop','waterfull','carousel'], function($, GoTop,waterFall,Carousel) {
	var gotop=new GoTop();
    gotop.createNode();
    gotop.bindEvent();
    Carousel.init($('#carousel'));
    waterFall.flow($('#wrap'));
});
