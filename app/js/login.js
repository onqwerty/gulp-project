require(["./requirejs.config"],() =>{
	require(["jquery","header","footer","cookie"],() =>{
		//console.log();
		//是否记住我
		let $bflag=$("div.statement b");
		$bflag.on("click",function(){
			$(this).toggleClass("read");
			$(this).attr("data-flag",$(this).hasClass("read")?false:true);
		})

			$("#login-btn").on("click",function(e){
				$.ajax({
					url:"http://localhost/gulp-project/api/v1/login.php",
					type:"post",
					data:{
						username:$.trim($("#username").val()),
						password:$("#password").val()
					},
					dataType:"json",
			     success:function(res){	
			     console.log(res.res_code);	
					if(res.res_code){
						// 是否记住我
						if($bflag.attr("data-flag")){
							$.cookie.json=true;
							$.cookie(
								"user",
								{
									"id":res.res_body.id,
									"username":res.res_body.username
								},
								{expires:10,path:"/"},
								
							);
						}else{
							//把用户名和用户id存cookie	
							$.cookie.json=true;
							$.cookie(
								"user",
								{
									"id":res.res_body.id,
									"username":res.res_body.username
								},
								{path:"/"}
							);
						}	
						
						if(confirm("登录成功,去首页")){
							window.location.href = "/";
						}					
					}else{
						alert("登录失败，请重新登录");					
					}
				},
				error:function(){
					alert("网络出错");
				}
			})
				return false;
		})
	})		
	
})