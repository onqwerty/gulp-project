require(["./requirejs.config"],() =>{
	require(["jquery","header","footer","cookie"],() =>{
		
	// 		$("#login-btn").on("click",function(e){
	// 			$.ajax({
	// 				url:"http://localhost/gulp-project/api/v1/login.php",
	// 				type:"post",
	// 				data:{
	// 					"username":$.trim($("#username").val()),
	// 					"password":$("#password").val()
	// 				},
	// 		     success:function(res){	
	// 		     console.log(res)			
	// 				if(res.res_code){
	// 					// 是否记住我
	// 					if($("#rememberMe").checked){
	// 						$.cookie(
	// 							"user",
	// 							{
	// 								"id":res.res_body.id,
	// 								"username":res.res_body.username
	// 							},
	// 							{expires:10,path:"/"},
								
	// 						);
	// 					}else{
	// 						//把用户名和用户id存cookie	
	// 						$.cookie(
	// 							"user",
	// 							{
	// 								"id":res.res_body.id,
	// 								"username":res.res_body.username
	// 							},
	// 							{path:"/"}
	// 						);
	// 					}	
					
	// 					if(confirm("登录成功,去首页")){
	// 						window.location.href = "http://localhost:1809/index.html";
	// 					}					
	// 				}else{
	// 					alert("登录失败，请重新登录");					
	// 				}
	// 			},
	// 			error:function(){
	// 				alert("网络出错");
	// 			}
	// 		})
	// 			return false;
	// 	})
	})		
	
})