<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'sysManager.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
    <!-- easyUI -->
    <link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/default/easyui.css">  
    <link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/icon.css">
    <script type="text/javascript" src="web-resource/jquery-easyui/jquery.easyui.min.js"></script>
    <!-- 公共 -->
    <script src="web-resource/jquery-easyui/jquery.min.js"></script> 
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <script type="text/javascript"src="js/common.js"></script>
    <!-- 本模块 -->
    
    <script type="text/javascript"src="js/sysManager.js"></script>
  </head>
  
  <body>
          <!-- 左侧导航栏 -->
  <div id="leftbox" class="leftbox">
    <div class="ss" id="ss" style="display:;"></div>
    <div class="leftbox_title"><i></i>菜单导航</div>
    <div class="leftmenu" id="leftmenu_3">
      <span>
      <ul>
        <li style="">
          <a href="javascript:void(0)" onClick="leftMenuUrl(1)"><i class="i9"></i>
                                        电厂管理
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" onClick="leftMenuUrl(2)"><i class="i9"></i>
                                        机组维护
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" onClick="leftMenuUrl(3)"><i class="i9"></i>
                                        指标管理
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" onClick="leftMenuUrl(4)"><i class="i9"></i>
                                        测点配置
          </a>
        </li>
      </ul>         
      </span>      
    </div>
  </div>
    <!-- 框架 -->
  <div class="content">
   <iframe id="small_iframe" class="small_iframe" name="small_iframe" src="jsp/sysManage/dcManage.jsp" width="83%" height="100%" scrolling="no" frameborder="0"></iframe>
  </div>
  </body>
</html>
