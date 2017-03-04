<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'discharge.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!-- 公共 -->
	<link rel="stylesheet" type="text/css" href="css/common.css">
	<script src="web-resource/jquery-easyui/jquery.min.js"></script>
	<!-- easyUi -->
	<link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/default/easyui.css">  
    <link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/icon.css"> 
    <script type="text/javascript" src="web-resource/jquery-easyui/jquery.easyui.min.js"></script>
    <!-- amCharts -->
    <script src="web-resource/amcharts/amcharts.js"></script>
    <script src="web-resource/amcharts/serial.js"></script>
    <!-- 本模块 -->
    <script type="text/javascript" src="js/PollWarn.js"></script>
    <link rel="stylesheet" type="text/css" href="css/PollWarn.css">
  </head>
  
  <body class="easyui-layout">
    <div data-options="region:'west'" style="width:140px;background: linear-gradient(to right, #00706b , #07ad99);">
        <ul id="tt" style="margin-top:20px;color:#fff;"></ul> 
    </div>
    <div data-options="region:'center'"> 
      <div class="easyui-layout" data-options="fit:true"> 
          <div data-options="region:'north'" style="padding:10px 0 0px;height:250px;background-color:#f7f4f4;">
           <!-- 图表div1 --> 
            <div class="chartDiv" style="margin-left:20px;">
               <span class="chartTit">SO2浓度前五位</span>
            <!-- amCharts -->
            <div id="chartdiv1" style="width: 380px; height: 200px;">
            </div>
            </div>
            <!-- 图表div2 -->
            <div class="chartDiv" style="margin-left:20px;">
               <span class="chartTit">NOx浓度前五位</span>
            <!-- amCharts -->
            <div id="chartdiv2" style="width: 380px; height: 200px;">
            </div>
            </div>
            <!-- 图表div3 -->
            <div class="chartDiv" style="margin-left:20px;">
               <span class="chartTit">烟尘浓度前五位</span>
            <!-- amCharts -->
            <div id="chartdiv3" style="width: 380px; height: 200px;">
            </div>
            </div>
          </div>
     <div data-options="region:'center'" style="background-color:#f7f4f4;"> 
             <table id="dg"></table>
          </div>
      </div>
    </div>
  </body>
</html>
