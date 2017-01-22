$(function(){
	//点亮菜单亮条
	$($('.menu>ul>li>div', parent.document)[5]).addClass('menu_click');//注意转jq对象
});

function leftMenuUrl(flag){
	if(flag=='1'){
		$('#small_iframe').attr('src','jsp/roleManager.jsp');
	}else if(flag=='2'){
		$('#small_iframe').attr('src','jsp/userManager.jsp');
	}else if(flag=='3'){
		$('#small_iframe').attr('src','jsp/roleConn.jsp');
	}
}