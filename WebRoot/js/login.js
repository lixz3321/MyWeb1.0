$(function(){
	var param={};	
    //�ӻỰ��½
	if($('#url')!=null){
		alert($('#url').val());
	}
	//�ֶ���½
	$('#login').click(function(){
		var name=$("input[name='name']").val();
		var pass=$("input[name='pass']").val();
		param={
				name:name,
				pass:pass
				};
		$.ajax({
			type:'post',
			url:'Login/login',
			data:param,
			dataType: 'json',
			success:function(data){
				console.log(data);
				//state: 1�û���֤�ɹ���0��֤ʧ��
				if(data['state']=='1'){
				$('.menu', parent.document).show();
				//$('#menu1', parent.document).hide(); //���ظ����ڲ˵���ť
				//��ʾ�û������༭��ť
				$('.sys_name', parent.document).show();
				$('.sys_btn', parent.document).show();
				//ת������ͳ��jsp
				$('#iframe', parent.document).attr('src','jsp/dataCont.jsp');
				}else{
					$('#iframe', parent.document).attr('src','jsp/login.jsp');
					alert("�˻�����");
				}
				
			},
			error:function(){
				alert('ajax error');
			}
		});
	});
});