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
	<link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/default/easyui.css">  
    <link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/icon.css"> 
    <script src="web-resource/jquery-easyui/jquery.min.js"></script> 
    <script type="text/javascript" src="web-resource/jquery-easyui/jquery.easyui.min.js"></script>
    
    <script src="js/dataCont.js"></script>  
  </head>
  
  <body>
  <input id="sys_name"type="hidden" value='${user.name}'><!-- 存放会话中的用户 -->
    This is  数据统计 用户：${user.name} page. <br>
  </body>
</html>
