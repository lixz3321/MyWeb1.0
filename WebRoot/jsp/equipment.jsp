<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'equipment.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/default/easyui.css">  
    <link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/icon.css"> 
    <script src="web-resource/jquery-easyui/jquery.min.js"></script> 
    <script type="text/javascript" src="web-resource/jquery-easyui/jquery.easyui.min.js"></script>

    <script type="text/javascript"src="js/equipment.js"></script>
  </head>
  
  <body>
    This is my equipment page. <br>
  </body>
</html>
