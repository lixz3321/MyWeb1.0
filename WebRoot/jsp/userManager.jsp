<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>用户管理</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<!-- 公共 -->
    <script src="web-resource/jquery-easyui/jquery.min.js"></script> 
    <link rel="stylesheet" type="text/css" href="css/common.css">
	<!-- easyUI -->
    <link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/default/easyui.css">  
    <link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/icon.css">
    <script type="text/javascript" src="web-resource/jquery-easyui/jquery.easyui.min.js"></script>
    <!-- 本模块 -->
    <script type="text/javascript"src="js/userManager.js"></script>
    <link rel="stylesheet" type="text/css" href="css/userManager.css">
    
  </head>
  
<body class="easyui-layout">  
    <div data-options="region:'north',split:false" style="height:48px;padding:10px 10px 10px;font-size:15px;">
                用户名：<input type="text" id="name" class="sertchInput"/>
     <a id="sertch" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-search'">查询</a> 
     <a id="add" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add'">添加</a> 
     <a id="save" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-save'">保存</a> 
     <a id="delete" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove'">删除</a> 
    </div>  
    <div data-options="region:'center'" style="padding:5px;">
      <table id="dg"></table>  
    </div>  
</body> 
</html>
