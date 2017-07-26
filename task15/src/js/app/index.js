define(['jquery','gotop','carousel'], function($, GoTop, Carousel) {
	var gotop=new GoTop();
    gotop.createNode();
    gotop.bindEvent();
    Carousel.init($('#carousel'));
});
