$(function(){
	//�����˵�����
	$($('.menu>ul>li>div', parent.document)[4]).addClass('menu_click');//ע��תjq����
	//
});

function leftMenuUrl(flag){
	if(flag=='1'){
		$('#small_iframe').attr('src','jsp/sysManage/dcManage.jsp');
	}else if(flag=='2'){
		$('#small_iframe').attr('src','jsp/sysManage/unitManage.jsp');
	}else if(flag=='3'){
		$('#small_iframe').attr('src','jsp/sysManage/indexManage.jsp');
	}
	else if(flag=='4'){
		$('#small_iframe').attr('src','jsp/sysManage/tagManage.jsp');
	}
}