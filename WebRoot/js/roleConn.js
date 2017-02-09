$(function(){
	var lastEditIndex;
	
   $('#dg').datagrid({   
	    url:'PermManage/findRoleConn', 
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
	        {field:'user_id',title:'user_id',hidden:true},
	        {field:'uName',title:'用户名',width:100},
	        {field:'rName',title:'角色名',width:100,editor :{
				type:'combobox',
				options:{
					required: true,
					url:'PermManage/findRole',
					valueField:'id',   
					textField:'name',
//					loadFilter:function(data){
//						//过滤掉用户状态不是2的数据
//                         			var arr=[];
//                         			for(var i=0;i<data.length;i++){
//                         				if(data[i]['state']==2)
//                         				arr.push(data[i]);
//                         			}
//						return arr;
//					},
				        }
	                } },   
	        {field:'leval',title:'LEVAL',width:100},   
	    ]]   
	});
   //查询
   $('#sertch').click(function(){
	   $('#dg').datagrid('load',{uName:$('#uName').val(),rName:$('#rName').val()});
   });
   //保存
   $('#save').click(function(){
	   $('#dg').datagrid('endEdit', lastEditIndex);
	   var row=$('#dg').datagrid('getSelections')[0];
	   //console.log("row="+JSON.stringify(row));
	   $.ajax({
		   type:'post',
		   url:'PermManage/saveRoleConn',
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
//   $('#add').click(function(){
//	   $('#dg').datagrid('uncheckAll');
//	   if(lastEditIndex!=null){
//		   $('#dg').datagrid('cancelEdit', lastEditIndex);  
//		   $('#dg').datagrid('endEdit', lastEditIndex); 
//	   }
//	  $('#dg').datagrid('appendRow',{});
//	  var lastIndex = $('#dg').datagrid('getRows').length - 1;
//	  $('#dg').datagrid('beginEdit', lastIndex);
//	  $('#dg').datagrid('selectRow', lastIndex);
//	  lastEditIndex=lastIndex;
//   }); 
   //删除
   $('#delete').click(function(){
	   var row=$('#dg').datagrid('getSelections')[0];
	   if(row==null){
		   return;
	   }
	   if(row['rName']!=null && row['rName']!=''){
		   $.ajax({
			   type:'post',
			   url:'PermManage/delRoleConn',
			   data:row,
			   success:function(){
				   $('#dg').datagrid('reload');
				   $.messager.alert('提示','删除成功！');
			   },
			   error:function(){
				   $.messager.alert('提示','删除失败！');
			   },
		   });		   
	   }else{
		   $.messager.alert('提示','删除失败，该用户未关联任何角色！');
	   }

   });
});