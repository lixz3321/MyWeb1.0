<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'dataCont.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!-- 公共 -->
	<link rel="stylesheet" type="text/css" href="css/common.css">
	<script src="web-resource/jquery-easyui/jquery.min.js"></script> 
	<!-- easyUI -->
	<link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/default/easyui.css">  
    <link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/icon.css"> 
    <script type="text/javascript" src="web-resource/jquery-easyui/jquery.easyui.min.js"></script>
    <!-- amchart -->
    <link rel="stylesheet" href="web-resource/amcharts/style.css"	type="text/css">
    <script src="web-resource/amcharts/amcharts.js"></script>
    <script src="web-resource/amcharts/serial.js"></script>
    <script src="web-resource/amcharts/amstock.js"></script>
	<!-- 本模块 -->
    <script src="js/dataCont.js"></script>
    <script>

			
		</script>  
  </head>
  
  <body>
  <!-- Chart -->

  <input id="sys_name"type="hidden" value='${user.name}'><!-- 存放会话中的用户 -->
    <div id="chartdiv" style="width:100%; height:600px;"></div>
  </body>
</html>
