require(["./requirejs.config"],() =>{
	require(["jquery","header","footer","cookie"],() =>{
		//取到用户名
		// zs();
		// function zs(){
		// 	$.cookie.json = true; //转json格式
		// 	let $username = $.cookie("user").username;
		// 	$(".personal-img").css({display:"none"});
		// 	$(".personal").append($username);
		// }

		//轮播图
		let $btns = $("#banner ol li");
		let $imgs = $("#banner ul li");
		let index = 0;
        //console.log($btns,$imgs);
		//按钮点击
		$btns.on("click",function(){			
			$(this).addClass("ac").siblings().removeClass("ac");
			$imgs.eq(index).removeClass("ac").stop().animate({opacity:0},"fast");
			index = $(this).index();
			$imgs.eq($(this).index()).addClass("ac").stop().animate({opacity:1},"fast");			
								
		})
		//自动轮播
		var ints=window.setInterval(Timers,2000);
		function Timers(){
				var CheckLi=$("#banner ol li.ac"),//第一个元素按钮
					Cindex=$btns.index($("CheckLi"));//得到第一个元素的下标
				$btns.eq(0).trigger('click');
				if(Cindex+1===$btns.length){
					$btns.eq(0).trigger('click');
				}else{
					CheckLi.next().trigger('click');
				}
			}
		$("#banner ol li").hover(function (){
				ints=window.clearInterval(ints);
		},function(){
			 ints=window.setInterval(Timers,2000);
		})

	})
	
})
