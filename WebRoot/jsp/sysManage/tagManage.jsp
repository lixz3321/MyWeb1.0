<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'tagManage.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
    <!-- 公共 -->
    <script src="web-resource/jquery-easyui/jquery.min.js"></script> 
    <link rel="stylesheet" type="text/css" href="css/common.css">
	<!-- easyUI -->
    <link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/default/easyui.css">  
    <link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/icon.css">
    <script type="text/javascript" src="web-resource/jquery-easyui/jquery.easyui.min.js"></script>
    <!-- 本模块 -->
    <script type="text/javascript"src="js/sysManage/tagManage.js"></script>
    <script type="text/javascript"src="js/sysManage/indexWin.js"></script>
  </head>
  
  <body class="easyui-layout">
     <!-- 隐藏域（公共数据） -->
      <input type="hidden" id="dc_id"/>
      <input type="hidden" id="jz_id"/>
      <input type="hidden" id="index_id"/>
      <input type="hidden" id="dc_name"/>
      <input type="hidden" id="jz_name"/>
      <input type="hidden" id="index_name"/>
      <input type="hidden" id="index_code"/>
      <input type="hidden" id="index_unit"/>
      <input type="hidden" id="tag_name"/>
      <input type="hidden" id="type"/>
      
      
     <div data-options="region:'north',split:false" style="height:48px;padding:10px 10px 10px;font-size:15px;">
                测点名称：<input type="text" id="name" class="sertchInput"/>
     <a id="sertch" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-search'">查询</a> 
     <a id="add" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-add',disabled:true">添加</a> 
     <a id="save" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-save',disabled:true">保存</a> 
     <a id="delete" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove'">删除</a> 
    </div> 
    <div data-options="region:'west'" style="width:160px;">
        <ul id="tt"></ul> 
    </div>   
    <div data-options="region:'center'" style="padding:0px;">
      <table id="dg"></table>  
    </div>
    <!-- 指标弹出窗 -->
    <%-- <jsp:include page="indexWin.html"></jsp:include>  --%> 
    <div id="win" class="easyui-window" title="请选择指标" style="width:800px;height:400px;"  
        data-options="iconCls:'icon-save',modal:true,closed:true">  
        <div class="easyui-layout" data-options="fit:true">
		  <!-- 数据表格 -->
		  <div data-options="region:'center'">
			 <table id="Igrid" data-options="fit:true"></table>
		  </div>
		</div>
    </div> 
  </body>
</html>
