$(function(){
	
	//ˢ���ض���
	if($('#crrent_iframe_url').val()!=''){
		var iurl=$('#crrent_iframe_url').val();
		var rolel=$('#role_leval').val();
		//��ܼ���ˢ��ǰ��url
		$('#iframe').attr('src',iurl);
		//��ʾ���˵�
		$('.menu').show();
		
		//�ж��û���ɫ
		if(rolel==1){
			$('#menu1').show();
			$('#menu2').show();
			$('.sys_btn').show();
		}else if(rolel==2){
			$('#menu1').show();
			$('.sys_btn').show();
		}
	}
	
	$('.menu>ul>li>div').addClass('menu_noClick');//δ����Ĳ˵�������ʽ
    	 //$('#menu1').hide();//����
	     //$('#sys_editor').hide();//���ر༭�û���
    
	//����˵�
	$('.menu>ul>li').click(function(){
		//�˵��������䰵
		$('.menu>ul>li>div').removeClass('menu_click');//�Ƴ�menu_click��ʽ��ֻ������˸���ʽ��div��Ӱ��
		//$(this).children().addClass('menu_click');//$(this)�ɻ�ȡ��ǰ�����¼�����children()��ȡ��һ����Ԫ��
		
	     //����ifram����url
		var $li=$('.menu>ul').find('li');
		if($(this)[0]==$li[0]){    //�轫thisתΪjs����
		   $('#iframe').attr('src','jsp/dataCont.jsp');
		}else if($(this)[0]==$li[1]){
		   $('#iframe').attr('src','jsp/discharge.jsp');
		 //�Ѹ�ҳ���url����Ự���Ա�ˢ���ض���
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
			$('#iframe').attr('src','jsp/limitManager.jsp');
			   $.ajax({
					type:'post',
					url:'Common/addUrl2Session',
					data:{crrent_iframe_url:'jsp/limitManager.jsp'},
				});
		}
	});
	
	//�˳���½
	$('#sys_off').click(function(){
		 
		//��ջỰ
		$.ajax({
			type:'post',
		    url:'Login/exit',
		    data:'',
		    success:function(data){
		    	//���¼���ҳ��
		    	location.reload();
		    },
		});
		
	});
		
});