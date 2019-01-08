define(["jquery"],() =>{
	class Header{
		constructor(){
			this.init();
		}
		init(){
			//加载header.html
			new Promise((resolve, reject) => {
				$("header").load("/html/component/header.html", () => {
					resolve();
				})
			}).then(() => {
				$(document).scroll(function(){
					if($(document).scrollTop() > 50){
						$("#logo").addClass("lg");
						$("#area").css({"display":"none"});
						$("#nav").css({top:"20px"});
						$("#header").css({height:"65px"});
						$("#nav-right").css({top:"-45px",left:"-125px"});
						$("header").css({height:"65px"});
						$("#shoppingCart").css({top:"65px"});
						$("#mall-nav").css({top:"65px"});
					}else{
						$("#area").css({"display":"block"});
						$("#header").css({height:"110px"});
						$("header").css({height:"110px"});
						$("#logo").removeClass("lg");
						$("#nav").css({top:"65px"});
						$("#nav-right").css({top:"65px"}).removeAttr("style");
						$("#shoppingCart").css({top:"110px"});
						$("#mall-nav").css({top:"110px"});
					}
				})
				//购物车滑动
				$("#shopping").on("mouseenter",function(){
					$("#shoppingCart").stop().show();
				})
				$("#shoppingCart").on("mouseleave",function(){
					$(this).stop().hide();
				})	
				//商城滑动
				$("#store").on("mouseenter",function(){
					$("#mall-nav").stop().slideDown();
					$("#mall-nav").on("mouseleave",function(){
						$(this).stop().slideUp();
					})									
				})
				
							
			})
		}
		
	}
	return new Header();
})