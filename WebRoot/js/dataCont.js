$(function(){
	//�Ѹ�ҳ���url����Ự
	var url_all=document.URL;
	var index=url_all.indexOf('1.0/');
	var url=url_all.substr(index+4);
	alert(url);
	$.ajax({
		type:'post',
		url:'Common/addUrl2Session',
		data:url,
		error:function(){
			alert("�Ự����urlʧ��");
		}
	});
	
	//��½��˵�����ʾ�û���
	$('.sys_name', parent.document)[0].innerHTML=$('#sys_name').val();
	
	//�����˵�����
	$($('.menu>ul>li>div', parent.document)[0]).addClass('menu_click');//ע��תjq����
	
	
});