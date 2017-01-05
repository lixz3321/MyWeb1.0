$(function(){
    //隐藏菜单栏（无会话状态下）
	if($('#name').val()==''){
		$('.menu').hide(); 
	}
	//刷新重定向
	if($('#crrent_iframe_url').val()!=''){
		var iurl=$('#crrent_iframe_url').val();
		var rolel=$('#role_leval').val();
		$('#iframe').attr('src',iurl);
		//判断用户角色
		if(rolel==1){
			$('#menu1').show();
			$('#menu2').show();
			$('.sys_btn').show();
		}else if(rolel==2){
			$('#menu1').show();
			$('.sys_btn').show();
		}
		
		
		//在此添加模拟点击登陆事件调用手工登陆
		
	}
	
	$('.menu>ul>li>div').addClass('menu_noClick');//未点击的菜单亮条样式
    	 //$('#menu1').hide();//隐藏
	     //$('#sys_editor').hide();//隐藏编辑用户名
    
	//点击菜单
	$('.menu>ul>li').click(function(){
		//控制菜单亮条样式
		$('.menu>ul>li>div').removeClass('menu_click');//移除menu_click样式，只有添加了改样式的div受影响
		//$(this).children().addClass('menu_click');//$(this)可获取当前触发事件对象，children()获取第一个子元素
		
	     //控制ifram加载url
		var $li=$('.menu>ul').find('li');
		if($(this)[0]==$li[0]){    //需将this转为js对象
		   $('#iframe').attr('src','jsp/dataCont.jsp');
		
		}else if($(this)[0]==$li[1]){
		   $('#iframe').attr('src','jsp/discharge.jsp');
		 //把该页面的url存入会话，以便刷新重定向
		   $.ajax({
				type:'post',
				url:'Common/addUrl2Session',
				data:{crrent_iframe_url:'jsp/discharge.jsp'},
			});
		}else if($(this)[0]==$li[2]){
		   $('#iframe').attr('src','jsp/pss.jsp');
		 //把该页面的url存入会话，以便刷新重定向
		   $.ajax({
				type:'post',
				url:'Common/addUrl2Session',
				data:{crrent_iframe_url:'jsp/pss.jsp'},
			});
		}else if($(this)[0]==$li[3]){
			$('#iframe').attr('src','jsp/equipment.jsp');
			//把该页面的url存入会话，以便刷新重定向
			   $.ajax({
					type:'post',
					url:'Common/addUrl2Session',
					data:{crrent_iframe_url:'jsp/equipment.jsp'},
				});
		}else if($(this)[0]==$li[4]){
			$('#iframe').attr('src','jsp/sysManager.jsp');
			//把该页面的url存入会话，以便刷新重定向
			   $.ajax({
					type:'post',
					url:'Common/addUrl2Session',
					data:{crrent_iframe_url:'jsp/sysManager.jsp'},
				});
		}else if($(this)[0]==$li[5]){
			$('#iframe').attr('src','jsp/limitManager.jsp');
			//把该页面的url存入会话，以便刷新重定向
			   $.ajax({
					type:'post',
					url:'Common/addUrl2Session',
					data:{crrent_iframe_url:'jsp/limitManager.jsp'},
				});
		}
	});
	
	//退出登陆
	$('#sys_off').click(function(){
		 
		//清空会话
		$.ajax({
			type:'post',
		    url:'Login/exit',
		    data:'',
		    success:function(data){
		    	//菜单亮条变暗
		    	$('.menu>ul>li>div').addClass('menu_noClick');
		    	$('.menu>ul>li>div').removeClass('menu_click');
		    	//隐藏菜单栏
				$('.menu', parent.document).hide();
				//清空用户名
				$('.sys_name')[0].innerHTML="";
				//切换到登陆页面
				$('#iframe').attr('src','jsp/login.jsp');
				//清空隐藏域会话信息
				$('crrent_iframe_url').val('');
				$('role_leval').val('');
				$('name').val('');
				$('password').val('');
		    },
		});
		
	});
		
});