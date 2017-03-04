
function loadWin(index){
	
	$('#Igrid').datagrid({
		url : 'SysManage/findIndex',
		fitColumns:true,
		pagination:true, 
		pageNumber:1,
		pageSize:20,
		singleSelect : true,
		striped:true,
		method : 'post',
		onDblClickRow:function(){       
			var data=$('#Igrid').datagrid('getSelected');
			$.messager.confirm('确认','您确认选择该指标吗？',function(r){ 
//				组合测点
				if(r){
					var $dc_name=$('#dc_name').val();
					var $jz_name;
					if($('#jz_name').val()==null||$('#jz_name').val()==""){
						$jz_name="";
					}
					else{
						$jz_name=$('#jz_name').val().substring(1)+"#机组";
					}
			
					var $Iname=data['name'];//指标名称
					if(data['unit']==null){//指标单位
						var $unit='';
					}
					else{
						var $unit="("+data['unit']+")";
					}
					var $tag_name=$dc_name+$jz_name+$Iname+$unit;
					$('#tag_name').val($tag_name);
					$('#index_id').val(data['id']);
                    $('#index_code').val(data['code']);
                    $('#index_unit').val(data['unit']);
					edit(index);
					$('#win').window('close');
				}
			});
		},
		columns : IgridColumns(),  
		
	});


}

function edit(index){
	$('#dg').datagrid('updateRow',{index:index,row:{name:$('#tag_name').val(),code:$('#index_code').val(),unit:$('#index_unit').val()}});
	$('#dg').datagrid('selectRow', index).datagrid('beginEdit', index);
}
/**
 * @returns {Array}
 */
function IgridColumns(){
	var columns = [[   
	    	        {field:'checkBox',title:'',width:30,checkbox:true}, 
	    	        {field:'id',title:'id',hidden:true},
	    	        {field:'name',title:'指标名称',width:100,editor :{
	    				type:'textbox',
	    				options:{
	    					required: true
	    				        }
	    	                } },   
	    	        {field:'code',title:'ָ指标编码',width:100,editor :{
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
	    	    	    	        {field:'note',title:'备注ע',width:100,editor :{
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
