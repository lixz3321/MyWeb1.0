$(function(){
	var param={};	
    //从会话登陆
	if($('#url')!=null){
		alert($('#url').val());
	}
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
				console.log(data);
				//state: 1用户验证成功，0验证失败
				if(data['state']=='1'){
				$('.menu', parent.document).show();
				//$('#menu1', parent.document).hide(); //隐藏父窗口菜单按钮
				//显示用户名及编辑按钮
				$('.sys_name', parent.document).show();
				$('.sys_btn', parent.document).show();
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