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
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <script src="web-resource/jquery-easyui/jquery.min.js"></script> 
    <script type="text/javascript" src="web-resource/jquery-easyui/jquery.easyui.min.js"></script>
    <!-- 本模块 -->
    <script type="text/javascript"src="js/equipment.js"></script>
    
    <style type="text/css">
       .d{
          margin:30px;
          height:250px;
          width:400px;
          font-size:25px;
          font-weith:600;
          float:left;
       }
       .d textarea{
          height:180px;
          width:370px;
       }
    </style>
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
                <a id="save" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-save',disabled:true">保存</a> 
                <a id="add" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-remove'">清空</a>
               
                     文件上传：<input class="easyui-filebox"name="file" id='file' style="width:280px;" data-options="required:true,missingMessage:'必填项',buttonText:'选择',buttonIcon:'icon-add'"/>
                
                <a id="upload" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-save'">上传</a> 
                <a id="download" href="javascript:void(0)" class='easyui-linkbutton'">下载模板</a> 
                <div style="display:none;">
                  <a id="a_link" href='Equipment/downloadFile'><span id="a_s">隐藏的模板下载链接</span></a>
                </div>
                
                </form> 
            </div>  
            <div data-options="region:'center'" style="padding-left:100px;">
             
               <div id="d1" class="d">
                                                   锅炉概况
                 <textarea rows="" cols=""></textarea>
               </div>
               <div id="d2" class="d">
                                                   汽机概况
                 <textarea rows="" cols=""></textarea>
               </div>
               <div id="d3" class="d">
                                                  控制系统概况
                 <textarea rows="" cols=""></textarea>
               </div>
               <div id="d4" class="d">
                                                  其他设备概况
                 <textarea rows="" cols=""></textarea>
               </div>
            </div>  
        </div>  
    </div>
    
  </body>
</html>
