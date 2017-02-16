$(function(){
   //参数
	var lastEditIndex;
	
	
   $('#dg').datagrid({   
	    url:'PermManage/findUser', 
	    striped:true,
	    singleSelect:true,
	    //checkOnSelect:true,
	    checkbox:true,
	    iconCls:'icon-edit',
	    onDblClickCell:function(index, field, value){
	    	//取消选择所有行
	 	   $('#dg').datagrid('uncheckAll');
	    	 //关闭并取消上次的编辑
	 	   if(lastEditIndex!=null){
	 		   $('#dg').datagrid('cancelEdit', lastEditIndex);  
	 		   $('#dg').datagrid('endEdit', lastEditIndex); 
	 	   }
	    	//开始新编辑并选中
	    	$(this).datagrid('beginEdit', index);
	    	$(this).datagrid('selectRow', index);
	    	//单元格编辑
	    	var ed = $(this).datagrid('getEditor', {index:index,field:field});
			//$(ed.target).textbox('setValue','hahaha');
			
	    	//整行编辑
//			var ed = $(this).datagrid('getEditors', index);//获取一行中的所有编辑器
//			var edOne=ed[2];
//			var value1=$(edOne.target).textbox('getValue');
			//$(ed.target).focus();
	    	lastEditIndex=index;
	    	
        },
        onBeforeEdit:function(index,row){
        	//关闭之前的编辑
        	$(this).datagrid('cancelEdit', lastEditIndex);
	    	$(this).datagrid('endEdit', lastEditIndex);
        },
	    columns:[[   
	        {field:'checkBox',title:'',width:30,checkbox:true}, 
	        {field:'id',title:'id',hidden:true},
	        {field:'name',title:'用户名',width:100,editor :{
				type:'textbox',
				options:{
					required: true
				        }
	                } },   
	        {field:'password',title:'密码',width:100,editor :{
				type:'textbox',
				options:{
					required: true
				        }
	                }},   
	        {field:'state',title:'状态',width:100,align:'right',
	           formatter: function(value,row,index){ 
	    				if(value==1){
	    					return '已激活';
	    				}else if(value==0){
	    					return '未激活';
	    				}     
	        }} 
	    ]]   
	});
   //查询
   $('#sertch').click(function(){
	   $('#dg').datagrid('load',{name:$('#name').val(),});
   });
   //保存
   $('#save').click(function(){
	   $('#dg').datagrid('endEdit', lastEditIndex);//需结束编辑，新数据才会保存到行中
	   var row=$('#dg').datagrid('getSelections')[0];
	  // var row=encodeURI(JSON.stringify(row));//对象转为json字符串     （可以直接修改ajax的发送参数格式为‘String’）
	   $.ajax({
		   type:'post',
		   //暂时不指定dataType，指定后ajax成功后不回调success
		   //dataType:'String',//参数将以字符串格式发送，但如果参数是一个对象，将会发送这个对象的几个属性的字符串，后台可以直接用这个对象的类接收，因为springMVC将会把接收的这几个字符串参数组合成相应对象
		   //dataType:'json',
		   url:'PermManage/saveUser',
		   data:row,
		   success:function(data){
			   $('#dg').datagrid('reload');
		   },
		   error:function(){
			   $.messager.alert('提示','保存失败！');
			   $('#dg').datagrid('reload');
		   },
	   });
	   
   });   
   //添加
   $('#add').click(function(){
	   //取消选择所有行
	   $('#dg').datagrid('uncheckAll');
	   //关闭并取消上次的编辑
	   if(lastEditIndex!=null){
		   $('#dg').datagrid('cancelEdit', lastEditIndex);  
		   $('#dg').datagrid('endEdit', lastEditIndex); 
	   }
	   //添加一行
	  $('#dg').datagrid('appendRow',{});
	  //获得最后一行行号
	  var lastIndex = $('#dg').datagrid('getRows').length - 1;
	  //开始新编辑并选中
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
		   url:'PermManage/delUser',
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