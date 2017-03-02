var $type,$unit_id;
$(function(){
	
	var uploadStatus=$('#uploadStatus').val();
	if(uploadStatus==1){
		$.messager.alert('提示','上传成功');
	}else if(uploadStatus==-1){
		$.messager.alert('提示','上传失败');
	}
	//菜单亮条
	$($('.menu>ul>li>div', parent.document)[3]).addClass('menu_click');//ע��תjq����
	//加载树
	   $('#tt').tree({   
		    url:'Common/findJzTree',
		    onClick:function(node){
		    	 $type=parseInt(node['type']);
		    	 if($type!=3){
		    		 return;
		    	 }
		    	 //清空
		    	 clear();
		    	 //保存按钮使能
		    	 $('#save').linkbutton({disabled:false});
		    	 //加载数据
		    	 $unit_id=node['id'];  
		    	 getEquipmentMsg();
		    	 
		    },
		}); 
	   //上传
	   $('#upload').click(function(){
		   $('#fileForm')[0].submit();
	   });
	   //下载
	   $('#download').click(function(){

		   $("#a_s").trigger("click"); //直接对超链接模拟点击无效，应模拟点击超链接内容元素

	   });
	   //保存
	   $('#save').click(function(){
//		   alert($('#d1 textarea').val());
//		   alert($('#d2 textarea').val());
		   
		   $.ajax({
			   url:'Equipment/save',
			   data:{
				   unit_id:$unit_id,
				   glgk:$('#d1 textarea').val(),
				   qjgk:$('#d2 textarea').val(),
				   kzxt:$('#d3 textarea').val(),
				   qtsb:$('#d4 textarea').val(),
			   },
			   type:'post',
			   success:function(){
				   $.messager.alert("提示","保存成功！");
			   }
		   });
	   });
});

//加载设备信息
function getEquipmentMsg(){
	$.ajax({
		url:'Equipment/getEquipmentMsg',
		type:'post',
		data:{
			unit_id:$unit_id,
		},
		success:function(data){
			$('#d1 textarea').val(data[0]['glgk']);
			$('#d2 textarea').val(data[0]['qjgk']);
			$('#d3 textarea').val(data[0]['kzxt']);
			$('#d4 textarea').val(data[0]['qtsb']);
		}
	});
}
//清空文本域
function clear(){
	$('#d1 textarea').val('');
	$('#d2 textarea').val('');
	$('#d3 textarea').val('');
	$('#d4 textarea').val('');
}