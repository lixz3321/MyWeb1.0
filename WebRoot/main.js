$(function(){
	
	$('.menu>ul>li>div').addClass('menu_noClick');//δ����Ĳ˵�������ʽ
     
    	 //$('#menu1').hide();//����
	     //$('#sys_editor').hide();//���ر༭�û���
    
	//����˵�
	$('.menu>ul>li').click(function(){
		//���Ʋ˵�������ʽ
		$('.menu>ul>li>div').removeClass('menu_click');//�Ƴ�menu_click��ʽ��ֻ������˸���ʽ��div��Ӱ��
		//$(this).children().addClass('menu_click');//$(this)�ɻ�ȡ��ǰ�����¼�����children()��ȡ��һ����Ԫ��
		
	     //����ifram����url
		var $li=$('.menu>ul').find('li');
		if($(this)[0]==$li[0]){    //�轫thisתΪjs����
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
	
	//�˳���½
	$('#sys_off').click(function(){
		 
		//��ջỰ
		$.ajax({
			type:'post',
		    url:'Login/exit',
		    data:'',
		    success:function(data){
		    	//���ز˵���
				$('.menu', parent.document).hide();
				//����û���
				$('.sys_name')[0].innerHTML="";
				//�л�����½ҳ��
				$('#iframe').attr('src','jsp/login.jsp');
		    },
		});
		
	});
		
});