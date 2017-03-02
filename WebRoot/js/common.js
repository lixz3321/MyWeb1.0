$(function(){
	//左侧菜单点击切换样式
	$('.leftmenu>span>ul>li').click(function(){
		$('.clicked').removeClass('clicked');
		$(this).addClass('clicked');
	});
});