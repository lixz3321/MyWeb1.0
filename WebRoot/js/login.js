$(function(){
	var param={};	
	//�ǳ������û�
	//$('#name').val($('#name', parent.document).val());
	
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
				//state: 1�û���֤�ɹ���0��֤ʧ��
				if(data['state']=='1'){
					//��ʾ�˵���
					$('.menu', parent.document).show();
					//��ʾ�û������༭��ť
					$('.sys_name', parent.document).show();
					$('.sys_btn', parent.document).show();
					//�жϽ�ɫ
					if(data['role']['leval']=='1'){
						$('#menu1',parent.document).show();
						$('#menu2',parent.document).show();
					}else if(data['role']['leval']=='2'){
						$('#menu1',parent.document).show();
					}else{
						alert("��ɫ�ж�ʧ��");
						alert($('#role_leval',parent.document).val());
					}
				
				//$('#menu1', parent.document).hide(); //���ظ����ڲ˵���ť
				
				
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