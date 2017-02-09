<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
  <head>
    <base href="<%=basePath%>"> 
    <title>权限管理</title> 
    <!-- easyUI -->
    <link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/default/easyui.css">  
    <link rel="stylesheet" type="text/css" href="web-resource/jquery-easyui/themes/icon.css">
    <script type="text/javascript" src="web-resource/jquery-easyui/jquery.easyui.min.js"></script>
    <!-- 公共 -->
    <script src="web-resource/jquery-easyui/jquery.min.js"></script> 
    <script type="text/javascript"src="js/common.js"></script>
    <link rel="stylesheet" type="text/css" href="css/common.css">
    <!-- 本模块 -->
    <script type="text/javascript"src="js/PermManager.js"></script>
  </head>
  <body style="float:left;">
       <!-- 左侧导航栏 -->
  <div id="leftbox" class="leftbox">
    <div class="ss" id="ss" style="display:;"></div>
    <div class="leftbox_title"><i></i>菜单导航</div>
    <div class="leftmenu" id="leftmenu_3">
      <span>
      <ul>
        <li style="">
          <a href="javascript:void(0)" onClick="leftMenuUrl(2)"><i class="i9"></i>
                                        用户管理
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" onClick="leftMenuUrl(1)"><i class="i9"></i>
                                        角色管理
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" onClick="leftMenuUrl(3)"><i class="i9"></i>
                                        角色关联
          </a>
        </li>
      </ul>         
      </span>      
    </div>
  </div>
  <!-- 框架 -->
  <div class="content">
   <iframe id="small_iframe" class="small_iframe" name="small_iframe" src="jsp/userManager.jsp" width="83%" height="100%" scrolling="no" frameborder="0"></iframe>
  </div>
  </body>
 </html>  