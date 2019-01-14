require(["./requirejs.config"],()=>{
	require(["jquery","template","cookie","header","footer"],($,template)=>{
		$.cookie.json=true;
		let dataCart = $.cookie("cart");
		// console.log(dataCart)
		let chtml = template("cart-template",{dataCart});//两个参数
		$("#cartContent").html(chtml);

		// let $content = $(".content");
		let $check = $(".desc span");
		// let $cartContent = $("#cartContent");
		let $allcheck = $(".cart-productSelect span");
		let $delBtn = $(".cartdel");
		//删除按钮
		$delBtn.on("click",function(){
			if(confirm("确定移除这个宝贝吗")){
				let count=0,chenum= $(".desc span");
				if(chenum.length==1){
					$allcheck.removeClass("select").attr("data-flag",false);
				}else{
					$(this).parent().parent().find(".product_select").attr("data-flag",true);
					chenum.each((i,item)=>{
						$(item).attr("data-flag")==="true"?count++:count;
					})
					if(count==chenum.length){
						$allcheck.addClass("select").attr("data-flag",true);
					}
				}
				$(this).parents(".content").remove();
			}		
		})
		
		//全选按钮
		$allcheck.on("click",function(){
			$(this).hasClass("select") ?
			$(this).removeClass("select").attr("data-flag",false):
			$(this).addClass("select").attr("data-flag",true);
			if($(this).attr("data-flag")==="true"){
				$check.addClass("product_select2").attr("data-flag",true);
			}else{
				$check.removeClass("product_select2").attr("data-flag",false);
			}
		})
		//单选按钮
		$check.on("click",function(){
			let count=0;
			$(this).hasClass("product_select2") ?
			$(this).removeClass("product_select2").attr("data-flag",false) :
			$(this).addClass("product_select2").attr("data-flag",true);
			if($(this).attr("data-flag")==="true"){
				$check.each((i,item)=>{
					$(item).attr("data-flag")==="true"?count++:count;
				})
				if(count==$check.length){
					$allcheck.addClass("select").attr("data-flag",true);
				}
			}else{
				$allcheck.removeClass("select").attr("data-flag",false)
			}
		})
		//减少数量按钮
		// let $less = $(".discount__sadw .less");
		
		// $less.on("click",function(){
		// 	let lessNum = $(this).next("input").val();
		// 	if(--lessNum <= 1){
		// 		lessNum = 1
		// 	}
			
		// })
	})
})