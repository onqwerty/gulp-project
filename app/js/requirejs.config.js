require.config({
	baseUrl:"/",
	paths:{
		"jquery":"/libs/jquery/jquery-3.2.1.min",
		"cookie":"/libs/jquery/jquery-plugins/jquery.cookie",
		"header":"/js/component/header",
		"footer":"/js/component/footer",
		"item":"/js/component/item",
		"url":"/js/component/url",
		"template":"/libs/template-web"
		
	},
	shim:{
		"cookie":{
			deps:["jquery"]
		}
	}
})