$(function(){
	var param={};	
	//登出回显用户
	//$('#name').val($('#name', parent.document).val());
	
	//手动登陆
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
				//state: 1用户验证成功，0验证失败
				if(data['state']=='1'){
					//显示菜单栏
					$('.menu', parent.document).show();
					//显示用户名及编辑按钮
					$('.sys_name', parent.document).show();
					$('.sys_btn', parent.document).show();
					//判断角色
					if(data['role']['leval']=='1'){
						$('#menu1',parent.document).show();
						$('#menu2',parent.document).show();
					}else if(data['role']['leval']=='2'){
						$('#menu1',parent.document).show();
					}else{
						alert("角色判断失败");
						alert($('#role_leval',parent.document).val());
					}
				
				//$('#menu1', parent.document).hide(); //隐藏父窗口菜单按钮
				
				
				//转到数据统计jsp
				$('#iframe', parent.document).attr('src','jsp/dataCont.jsp');
				}else{
					$('#iframe', parent.document).attr('src','jsp/login.jsp');
					alert("账户有误");
				}
				
			},
			error:function(){
				alert('ajax error');
			}
		});
	});
});