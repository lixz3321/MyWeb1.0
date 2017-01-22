$(function(){
	
	//刷新重定向
	if($('#crrent_iframe_url').val()!=''){
		var iurl=$('#crrent_iframe_url').val();
		var rolel=$('#role_leval').val();
		//框架加载刷新前的url
		$('#iframe').attr('src',iurl);
		//显示主菜单
		$('.menu').show();
		
		//判断用户角色
		if(rolel==1){
			$('#menu1').show();
			$('#menu2').show();
			$('.sys_btn').show();
		}else if(rolel==2){
			$('#menu1').show();
			$('.sys_btn').show();
		}
	}
	
	$('.menu>ul>li>div').addClass('menu_noClick');//未点击的菜单亮条样式
    	 //$('#menu1').hide();//隐藏
	     //$('#sys_editor').hide();//隐藏编辑用户名
    
	//点击菜单
	$('.menu>ul>li').click(function(){
		//菜单亮条都变暗
		$('.menu>ul>li>div').removeClass('menu_click');//移除menu_click样式，只有添加了该样式的div受影响
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
		   $.ajax({
				type:'post',
				url:'Common/addUrl2Session',
				data:{crrent_iframe_url:'jsp/pss.jsp'},
			});
		}else if($(this)[0]==$li[3]){
			$('#iframe').attr('src','jsp/equipment.jsp');
			   $.ajax({
					type:'post',
					url:'Common/addUrl2Session',
					data:{crrent_iframe_url:'jsp/equipment.jsp'},
				});
		}else if($(this)[0]==$li[4]){
			$('#iframe').attr('src','jsp/sysManager.jsp');
			   $.ajax({
					type:'post',
					url:'Common/addUrl2Session',
					data:{crrent_iframe_url:'jsp/sysManager.jsp'},
				});
		}else if($(this)[0]==$li[5]){
			$('#iframe').attr('src','jsp/PermManager.jsp');
			   $.ajax({
					type:'post',
					url:'Common/addUrl2Session',
					data:{crrent_iframe_url:'jsp/PermManager.jsp'},
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
		    	//重新加载页面
		    	location.reload();
		    },
		});
		
	});
	//初始化修改密码弹窗
	$('#dd').dialog({   
	    title: '修改密码',   
	    width: 300,   
	    height: 200,   
	    closed: true,   
	    cache: false,   
	    modal: true, 
	    buttons:[{text:'保存',
			      iconCls:'icon-save',
			      handler:function(){
			    	  if($('#v1').val()==$('#password').val()){
			    		  if($('#v2').val()==$('#v3').val()){
			    			  $.ajax({
			    					type:'post',
			    					url:'PermManage/modifyPass',
			    					data:{id:$('#id').val(),newPass:$('#v3').val()},
			    					success:function(){
			    						//修改隐藏域的密码为新密码
			    						$('#password').val($('#v3').val());
			    						$('#dd').dialog('close');
			    						$.messager.alert('提示','密码修改成功'); 
			    					},
			    				});
			    		  }else{
			    			  $.messager.alert('提示','两次密码输入不正确');  
			    		  }
			    	  }else{
			    		  $.messager.alert('提示','原密码有误！'); 
//			    		  alert($('#v1').val());
//		    			  alert($('#password').val());
			    	  }
			      }
	              }],
	});
	$('#sys_editor').click(function(){
		$('#dd').dialog('open');
	});
});