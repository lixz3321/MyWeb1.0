$(function(){
	//把该页面的url存入会话
	var url_all=document.URL;
	var index=url_all.indexOf('1.0/');
	var url=url_all.substr(index+4);
	$.ajax({
		type:'post',
		url:'Common/addUrl2Session',
		data:{crrent_iframe_url:url},
		error:function(){
			alert("dataCont.js:  "+"session save url error");
		}
	});
	
	//登陆后菜单栏显示用户名
	$('.sys_name', parent.document)[0].innerHTML=$('#sys_name').val();
	
	//点亮菜单亮条
	$($('.menu>ul>li>div', parent.document)[0]).addClass('menu_click');//注意转jq对象
	
	
});