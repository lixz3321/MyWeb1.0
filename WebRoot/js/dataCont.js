var $chartData1,$chartData2,$chartData3
$(function(){
	//把该页面的url存入会话
	var url_all=document.URL;
	var index=url_all.indexOf('1.0/');
	var url=url_all.substr(index+4);
	$.ajax({
		type:'post',
		url:'Common/addUrl2Session',
		data:{crrent_iframe_url:url},
		error:function(){
			alert("dataCont.js:  "+"session save url error");
		}
	});
	//刷新父页面，使会话的登陆信息存入父页面的隐藏域
//	parent.location.reload();
	//登陆后菜单栏显示用户名
	$('.sys_name', parent.document)[0].innerHTML=$('#sys_name').val();
	
	//点亮菜单亮条
	$($('.menu>ul>li>div', parent.document)[0]).addClass('menu_click');//注意转jq对象
	//加载绘图数据
	generateChartData();
	//绘图
//	getCharts();
	setTimeout(function(){
		getCharts();
	},3000); 
	
});
/******************      自定义函数区        *************************/
//创建数据
function generateChartData() {
	$.ajax({
		url:'DataCont/getChartData',
		type:'post',
		data:{jt_id:1},
		success:function(data){
			$chartData1=data;
		}
	});
	
	$.ajax({
		url:'DataCont/getChartData',
		type:'post',
		data:{jt_id:2},
		success:function(data){
			$chartData2=data;
		}
	});
	
	$.ajax({
		url:'DataCont/getChartData',
		type:'post',
		data:{jt_id:3},
		success:function(data){
			$chartData3=data;
		}
	});
}
//绘制图表
function getCharts(){

	AmCharts.makeChart("chartdiv", {
		type: "stock",
		dataSets: [{
			title: "大唐集团",
			fieldMappings: [{
				fromField: "value", //曲线值
				toField: "value"
			}, {
				fromField: "volume",//柱状图值
				toField: "volume"
			}],
			dataProvider: $chartData1,
			categoryField: "date"   //X轴坐标
		},

		{
			title: "华能集团",
			compared:true,
			fieldMappings: [{
				fromField: "value",
				toField: "value"
			}, {
				fromField: "volume",
				toField: "volume"
			}],
			dataProvider: $chartData2,
			categoryField: "date"
		},

		{
			title: "华电集团",
			fieldMappings: [{
				fromField: "value",
				toField: "value"
			}, {
				fromField: "volume",
				toField: "volume"
			}],
			dataProvider: $chartData3,
			categoryField: "date"
		},


		],

		panels: [{

			showCategoryAxis: false,
			title: "Value",
			percentHeight: 70,

			stockGraphs: [{
				id: "g1",

				valueField: "value",
				comparable: true,
				compareField: "value",
				bullet: "round",
				bulletBorderColor: "#FFFFFF",
				bulletBorderAlpha: 1,
				balloonText: "[[title]]:<b>[[value]]</b>",
				compareGraphBalloonText: "[[title]]:<b>[[value]]</b>",
				compareGraphBullet: "round",
				compareGraphBulletBorderColor: "#FFFFFF",
				compareGraphBulletBorderAlpha: 1
			}],

			stockLegend: {
				periodValueTextComparing: "[[percents.value.close]]%",
				periodValueTextRegular: "[[value.close]]"
			}
		},

		{
			title: "Volume",
			percentHeight: 30,
			stockGraphs: [{
				valueField: "volume",
				type: "column",
				showBalloon: false,
				fillAlphas: 1
			}],


			stockLegend: {
				periodValueTextRegular: "[[value.close]]"
			}
		}],

		chartScrollbarSettings: {
			graph: "g1",
			updateOnReleaseOnly:false
		},

		chartCursorSettings: {
			valueBalloonsEnabled: true,
			valueLineEnabled:true,
			valueLineBalloonEnabled:true
		},

		periodSelector: {
			position: "left",
			periods: [{
				period: "DD",
				count: 10,
				label: "10 days"
			}, {
				period: "MM",
				selected: true,
				count: 1,
				label: "1 month"
			}, {
				period: "YYYY",
				count: 1,
				label: "1 year"
			}, {
				period: "YTD",
				label: "YTD"
			}, {
				period: "MAX",
				label: "MAX"
			}]
		},

		dataSetSelector: {
			position: "left"
		}
	});
}