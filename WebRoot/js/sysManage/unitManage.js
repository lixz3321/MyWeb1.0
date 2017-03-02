$(function(){
	var lastEditIndex,$pid,$type,BntSwitch=0;
	   //初始化表格
	   $('#dg').datagrid({   
		    url:'SysManage/findUnits', 
		    queryParams:{type:1,pid:0}, //写死
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
	        onBeforeEdit:function(index,row){
	        	$(this).datagrid('cancelEdit', lastEditIndex);
		    	$(this).datagrid('endEdit', lastEditIndex);
	        },
		    columns:gridColumns(),   
		});
	   
	   //初始化树
	   $('#tt').tree({   
		    url:'Common/findJtDcTree',
		    onClick:function(node){
		    	   
		    	   BntSwitch=1;
		    	
		    	    if(node['type']!=3 && node['type']!=1){
		    	    	$('#add').linkbutton({disabled:false});
				    	$('#save').linkbutton({disabled:false});
		    	    	
		    	    	var type=parseInt(node['type'])+1;
			    		$('#dg').datagrid({
			    			queryParams:{type:type,pid:node['id']},
			    		});
			    		$pid=node['id'];
			    		$type=type;
		    	    }else{
		    	    	$('#add').linkbutton({disabled:true});
				    	$('#save').linkbutton({disabled:true});
		    	    	return;
		    	    }
		    	    
		    },
		}); 
	   //查询
	   $('#sertch').click(function(){
		   $('#dg').datagrid('load',{name:$('#name').val(),});
	   });
	   //保存
	   $('#save').click(function(){
		   if(BntSwitch==0){
			   return;
		   }
		   $('#dg').datagrid('endEdit', lastEditIndex);
		   var row=$('#dg').datagrid('getSelections')[0];
		   
		   if(row['pid']==null || row['type']==null){
			   row['pid']=$pid;
			   row['type']=$type ;
			   row['putdate']=new Date().getMilliseconds(); 
		   }
		   
		   $.ajax({
			   type:'post',
			   url:'SysManage/saveUnit',
			   data:row,
			   success:function(data){
				   $('#dg').datagrid('reload');
				   $('#tt').tree('reload');
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
		   if(BntSwitch==0){
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
			   url:'SysManage/delUnit',
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

	//列属性
	function gridColumns(){
		var columns = [[   
		    	        {field:'checkBox',title:'',width:30,checkbox:true}, 
		    	        {field:'id',title:'id',hidden:true},
		    	        {field:'pid',title:'pid',hidden:true},
//		    	        {field:'jt_name',title:'集团名称',width:100,editor :{
//		    				type:'textbox',
//		    				options:{
//		    					required: true
//		    				        }
//		    	                } },
//		    	        {field:'dc_name',title:'电厂名称',width:100,editor :{
//				    				type:'textbox',
//				    				options:{
//				    					required: true
//				    				        }
//				    	                } },       
		    	        {field:'name',title:'机组名称',width:100,editor :{
		    				type:'textbox',
		    				options:{
		    					required: true
		    				        }
		    	                } },   
		    	        {field:'code',title:'机组编码',width:100,editor :{
		    				type:'textbox',
		    				options:{
		    					required: false,
		    				        }
		    	                }},
		    	                {field:'putdate',title:'投产时间',width:100},
		    	    	                {field:'rated_power',title:'额定功率',width:100,editor :{
		    	    	    				type:'textbox',
		    	    	    				options:{
		    	    	    					required: false,
		    	    	    				        }
		    	    	    	                }},
		    	    	    	                {field:'absorb_grid_voltage',title:'并网电压',width:100,editor :{
		    	    	    	    				type:'textbox',
		    	    	    	    				options:{
		    	    	    	    					required: false,
		    	    	    	    				        }
		    	    	    	    	                }},
		    	    	    	    	                
		    	    	    	    	                {field:'full_name',title:'机组全称',width:100,editor :{
				    	    	    	    				type:'textbox',
				    	    	    	    				options:{
				    	    	    	    					required: false,
				    	    	    	    				        }
				    	    	    	    	                }},
		    	    	    	    	                {field:'state',title:'状态',width:90,editor :{
		    	    	    	    	    				type:'textbox',
		    	    	    	    	    				options:{
		    	    	    	    	    					required: false,
		    	    	    	    	    				        }
		    	    	    	    	    	                }},
		    	    	                
		    	    ]];
		return columns;
	}
