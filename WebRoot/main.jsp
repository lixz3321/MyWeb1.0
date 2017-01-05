<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <base href="<%=basePath%>">  
    <title>电网机组运行状态实时监测平台</title>
    <link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/default/easyui.css">  
    <link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/icon.css"> 
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <script src="web-resource/jquery-easyui/jquery.min.js"></script> 
    <script type="text/javascript" src="web-resource/jquery-easyui/jquery.easyui.min.js"></script> 
    <script charset="gb2312"src="main.js"></script>
  </head>
 <body>  
  <!-- 用户权限信息 -->
  <input id="crrent_iframe_url" type="hidden" value="${crrent_iframe_url}">
  <input id="role_leval" type="hidden" value="${role.leval}">
  <input id="name" type="hidden" value="${user.name}">
  <input id="password" type="hidden" value="${user.password}">
  
  <div class="banner">
   <div class="sysName">电网机组运行状态实时监测平台<br><p>author:李新兆<p></div>
   <div class="menu" style="display: ">
    <ul>
     <li>数据统计<div></div></li>
     <li>排放预警<div></div></li>
     <li>励磁系统<div></div></li>
     <li>设备运维<div></div></li>
     <li id="menu1" style="display: none">系统管理<div id="lt"></div></li>
     <li id="menu2" style="display: none">权限管理<div></div></li>
    </ul>
   </div>
   <div class="sys_name">${user.name}</div><!-- 会话 -->
   <div class="sys_btn" style="display: none">
     <ul>
      <li id="sys_editor"><div class="b1"></div></li>
      <li id="sys_off" style="margin-left:20px;"><div class="b2"></div></li>
     </ul>
   </div>
  </div>
  <div class="content">
     <iframe id="iframe"name="iframe" src="jsp/login.jsp" width="100%" height="100%" scrolling="yes" frameborder="0"></iframe>
  </div> 
     
 </body> 
</html>
