$(function(){
	var param={};	
	 //this..
	//��½
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
				
				//state: 1�û���½�ɹ���0��½ʧ��
				if(data['state']=='1'){
					//�����ʾ�˵���
					$('.menu', parent.document).show();
					//��ʾ�û�����ϵͳ��ť
					$('.sys_name', parent.document).show();
					$('.sys_btn', parent.document).show();
					
					//��½���û���Ϣ��ӵ���ҳ���������
					$('#role_leval',parent.document).val(data['role']['role_leval']);
					$('#id',parent.document).val(data['user']['id']);
					$('#name',parent.document).val(data['user']['name']);
					$('#password',parent.document).val(data['user']['password']);
					
					//�жϽ�ɫ
					if(data['role']['leval']=='1'){
						$('#menu1',parent.document).show();
						$('#menu2',parent.document).show();
					}else if(data['role']['leval']=='2'){
						$('#menu1',parent.document).show();
					}else if(data['role']['leval']=='3'){
//						alert("��ɫ��֤ʧ��");
//						alert($('#role_leval',parent.document).val());
						location.reload();
					}else{
						$.messager.alert('��ʾ','��ɫ��֤ʧ�ܣ�');
						location.reload();
					}
				
				//ת������ͳ��jsp
				$('#iframe', parent.document).attr('src','jsp/dataCont.jsp');
				}else if(data['state']=='0'){
					$.messager.alert('��ʾ','�û������������'); 
				}else if(data['state']=='3'){
					$.messager.alert('��ʾ','���û�δ���');
				}
			},
			error:function(){
				$.messager.alert('��ʾ','ajax����');
			}
		});
	});
});