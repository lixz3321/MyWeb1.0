//查询条件的全局变量
var $unit_id,$startTime,$endTime,$bwzt=0,$psst=0,$lctr=0;
$(function(){
	$($('.menu>ul>li>div', parent.document)[2]).addClass('menu_click');
	$('#jt_name').combobox({   
	    valueField:'id',   
	    textField:'name',
	    onSelect:function(record){
	    	var jt_id=record['id'];
	    	$.ajax({
	    		url:'Pss/findJtOrJz',
	    	    data:{
	    	    	'id':jt_id,
	    	    	'type':3,
	    	    },
	    	    type:'post',
	    	    success:function(data){
	    	    	$('#jz_name').combobox('clear');
	    	    	$('#jz_name').combobox('loadData',data);
	    	    },
	    	});
	    },
	}); 
	
	$('#jz_name').combobox({   
	    valueField:'id',   
	    textField:'name',
        onSelect:function(record){
        	$unit_id=record['id'];
	    }
	}); 
	
	$('#gridStatus').combobox({   
	    valueField:'id',   
	    textField:'text',
	    data:[{   
	        "id":-1,   
	        "text":"未并网"  
	    },{   
	        "id":1,   
	        "text":"已并网"  
	    }] ,
	    onSelect:function(record){
	    	$bwzt=record['id'];
	    },
	});
	
	$('#pssInput').combobox({   
	    valueField:'id',   
	    textField:'text',
	    data:[{   
	        "id":-1,   
	        "text":"未投入"  
	    },{   
	        "id":1,   
	        "text":"已投入"  
	    }] ,
	    onSelect:function(record){
	    	$psst=record['id'];
	    },
	});
	
	$('#lcInput').combobox({   
	    valueField:'id',   
	    textField:'text',
	    data:[{   
	        "id":-1,   
	        "text":"未投入"  
	    },{   
	        "id":1,   
	        "text":"已投入"  
	    }] ,
	    onSelect:function(record){
	    	$lctr=record['id'];
	    },
	});
	
	$.ajax({
		url:'Pss/findJtOrJz',
	    data:{
	    	'id':'',
	    	'type':1,
	    },
	    type:'post',
	    success:function(data){
	    	$('#jt_name').combobox('loadData',data);
	    },
	});
	//初始化表格
	$('#dg').datagrid({   
	    url:'Pss/getPssData', 
	    striped:true,
	    singleSelect:true,
	    
	    columns: getComlums(),
	    
	});
	//查询按钮点击
	$('#sertch').click(function(){
		$('#dg').datagrid('load',{
			unit_id:$unit_id,
			startTime:$startTime,
			endTime:$endTime,
			bwzt:$bwzt,
			psst:$psst,
			lctr:$lctr,
			startTime:$('#startTime').datetimebox('getValue'),
			endTime:$('#endTime').datetimebox('getValue'),
		});
	});
});

function getComlums(){
	var columns=[[
	              {field:'name',title:'机组名称',width:150},
	              {field:'edgl',title:'额定功率',width:100},
	              {field:'yggl',title:'有功功率',width:100},
	              {field:'bwdy',title:'并网电压',width:100},
	              {field:'bwzt',title:'并网状态',width:100,
	            	  formatter: function(value,row,index){
	            		  if(value==1){
	            			  return"<div style='margin:0 auto 0;width:15px;height:15px;border-radius:20px;background-color:green;'></div>"
	            		  }else if(value==-1){
	            			  return"<div style='margin:0 auto 0;width:15px;height:15px;border-radius:20px;background-color:red;'></div>"
	            		  }else{
	            			  return"<div style='margin:0 auto 0;width:15px;height:15px;border-radius:20px;background-color:#ffee00;'></div>"
	            		  }
	            	  }
	            	     },
	              {field:'psst',title:'PSS投入状态',width:100,
	            	    	 formatter: function(value,row,index){
	   	            		  if(value==1){
	   	            			  return"<div style='margin:0 auto 0;width:15px;height:15px;border-radius:20px;background-color:green;'></div>"
	   	            		  }else if(value==-1){
	   	            			  return"<div style='margin:0 auto 0;width:15px;height:15px;border-radius:20px;background-color:red;'></div>"
	   	            		  }else{
	   	            			  return"<div style='margin:0 auto 0;width:15px;height:15px;border-radius:20px;background-color:#ffee00;'></div>"
	   	            		  }
	   	            	  }},
	              {field:'lctr',title:'励磁投入状态',width:100,
	   	            		formatter: function(value,row,index){
	  	            		  if(value==1){
	  	            			  return"<div style='margin:0 auto 0;width:15px;height:15px;border-radius:20px;background-color:green;'></div>"
	  	            		  }else if(value==-1){
	  	            			  return"<div style='margin:0 auto 0;width:15px;height:15px;border-radius:20px;background-color:red;'></div>"
	  	            		  }else{
	  	            			  return"<div style='margin:0 auto 0;width:15px;height:15px;border-radius:20px;background-color:#ffee00;'></div>"
	  	            		  }
	  	            	  }},
	              {field:'time',title:'时间',width:200},
	              ]];
	return columns;
}