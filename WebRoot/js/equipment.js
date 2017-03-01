var $type;
$(function(){
	
	var uploadStatus=$('#uploadStatus').val();
	if(uploadStatus==1){
		$.messager.alert('提示','上传成功');
	}else if(uploadStatus==0){
		$.messager.alert('提示','上传失败');
	}
	//菜单亮条
	$($('.menu>ul>li>div', parent.document)[3]).addClass('menu_click');//ע��תjq����
	//加载树
	   $('#tt').tree({   
		    url:'Common/findJzTree',
		    onClick:function(node){
		    	 $type=parseInt(node['type']);
		    	 $('#type').val($type);
		    	 
		    	    if($type==2){
		    	    	$('#dc_name').val(node['text']);
		    	    	$('#dc_id').val(node['id']);
		    	    	$('#jz_name').val();
		    	    	$('#jz_id').val();
		    	    }else if($type==3){
		    	    	var parentNode=$('#tt').tree('getParent',node.target);//���ڵ�
		    	    	$('#dc_name').val(parentNode['text']);
		    	    	$('#jz_name').val(node['text']);
		    	    	$('#jz_id').val(node['id']);
		    	    }else{
		    	    	return;
		    	    }
		    	    
		    	   if($type>=2){
		    		   $('#add').linkbutton({disabled:false});
				       $('#save').linkbutton({disabled:false});
				       BtnSwitch=1;
		    	   }else{
		    		   $('#add').linkbutton({disabled:true});
				       $('#save').linkbutton({disabled:true});
				       BtnSwitch=0;
				       return;
		    	   }
		    	   
		    	    if($type==2){
			    		$('#dg').datagrid({
			    			queryParams:{type:$type,group_id:node['id']},
			    		});
		    	    }else if($type==3){
		    	    	$('#dg').datagrid({
			    			queryParams:{type:$type,unit_id:node['id']},
			    		});
		    	    }else{
		    	    	return;
		    	    }
			    	 
		    	    
		    },
		    onLoadSuccess:function(node,data){
		    	
		    	var target=$("#tt li:eq(0)").find('div');//��ȡ��ڵ��DOM����
		    	var JtNodes=$('#tt').tree('getChildren',target);
		    	var DcNodes=$('#tt').tree('getChildren',JtNodes[0].target);
		    	$group_id=DcNodes[0]['id'];
		    	$type=DcNodes[0]['type'];
		    	$('#dc_name').val(DcNodes[0]['text']);
		    	$('#type').val(DcNodes[0]['type']);
		    	$('#dc_id').val(DcNodes[0]['id']);
		    	
		    	 $('#dg').datagrid('load',{type:$type,group_id:$group_id});
		    },
		}); 
	   //上传
	   $('#save').click(function(){
//		   if($('#file').val()==null ||$('#file').val()==''){
//			   $.messager.alert('提示','请选择所需上传的文件');
//			   return;
//		   }
		  
		   $('#fileForm')[0].submit();
	   });
	
});