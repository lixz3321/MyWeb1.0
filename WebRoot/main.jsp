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
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <script src="web-resource/jquery-easyui/jquery.min.js"></script> 
    <script type="text/javascript" src="web-resource/jquery-easyui/jquery.easyui.min.js"></script> 
    <script charset="gb2312"src="main.js"></script>
   <style type="text/css">
     .passbox{
        margin:8px 0 0 0;
        font-size:10px;
        font-family:\5FAE\8F6F\96C5\9ED1;
     }
   </style>
  </head>
 <body>  
  <!-- 用户权限信息 -->
  <input id="crrent_iframe_url" type="hidden" value="${crrent_iframe_url}">
  <input id="role_leval" type="hidden" value="${role.leval}">
  <input id="id" type="hidden" value="${user.id}">
  <input id="name" type="hidden" value="${user.name}">
  <input id="password" type="hidden" value="${user.password}">
  
  <!-- 菜单栏 -->
  <div class="banner">
   <div class="sysName">电网机组运行状态实时监测平台<br><p>author:李新兆<p></div>
   <div class="menu" style="display: none">
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

  <!-- 框架 -->
  <div class="content">
     <iframe id="iframe"name="iframe" src="jsp/login.jsp" width="100%" height="100%" scrolling="no" frameborder="0"></iframe>
  </div>
  <!-- 修改密码弹出窗 --> 
    <div id="dd">
    <div style="margin:20px 0 0 25px;">
      原  密  码 ：<input id="v1" class="easyui-validatebox passbox" data-options="required:true,missingMessage:'密码不能为空',validType:'length[6,8]',invalidMessage:'请输入6-8位字母或数字'" /><br>
      新  密  码 ：<input id="v2" class="easyui-validatebox passbox" data-options="required:true,missingMessage:'密码不能为空',validType:'length[6,8]',invalidMessage:'请输入6-8位字母或数字'" /><br>
  确认密码：<input id="v3" class="easyui-validatebox passbox" data-options="required:true,missingMessage:'密码不能为空',validType:'length[6,8]',invalidMessage:'请输入6-8位字母或数字'" />    
     </div>
    </div> 
 </body> 
</html>
