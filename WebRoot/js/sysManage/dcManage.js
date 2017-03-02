$(function(){
	var lastEditIndex,$pid,$type,BntSwitch=0;
   //初始化表格
   $('#dg').datagrid({   
	    url:'SysManage/findJtDc', 
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
	    	   $('#add').linkbutton({disabled:false});
	    	   $('#save').linkbutton({disabled:false});
	    	   BntSwitch=1;
	    	
	    	    if(node['type']!=2){
	    	    	var type=parseInt(node['type'])+1;
		    		$('#dg').datagrid({
		    			queryParams:{type:type,pid:node['id']},
		    		});
		    		$pid=node['id'];
		    		$type=type;
	    	    }else{
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
	   }
	   
	   $.ajax({
		   type:'post',
		   url:'SysManage/saveJtDc',
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
		   url:'SysManage/delJtDc',
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
	    	        {field:'name',title:'企业名称',width:100,editor :{
	    				type:'textbox',
	    				options:{
	    					required: true
	    				        }
	    	                } },   
	    	        {field:'code',title:'企业编码',width:100,editor :{
	    				type:'textbox',
	    				options:{
	    					required: false,
	    				        }
	    	                }},
	    	                {field:'propertise',title:'企业性质',width:100,editor :{
	    	    				type:'textbox',
	    	    				options:{
	    	    					required: false,
	    	    				        }
	    	    	                }},
	    	    	                {field:'tel',title:'联系电话',width:100,editor :{
	    	    	    				type:'textbox',
	    	    	    				options:{
	    	    	    					required: false,
	    	    	    				        }
	    	    	    	                }},
	    	    	    	                {field:'address',title:'通讯地址',width:100,editor :{
	    	    	    	    				type:'textbox',
	    	    	    	    				options:{
	    	    	    	    					required: false,
	    	    	    	    				        }
	    	    	    	    	                }},
	    	    	    	    	                {field:'postcode',title:'邮政编码',width:90,editor :{
	    	    	    	    	    				type:'textbox',
	    	    	    	    	    				options:{
	    	    	    	    	    					required: false,
	    	    	    	    	    				        }
	    	    	    	    	    	                }},
	    	    	    	    	    	                {field:'unit_count',title:'机组数量',width:90,editor :{
	    	    	    	    	    	    				type:'textbox',
	    	    	    	    	    	    				options:{
	    	    	    	    	    	    					required: false,
	    	    	    	    	    	    				        }
	    	    	    	    	    	    	                }},
	    	    	    	    	    	    	                {field:'sun_valume',title:'总容量',width:80,editor :{
	    	    	    	    	    	    	    				type:'textbox',
	    	    	    	    	    	    	    				options:{
	    	    	    	    	    	    	    					required: false,
	    	    	    	    	    	    	    				        }
	    	    	    	    	    	    	    	                }},
	    	    	    	    	    	    	    	                {field:'note',title:'备注',width:70,editor :{
	    	    	    	    	    	    	    	    				type:'textbox',
	    	    	    	    	    	    	    	    				options:{
	    	    	    	    	    	    	    	    					required: false,
	    	    	    	    	    	    	    	    				        }
	    	    	    	    	    	    	    	    	                }},
	    	    	                
	    	    ]];
	return columns;
}
