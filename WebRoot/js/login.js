$(function(){
	var param={};	
	 //this..
	//登陆
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
				
				//state: 1用户登陆成功，0登陆失败
				if(data['state']=='1'){
					//框架显示菜单栏
					$('.menu', parent.document).show();
					//显示用户名及系统按钮
					$('.sys_name', parent.document).show();
					$('.sys_btn', parent.document).show();
					
					//登陆后将用户信息添加到父页面的隐藏域
					$('#role_leval',parent.document).val(data['role']['role_leval']);
					$('#id',parent.document).val(data['user']['id']);
					$('#name',parent.document).val(data['user']['name']);
					$('#password',parent.document).val(data['user']['password']);
					
					//判断角色
					if(data['role']['leval']=='1'){
						$('#menu1',parent.document).show();
						$('#menu2',parent.document).show();
					}else if(data['role']['leval']=='2'){
						$('#menu1',parent.document).show();
					}else if(data['role']['leval']=='3'){
//						alert("角色验证失败");
//						alert($('#role_leval',parent.document).val());
						location.reload();
					}else{
						$.messager.alert('提示','角色验证失败！');
						location.reload();
					}
				
				//转到数据统计jsp
				$('#iframe', parent.document).attr('src','jsp/dataCont.jsp');
				}else if(data['state']=='0'){
					$.messager.alert('提示','用户名或密码错误！'); 
				}else if(data['state']=='3'){
					$.messager.alert('提示','该用户未激活！');
				}
			},
			error:function(){
				$.messager.alert('提示','ajax错误！');
			}
		});
	});
});