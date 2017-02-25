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
	   
	}); 
	
	$('#gridStatus').combobox({   
	    valueField:'id',   
	    textField:'text',
	    data:[{   
	        "id":0,   
	        "text":"未并网"  
	    },{   
	        "id":1,   
	        "text":"已并网"  
	    }] ,
	    onSelect:function(record){
	    	
	    },
	});
	
	$('#pssInput').combobox({   
	    valueField:'id',   
	    textField:'text',
	    data:[{   
	        "id":0,   
	        "text":"未投入"  
	    },{   
	        "id":1,   
	        "text":"已投入"  
	    }] ,
	    onSelect:function(record){
	    	
	    },
	});
	
	$('#lcInput').combobox({   
	    valueField:'id',   
	    textField:'text',
	    data:[{   
	        "id":0,   
	        "text":"未投入"  
	    },{   
	        "id":1,   
	        "text":"已投入"  
	    }] ,
	    onSelect:function(record){
	    	
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
	
});