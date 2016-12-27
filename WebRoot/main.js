$(function(){
	
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
		}else if($(this)[0]==$li[2]){
		   $('#iframe').attr('src','jsp/pss.jsp');
		}else if($(this)[0]==$li[3]){
			$('#iframe').attr('src','jsp/equipment.jsp');
		}else if($(this)[0]==$li[4]){
			$('#iframe').attr('src','jsp/sysManager.jsp');
		}else if($(this)[0]==$li[5]){
			$('#iframe').attr('src','jsp/limitManager.jsp');
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
		    	//隐藏菜单栏
				$('.menu', parent.document).hide();
				//清空用户名
				$('.sys_name')[0].innerHTML="";
				//切换到登陆页面
				$('#iframe').attr('src','jsp/login.jsp');
		    },
		});
		
	});
		
});