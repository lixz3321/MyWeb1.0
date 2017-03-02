var $type;//$type用于区分电厂集团机组0全部，1集团，2电厂，3机组
$(function(){
	var lastEditIndex,BtnSwitch=0;
	
	
	   //初始化表格
	   $('#dg').datagrid({   
		    url:'SysManage/findTags', 
		    striped:true,
		    singleSelect:true,
		    checkbox:true,
		    iconCls:'icon-edit',
		    onDblClickCell:function(index, field, value){
		    	
		 	   $('#dg').datagrid('uncheckAll');
		 	   if(lastEditIndex!=null){
		 		   $('#dg').datagrid('cancelEdit', lastEditIndex);  
		 		   $('#dg').datagrid('endEdit', lastEditIndex); 
		 	   }
		    	$(this).datagrid('beginEdit', index);
		    	$(this).datagrid('selectRow', index);
		    	var ed = $(this).datagrid('getEditor', {index:index,field:field});
		    	lastEditIndex=index;
		    	
	        },
	        onBeforeLoad:function(){ //如果菜单树还没点击过，$type为null，则不加载数据
	        	if($type==null){
	        		return false;
	        	}
	        },
	        onBeforeEdit:function(index,row){
	        	$(this).datagrid('cancelEdit', lastEditIndex);
		    	$(this).datagrid('endEdit', lastEditIndex);
	        },
		    columns:gridColumns(),   
		});
	   
	   
	 //初始化树
	   $('#tt').tree({   
		    url:'Common/findJzTree',
		    onClick:function(node){
//		    	console.log(node);
		    	//type区分是电厂还是机组(菜单树级别)
		    	 $type=parseInt(node['type']);
		    	 $('#type').val($type);
		    	 
		    	//全局变量
		    	    if($type==2){
		    	    	$('#dc_name').val(node['text']);
		    	    	$('#dc_id').val(node['id']);
		    	    	//清空机组信息
		    	    	$('#jz_name').val();
		    	    	$('#jz_id').val();
		    	    }else if($type==3){
		    	    	var parentNode=$('#tt').tree('getParent',node.target);//父节点
		    	    	$('#dc_name').val(parentNode['text']);
		    	    	$('#jz_name').val(node['text']);
		    	    	$('#jz_id').val(node['id']);
		    	    }else{
		    	    	return;
		    	    }
		    	    
		    	 //控制添加保存按钮显隐状态
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
		    	   
		    	    //加载相应机组或电厂下测点
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
		    	  //将电厂机组信息存入隐藏域
			    	 
		    	    
		    },
		    onLoadSuccess:function(node,data){
		    	
		    	//取得tree第一个电厂节点的参数
		    	var target=$("#tt li:eq(0)").find('div');//获取根节点的DOM对象
		    	var JtNodes=$('#tt').tree('getChildren',target);
		    	var DcNodes=$('#tt').tree('getChildren',JtNodes[0].target);
//		    	alert(DcNodes[0]['text']);
		    	$group_id=DcNodes[0]['id'];
		    	$type=DcNodes[0]['type'];
		    	//设置隐藏域用于组合测点
		    	$('#dc_name').val(DcNodes[0]['text']);
		    	$('#type').val(DcNodes[0]['type']);
		    	$('#dc_id').val(DcNodes[0]['id']);
		    	
		    	//根据菜单第一个节点加载数据
		    	 $('#dg').datagrid('load',{type:$type,group_id:$group_id});
		    },
		}); 
	   
	   
	   //查询
	   $('#sertch').click(function(){
		   $('#dg').datagrid('load',{name:$('#name').val(),type:$('#type').val()});
	   });
	   //保存
	   $('#save').click(function(){
		   //按钮开关
           if(BtnSwitch==0){
        	   return;
           }		  
           
		   $('#dg').datagrid('endEdit', lastEditIndex);//关闭上次编辑
		   var row=$('#dg').datagrid('getSelections')[0];
		   if(row==null){
			   $.messager.alert('提示','请选择要保存测点');
			   return;
		   }
		   //为row更新参数
		   row = changeParams(row);
		   
		   $.ajax({
			   type:'post',
			   url:'SysManage/saveTage',
			   data:row,
			   success:function(data){
				   $('#dg').datagrid('reload');
				   $.messager.alert('提示','保存成功！');
			   },
			   error:function(){
				   $.messager.alert('提示','保存失败！');
				   $('#dg').datagrid('reload');
			   },
		   });
		   
			});  
	   //添加
	   $('#add').click(function(){
		 //按钮开关
           if(BtnSwitch==0){
        	   return;
           }
		   
		   $('#dg').datagrid('uncheckAll');
		   if(lastEditIndex!=null){
			   $('#dg').datagrid('cancelEdit', lastEditIndex);  
			   $('#dg').datagrid('endEdit', lastEditIndex); 
		   }
		  $('#dg').datagrid('appendRow',{});
		  var lastIndex = $('#dg').datagrid('getRows').length - 1;
		  $('#dg').datagrid('beginEdit', lastIndex);
		  $('#dg').datagrid('selectRow', lastIndex);
		  lastEditIndex=lastIndex;
	   }); 
	   //删除
	   $('#delete').click(function(){
		   var row=$('#dg').datagrid('getSelections')[0];
		   if(row==null){
			   return;
		   }
		   $.ajax({
			   type:'post',
			   url:'SysManage/delTag',
			   data:row,
			   success:function(){
				   $('#dg').datagrid('reload');
				   $('#tt').tree('reload');
				   $.messager.alert('提示','删除成功！');
			   },
			   error:function(){
				   $.messager.alert('提示','删除失败！');
			   },
		   });
		   
	   });
	});
