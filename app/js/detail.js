require(["./requirejs.config"],()=>{
	require(["jquery","url","template","tools","cookie","header","footer"],($,url,template,tools)=>{
		//获取id
		$.cookie.json=true;
		let arrSearch = location.search.slice(1).split("=");
		let searchObj = {};
		searchObj[arrSearch[0]] = arrSearch[1];
		// console.log(arrSearch,searchObj);
				$.ajax({
					url:url.baseUrlRap+"/detail",
					type:"get",
					data:searchObj,
					dataType:"json",
					success:function(res){
						// console.log(res);
						if(res.res_code === 1){
								let detail = res.res_body;
								// console.log(detail);
								//通过模板引擎渲染结构
								let html = template("detail-template", {detail});
								
								$("#product").html(html);	

								//放大镜，
								// var con = tools.$(".bigpic")[0],
								// 	box = tools.$(".tb-pic")[0],
								// 	fdj = tools.$(".picfd")[0],
								// 	bigBox = tools.$(".big")[0],
								// 	bigImg = tools.$("#bigImg");
								// //进入box，让fdj显示
								// box.onmouseenter = function(){
								// 	fdj.style.display = "block";
								// 	bigBox.style.display = "block";
								// }

								// box.onmousemove = function(e){
								// 	//fdj跟随鼠标移动
								// 	e = e || window.event;
								// 	var left = e.clientX - tools.getPosition(box).left - fdj.offsetWidth/2;
								// 	var top = e.clientY - tools.getPosition(box).top - fdj.offsetHeight/2;
								// 	//console.log(left);
								// 	//判断范围
								// 	if(left < 0) left = 0;
								// 	if(top < 0) top = 0;
								// 	if(left > box.offsetWidth - fdj.offsetWidth) left = box.offsetWidth - fdj.offsetWidth;
								// 	if(top > box.offsetHeight - fdj.offsetHeight) top = box.offsetHeight - fdj.offsetHeight;

								// 	tools.css(fdj, {left: left+"px",top: top+"px"});

								// 	//按照倍率关系移动大图片,-2倍
								// 	tools.css(bigImg, {left:-4*left+"px", top: -4*top+"px"});



								// }

								// box.onmouseleave = function(){
								// 	fdj.style.display = "none";
								// 	bigBox.style.display = "none";
								// }

									var $big_img = $('.tb-pic'),
										$hover_img_wrap = $('.big'),
										$hover_img = $hover_img_wrap.children('img');
										
										$big_img.mousemove(function(a){
											var evt = a || window.event;
											$hover_img_wrap.css('display','block');
											var ot = evt.clientY-($('.jqzoom').offset().top- $(document).scrollTop())-125;
											var ol = evt.clientX-($('.jqzoom').offset().left- $(document).scrollLeft())-125;
											if(ol<=0){
												ol = 0;
											}
											if(ot<=0){
												ot = 0;
											}
											if(ol>=250){
												ol=250
											}
											if(ot>=250){
												ot=250
											}
											$(".tb-pic span").css({'left':ol,'top':ot})
											var ott = ot/500*600
											var oll = ol/500*600
											$hover_img.css({'left':-oll,'top':-ott})
										})
										$big_img.mouseout(function(){
											$hover_img_wrap.css('display','none')
										})
								

								guwuche(res);
							}
						}				
			        })

				function guwuche(res){
					let $addcart = $("#addcart");
					// console.log($addcart)
					console.log(res)
					$addcart.on("click",()=>{
						//存对象					
						let cartObj = {
							"img":res.res_body.img,
							"title":res.res_body.title,
							"price":res.res_body.price,
							"color":res.res_body.Colour,
							"id":arrSearch[1],
							"num":1
						}
						console.log(cartObj)

						let arr = $.cookie("cart") ? $.cookie("cart") : [];
						let index;
						let isList = arr.some(function(item,i){//item是一个对象
							index = i;
							return item.id === cartObj.id;
						});
						if(isList){
							arr[index].num++;
						}else{
							arr.push(cartObj);
						}

						$.cookie("cart",arr,{path:"/"});
						// console.log($.cookie("cart"));
						window.location.href="/html/cart.html";						
					})

					
				}

    })
})