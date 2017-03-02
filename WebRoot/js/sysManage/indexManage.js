$(function(){
	var lastEditIndex,$pid,$type;
   //初始化表格
   $('#dg').datagrid({   
	    url:'SysManage/findIndex', 
	    //queryParams:{type:1,pid:0}, //写死
	    striped:true,
	    //singleSelect:true,
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
	    url:'SysManage/findUnitTree',
	    onClick:function(node){
	    	   $('#add').linkbutton({disabled:false});
	    	   $('#save').linkbutton({disabled:false});
	    	
	    	    if(node['type']!=3){
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
	   $('#dg').datagrid('endEdit', lastEditIndex);
	   var row=$('#dg').datagrid('getSelections')[0];
	   if(row==null){
		   $.messager.alert('提示','请选择指标！');
		   return;
	   }
//	   if(row['pid']==null || row['type']==null){
//		   row['pid']=$pid;
//		   row['type']=$type ;
//	   }
	   
	   $.ajax({
		   type:'post',
		   url:'SysManage/saveIndex',
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
		   url:'SysManage/delIndex',
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
	    	        {field:'name',title:'指标名称',width:100,editor :{
	    				type:'textbox',
	    				options:{
	    					required: true
	    				        }
	    	                } },   
	    	        {field:'code',title:'指标编码',width:100,editor :{
	    	    		type:'textbox',
	    	    		options:{
	    	    			required: true
	    	    				 }
	    	    	        } }, 
	    	    	        {field:'unit',title:'单位',width:100,editor :{
	    	    	    		type:'textbox',
	    	    	    		options:{
	    	    	    			required: true
	    	    	    				 }
	    	    	    	        } },
	    	    	    	        {field:'note',title:'备注',width:100,editor :{
	    	    	    	    		type:'textbox',
	    	    	    	    		options:{
	    	    	    	    			required: false,
	    	    	    	    				 }
	    	    	    	    	        } },
	    	    	    	    	        {
	    	    	    	    	    		field : 'date',
	    	    	    	    	    		title : '创建时间',
	    	    	    	    	    		width : 100,
	    	    	    	    	    	}
	    	    	    	    	             
	    	    ]];
	return columns;
}
