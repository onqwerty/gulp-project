require(["./requirejs.config"], () =>{
	require(["jquery","header","footer"],()=>{
		$("#register-btn").on("click",function(){
			$.ajax({
				url:"http://localhost/gulp-project/api/v1/register.php",
				type:"post",
				data:{
					username:$.trim($("#username").val()),
					phone:$("#phone").val(),
					password:$("#password").val()
				},
				success:function(res){
					console.log(res);
					if(res.res_code){
						if(confirm("注册成功,去登陆")){
							window.location.href = "http://localhost:1809/html/login.html";
						}
					}else{
						alert(1);
					}
				}
			})
		})
	})
})