<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>pss</title>
    
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
    <script type="text/javascript" src="js/pss.js"></script>
    
    <style type="text/css">
      .power{
        height:22px;
        width:100px;
        border: 1px solid #95B8E7;
      }
      .inputDiv{
         margin:0 0 10px 0;
         padding:0;
      }
    </style>
  </head>
  
  <body class="easyui-layout">
    <div data-options="region:'north',split:false" style="height:75px;padding:7px 10px 2px;font-size:15px;">
    <div class="inputDiv">
               单 &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; 位：<input id="jt_name" value="">  
               机 &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 组：<input id="jz_name"/>
              额定功率范围: <input id="pworMin" type="text" class="power"/>-<input id="pworMax" type="text" class="power"/>    
    </div>
    <div class="inputDiv">
                 并 网 状 态：<input id="gridStatus"/>
      pss投入状态：<input id="pssInput"/>
                 励磁投入状态: <input id="lcInput" style="width:205px;"/>
                 <a id="sertch" href="javascript:void(0)" class="easyui-linkbutton" data-options="iconCls:'icon-search'">查询</a> 
    </div>
            
    
     
    </div> 
    <div data-options="region:'center'" style="padding:0px;">
      <table id="dg"></table>  
    </div>
  </body>
</html>
