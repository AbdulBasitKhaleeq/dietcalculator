<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Weight Loss - OHSclub</title>
    
    <meta name="description" content="weight loss ohsclub.com, weight losss">
    <meta name="keywords" content="weight loss, weight, diet chart, diet plan">
    

    <!-- Include Bootstrap .css -->
    <link rel="stylesheet" href="https://weightloss.ohsclub.com/css/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="https://weightloss.ohsclub.com/css/custom/stylesheet.css">
    <link rel="stylesheet" href="https://weightloss.ohsclub.com/css/font-awesome.min.css" type="text/css">
    <link href="https://weightloss.ohsclub.com/css/css.css" rel="stylesheet">
    <link rel="stylesheet" href="https://weightloss.ohsclub.com/css/custom/custom.css">
    <!-- Bootstrap -->

    <script src="https://weightloss.ohsclub.com/js/jquery-3.3.1.min.js"></script>
    <script src="https://weightloss.ohsclub.com/css/bootstrap/js/bootstrap.min.js"></script>
    <!-- Custom .css -->


    

    <style>
    .btn:hover{
  color: #fff;
}
.add_food_fields{
  color: #ffffff;
}

.add_food_fields:hover{
  color: #ffffff;
}



.site_logo {
  background-image: url(https://ohsclub.com/styles/quarto_cherry_light/theme/images/site_logo.svg);
  display: inline-block;
  width: 165px;
  height: 42px;
}


.our_circle{
  display: block; padding:20px; width:90px; height:20px;display: table-cell;text-align: center;vertical-align: middle;border-radius: 50%; 
}

.background{
  background-color: #fff;
}

.report_data{
  padding:20px;width:220px; height:200px;display: table-cell;text-align: center;vertical-align: middle;
}

.bg-pink{
  background-color: #FF4C61;
  
}
.bg-indigo{
  background-color: #473251;
  
}
.btn {
  color: #fff !important;
}
    </style>

</head>

<header>


<div class="container">
<div id="page-header">
<div class="headerbar" role="banner">
<div class="inner">
<div id="site-description" class="site-description">
<a id="logo" class="logo" href="https://weightloss.ohsclub.com" title="Weight Loss"><span class="site_logo"></span></a>

</div>
<div id="search-box" class="search-box search-header" role="search">

</div>
</div>
</div>
<div class="navbar" role="navigation">
<div class="inner">
    <ul id="nav-main" class="nav-main linklist" role="menubar">
            <li id="quick-links" class="quick-links dropdown-container responsive-menu dropdown-right dropdown-down" data-skip-responsive="true">
                <a href="https://ohsclub.com/" class="dropdown-trigger dropdown-toggle">
                <i class="icon fa-bars fa-fw" aria-hidden="true"></i><span>Visit Our Discussion Forum</span>
                </a>
            </li>
            <li>
                <a href="#" title="About us" role="menuitem">
                <i class="icon fa-info-circle fa-fw" aria-hidden="true"></i><span>About us</span>
                </a>
            </li>
            <?php if(!empty(@$_SESSION['user_id'])): ?>
            <li class="rightside" data-skip-responsive="true">
                <a href="logout.php" title="Login" accesskey="x" role="menuitem" class="login-window">
                <i class="icon fa-power-off fa-fw" aria-hidden="true"></i><span>Log Out</span>
                </a>
            </li>
            <?php else: ?>
            <li class="rightside" data-skip-responsive="true">
                <a href="login.php" title="Login" accesskey="x" role="menuitem" class="login-window">
                <i class="icon fa-power-off fa-fw" aria-hidden="true"></i><span>Login</span>
                </a>
            </li>
            <li class="rightside" data-skip-responsive="true">
               <a href="registration.php" role="menuitem">
                <i class="icon fa-pencil-square-o  fa-fw" aria-hidden="true"></i><span>Register</span>
                </a>
            </li>
            <?php endif; ?>
    </ul>


            <ul id="nav-breadcrumbs" class="nav-breadcrumbs linklist navlinks" role="menubar">
            <li class="breadcrumbs" itemscope="" itemtype="http://schema.org/BreadcrumbList" style="max-width: 1097px;">
            <span class="crumb" itemtype="http://schema.org/ListItem" itemprop="itemListElement" itemscope=""><a href="index.php" itemprop="url" accesskey="h" data-navbar-reference="index" title="OHS"><i class="icon fa-home fa-fw"></i><span itemprop="title">OHS</span></a></span>
            </li>
            </ul>
            </div>  
        </div>
    </div>

</div>

</header>