define(["jquery"],() =>{
	class Footer{
		constructor(){
			this.init();
		}
		init(){
			//加载header.html
			new Promise((resolve, reject) => {
				$("footer").load("/html/component/footer.html", () => {
					resolve();
				})
			}).then(() => {
				$("#WeChat").hover(function(){
					$("#code").fadeIn("slow");
				},function(){
					$("#code").fadeOut("slow");
				})
				//返回顶部				
				$("body").append($("<a href='javascript:;' class='return-top'></a>"));				
				$(window).on("scroll",()=>{
					if($(window).scrollTop() > 400){
						$(".return-top").fadeIn();
					}else{
						$(".return-top").fadeOut();
					}
					$(".return-top").on("click",()=>{
						$("body,html").animate({scrollTop:0},500);
					})
				})
				
			})
		}
		
	}
	return new Footer();
})