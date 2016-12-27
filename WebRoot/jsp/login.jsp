<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'loging.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
    <link rel="stylesheet" type="text/css" href="css/login.css"></link>
    <script charset="gb2312" src="web-resource/jquery-easyui/jquery.min.js"></script> 
    <script charset="gb2312" type="text/javascript" src="js/login.js"></script>
  </head>
  
  <body>
    <input id="url"type="hidden" value='${url}'>
    <form action="login/test4">
     账户：<input class="login_input" type="text" name="name" value='${user.name}'><br>
     密码：<input class="login_input" type="password" name="pass" value='${user.password}'><br>
     <div class="login_btn_div">
     <input id="login" class="login_btn" type="button" value="登陆">
     <input class="login_btn" type="reset" value="重置">
     </div>
    </form>
    
  </body>
</html>