//弹出框
function showI(index){
	$('#win').window('open');
	  loadWin(index);
}	


//修改保存测点
function changeParams(row){
	if($type==2){   
		row['type']=2;
		row['dc_id']=$('#dc_id').val();
		if($('#index_id').val()!=''){
			row['index_id']=$('#index_id').val();
		}
	}
	if($type==3){
		row['type']=3;
		row['jz_id']=$('#jz_id').val();
		if($('#index_id').val()!=''){
			row['index_id']=$('#index_id').val();
		}
		
	}
//	console.log("修改后row=="+row);
	return row;
}


	//列属性
	function gridColumns(){
		var columns = [[   
		    	        {field:'checkBox',title:'',width:30,checkbox:true}, 
		    	        {field:'id',title:'id',hidden:true},
		    	        {field:'dc_id',title:'dc_id',hidden:true},
		    	        {field:'jz_id',title:'jz_id',hidden:true},
		    	        {field:'index_id',title:'index_id',hidden:true},
		    	        {field:'name',title:'测点名称',width:150,editor :{
		    				type:'textbox',
		    				options:{
		    					required: true,
		    				    iconAlign:'right',
		    				    icons:[{iconCls:'icon-search',disabled:false,handler:function(index){ //点击图标事件
		    				    	var $row=$('#dg').datagrid('getSelected');	
		    				    	var index=$('#dg').datagrid('getRowIndex',$row);//获取当前行号
		    				    	showI(index);//弹出框
		    				    }}],
		    				        }
		    	                } },   
		    	        {field:'code',title:'测点编码',width:150,editor :{
		    				type:'textbox',
		    				options:{
		    					required: false,
		    				        }
		    	                }},
		    	                {field:'unit',title:'单位',width:100,editor :{
    	    	    				type:'textbox',
    	    	    				options:{
    	    	    					required: false,
    	    	    				        }
    	    	    	                }},
		    	    	                {field:'note',title:'备注',width:100,editor :{
		    	    	    				type:'textbox',
		    	    	    				options:{
		    	    	    					required: false,
		    	    	    				        }
		    	    	    	                }},
		    	    	    	                {field:'maxval',title:'上限',width:100,editor :{
		    	    	    	    				type:'textbox',
		    	    	    	    				options:{
		    	    	    	    					required: false,
		    	    	    	    				        }
		    	    	    	    	                }},
		    	    	    	    	                
		    	    	    	    	                {field:'minval',title:'下限',width:100,editor :{
				    	    	    	    				type:'textbox',
				    	    	    	    				options:{
				    	    	    	    					required: false,
				    	    	    	    				        }
				    	    	    	    	                }},
		    	    	    	    	                {field:'createtime',title:'创建时间',width:90},
		    	    	                
		    	    ]];
		return columns;
	}
	
	
