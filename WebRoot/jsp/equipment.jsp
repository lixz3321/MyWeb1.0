<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
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
    <!-- 本模块 -->
    <script type="text/javascript"src="js/equipment.js"></script>
  </head>
  
  <body class="easyui-layout">
    <%String uploadStatus=request.getParameter("uploadStatus"); %>
    <input type="hidden" id="uploadStatus" value="${uploadStatus}"/>
    <div data-options="region:'west'" style="width:160px;background: linear-gradient(to right, #00706b , #07ad99);">
        <ul id="tt" style="margin-top:20px;color:#fff;"></ul> 
    </div> 
    <div data-options="region:'center'">
      <div class="easyui-layout" data-options="fit:true">  
            <div data-options="region:'north'" style="width:100%;height:40px;padding:5px 0 5px 5px;">
             <form id="fileForm" action="Equipment/uploadFile" enctype="multipart/form-data" method="post">
                <a id="sertch" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-save'">保存</a> 
                <a id="add" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove'">清空</a>
               
                     文件上传：<input class="easyui-filebox"name="file" id='file' style="width:280px;" data-options="buttonText:'选择',buttonIcon:'icon-add'"/>
                
                <a id="save" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-save'">上传</a> 
                <a id="delete" href="javascript:void(0)" class="easyui-linkbutton"">下载模板</a> 
                </form> 
            </div>  
            <div data-options="region:'center'"><input type="text"  value= "${uploadStatus}" /></div>  
        </div>  
    </div>
    
  </body>
</html>
