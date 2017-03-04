var $type,$jt_id,$dc_id,$jz_id;
$(function(){
	//控制亮条样式
	$($('.menu>ul>li>div', parent.document)[1]).addClass('menu_click');
	//加载树
	   $('#tt').tree({   
		    url:'Common/findJzTree',
		    onClick:function(node){
		    	 $type=parseInt(node['type']);
		    	 var data={};
		    	 if($type==1){
		    		 data={jt_id:node['id']};
		    	 }else if($type==2){
		    		 data={dc_id:node['id']};
		    	 }else if($type==3){
		    		 data={jz_id:node['id']};
		    	 }
		    	 $('#dg').datagrid('load',data);
		    },
		});
	//加载图表数据，并绘制
	   getAllChartData();

	//数据表格
	   $('#dg').datagrid({   
		    url:'PollWarn/getGrid',  
		    fitColumns:false,
		    columns:getColumns(),
		});
});

/***********************************   自定义函数区  **********************************************************/

function getAllChartData(){
	//图表1数据
	$.ajax({
		url:'PollWarn/getChartData',
		type:'post',
		data:{index_id:13},
		success:function(data){
			createChart1(data);
		},
	});
	//图表2数据
	$.ajax({
		url:'PollWarn/getChartData',
		type:'post',
		data:{index_id:14},
		success:function(data){
			createChart2(data);
		},
	});
	//图表3数据
	$.ajax({
		url:'PollWarn/getChartData',
		type:'post',
		data:{index_id:15},
		success:function(data){
			createChart3(data);
		},
	});
}

//创建图表1
function createChart1(data){
	 //图表1
	   AmCharts.makeChart('chartdiv1',{
		   type: "serial",
		   columnWidth:0.5,//列宽
		   marginRight:15,//右外间距
		   dataProvider:data, 
		   categoryField: "dc_name",
		   graphs: [ {
			    "valueField": "value",
			    "type": "column",//图类型
			    "fillAlphas": 0.8,
			  }],
		   categoryAxis: {
			   "labelRotation": 0,//X轴类别坐标旋转90度
				},
	       valueAxes: [{
	    	   "tickLength":0,
	    	   "labelsEnabled":true,
	    	   "gridCount":10,
			   "axisAlpha": 0,
			   "position": "left",
			   "title": ""
				  }],
	   });
}
//创建图表2
function createChart2(data){
	 //图表2
	   AmCharts.makeChart('chartdiv2',{
		   type: "serial",
		   columnWidth:0.5,//列宽
		   marginRight:15,//右外间距
		   dataProvider:data, 
		   categoryField: "dc_name",
		   graphs: [ {
			    "valueField": "value",
			    "type": "column",//图类型
			    "fillAlphas": 0.8,
			    "lineColor":'blue',//图形颜色
			  }],
		   categoryAxis: {
			   "labelRotation": 0,//X轴类别坐标旋转90度
				},
	       valueAxes: [{
	    	   "tickLength":0,
	    	   "labelsEnabled":true,
	    	   "gridCount":10,
			   "axisAlpha": 0,
			   "position": "left",
			   "title": ""
				  }],
	   });
}
//创建图表3
function createChart3(data){
	 //图表3
	   AmCharts.makeChart('chartdiv3',{
		   type: "serial",
		   columnWidth:0.5,//列宽
		   marginRight:15,//右外间距
		   dataProvider:data, 
		   categoryField: "dc_name",
		   graphs: [ {
			    "valueField": "value",
			    "type": "column",//图类型
			    "fillAlphas": 0.8,
			    "lineColor":'green',//图形颜色
			  }],
		   categoryAxis: {
			   "labelRotation": 0,//X轴类别坐标旋转90度
				},
	       valueAxes: [{
	    	   "tickLength":0,
	    	   "labelsEnabled":true,
	    	   "gridCount":10,
			   "axisAlpha": 0,
			   "position": "left",
			   "title": ""
				  }],
	   });
}
function getColumns(){
	var columns=[[
                  {field:'jt_name',title:'集团名称',width:100}, 
                  {field:'dc_name',title:'电厂名称',width:100}, 
                  {field:'jz_name',title:'机组名称',width:100}, 
                  {field:'maxeyhl',title:'二氧化硫限制',width:100}, 
                  {field:'eyhl',title:'二氧化硫浓度',width:100,formatter:function(value,row,index){
                	  if (value > row['maxeyhl']){
                		return "<div style='padding:2px 0 0 5px;margin:0 auto 0;width:19px;height:19px;border-radius:20px;color:#fff;background-color:red;'>"+value+"</div>";
//      					return 'color:red;';
      				}else{
      					return "<div style='padding:2px 0 0 5px;margin:0 auto 0;width:19px;height:19px;border-radius:20px;color:#fff;background-color:green;'>"+value+"</div>";
      				}
                  }}, 
                  {field:'maxeyhl',title:'氮氧化物限制',width:100}, 
                  {field:'eyhl',title:'氮氧化物浓度',width:100,styler:function(value,row,index){
                	  
                  }}, 
                  {field:'maxeyhl',title:'烟尘浓度限制',width:100}, 
                  {field:'eyhl',title:'烟尘浓度',width:100,styler:function(value,row,index){
                	  
                  }},
                  {field:'time',title:'时间',width:200},
	              ]];
	return columns;
}