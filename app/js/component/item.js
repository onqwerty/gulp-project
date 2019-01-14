define(["jquery", "template"], ($, template) => {
	function Item(){

	}

	Item.prototype.init = function(url){
		//先load到页面上，得到url，然后去请求数据,渲染结构，		
		//load
		new Promise((resolve, reject) => {
			console.log(url);
			$("#commodity-con-sdws").load("/html/component/item.html", () => {
				resolve();

			})
		}).then(() => {
			$.ajax({
				url: url,
				type: "get",
				success: function(res){
					if(res.res_code === 1){
						let list = res.res_body.data;
						console.log(list);
						//通过模板引擎渲染结构
						let html = template("list-template", {list});
						
						$("#rap2").html(html);


					}
				}
			})
		})
		
		
	}

	return new Item();
})
