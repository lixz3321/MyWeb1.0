$(function(){
	var lastEditIndex;
	
   $('#dg').datagrid({   
	    url:'PermManage/findRole', 
	    striped:true,
	    singleSelect:true,
	    //checkOnSelect:true,
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
	    columns:[[   
	        {field:'checkBox',title:'',width:30,checkbox:true}, 
	        {field:'id',title:'id',hidden:true},
	        {field:'name',title:'角色名',width:100,editor :{
				type:'textbox',
				options:{
					required: true
				        }
	                } },   
	        {field:'leval',title:'LEVAL',width:100,editor :{
				type:'textbox',
				options:{
					required: true
				        }
	                }},   
	    ]]   
	});
   $('#sertch').click(function(){
	   $('#dg').datagrid('load',{name:$('#name').val(),});
   });
   //保存
   $('#save').click(function(){
	   $('#dg').datagrid('endEdit', lastEditIndex);
	   var row=$('#dg').datagrid('getSelections')[0];
	   $.ajax({
		   type:'post',
		   url:'PermManage/saveRole',
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
		   url:'PermManage/delRole',
		   data:row,
		   success:function(){
			   $('#dg').datagrid('reload');
			   $.messager.alert('提示','删除成功！');
		   },
		   error:function(){
			   $.messager.alert('提示','删除失败！');
		   },
	   });
   });
});