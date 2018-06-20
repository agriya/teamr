angular.module('templates-app', ['themes/teamr/views/common/404.tpl.html', 'themes/teamr/views/common/footer.tpl.html', 'themes/teamr/views/common/header.tpl.html', 'themes/teamr/views/contactUs/contactUs.tpl.html', 'themes/teamr/views/courses/addCourse.tpl.html', 'themes/teamr/views/courses/courses.tpl.html', 'themes/teamr/views/courses/directives/amountDisplay.tpl.html', 'themes/teamr/views/courses/directives/categories.tpl.html', 'themes/teamr/views/courses/directives/courseCategory.tpl.html', 'themes/teamr/views/courses/directives/manageCourseNavbar.tpl.html', 'themes/teamr/views/courses/directives/onlineLessons.tpl.html', 'themes/teamr/views/courses/directives/paymentButtons.tpl.html', 'themes/teamr/views/courses/learnCourse.tpl.html', 'themes/teamr/views/courses/learning.tpl.html', 'themes/teamr/views/courses/manageCourse.tpl.html', 'themes/teamr/views/courses/manageCourseBasics.tpl.html', 'themes/teamr/views/courses/manageCourseCurriculum.tpl.html', 'themes/teamr/views/courses/manageCourseDangeZone.tpl.html', 'themes/teamr/views/courses/manageCourseFeedback.tpl.html', 'themes/teamr/views/courses/manageCourseGoals.tpl.html', 'themes/teamr/views/courses/manageCourseHelp.tpl.html', 'themes/teamr/views/courses/manageCourseImage.tpl.html', 'themes/teamr/views/courses/manageCoursePrice.tpl.html', 'themes/teamr/views/courses/manageCoursePromoVideo.tpl.html', 'themes/teamr/views/courses/manageCourseSummary.tpl.html', 'themes/teamr/views/courses/search.tpl.html', 'themes/teamr/views/courses/teaching.tpl.html', 'themes/teamr/views/courses/viewCourse.tpl.html', 'themes/teamr/views/courses/wishlist.tpl.html', 'themes/teamr/views/home/home.tpl.html', 'themes/teamr/views/pages/pages.tpl.html', 'themes/teamr/views/users/activation.tpl.html', 'themes/teamr/views/users/change_password.tpl.html', 'themes/teamr/views/users/directives/profileImage.tpl.html', 'themes/teamr/views/users/directives/profileName.tpl.html', 'themes/teamr/views/users/forgot_password.tpl.html', 'themes/teamr/views/users/login.tpl.html', 'themes/teamr/views/users/logout.tpl.html', 'themes/teamr/views/users/signup.tpl.html', 'themes/teamr/views/users/subscribe_plans.tpl.html', 'themes/teamr/views/users/user_profile.tpl.html']);

angular.module("themes/teamr/views/common/404.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/common/404.tpl.html",
    "<section class=\"clearfix\">\n" +
    "    <div class=\"well\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-11 col-sm-12 col-xs-12 nav navbar-right\">\n" +
    "			<div class=\"panel clearfix\">\n" +
    "				<div class=\"well-lg hidden-sm hidden-xs\"></div>\n" +
    "				<div class=\"col-xs-12\">\n" +
    "					<div class=\"tex-center\">	\n" +
    "						<h3>404 Page Not Found</h3>\n" +
    "					</div>		\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("themes/teamr/views/common/footer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/common/footer.tpl.html",
    "<!--footer section start-->\n" +
    "<footer id=\"footer\" class=\"footer well clearfix\">\n" +
    "    <div class=\"container\">\n" +
    "      <div class=\"row\"> \n" +
    "				<div class=\"col-xs-12\">\n" +
    "				  <div class=\"col-sm-4 text-muted\">\n" +
    "					<div class=\"row\">\n" +
    "					  <p class=\"h4\"><a title=\"{{$root.settings['site.name']}}\" href=\"#!/\"><img title=\"{{$root.settings['site.name']}}\" alt=\"[Image: {{$root.settings['site.name']}}]\" src=\"assets/img/logo.png\"></a></p>\n" +
    "					  <p>{{'Our mission is to bring affordable, technology education to people everywhere, in order to help them achieve their dreams and change the world.'| translate}}</p>\n" +
    "					</div>\n" +
    "				  </div>\n" +
    "				  <div class=\"col-sm-7 col-sm-offset-1\">\n" +
    "					<div class=\"row\">\n" +
    "					  <div class=\"col-sm-4 text-muted\">\n" +
    "						<dl>\n" +
    "						  <dt class=\"navbar-btn\">{{'Company'| translate}}</dt>\n" +
    "						  <dd><a class=\"h5\" title=\"{{'About'| translate}}\" href=\"#!/page/about\">{{'About'| translate}}</a></dd>\n" +
    "						  <dd><a class=\"h5\" title=\"{{'People'| translate}}\" href=\"#!/page/people\">{{'People'| translate}}</a></dd>\n" +
    "						  <dd><a class=\"h5\" title=\"{{'Leadership'| translate}}\" href=\"#!/page/leadership\">{{'Leadership'| translate}}</a></dd>\n" +
    "						  <dd><a class=\"h5\" title=\"{{'Careers'| translate}}\" href=\"#!/page/careers\">{{'Careers'| translate}}</a></dd>\n" +
    "						  <dd><a class=\"h5\" title=\"{{'Contact Us'| translate}}\" href=\"#!/contactus\">{{'Contact Us'| translate}}</a></dd>\n" +
    "						</dl>\n" +
    "					  </div>\n" +
    "					  <div class=\"col-sm-4 text-muted\">\n" +
    "						<dl>\n" +
    "						  <dt class=\"navbar-btn\">{{'Community'| translate}}</dt>\n" +
    "						  <dd><a class=\"h5\" title=\"{{'Partners'| translate}}\" href=\"#!/page/partners\">{{'Partners'| translate}}</a></dd>\n" +
    "						  <dd><a class=\"h5\" title=\"{{'Community'| translate}}\" href=\"#!/page/community\">{{'Community'| translate}}</a></dd>\n" +
    "						  <dd><a class=\"h5\" title=\"{{'Programs'| translate}}\" href=\"#!/page/programs\">{{'Programs'| translate}}</a></dd>\n" +
    "						  <dd><a class=\"h5\" title=\"{{'Developers'| translate}}\" href=\"#!/page/developers\">{{'Developers'| translate}}</a></dd>\n" +
    "						</dl>\n" +
    "					  </div>\n" +
    "					  <div class=\"col-sm-4 text-muted\">\n" +
    "						<dl>\n" +
    "						  <dt class=\"navbar-btn\">{{'More'| translate}}</dt>\n" +
    "						  <dd><a class=\"h5\" title=\"{{'Terms'| translate}}\" href=\"#!/page/terms\">{{'Terms'| translate}}</a></dd>\n" +
    "						  <dd><a class=\"h5\" title=\"{{'Privacy Policy'| translate}}\" href=\"#!/page/privacy-policy\">{{'Privacy Policy'| translate}}</a></dd>\n" +
    "						  <dd><a class=\"h5\" title=\"{{'Press'| translate}}\" href=\"#!/page/press\">{{'Press'| translate}}</a></dd>\n" +
    "						  <dd><a class=\"h5\" title=\"{{'PHP Development'| translate}}\" href=\"#!/page/help\">{{'Help'| translate}}</a></dd>\n" +
    "						  <dd class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Translations') > -1\">{{'Translate'| translate}}</dd>\n" +
    "						  <dd oc-lazy-load=\"$root.loadTranslations\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Translations') > -1\"><div ng-translate-language-select ></div></dd>\n" +
    "						</dl>\n" +
    "					  </div>\n" +
    "					</div>\n" +
    "				  </div>\n" +
    "				</div>\n" +
    "			<div class=\"pull-left clearfix text-muted col-sm-9\">\n" +
    "			<div class=\"well-sm\"></div>\n" +
    "				<p>© {{cdate | date:'yyyy'}} <a href=\"#!\" title=\"{{$root.settings['site.name']}}\" class=\"text-muted\">{{$root.settings['site.name']}}</a>, {{'All rights reserved.'|translate}} <a href=\"http://teamr.demo.agriya.com/\" target=\"_blank\" title=\"{{'Powered by Teamr'| translate}}\"><img src=\"assets/img/teamr.png\" alt=\"[Image: {{'Powered by Teamr'| translate}}]\" title=\"{{'Powered by Teamr'| translate}}\" ></a> ,{{' v'|translate}}{{$root.settings['site.version']}} {{'made in '|translate}}&nbsp;<a href=\"http://www.agriya.com/\" target=\"_blank\" title=\"{{'Agriya Web Development'| translate}}\"><img src=\"assets/img/powered-by-agriya.png\" alt=\"[Image: {{'Agriya Web Development'| translate}}]\" title=\"{{'Agriya Web Development'| translate}}\"></a>  <a href=\"http://www.cssilize.com/\" target=\"_blank\" title=\"{{'CSSilized by CSSilize, PSD to XHTML Conversion'| translate}}\"> <img src=\"assets/img/cssilize.png\" alt=\"[Image: {{'CSSilized by CSSilize, PSD to XHTML Conversion'| translate}}]\" title=\"{{'CSSilized by CSSilize, PSD to XHTML Conversion'| translate}}\"> </a></p>\n" +
    "			</div>\n" +
    "			<div class=\"col-sm-3\">\n" +
    "				<ul class=\"list-inline text-muted navbar-right\">\n" +
    "				  <li class=\"navbar-btn clearfix\"> \n" +
    "					<span ng-show=\"$root.settings['social_networks.facebook']\">\n" +
    "					  <a  href=\"{{$root.settings['social_networks.facebook']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-sm\"><i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i></span></a>\n" +
    "					</span>\n" +
    "					<span ng-show=\"$root.settings['social_networks.twitter']\">\n" +
    "					  <a href=\"{{$root.settings['social_networks.twitter']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-sm\"> <i class=\"fa fa-circle fa-stack-2x\"></i><i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i></span></a>\n" +
    "					</span>\n" +
    "					<span ng-show=\"$root.settings['social_networks.linkedin']\">\n" +
    "					  <a href=\"{{$root.settings['social_networks.linkedin']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-sm\"> <i class=\"fa fa-circle fa-stack-2x\"></i><i class=\"fa fa-linkedin fa-stack-1x fa-inverse\"></i></span></a>\n" +
    "					</span>\n" +
    "					<span ng-show=\"$root.settings['social_networks.foursquare']\">\n" +
    "					  <a href=\"{{$root.settings['social_networks.foursquare']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-sm\"> <i class=\"fa fa-circle fa-stack-2x\"></i><i class=\"fa fa-foursquare fa-stack-1x fa-inverse\"></i></span></a>\n" +
    "					</span>\n" +
    "					<span ng-show=\"$root.settings['social_networks.pinterest']\">\n" +
    "					  <a href=\"{{$root.settings['social_networks.pinterest']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-sm\"> <i class=\"fa fa-circle fa-stack-2x\"></i><i class=\"fa fa-pinterest fa-stack-1x fa-inverse\"></i></span></a>\n" +
    "					</span>\n" +
    "					<span ng-show=\"$root.settings['social_networks.flickr']\">\n" +
    "					  <a href=\"{{$root.settings['social_networks.flickr']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-sm\"> <i class=\"fa fa-circle fa-stack-2x\"></i><i class=\"fa fa-flickr fa-stack-1x fa-inverse\"></i></span></a>\n" +
    "					</span>\n" +
    "					<span ng-show=\"$root.settings['social_networks.instagram']\">\n" +
    "					  <a href=\"{{$root.settings['social_networks.instagram']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-sm\"> <i class=\"fa fa-circle fa-stack-2x\"></i><i class=\"fa fa-instagram fa-stack-1x fa-inverse\"></i></span></a>\n" +
    "					</span>\n" +
    "					<span ng-show=\"$root.settings['social_networks.tumblr']\">\n" +
    "					  <a href=\"{{$root.settings['social_networks.tumblr']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-sm\"> <i class=\"fa fa-circle fa-stack-2x\"></i><i class=\"fa fa-tumblr fa-stack-1x fa-inverse\"></i></span></a>\n" +
    "					</span>\n" +
    "					<span ng-show=\"$root.settings['social_networks.vimeo']\">\n" +
    "					  <a href=\"{{$root.settings['social_networks.vimeo']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-sm\"> <i class=\"fa fa-circle fa-stack-2x\"></i><i class=\"fa fa-vimeo-square fa-stack-1x fa-inverse\"></i></span></a>\n" +
    "					</span>\n" +
    "					<span ng-show=\"$root.settings['social_networks.youtube']\">\n" +
    "					  <a href=\"{{$root.settings['social_networks.youtube']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-sm\"> <i class=\"fa fa-circle fa-stack-2x\"></i><i class=\"fa fa-youtube-play fa-stack-1x fa-inverse\"></i></span></a>\n" +
    "					</span>\n" +
    "					<span ng-show=\"$root.settings['social_networks.google_plus']\">\n" +
    "					  <a href=\"{{$root.settings['social_networks.google_plus']}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-sm\"> <i class=\"fa fa-circle fa-stack-2x\"></i><i class=\"fa fa-google fa-stack-1x fa-inverse\"></i></span></a>\n" +
    "					</span>\n" +
    "				  </li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "	  </div>\n" +
    "    </div>\n" +
    "</footer>");
}]);

angular.module("themes/teamr/views/common/header.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/common/header.tpl.html",
    "<header id=\"header\" class=\"header\">\n" +
    "	<div class=\"navbar navbar-default navbar-fixed-top\" ng-show=\"$root.isHome || $root.currentURL === '/subscribe/plans' || $root.currentURL === '/users/login' || $root.currentURL === '/users/signup?subscription_id' || $root.currentURL === '/users/forgot_password' || $root.currentURL === '/users/signup'\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"navbar-header\">\n" +
    "            <div class=\"navbar-btn clearfix visible-xs\"></div>\n" +
    "            <button data-toggle=\"collapse\" data-target=\".navbar-collapse\" class=\"navbar-toggle\" type=\"button\"><span class=\"sr-only\">{{'toggle navigation'| translate}}</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button>\n" +
    "            <h1>\n" +
    "				<a href=\"#!/\" title=\"{{$root.settings['site.name']}}\" ng-show=\"!isAuth\"><img src=\"assets/img/logo.png\" alt=\"[Image: {{$root.settings['site.name']}}]\" title=\"{{$root.settings['site.name']}}\" class=\"img-responsive\"/></a>\n" +
    "				<a href=\"#!/courses/search\" title=\"{{$root.settings['site.name']}}\" ng-show=\"isAuth\"><img src=\"assets/img/logo.png\" alt=\"[Image: {{$root.settings['site.name']}}]\" title=\"{{$root.settings['site.name']}}\" class=\"img-responsive\"/></a>\n" +
    "			</h1>\n" +
    "          </div>\n" +
    "          <nav class=\"collapse navbar-collapse navbar-right\">\n" +
    "            <ul class=\"nav navbar-nav text-center\" ng-show=\"!isAuth\">\n" +
    "			 <li ng-show=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\"><a  href=\"#!users/login\" class=\"h5 navbar-btn\" title=\"{{'Become an Instructor'|translate}}\">{{'Become an Instructor'|translate}}</a></li>\n" +
    "              <li><a ng-href=\"#!/users/login\" ng-click=\"modalLogin($event)\" title=\"{{'Sign in'| translate}}\" class=\"h5 navbar-btn\">{{'Sign in'| translate}}</a></li>\n" +
    "			  <li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1\"><a ng-href=\"#!/users/signup\" class=\"h5 navbar-btn\" ng-click=\"modalSignup($event)\" title=\"{{'Signup'| translate}}\">{{'Signup'| translate}}</a></li>\n" +
    "              <li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\"><a ng-href=\"#!/subscribe/plans\" title=\"{{'Pricing'| translate}}\" class=\"h5 navbar-btn\"><span class=\"text-success\">{{'Pricing'| translate}}</span></a></li>\n" +
    "            </ul>\n" +
    "			<ul class=\"nav navbar-nav navbar-btn\" ng-show=\"isAuth\">\n" +
    "				 <li ng-show=\"$root.auth.providertype === 'admin'\"><a href=\"ag-admin\" title=\"{{'Admin Dashboard'|translate}}\" class=\"h5 text-muted\">{{'Admin Dashboard'| translate}}</a></li>\n" +
    "				 <li ng-show=\"model.userDetails.is_teacher === 1 && $root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\"><a href=\"#!/my-courses/teaching\" title=\"{{'Instructor Dashboard'|translate}}\" class=\"h5 text-muted\">{{'Instructor Dashboard'| translate}}</a></li>\n" +
    "				 <li ng-show=\"model.userDetails.is_teacher !== 1 && $root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\"><a href=\"#!/courses/add\"  title=\"{{'Become an Instructor'|translate}}\" class=\"h5 text-muted navbar-btn\">{{'Become an Instructor'| translate}}</a></li>\n" +
    "				<li class=\"dropdown dropdown-img\">					\n" +
    "					<a ng-if=\"$root.auth.user_image_hash !== '' && $root.auth.user_image_hash !== null\" href=\"\" class=\"btn-sm dropdown-toggle user-img\" data-toggle=\"dropdown\"> \n" +
    "						<img  ng-src=\"{{$root.site_url}}img/small_thumb/User/{{$root.auth.user_image_hash}}\" alt=\"[Image: {{$root.auth.displayname}}]\" title=\"{{$root.auth.displayname}}\" class=\"img-circle\"/>\n" +
    "						<span class=\"caret\"></span>\n" +
    "					</a>\n" +
    "					<a ng-if=\"$root.auth.user_image_hash === '' || $root.auth.user_image_hash === null\" href=\"\" class=\"btn-sm dropdown-toggle\" data-toggle=\"dropdown\"> \n" +
    "						<img  ng-src=\"{{$root.site_url}}img/small_thumb/User/0.default.jpg\" alt=\"[Image: {{$root.auth.displayname}}]\" title=\"{{$root.auth.displayname}}\" class=\"img-circle\" />\n" +
    "						<span class=\"caret\"></span>\n" +
    "					</a>\n" +
    "					<ul class=\"dropdown-menu pull-right\">\n" +
    "						<li><a href=\"#!/my-courses/learning\" title=\"{{'My Courses'|translate}}\" class=\"text-muted\">{{'My Courses'|translate}}</a></li>\n" +
    "						<li><a href=\"#!/users/change_password\" title=\"{{'Change Password'|translate}}\" class=\"text-muted\">{{'Change Password'|translate}}</a></li>\n" +
    "						<li><a href=\"#!/users/edit-profile\" title=\"{{'Edit Profile'|translate}}\" class=\"text-muted\">{{'Edit Profile'|translate}}</a></li>\n" +
    "						<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\" ><a href=\"#!/me/subscriptions\" title=\"{{'My Subscriptions'|translate}}\" class=\"text-muted\">{{'My Subscriptions'|translate}}</a></li>\n" +
    "						<li class=\"divider col-xs-12\"></li>\n" +
    "						<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\"><a href=\"#!/transactions\" title=\"{{'My Transactions'| translate}}\">{{'My Transactions'| translate}}</a></li>\n" +
    "						<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Withdrawal') > -1\"><a href=\"#!/user_cash_withdrawals\" title=\"{{'Withdraw Fund Requests'| translate}}\">{{'Withdraw Fund Requests'| translate}}</a></li>\n" +
    "						<li ng-if='!contentInIframe'><a href=\"#!/users/logout\" title=\"{{'Logout'|translate}}\" class=\"text-muted\">{{'Logout'|translate}}</a></li>\n" +
    "					</ul>\n" +
    "				</li>\n" +
    "			</ul>\n" +
    "          </nav>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "	<div ng-hide=\"$root.isHome || $root.currentURL === '/subscribe/plans' || $root.currentURL === '/users/login' || $root.currentURL === '/users/signup?subscription_id' || $root.currentURL === '/users/forgot_password' || $root.currentURL === '/users/signup'\">\n" +
    "		 <div class=\"col-md-1 col-sm-2 row hidden-xs navbar-fixed-top hidden-sm\" ng-hide=\"$root.isHome || $root.currentURL === '/{slug}/learn/{id}?lesson'\">\n" +
    "			<div class=\"navbar-btn clearfix list-group-item-text list-group-item-heading\"></div>\n" +
    "			<div class=\"navbar navbar-inverse hidden-xs\">\n" +
    "				<ul class=\"list-unstyled sidemenu\">\n" +
    "				  <li class=\"text-center h4\">\n" +
    "						<a href=\"#!/course/search\"  tooltp-placement=\"right\" tooltp=\"Home\"><img src=\"assets/img/home.png\" alt=\"[Image: {{'Home'|translate}}]\" title=\"{{'Home'|translate}}\" ng-if=\"$root.isAuth\"></a>\n" +
    "						<a href=\"#!/\"  tooltp-placement=\"right\" tooltp=\"Home\"><img src=\"assets/img/home.png\" alt=\"[Image: {{'Home'|translate}}]\" title=\"{{'Home'|translate}}\" ng-if=\"!$root.isAuth\"></a>\n" +
    "				   </li>\n" +
    "				  <li class=\"text-center h4\" ng-class=\"{'active': $root.activeMenu === 'dashboard'}\" ng-if='isAuth'><a href=\"#!/my-courses/learning\"  tooltp-placement=\"right\" title=\"\" tooltp=\"Dashboard\" class=\"text-muted\"><img src=\"assets/img/dashboard.png\" alt=\"[Image: {{'Dashboard'|translate}}]\" title=\"{{'Dashboard'|translate}}\"></a></li>\n" +
    "				  <li class=\"text-center h4\" ng-class=\"{'active': $root.activeMenu === 'library' ||  !$root.activeMenu}\"><a href=\"#!/courses/search\"  tooltp-placement=\"right\" title=\"\"tooltp=\"Library\"><img src=\"assets/img/library.png\" alt=\"[Image: {{'Library'|translate}}]\" title=\"{{'Library'|translate}}\"></a></li>\n" +
    "				  <li class=\"text-center h4\" ng-class=\"{'active': $root.activeMenu === 'settings'}\"><a href=\"#!/users/edit-profile\"  tooltp-placement=\"right\" title=\"\" tooltp=\"Settings\"><img src=\"assets/img/setting.png\" alt=\"[Image: {{'Settings'|translate}}]\" title=\"{{'Settings'|translate}}\"></a></li>\n" +
    "				</ul>\n" +
    "				<div class=\"well-lg\"></div>\n" +
    "				<div class=\"well-lg\"></div>\n" +
    "				<div class=\"well-lg\"></div>\n" +
    "				<div class=\"well-lg\"></div>\n" +
    "				<div class=\"well-lg\"></div>\n" +
    "				<div class=\"well-lg\"></div>\n" +
    "				<div class=\"well-lg\"></div>\n" +
    "				<div class=\"well-lg\"></div>\n" +
    "				<div class=\"well-lg\"></div>\n" +
    "				<div class=\"well-sm\"></div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"col-sm-12 col-xs-12 nav navbar-default navbar-fixed-top col-sm-offset-0 col-sm-offset-0 navbar-btn list-group-item-text list-group-item-heading\" ng-class=\"{'col-md-11 col-md-offset-1 ': $root.currentURL !== '/{slug}/learn/{id}?lesson'}\">\n" +
    "			<div class=\"col-xs-12\">\n" +
    "				<div class=\"navbar-header\">\n" +
    "					<button data-toggle=\"collapse\" data-target=\".navbar-collapse\" class=\"navbar-toggle\" type=\"button\"><span class=\"sr-only\">{{'toggle navigation'| translate}}</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button>\n" +
    "					<div class=\"navbar-btn list-group-item-heading clearfix hidden-xs\"></div>\n" +
    "					<div class=\"navbar-btn list-group-item-heading clearfix hidden-xs\"></div>\n" +
    "					<div class=\"navbar-btn clearfix hidden-xs\"></div>\n" +
    "					<div class=\"navbar-btn visible-xs\"></div>\n" +
    "					<p class=\"text-muted\"> <i class=\"fa fa-arrow-left fa-lg fa-fw\"></i> \n" +
    "						<a ng-if=\"$root.currentURL === '/course/{id}/{slug}'\" href=\"#!/courses/search\" title=\"{{'Library'|translate}}\" class=\"h4 list-group-item-text\"> <strong>{{'Library'| translate}}</strong></a>\n" +
    "						<a ng-if=\"$root.currentURL !== '/course/{id}/{slug}' && isAuth\" href=\"#!/courses/search\" title=\"{{'Home'|translate}}\" class=\"h4 list-group-item-text\"> <strong>{{'Home'| translate}}</strong></a>\n" +
    "						<a ng-if=\"$root.currentURL !== '/course/{id}/{slug}' && !isAuth\" href=\"#!/\" title=\"{{'Home'|translate}}\" class=\"h4 list-group-item-text\"> <strong>{{'Home'| translate}}</strong></a>\n" +
    "					</p>\n" +
    "				</div>\n" +
    "				<nav class=\"collapse navbar-collapse navbar-right\">\n" +
    "					<ul class=\"nav navbar-nav text-center\" ng-show=\"!isAuth\">\n" +
    "					  <li><a href=\"#!/page/help\" title=\"{{'Help'| translate}}\" class=\"h5 text-muted\"><strong>{{'Help'| translate}}</strong></a></li>\n" +
    "					  <li><a ng-href=\"#!/users/login\" ng-click=\"modalLogin($event)\" title=\"{{'Sign in'| translate}}\" class=\"h5 text-muted navbar-btn\">{{'Sign in'| translate}}</a></li>			  \n" +
    "					  <li>			  \n" +
    "						<div class=\"h3 list-group-item-text\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\"><a href=\"#!/subscribe/plans\" title=\"{{'Pricing'| translate}}\" class=\"btn btn-success btn-lg\"><strong>{{'Pricing'| translate}}</strong></a></div>\n" +
    "						<div class=\"h3 list-group-item-text\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1\"><a href=\"#!/users/signup\" title=\"{{'Signup'| translate}}\" class=\"btn btn-success btn-lg\"><strong>{{'Signup'| translate}}</strong></a></div>\n" +
    "					  </li>\n" +
    "					</ul>\n" +
    "					<ul class=\"nav navbar-nav navbar-btn\" ng-show=\"isAuth\">\n" +
    "					   <li ng-show=\"$root.auth.providertype === 'admin'\" ><a href=\"ag-admin\" title=\"{{'Admin Dashboard'|translate}}\">{{'Admin Dashboard'| translate}}</a></li>\n" +
    "					   <li ng-show=\"model.userDetails.is_teacher === 1 && $root.settings['site.enabled_plugins'].indexOf('Instructor') > -1 && $root.auth.providertype !== 'admin'\"><a href=\"#!/my-courses/teaching\" title=\"{{'Instructor Dashboard'|translate}}\" class=\"\">{{'Instructor Dashboard'| translate}}</a></li>\n" +
    "					   <li ng-show=\"model.userDetails.is_teacher !== 1 && $root.settings['site.enabled_plugins'].indexOf('Instructor') > -1 && $root.auth.providertype !== 'admin'\"><a href=\"#!/courses/add\"  title=\"{{'Become an Instructor'|translate}}\" class=\"\">{{'Become an Instructor'| translate}}</a></li>\n" +
    "						<li class=\"dropdown dropdown-img\">\n" +
    "							<a ng-if=\"$root.auth.user_image_hash !== '' && $root.auth.user_image_hash !== null\" href=\"\" class=\"btn-sm dropdown-toggle user-img\" data-toggle=\"dropdown\"> \n" +
    "								<img  ng-src=\"{{$root.site_url}}img/small_thumb/User/{{$root.auth.user_image_hash}}\" alt=\"[Image: {{$root.auth.displayname}}]\" title=\"{{$root.auth.displayname}}\" class=\"img-circle\"/>\n" +
    "								<span class=\"caret\"></span>\n" +
    "							</a>\n" +
    "							<a ng-if=\"$root.auth.user_image_hash === '' || $root.auth.user_image_hash === null\" href=\"\" class=\"btn-sm dropdown-toggle\" data-toggle=\"dropdown\"> \n" +
    "								<img  ng-src=\"{{$root.site_url}}img/small_thumb/User/0.default.jpg\" alt=\"[Image: {{$root.auth.displayname}}]\" title=\"{{$root.auth.displayname}}\" class=\"img-circle\" />\n" +
    "								<span class=\"caret\"></span>\n" +
    "							</a>\n" +
    "							<ul class=\"dropdown-menu navbar-right\">\n" +
    "								<li><a href=\"#!/my-courses/learning\" title=\"{{'My Courses'|translate}}\" class=\"text-muted\">{{'My Courses'|translate}}</a></li>\n" +
    "								<li><a href=\"#!/users/change_password\" title=\"{{'Change Password'|translate}}\" class=\"text-muted\">{{'Change Password'|translate}}</a></li>\n" +
    "								<li><a href=\"#!/users/edit-profile\" title=\"{{'Edit Profile'|translate}}\" class=\"text-muted\">{{'Edit Profile'|translate}}</a></li>\n" +
    "								<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\" ><a href=\"#!/me/subscriptions\" title=\"{{'My Subscriptions'|translate}}\" class=\"text-muted\">{{'My Subscriptions'|translate}}</a></li>\n" +
    "								<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\"><a href=\"#!/transactions\" title=\"{{'My Transactions'| translate}}\">{{'My Transactions'| translate}}</a></li>\n" +
    "								<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Withdrawal') > -1\"><a href=\"#!/user_cash_withdrawals\" title=\"{{'Withdraw Fund Requests'| translate}}\">{{'Withdraw Fund Requests'| translate}}</a></li>\n" +
    "								<li class=\"divider col-xs-12\"></li>\n" +
    "								<li ng-if='!contentInIframe'><a href=\"#!/users/logout\" title=\"{{'Logout'|translate}}\" class=\"text-muted\">{{'Logout'|translate}}</a></li>\n" +
    "							</ul>\n" +
    "						</li>\n" +
    "					</ul>\n" +
    "				</nav>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</header>");
}]);

angular.module("themes/teamr/views/contactUs/contactUs.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/contactUs/contactUs.tpl.html",
    "<!--- Contact Form--->\n" +
    "<div class=\"container\">\n" +
    "	<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "	<form role=\"form\" class=\"form-horizontal clearfix\" name=\"contactForm\" ng-submit=\"model.contactFormSubmit();contactForm.$setPristine();\">\n" +
    "		<div class=\"text-center\"><h3 >{{'Contact Us'|translate}}</h3></div> \n" +
    "		<hr>\n" +
    "		<div class=\"form-group\" ng-class=\"{ 'has-error' : contactForm.firstname.$invalid && contactForm.firstname.$dirty }\">\n" +
    "		  <label class=\"col-md-3 col-sm-3 control-label\" for=\"firstname\">{{'First Name'|translate}}</label>\n" +
    "		  <div class=\"col-md-5 col-sm-9\">\n" +
    "			<input type=\"text\" class=\"form-control\" id=\"firstname\" name=\"firstname\" placeholder=\"{{'First Name'|translate}}\" ng-model='model.contactForm.first_name' required>\n" +
    "			<div class=\"help-block text-danger\" ng-if=\"contactForm.firstname.$dirty\" ng-messages=\"contactForm.firstname.$error\">\n" +
    "				  <div ng-message=\"required\">{{'You must enter your first name'|translate}}.</div>\n" +
    "			</div>\n" +
    "		   </div>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\" ng-class=\"{ 'has-error' : contactForm.lastname.$invalid && contactForm.lastname.$dirty }\">\n" +
    "		  <label class=\"col-md-3 col-sm-3 control-label\" for=\"lastname\">{{'Last Name'|translate}}</label>\n" +
    "		  <div class=\"col-md-5 col-sm-9\">\n" +
    "			<input type=\"text\" class=\"form-control\" name=\"lastname\" id=\"lastname\" placeholder=\"{{'Last Name'|translate}}\" ng-model='model.contactForm.last_name' required>  \n" +
    "			<div class=\"help-block text-danger\" ng-if=\"contactForm.lastname.$dirty\" ng-messages=\"contactForm.lastname.$error\">\n" +
    "				  <div ng-message=\"required\">{{'You must enter your last name'|translate}}.</div>\n" +
    "			</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\" ng-class=\"{ 'has-error' : contactForm.email.$invalid && contactForm.email.$dirty }\">\n" +
    "		  <label class=\"col-md-3 col-sm-3 control-label\" for=\"email\">{{'Email'|translate}}</label>\n" +
    "		  <div class=\"col-md-5 col-sm-9\">\n" +
    "			   <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" placeholder=\"{{'email'|translate}}\" ng-model='model.contactForm.email' required>  \n" +
    "				<div class=\"help-block text-danger\" ng-if=\"contactForm.email.$dirty\" ng-messages=\"contactForm.email.$error\">\n" +
    "				  <div ng-message=\"required\">{{'Your email address is required'|translate}}.</div>\n" +
    "				  <div ng-message=\"email\">{{'Your email address is invalid'|translate}}.</div>\n" +
    "				</div>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\" ng-class=\"{ 'has-error' : contactForm.subject.$invalid && contactForm.subject.$dirty }\">\n" +
    "		  <label class=\"col-md-3 col-sm-3 control-label\" for=\"subject\">{{'Subject'|translate}}</label>\n" +
    "		  <div class=\"col-md-5 col-sm-9\">\n" +
    "			<input type=\"text\" class=\"form-control\" name=\"subject\" id=\"subject\" ng-model='model.contactForm.subject' placeholder=\"{{'subject'|translate}}\" required>\n" +
    "				<div class=\"help-block text-danger\" ng-if=\"contactForm.subject.$dirty\" ng-messages=\"contactForm.subject.$error\">\n" +
    "				  <div ng-message=\"required\">{{'You must enter subject'|translate}}.</div>\n" +
    "				</div>  			\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "		<div class=\"form-group\" ng-class=\"{ 'has-error' : contactForm.message.$invalid && contactForm.message.$dirty }\">\n" +
    "		  <label class=\"col-md-3 col-sm-3 control-label\" for=\"subject\">{{'Message'|translate}}</label>\n" +
    "		  <div class=\"col-md-5 col-sm-9\">\n" +
    "		   <textarea rows=\"6\" id=\"message\" class=\"form-control\" name=\"message\" placeholder=\"{{'Message'|translate}}\" ng-model='model.contactForm.message' required></textarea>\n" +
    "				<div class=\"help-block text-danger\" ng-if=\"contactForm.message.$dirty\" ng-messages=\"contactForm.message.$error\">\n" +
    "				  <div ng-message=\"required\">{{'You must enter message'|translate}}.</div>\n" +
    "				</div>		   \n" +
    "		  </div>\n" +
    "		</div>               \n" +
    "		<div class=\"well well-sm clearfix\">\n" +
    "		  <div class=\"pull-right\">\n" +
    "			<label class=\"sr-only\" for=\"submit2\">{{'Submit'|translate}}</label>\n" +
    "			<button type=\"submit\" class=\"btn btn-primary btn-lg\" id=\"submit2\">{{'Submit'|translate}} <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "	</form>\n" +
    "	<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "</div>");
}]);

angular.module("themes/teamr/views/courses/addCourse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/addCourse.tpl.html",
    "<div class=\"container\"><!-- addCourse container starts -->\n" +
    "	<form role=\"form\" class=\"form-horizontal clearfix\" name=\"addCourse\" ng-submit=\"model.save()\"><!-- addCourse form starts -->\n" +
    "		<div class=\"clearfix well-lg\"></div>\n" +
    "		<div class=\"clearfix well-lg\"></div>\n" +
    "		<h3 class=\"text-center\">{{'Ready to Create a Course'|translate}}</h3>\n" +
    "		<h5 class=\"text-center\">{{'Start by entering the title of a course:'|translate}}</h5>\n" +
    "		<div class=\"clearfix well-sm\"></div>\n" +
    "		<div class=\"clearfix form-group\">\n" +
    "			<div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-2\">\n" +
    "				<input type=\"text\" class=\"form-control\" id=\"course_title\" placeholder=\"{{'e.g. Learn Photoshop CC from scratch'|translate}}\" ng-model=\"model.course.title\" required>\n" +
    "				<!--<span class=\"help-block\">Please Enter Title</span>-->\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"clearfix\">\n" +
    "			<div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-2\">\n" +
    "				<input type=\"submit\" class=\"btn btn-primary btn-block\"  ng-disabled=\"disableButton\" id=\"submit2\" value=\"{{'Create Course'|translate}}\">\n" +
    "			</div>\n" +
    "        </div>\n" +
    "	</form><!-- addCourse form end -->\n" +
    "	<div class=\"clearfix well-lg\"></div>\n" +
    "	<div class=\"clearfix well-lg\"></div>\n" +
    "</div><!-- addCourse container end -->");
}]);

angular.module("themes/teamr/views/courses/courses.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/courses.tpl.html",
    "<section>\n" +
    "    <div class=\"container\">\n" +
    "		<div class=\"well-lg\"></div>\n" +
    "		<div class=\"well-lg\"></div>\n" +
    "		<div class=\"\">	\n" +
    "			<h3>404 Page Not Found</h3>\n" +
    "		</div>	\n" +
    "    </div>\n" +
    "</section>");
}]);

angular.module("themes/teamr/views/courses/directives/amountDisplay.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/directives/amountDisplay.tpl.html",
    "<span ng-if=\"($root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && model.amount !== '0') || (isCoursePrice === 'no')\">\n" +
    "  <span ng-if=\"$root.settings['site.currency_symbol'] !== ''\">{{ model.amount | currency : $root.settings['site.currency_symbol'] : model.fraction}} </span>\n" +
    "  <span ng-if=\"$root.settings['site.currency_symbol'] === ''\">{{ model.amount | currency : $root.settings['site.currency_code'] : model.fraction}} </span>\n" +
    "</span>\n" +
    "<span ng-if=\"isCoursePrice === 'yes' && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && model.amount === '0'\">{{'Free'|translate}}</span>");
}]);

angular.module("themes/teamr/views/courses/directives/categories.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/directives/categories.tpl.html",
    "<div class=\"show clearfix\">\n" +
    "	<a ng-if=\"current_category_id === ''\" href=\"javascript:void(0)\" title=\"{{'Topics'|translate}}\" class=\"h5 list-group-item-text list-group-item-heading text-muted dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "		<strong> {{'Topics'|translate}} <i class=\"fa fa-angle-down fa-lg fa-fw\"></i> </strong>\n" +
    "	</a>\n" +
    "	<a ng-repeat=\"parentCategory in model.common.parentCategories.data\" ng-if=\"current_category_id !== '' \" href=\"javascript:void(0)\" title=\"{{parentCategory.sub_category_name}}\" class=\"h5 list-group-item-text list-group-item-heading text-muted dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "		<strong ng-if=\"parentCategory.id === current_category_id\"> {{parentCategory.sub_category_name}} <i class=\"fa fa-angle-down fa-lg fa-fw\"></i> </strong>\n" +
    "	</a>\n" +
    "	<ul class=\"dropdown-menu text-left\">\n" +
    "		<li ng-repeat=\"parentCategory in model.common.parentCategories.data\"><a ui-sref=\"CourseSearch({ category_id: parentCategory.id })\" title=\"{{parentCategory.sub_category_name}}\"><strong>{{parentCategory.sub_category_name}}</strong></a></li>\n" +
    "	</ul>\n" +
    "</div>");
}]);

angular.module("themes/teamr/views/courses/directives/courseCategory.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/directives/courseCategory.tpl.html",
    "<div class=\"grid_view\" ng-show =\"category_view_type =='grid'\">\n" +
    "	<section>\n" +
    "		<div class=\"container\">\n" +
    "		<div class=\"well-lg\"></div>\n" +
    "		<div class=\"well-lg\"></div>\n" +
    "		<div class=\"row\">\n" +
    "		  <div class=\"col-xs-12 navbar-btn\">\n" +
    "			<ul class=\"clearfix list-unstyled navbar-btn\">\n" +
    "			  <li class=\"col-sm-4 col-lg-3 col-xs-12\" ng-repeat=\"courses in model.courses.data\">\n" +
    "				<div class=\"panel\"> \n" +
    "					<course-wishlist course-wishlist='courses' wishlist-label='Wishlist' wishlisted-label='Wishlisted' wishlist-type='onlyHeart' ng-if=\"model.courses && $root.settings['site.enabled_plugins'].indexOf('CourseWishlist') > -1\"></course-wishlist>					 \n" +
    "					<!-- course image when is_from_mooc_affiliate false -->					\n" +
    "					<a ng-if=\"courses.image_hash && courses.is_from_mooc_affiliate !== 1\" href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.title}}\"> \n" +
    "						<img ng-src=\"{{$root.site_url}}img/medium_thumb/Course/{{courses.image_hash}}\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\" class=\"img-responsive\" />\n" +
    "					</a>	\n" +
    "					<a ng-if=\"!courses.image_hash && courses.is_from_mooc_affiliate !== 1\" href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.title}}\"> \n" +
    "						<img ng-src=\"{{$root.site_url}}img/medium_thumb/Course/0.default.jpg\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\" class=\"img-responsive\" />\n" +
    "					</a>\n" +
    "				   <!-- course image when is_from_mooc_affiliate true -->		\n" +
    "					<a ng-if=\"courses.course_image && courses.is_from_mooc_affiliate === 1\" href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.title}}\"> \n" +
    "						<img ng-src=\"{{courses.course_image}}\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\" class=\"img-responsive\" />\n" +
    "					</a>\n" +
    "					\n" +
    "					<a ng-if=\"!courses.course_image && courses.is_from_mooc_affiliate === 1\" href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.title}}\"> \n" +
    "						<img ng-src=\"{{$root.site_url}}img/medium_thumb/Course/0.default.jpg\" alt=\"[Image: {{courses.title}}]\" title=\"{{courses.title}}\" class=\"img-responsive\" />\n" +
    "					</a>\n" +
    "					\n" +
    "				  <div class=\"panel-body\">\n" +
    "					<h4> <a href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.title}}\" class=\"htruncate-m3 text-muted\">{{courses.title}}</a></h4>\n" +
    "					<p ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\">{{'By'|translate}}  <a href=\"#!/course/{{courses.id}}/{{courses.slug}}\" title=\"{{courses.displayname}}\" class=\"text-muted\">{{courses.displayname}}</a></p>\n" +
    "					<div class=\"well-lg\"></div>\n" +
    "					<div><a href=\"#!/course/{{courses.id}}/c=CDFGH\" title=\"{{}}{{'Enrolled'| translate}}\" class=\"text-muted h6\"><i class=\"fa fa-group fa-lg\"></i> {{courses.course_user_count}} {{'Enrolled'| translate}}</a> \n" +
    "					<span class=\"pull-right text-success h4  list-group-item-heading list-group-item-text\"><strong><amount-display amount='{{courses.price}}' fraction='0' is-course-price='yes'></amount-display></strong></span>\n" +
    "					\n" +
    "					</div>\n" +
    "				  </div>\n" +
    "				</div>\n" +
    "			  </li>\n" +
    "			</ul>    \n" +
    "		</div>\n" +
    "		</div>\n" +
    "	</section>\n" +
    " </div> \n" +
    "<div class=\"list_view\" ng-show =\"category_view_type =='list'\">\n" +
    "\n" +
    "</div>");
}]);

angular.module("themes/teamr/views/courses/directives/manageCourseNavbar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/directives/manageCourseNavbar.tpl.html",
    "<div class=\"\"></div>\n" +
    "<div class=\"row\" >		\n" +
    "	<div class=\"well-sm\">\n" +
    "		<div class=\"well clearfix\">\n" +
    "			<div class=\"col-xs-12 col-md-4 col-sm-12\">				\n" +
    "				<div class=\"media\">\n" +
    "					<div class=\"pull-left col-xs-5 row\">\n" +
    "					<!-- course image when is_from_mooc_affiliate false -->	\n" +
    "					<img ng-if=\"model.manageCourseOption.image_hash && model.manageCourseOption.is_from_mooc_affiliate !== 1\" ng-src=\"{{$root.site_url}}img/small_thumb/Course/{{model.manageCourseOption.image_hash}}\" class=\"img-responsive thumbnail clearfix\" title=\"{{model.manageCourseOption.title}}\" alt=\"[Image: Course Image]\" > \n" +
    "					<img ng-if=\"!model.manageCourseOption.image_hash && model.manageCourseOption.is_from_mooc_affiliate !== 1\" class=\"img-responsive thumbnail clearfix\" title=\"{{model.manageCourseOption.title}}\" alt=\"[Image: {{model.manageCourseOption.title}}]\" ng-src=\"{{$root.site_url}}img/small_thumb/Course/0.default.jpg\">\n" +
    "					<!-- course image when is_from_mooc_affiliate true -->\n" +
    "					<img ng-if=\"model.manageCourseOption.course_image && model.manageCourseOption.is_from_mooc_affiliate === 1\" class=\"img-responsive thumbnail clearfix\" title=\"{{model.manageCourseOption.title}}\" alt=\"[Image: {{model.manageCourseOption.title}}]\" ng-src=\"{{model.manageCourseOption.course_image}}\">\n" +
    "					<img ng-if=\"!model.manageCourseOption.course_image && model.manageCourseOption.is_from_mooc_affiliate === 1\" class=\"img-responsive thumbnail clearfix\" title=\"{{model.manageCourseOption.title}}\" alt=\"[Image: {{model.manageCourseOption.title}}]\" ng-src=\"{{$root.site_url}}img/small_thumb/Course/0.default.jpg\">\n" +
    "					</div>\n" +
    "					<div class=\"media-body\">\n" +
    "					  <p><a title=\"{{model.manageCourseOption.title}}\" href=\"#!/course/{{model.manageCourseOption.id}}/{{model.manageCourseOption.slug}}\">{{model.manageCourseOption.title}}</a></p>	\n" +
    "					  <p ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\"><profile-name user-display-name='model.manageCourseOption.displayname' user-profile-id='model.manageCourseOption.user_id' ng-if='model.manageCourseOption.user_id' ></profile-name></p>	\n" +
    "					</div>\n" +
    "				</div>					\n" +
    "			</div>				\n" +
    "			<div class=\"col-xs-12 col-md-3 col-sm-12\">\n" +
    "				<span>{{'Published Curriculum items'|translate}}</span>\n" +
    "					<h2>{{model.manageCourseOption.active_online_course_lesson_count}}/{{model.manageCourseOption.online_course_lesson_count}}</h2>\n" +
    "			</div>\n" +
    "			<div class=\"col-xs-12 col-md-5 col-sm-12\"  ng-show=\"model.loadingNavBar === false\">\n" +
    "				<div class=\"\">\n" +
    "					<p ng-if='model.manageCourseOption.course_status_id === 1'>{{'Your course is in draft mode.'|translate}}</p>\n" +
    "					<p ng-if='model.manageCourseOption.course_status_id === 2'>{{'Your course is under review.'|translate}}</p>\n" +
    "					<p ng-if='model.manageCourseOption.course_status_id === 3'>{{'Your course is in published status.'|translate}}</p>\n" +
    "					<a href=\"#!/course/{{model.manageCourseOption.id}}/{{model.manageCourseOption.slug}}\" class=\"btn btn-default\">{{'Preview'|translate}}</a>\n" +
    "					<a class=\"btn btn-primary\" ng-if=\"model.manageCourseOption.course_status_id === 2 || model.manageCourseOption.course_status_id === 3\" ng-click=\"model.publishCourse('draft')\" >{{'Make as Draft'|translate}}</a>\n" +
    "					<a class=\"btn btn-primary\" ng-if=\"$root.auth.providertype !== 'admin' && model.manageCourseOption.course_status_id !== 2 && model.manageCourseOption.course_status_id !== 3 && ($root.settings['course.is_auto_approval_enabled'] === '0' || $root.settings['course.is_auto_approval_enabled'] === '')\" ng-click=\"model.publishCourse('waiting')\" >{{'Submit For Review'|translate}}</a>\n" +
    "					<span ng-if=\"$root.auth.providertype === 'admin' || $root.settings['course.is_auto_approval_enabled'] === '1'\" class=\"navbar-btn\">\n" +
    "						<a class=\"btn btn-primary\" ng-click=\"model.publishCourse('publish')\" ng-if='model.manageCourseOption.course_status_id !== 3' >{{'Publish This Course'|translate}}</a>\n" +
    "						<p ng-if=\"$root.auth.providertype === 'admin'\" class=\"navbar-btn\">{{'You Are Accessing as Admin.'|translate}} <a href=\"ag-admin/#/courses/list\">{{'Click here to see all courses.'|translate}}</a></p>\n" +
    "					</span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"clearfix\"></div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "	  	 		  \n" +
    "<div class=\"col-sm-2 col-xs-12 col-md-2 pull-left clearfix\" role=\"navigation\" >\n" +
    "	<div class=\"row panel\">				 \n" +
    "		<ul class=\"nav nav-stacked  nav-pills list-group-item-heading list-group-item-text\" id=\"leftnavbar\">\n" +
    "			<li class=\"\" ng-class=\"{active: activetab == 'course_roadmap'}\"><a  href=\"#!/manage-course/edit-getting-started/{{model.manageCourseOption.id}}\" class=\"\">&nbsp; {{'Course Roadmap'|translate}} </a></li>\n" +
    "			<li class=\"\" ng-class=\"{active: activetab == 'course_feedback'}\"><a href=\"#!/manage-course/edit-status/{{model.manageCourseOption.id}}\" class=\"\">&nbsp; {{'Course Feedback'|translate}} </a></li>\n" +
    "			<li class=\"\" ><strong><span>&nbsp; {{'COURSE CONTENT'|translate}}</span></strong></li>\n" +
    "			<li class=\"\" ng-class=\"{active: activetab == 'course_goals'}\"><a  href=\"#!/manage-course/edit-goals-and-audience/{{model.manageCourseOption.id}}\" class=\"\">&nbsp; {{'Course Goals'|translate}} </a></li>\n" +
    "			<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('ArticleLessons') > -1  || $root.settings['site.enabled_plugins'].indexOf('DownloadableFileLessons') > -1 || $root.settings['site.enabled_plugins'].indexOf('VideoExternalEmbedLessons') > -1 || $root.settings['site.enabled_plugins'].indexOf('VideoLessons') > -1\" class=\"\" ng-class=\"{active: activetab == 'course_curriculum'}\"><a  href=\"#!/manage-course/edit-curriculum/{{model.manageCourseOption.id}}\" class=\"\" >&nbsp; {{'Curriculum'|translate}} </a></li>\n" +
    "			<li class=\"\" ><strong><span>&nbsp; {{'COURSE INFO'|translate}}</span></strong></li>\n" +
    "			<li class=\"\" ng-class=\"{active: activetab == 'course_basics'}\"><a   href=\"#!/manage-course/edit-basics/{{model.manageCourseOption.id}}\" class=\"\" >&nbsp; {{'Basics'|translate}} </a></li>\n" +
    "			<li class=\"\" ng-class=\"{active: activetab == 'course_summary'}\"><a   href=\"#!/manage-course/edit-details/{{model.manageCourseOption.id}}\" class=\"\" >&nbsp; {{'Course Summary'|translate}} </a></li>\n" +
    "			<li class=\"\" ng-class=\"{active: activetab == 'course_image'}\"><a   href=\"#!/manage-course/edit-image/{{model.manageCourseOption.id}}\" class=\"\" >&nbsp; {{'Image'|translate}}</a></li>\n" +
    "			<li class=\"\" ng-class=\"{active: activetab == 'course_promo_video'}\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('VideoLessons') > -1 && $root.settings['video.is_enabled_promo_video'] === '1'\"><a   href=\"#!/manage-course/edit-promo-video/{{model.manageCourseOption.id}}\" class=\"\" >&nbsp; {{'Promo Video'|translate}}</a></li>\n" +
    "			<li class=\"\" ><strong><span>&nbsp; {{'COURSE SETTINGS'|translate}}</span></strong></li>\n" +
    "			<li class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\" ng-class=\"{active: activetab == 'course_price'}\"><a   href=\"#!/manage-course/edit-price-and-promotions/{{model.manageCourseOption.id}}\" class=\"\">&nbsp; {{'Price'|translate}}</a></li>\n" +
    "			<div oc-lazy-load='loadCoupons'  class=\"nav nav-stacked nav-pills\"><li class=\"\" ng-class=\"{active: activetab == 'coupons'}\" course-coupon course-id='{{model.manageCourseOption.id}}' ng-if=\"model.manageCourseOption.id && $root.settings['site.enabled_plugins'].indexOf('Coupons') > -1\"></li></div>\n" +
    "			<li class=\"\" ng-class=\"{active: activetab == 'course_danger_zone'}\"><a   href=\"#!/manage-course/edit-danger-zone/{{model.manageCourseOption.id}}\" class=\"\" >&nbsp;{{'Danger Zone'|translate}}</a></li>\n" +
    "			<li class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && $root.settings['site.enabled_plugins'].indexOf('Payout') > -1\" ><strong><span>&nbsp; {{'PAYOUT'|translate}}</span></strong></li>\n" +
    "			<div oc-lazy-load='loadPayout' class=\"nav nav-stacked nav-pills\"><li class=\"\"  ng-class=\"{active: activetab == 'payout'}\" pay-out course-id='{{model.manageCourseOption.id}}' ng-if=\"model.manageCourseOption.id && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && $root.settings['site.enabled_plugins'].indexOf('Payout') > -1\"></li></div>\n" +
    "			<li class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\"><strong><span>&nbsp; {{'ANALYTICS'|translate}}</span></strong></li>\n" +
    "			<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\" oc-lazy-load='loadRatingAndReview' class=\"nav nav-stacked nav-pills\"><li ng-class=\"{active: activetab == 'coursestudtsatisfaction'}\" student-satisfaction course-id='{{model.manageCourseOption.id}}' ng-if=\"model.manageCourseOption.id && $root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\">\n" +
    "			</li></div>\n" +
    "			<li class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('SEO') > -1\"  ><strong><span>&nbsp; {{'SEO'|translate}}</span></strong></li>\n" +
    "			<div oc-lazy-load='loadSeo'  class=\"nav nav-stacked nav-pills\"><li class=\"\" ng-class=\"{active: activetab == 'seo'}\" course-seo course-id='{{model.manageCourseOption.id}}' ng-if=\"model.manageCourseOption.id && $root.settings['site.enabled_plugins'].indexOf('SEO') > -1\"></li></div>\n" +
    "			<li class=\"\" ><strong><span>&nbsp; {{'MORE'|translate}}</span></strong></li>\n" +
    "			<li class=\"\" ng-class=\"{active: activetab == 'course_help'}\"><a  href=\"#!/manage-course/edit-help/{{model.manageCourseOption.id}}\" class=\"\" >&nbsp; {{'Help'|translate}}</a></li>			\n" +
    "		</ul> \n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("themes/teamr/views/courses/directives/onlineLessons.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/directives/onlineLessons.tpl.html",
    "<h4 ng-if='model.OnlineCourse.data.length'><strong>{{'Curriculum'|translate}}</strong></h4>\n" +
    "<div class=\"media list-group-item-heading\" ng-show=\"model.OnlineCourse.data.length\" ng-repeat=\"OnlineCourse in model.OnlineCourse.data\">\n" +
    "		<div ng-if=\"OnlineCourse.is_chapter == 1\" class=\"pull-left\">\n" +
    "			<span class=\"fa-stack fa-2x\">\n" +
    "			<i class=\"fa fa-circle fa-stack-2x\"></i>\n" +
    "			<i class=\"fa fa-arrow-right fa-stack-1x fa-inverse text-center\"></i>\n" +
    "			</span> \n" +
    "		</div>\n" +
    "		<div class=\"media-body\">\n" +
    "			<div ng-if=\"OnlineCourse.is_chapter == 1\">\n" +
    "			<div class=\"media-heading\">\n" +
    "				<div class=\"navbar-btn clearfix list-group-item-heading\"></div>\n" +
    "				<span href=\"#\"  title=\"{{OnlineCourse.lesson_name}}\" class=\"h4\"><strong>{{OnlineCourse.lesson_name}}</strong></span> \n" +
    "			</div>\n" +
    "			<p ng-if=\"OnlineCourse.lesson_description\" class=\"navbar-btn\" ng-bind-html='OnlineCourse.lesson_description | nl2br'></p>\n" +
    "			</div>\n" +
    "			<div class=\"clearfix list-group-item-heading\"></div>\n" +
    "			<div ng-if=\"OnlineCourse.is_chapter == 0\">\n" +
    "			<div  class=\"collapse panel in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n" +
    "				<ul class=\"list-group\">\n" +
    "					<li class=\"list-group-item well-sm navbar-btn clearfix list-group-item-heading list-group-item-text\">\n" +
    "							<div class=\"col-sm-1 row\"> 								\n" +
    "								<span class=\"text-muted\" ><i class=\"fa fa-download fa-2x\" ng-if='OnlineCourse.online_lesson_type_id === 5'></i>\n" +
    "									<i class=\"fa fa-file-video-o fa-2x\" ng-if='OnlineCourse.online_lesson_type_id === 4'> </i>\n" +
    "									<i class=\"fa fa-play-circle-o fa-2x\"  ng-if='OnlineCourse.online_lesson_type_id === 3'></i>\n" +
    "									<i class=\"fa fa-edit fa-2x\"  ng-if='OnlineCourse.online_lesson_type_id === 1'></i>\n" +
    "									<i class=\"fa fa-file fa-2x\"  ng-if='OnlineCourse.online_lesson_type_id === 2'></i>\n" +
    "									<i class=\"fa fa-edit fa-2x\"  ng-if='OnlineCourse.online_lesson_type_id === 6'></i>\n" +
    "									<i class=\"fa fa-edit fa-2x\"  ng-if='!OnlineCourse.online_lesson_type_id'></i>\n" +
    "								</span>\n" +
    "							</div>\n" +
    "							<div class=\"col-sm-11\"> \n" +
    "								<div  ng-if='OnlineCourse.is_preview === 1' >\n" +
    "									<a href=\"#!/{{OnlineCourse.course_slug}}/learn/{{OnlineCourse.course_id}}?lesson={{OnlineCourse.id}}\" title=\"{{'Preview'|translate}}\" class=\"btn btn-sm btn-primary pull-right\">{{'Preview'|translate}}</a> \n" +
    "								</div>\n" +
    "								<span  title=\"{{OnlineCourse.lesson_name}}\" class=\"h5\"><strong>{{OnlineCourse.lesson_name}}</strong></span>\n" +
    "								<p ng-if='OnlineCourse.lesson_description' class=\"navbar-btn\" ng-bind-html='OnlineCourse.lesson_description | nl2br'></p>						\n" +
    "							</div>\n" +
    "					</li>\n" +
    "				</ul>\n" +
    "			</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "</div>");
}]);

angular.module("themes/teamr/views/courses/directives/paymentButtons.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/directives/paymentButtons.tpl.html",
    "<ul class=\"list-inline\">	\n" +
    "	<!-- if both payment and cart plugin && subscription plugin disabled , now all courses will be free of access and course should not be mooc affliated -->\n" +
    "	<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') === -1 && !model.btnLink && ($root.auth.id !== model.userId)\" >\n" +
    "		<a href=\"#\" ng-click =\"model.startLearnCourse($event, paidStatus)\" title=\"{{'Start learning now'|translate}}\" class=\"btn btn-default\">{{'Start learning now'|translate}} <i class=\"fa fa-arrow-right\"></i></a>\n" +
    "	</li>\n" +
    "	<!-- if subscription plugin enabled, it allows courses based on instructions levels based on subscriptions and course should not be mooc affliated -->		\n" +
    "	<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1 && !model.btnLink && ($root.auth.id !== model.userId)\"><!-- user purchased course -->\n" +
    "		<div ng-if='!$root.isAuth || subscriptionStatus === false'>\n" +
    "			<a href=\"#!/subscribe/plans\" title=\"{{'Start Learning Now'|translate}}\" class=\"btn btn-default\" >{{'Start Learning Now'| translate}}</a>\n" +
    "		</div>	\n" +
    "		<div ng-if='$root.isAuth && subscriptionStatus && model.instructionLevel'>\n" +
    "			<div  class=\"navbar-btn\" ng-show=\"course_level_access\">					\n" +
    "				<a href=\"#\" ng-click =\"model.startLearnCourse($event, false)\" title=\"{{'Start Learning Now'|translate}}\" class=\"btn btn-default\">{{'Start Learning Now'|translate}}</a>\n" +
    "			</div>\n" +
    "			<div  class=\"navbar-btn\" ng-hide=\"course_level_access\">		\n" +
    "				<div class=\"navbar-btn alert alert-warning clearfix\">\n" +
    "					<span class=\"clearfix text-info\">{{'Your subscription plan not enough to access this course level.'|translate}}</span>				\n" +
    "				</div>\n" +
    "				<a href=\"#!/me/subscriptions\"  title=\"{{'Change Plan'|translate}}\" class=\"btn btn-default\">{{'Change Plan'|translate}}</a>\n" +
    "			</div>		\n" +
    "		</div>				\n" +
    "	</li>\n" +
    "   <!-- payment and cart plugin enabled && subscription plugin disabled and course should not be mooc affliated-->		\n" +
    "	<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && !model.btnLink && ($root.auth.id !== model.userId)\"><!-- payment cart plugin eneabled -->\n" +
    "		<!-- If logged in -->\n" +
    "		<div ng-if=\"$root.isAuth\">\n" +
    "			<!-- Free courses or already paid courses -->		\n" +
    "			<div ng-if=\"model.coursePrice === '0' || paidStatus\" class=\"navbar-btn\">\n" +
    "				<a href=\"#\" ng-click =\"model.startLearnCourse($event, paidStatus)\" title=\"{{'Start learning now'|translate}}\" class=\"btn btn-default\">{{'Start learning now'|translate}} <i class=\"fa fa-arrow-right\"></i></a>\n" +
    "			</div>\n" +
    "			<!-- not paid and not purchased courses -->	\n" +
    "			<div ng-if=\"paidStatus === false && model.coursePrice !=='0'\" class=\"navbar-btn\">					\n" +
    "				<buy-button modal-size='md' course-price='{{model.coursePrice}}'   btn-class-name='btn-default' course-id='{{model.courseId}}' course-status='{{model.takenCourseStatus}}' ng-if='model.courseId' ></buy-button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<!-- If not logged in -->\n" +
    "		<div ng-if=\"!$root.isAuth\" class=\"navbar-btn\">\n" +
    "			<a href=\"#\" ng-click =\"model.startLearnCourse($event, '')\" title=\"{{'Start Learning Now'|translate}}\"  class=\"btn btn-default\" ng-if=\"model.coursePrice === '0'\">{{'Start Learning Now'|translate}}</a>\n" +
    "			<a href=\"#\" ng-click =\"model.startLearnCourse($event, '')\" title=\"{{'Take This Course'|translate}}\" class=\"btn btn-default\" ng-if=\"model.coursePrice !== '0'\">{{'Take This Course'|translate}}</a>			\n" +
    "		</div>		\n" +
    "	</li>\n" +
    "	<!--Mooc affliated courses-->\n" +
    "	<li>\n" +
    "		<div ng-if=\"model.btnLink !== '' && model.btnLink && ($root.auth.id !== model.userId)\"  class=\"navbar-btn\">\n" +
    "			<a href=\"{{model.btnLink}}\" target=\"_blank\" title=\"{{'Take This Course'|translate}}\" class=\"btn btn-default\" ng-if=\"$root.isAuth\" >{{'Take This Course'|translate}}</a>\n" +
    "			<a href=\"#\" ng-click =\"model.startLearnCourse($event, '')\" title=\"{{'Take This Course'|translate}}\" class=\"btn btn-default\" ng-if=\"!$root.isAuth\">{{'Take This Course'|translate}}</a>\n" +
    "		</div>\n" +
    "	</li>\n" +
    "	<!-- Teachers own course -->\n" +
    "	<li>\n" +
    "		<div ng-if=\"$root.auth.id === model.userId && $root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\" class=\"navbar-btn\">\n" +
    "			<a href=\"#!/manage-course/add/{{model.courseId}}/{{model.slug}}\" class=\"btn btn-default\" >{{'Edit Course'|translate}}</a>\n" +
    "		</div>\n" +
    "	</li>\n" +
    "</ul>	\n" +
    "\n" +
    "");
}]);

angular.module("themes/teamr/views/courses/learnCourse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/learnCourse.tpl.html",
    "<div class=\"clearfix col-md-12 col-sm-12 col-xs-12  col-md-offset-0 col-sm-offset-0 col-sm-offset-0 lesson_container\">\n" +
    "         <div class=\"navbar-default bg-primary col-sm-3 col-md-3 col-lg-2\">   \n" +
    "            <h4 class=\"initialism\">\n" +
    "				<a ng-if=\"!$root.isAuth && model.OnlinelessonLength > 0\" href=\"#!/course/{{model.OnlineCourse[0].course_id}}/{{model.OnlineCourse[0].course_slug}}\" class=\"btn btn-sm btn-danger\"> <i class=\"glyphicon glyphicon-chevron-left\"></i>{{'Back'|translate}}</a>\n" +
    "				<a ng-if=\"!$root.isAuth && model.OnlinelessonLength === 0\" href=\"#!/\" class=\"btn btn-sm btn-danger\"> <i class=\"glyphicon glyphicon-chevron-left\"></i>{{'Back'|translate}}</a>\n" +
    "				<a ng-if=\"$root.isAuth && $root.auth.providertype !== 'admin'\" href=\"#!/my-courses/learning\" class=\"btn btn-sm btn-danger\"> <i class=\"glyphicon glyphicon-chevron-left\"></i>{{'Dashboard'|translate}}</a>\n" +
    "				<a ng-if=\"$root.isAuth && $root.auth.providertype === 'admin'\" href=\"ag-admin/#/courses/list\" class=\"btn btn-sm btn-danger\"> <i class=\"glyphicon glyphicon-chevron-left\"></i>{{'Admin Panel'|translate}}</a>\n" +
    "			</h4>  \n" +
    "            <ul class=\"list-unstyled nav navbar-default list-group\">\n" +
    "                 <li class=\"row learn-page-lesson-list\" ng-repeat=\"OnlineCourse in model.OnlineCourse\" ng-class=\"{'btn-primary' : OnlineCourse.is_chapter === 1, ' list-group-item':OnlineCourse.is_chapter === 0}\" >\n" +
    "					<!-- showing lesson chapter name-->\n" +
    "					<span class=\"row \" ng-if='OnlineCourse.is_chapter === 1'>\n" +
    "                        <div class=\"col-xs-12 \"><strong>{{'Chapter'|translate}}: {{OnlineCourse.lesson_name}} </strong></div>\n" +
    "                    </span>\n" +
    "					<!-- showing lesson name -->\n" +
    "					<a class=\"media\" ng-class=\"{'text-success': OnlineCourse.completed === 1 && !coursePurchased, 'btn-default active': model.viewLessonDetails.id === OnlineCourse.id || lessonID === OnlineCourse.id }\"  href=\"#!/{{OnlineCourse.course_slug}}/learn/{{OnlineCourse.course_id}}?lesson={{OnlineCourse.id}}\" ng-if='OnlineCourse.is_chapter === 0'>\n" +
    "						<!-- completed lesson with success tick icon -->\n" +
    "						<span class=\"pull-left\" ng-if=\"coursePurchased && OnlineCourse.completed === '1'|| model.viewLessonDetails.completedId === OnlineCourse.id\">\n" +
    "						<i class=\"fa fa-check-circle fa-lg\" ng-class=\"{'text-success': model.viewLessonDetails.completedId === OnlineCourse.id || OnlineCourse.completed === '1'}\" ng-if=\"model.viewLessonDetails.completedId === OnlineCourse.id || OnlineCourse.completed === '1'\"></i>\n" +
    "						<i class=\"fa fa-circle-o fa-lg\" ng-class=\"{'text-success': OnlineCourse.viewcompleted === 1}\" ng-if=\"model.viewLessonDetails.completedId !== OnlineCourse.id && OnlineCourse.completed !== '1'\" ></i>\n" +
    "						</span>\n" +
    "						<!-- not completed but viewed lesson with success green circle icon -->\n" +
    "						<span class=\"pull-left\" ng-if=\"coursePurchased && OnlineCourse.completed !== '1'\"><i class=\"fa fa-circle-o fa-lg\" ng-class=\"{'text-success': OnlineCourse.viewcompleted === 1 || OnlineCourse.viewed === '1'}\" ng-if=\"model.viewLessonDetails.completedId !== OnlineCourse.id && OnlineCourse.viewed === '1'\" ></i></span>\n" +
    "						<!-- not completed also not viewed lesson with success gary or white circle icon -->\n" +
    "						<span class=\"pull-left\" ng-if=\"coursePurchased && OnlineCourse.completed !== '1'\"><i class=\"fa fa-circle-o fa-lg\" ng-class=\"{'text-success': OnlineCourse.viewcompleted === 1}\" ng-if=\"OnlineCourse.viewed === '0' \" ></i></span>\n" +
    "						<!-- not completed and not eligible to view lesson -->\n" +
    "						<span class=\"pull-left\" ng-if='!coursePurchased && $root.isAuth || !OnlineCourse.completed'><i class=\"fa fa-circle-o fa-lg\" ng-class=\"{'text-success': OnlineCourse.completed === 1 || OnlineCourse.viewed === '1'}\" ></i></span>\n" +
    "						<span class=\"media-body\">{{'Lesson'|translate}}: {{OnlineCourse.lesson_name}}</span>	\n" +
    "					</a>								\n" +
    "				</li>                            \n" +
    "                \n" +
    "                <div class=\"well-sm\"></div>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"col-sm-9 col-md-9 col-lg-10 bg-primary navbar-inverse\"> \n" +
    "			 <div class=\"btn-default row\">\n" +
    "				<div class=\"well-sm\">\n" +
    "					<a class=\"btn btn-primary\" ng-disabled=\"model.neighbourDetails.previous_id === null\" href=\"#!/{{model.neighbourDetails.course_slug}}/learn/{{model.neighbourDetails.course_id}}?lesson={{model.neighbourDetails.previous_id}}\" > <i class=\"glyphicon glyphicon-chevron-left\"></i>  {{'PREVIOUS LECTURE'|translate}}</a>	\n" +
    "					<a class=\"btn btn-primary navbar-right\"  ng-disabled=\"model.neighbourDetails.next_id === null\" href=\"#!/{{model.neighbourDetails.course_slug}}/learn/{{model.neighbourDetails.course_id}}?lesson={{model.neighbourDetails.next_id}}\" >{{'NEXT LECTURE'|translate}}  <i class=\"glyphicon glyphicon-chevron-right\"></i></a>\n" +
    "					<a class=\"btn navbar-right list-group-item-heading\" ng-disabled=\"shouldBuyCourse\" ng-disabled=\"shouldBuyCourse\" ng-click=\"model.lessonComplete(model.viewLessonDetails.id, model.viewLessonDetails)\" ng-if='model.viewLessonDetails.id && coursePurchased'>\n" +
    "					<i class=\"fa fa-check-circle fa-lg fa-fw text-muted\" ng-class=\"{'text-success': model.viewLessonDetails.completed === '1'}\" ></i><strong class=\"text-primary\" ng-if=\" model.viewLessonDetails.completed === '1'\"> {{'Mark as Unread'|translate}}</strong><strong class=\"text-primary\" ng-if=\" model.viewLessonDetails.completed !== '1'\"> {{'Mark as Completed'|translate}}</strong></a>									\n" +
    "				</div>\n" +
    "			</div>\n" +
    "            <div class=\"well-lg clearfix lesson_details\" ng-if='model.viewLessonDetails !== null && !shouldBuyCourse'>\n" +
    "			    <div class=\"text-center\" ng-if=\"model.OnlinelessonLength === 0\" >\n" +
    "					<h2 class=\"fa-inverse\">{{'No lessons available.'|translate}}</h2>\n" +
    "				</div>\n" +
    "            	<div class=\"col-xs-12\" >\n" +
    "                	<div class=\"col-sm-12 clearfix\">\n" +
    "                        <h3 class=\"list-group-item-heading\"><strong>{{model.viewLessonDetails.lesson_name}}</strong></h3>\n" +
    "                        <div class=\"navbar-btn clearfix\"></div>\n" +
    "                        <p class=\"h6\">{{model.viewLessonDetails.lesson_description}}</p>\n" +
    "						<div class=\"well-sm\"></div>\n" +
    "                    </div>\n" +
    "               		<div class=\"col-sm-6 pull-right text-right\">\n" +
    "                       \n" +
    "                   </div>\n" +
    "                </div>\n" +
    "                <div class=\"col-xs-12 clearfix\">\n" +
    "					<div class=\"col-xs-12\">					\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 1'><p ng-bind-html='model.viewLessonDetails.article_content'></div>\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 2'>\n" +
    "							<div class=\"well-lg text-center\"><a href=\"#\" class=\"btn\"> <h4>{{'Open Document'|translate}} &nbsp; <i class=\"fa fa-file\"></i>&nbsp;{{model.viewLessonDetails.filename}}</h4></a></div>\n" +
    "						</div>\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 3'>										\n" +
    "							<div class=\"alert alert-info\" ng-if=\"model.viewLessonDetails.is_video_converting_is_processing === 1\">\n" +
    "								<span class=\"well-sm\">{{'Video converting under progressing'|translate}}</span>\n" +
    "							</div>\n" +
    "							<div class=\"alert alert-danger\" ng-if=\"model.viewLessonDetails.is_video_converting_is_processing === 0 && model.viewLessonDetails.is_lesson_ready_to_view !== 1\">\n" +
    "								<span class=\"well-sm\">{{'Video conversion Failed. Students can\\'t view this lesson'|translate}}</span>\n" +
    "							</div>							\n" +
    "							<div class=\"well-lg col-xs-11 ml-4\">\n" +
    "								<video id=\"video\"  ng-src=\"{{model.viewLessonDetails.video_url}}\" controls=\"true\" ng-if=\"model.viewLessonDetails.is_lesson_ready_to_view === 1\"></video>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 4'>\n" +
    "						 <p class=\"videoWrapper\" ng-bind-html='model.viewLessonDetails.embed_code'></p>\n" +
    "						 </div>\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 5'>\n" +
    "							<div class=\"well-lg text-center\">\n" +
    "								<h4>{{'Download this lesson'|translate}}</h4>\n" +
    "								<p>{{model.viewLessonDetails.filename}}</p>\n" +
    "								<a class=\"btn ng-binding btn-default\" ng-href = \"{{model.viewLessonDetails.download_url}}\"><i class=\"fa fa-3x fa-download fa-3x\"></i></a>							\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						<div ng-if='model.viewLessonDetails.online_lesson_type_id === 6'>{{model.viewLessonDetails.lessondescription}}</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "            </div>\n" +
    "			<!-- User not able to view this lesson because of payment pending or subscription -->\n" +
    "			 <div class=\"well-lg clearfix\" ng-if='shouldBuyCourse && model.OnlineCourse.length > 0 ' >	\n" +
    "					<div class=\"well-lg\"></div>\n" +
    "					<div class=\"well-lg\"></div>\n" +
    "					<div class=\"well-lg\"></div>\n" +
    "					<div class=\"well-sm\"></div>\n" +
    "					<!-- if user not logged in -->\n" +
    "					<div ng-if='!isAuth'>\n" +
    "						<div class=\"clearfix text-center\">\n" +
    "							<h4>{{'Already have an account?'|translate}}</h4>\n" +
    "							<a ng-href=\"#!/users/login\"  ng-click=\"modalLogin($event)\" title=\"{{'Login'| translate}}\"  class=\"btn btn-primary\">{{'Login'|translate}}</a> \n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<!-- available payment options to view this lesson -->\n" +
    "					<div class=\"clearfix text-center\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1 || $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\">\n" +
    "						<h3>{{'Ready to watch this entire course?'|translate}}</h3>\n" +
    "						<div class=\"well-sm\"></div>\n" +
    "						<div class=\"h2 list-group-item-heading text-center\">\n" +
    "							<strong><amount-display amount='{{model.neighbourDetails.course_price}}' fraction='2' is-course-price='yes'></amount-display></strong>\n" +
    "						</div>\n" +
    "						<div class=\"well-sm\"></div>\n" +
    "						<!-- user subscribed plan but its not able to access this lesson course's instruction level -->\n" +
    "						<div ng-if=\"shouldChangePlan\" class=\"col-md-6 col-md-offset-3\">\n" +
    "							<div class=\"navbar-btn alert alert-warning clearfix\">\n" +
    "								<span class=\"clearfix text-info\">{{'Your subscription plan not enough to access this course level.'|translate}}</span>				\n" +
    "							</div>\n" +
    "							<a href=\"#!/me/subscriptions\" title=\"{{'Change Your Plan'|translate}}\" class=\"btn btn-lg btn-primary\">{{'Change Plan'|translate}}</a>\n" +
    "						</div>\n" +
    "						<!-- user not subscribed any plan -->\n" +
    "						<a href=\"#!/subscribe/plans\"  class=\"btn btn-primary\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1 && !shouldChangePlan\">{{'Start Learning Now'|translate}}</a>&nbsp;						\n" +
    "						<!-- payment plugin enabled -->\n" +
    "						<buy-button  btn-class-name='btn-primary'  course-id='{{model.OnlineCourse[0].course_id}}' course-status='false' ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1 && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1\" ></buy-button>						\n" +
    "					</div>\n" +
    "             </div>\n" +
    "            		  		 \n" +
    "         </div>\n" +
    "		\n" +
    "     </div>\n" +
    "	<div class=\"navbar-default clearfix\">   \n" +
    "		<div class=\"well-sm\"></div>\n" +
    "	</div>\n" +
    "	");
}]);

angular.module("themes/teamr/views/courses/learning.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/learning.tpl.html",
    "<!--section start-->\n" +
    "<section class=\"clearfix\" id=\"learning-courses\">\n" +
    "	<div class=\"well\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-11 col-sm-12 col-xs-12 nav navbar-right\">\n" +
    "				<div class=\"panel clearfix\">\n" +
    "					<section>\n" +
    "					  <div class=\"container\">\n" +
    "						<div class=\"clearfix\">\n" +
    "						  <div class=\"col-sm-3 navbar-btn nav\">\n" +
    "							<h3 class=\"h1 navbar-btn list-group-item-text\">{{'My Courses'|translate}}</h3>\n" +
    "						  </div>\n" +
    "						  <div class=\"col-sm-6 navbar-btn\">\n" +
    "							<ul class=\"list-inline navbar-btn nav nav-tabs\" role=\"tablist\">\n" +
    "							  <li class=\"active\"><a href=\"#!/my-courses/learning\" title=\"{{'Learning'|translate}}\" aria-controls=\"learning\" role=\"tab\" >{{'Learning'|translate}}</a></li>\n" +
    "							  <li class=\"\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseWishlist') > -1\"><a href=\"#!/my-courses/wishlist\" title=\"{{'Wishlist'|translate}}\" aria-controls=\"wishlist\" role=\"tab\">{{'Wishlist'|translate}}</a></li>\n" +
    "							</ul>\n" +
    "						  </div>\n" +
    "						</div>\n" +
    "					  </div>\n" +
    "					  <hr class=\"list-group-item-text list-group-item-heading\" />\n" +
    "					</section>\n" +
    "					<section>\n" +
    "					  <div class=\"container\">\n" +
    "						<div class=\"clearfix\">\n" +
    "						  <div class=\"col-xs-12\">\n" +
    "							<div class=\"tab-content row navbar-btn\">\n" +
    "							  <div id=\"learning\" class=\"tab-pane active\" role=\"tabpanel\">\n" +
    "								<div class=\"clearfix\">\n" +
    "									 <div class=\"dropdown h1 pull-right\"> \n" +
    "										<a href=\"javascript:void(0)\" ng-show=\"!ordering\"  title=\"{{'All Courses'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default btn-lg\" >\n" +
    "											<span >{{'All Courses'|translate}} </span>&nbsp;<i class=\"fa fa-chevron-down text-muted\"></i>  \n" +
    "										</a>\n" +
    "										<a href=\"javascript:void(0)\" ng-show=\"ordering === 'in_progress'\"  title=\"{{'In Progress'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default btn-lg\" >\n" +
    "											<span>{{'In Progress'|translate}} </span>&nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> \n" +
    "										</a>\n" +
    "										<a href=\"javascript:void(0)\" ng-show=\"ordering === 'not_started'\"  title=\"{{'Not Started'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default btn-lg\" >\n" +
    "											<span >{{'Not Started'|translate}}</span>&nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> \n" +
    "										</a>\n" +
    "										<a href=\"javascript:void(0)\" ng-show=\"ordering === 'completed'\"  title=\"{{'Completed'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default btn-lg\" >\n" +
    "											<span >{{'Completed'|translate}}</span>&nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> \n" +
    "										</a>\n" +
    "										<a href=\"javascript:void(0)\" ng-show=\"ordering === 'archived'\" title=\"{{'Archived'|translate}}\" data-toggle=\"dropdown\" class=\"btn btn-default btn-lg\" >\n" +
    "											<span >{{'Archived'|translate}}</span>&nbsp;<i class=\"fa fa-chevron-down text-muted\"></i> \n" +
    "										</a>\n" +
    "									  <ul class=\"dropdown-menu\">\n" +
    "										<li><a href=\"#!/my-courses/learning\" title=\"{{'All Courses'|translate}}\">{{'All Courses'|translate}} </a></li>\n" +
    "										<li><a ui-sref=\"myCoursesLearning({ ordering: 'in_progress' })\" title=\"{{'In Progress'|translate}}\">{{'In Progress'|translate}}</a></li>\n" +
    "										<li><a ui-sref=\"myCoursesLearning({ ordering: 'not_started' })\" title=\"{{'Not Started'|translate}}\">{{'Not Started'|translate}}</a></li>\n" +
    "										<li><a ui-sref=\"myCoursesLearning({ ordering: 'completed' })\" title=\"{{'Completed'|translate}}\">{{'Completed'|translate}}</a></li>\n" +
    "										<li><a ui-sref=\"myCoursesLearning({ ordering: 'archived' })\" title=\"{{'Archived'|translate}}\">{{'Archived'|translate}}</a></li>\n" +
    "									  </ul>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								 <div>\n" +
    "									<div class=\"row\">\n" +
    "									  <div class=\"col-xs-12\" ng-repeat=\"learningCourses in model.learningCourses.data\" ng-if=\"model.learningCourses.data.length > 0\" >\n" +
    "										<ul class=\"row list-unstyled course-listing\" ng-if=\"$index%2==0\">\n" +
    "										  <li class=\"col-sm-6\" ng-if=\"$index < model.learningCourses.data.length\" id=\"learning_elements_{{model.learningCourses.data[$index].id}}\">\n" +
    "											<div class=\"panel panel-info\">\n" +
    "											  <div class=\"panel-heading clearfix\">\n" +
    "												<div class=\"col-xs-12\">\n" +
    "												  <div class=\"pull-left\">\n" +
    "													<div class=\"navbar-btn clearfix list-group-item-heading\"></div>\n" +
    "													<ul class=\"list-inline\">\n" +
    "														<li><span title=\"{{'course'|translate}}\"><img src=\"assets/img/course.png\" alt=\"[Image: {{'Course'|translate}}]\" title=\"{{'Course'|translate}}\"></span> </li>\n" +
    "													</ul>\n" +
    "												  </div>\n" +
    "												  <div class=\"pull-right well-sm dropdown\"  ng-if=\"model.learningCourses.data[$index].course_user_status !== 'Archived'\"> <a href=\"javascript:void(0)\"  class=\"btn btn-default btn-sm\" title=\"{{'Options'|translate}}\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v fa-lg\"></i></a>\n" +
    "													<ul class=\"dropdown-menu\">\n" +
    "													  <li><a href=\"#\" ng-click=\"model.addToArchive(model.learningCourses.data[$index].id, $event, ordering)\" title=\"{{'Archive'|translate}}\" class=\"text-muted\">{{'Archive'|translate}}</a></li>\n" +
    "													</ul>\n" +
    "												  </div>\n" +
    "												</div>\n" +
    "											  </div>\n" +
    "											  <div class=\"panel-body\">\n" +
    "												<div class=\"col-xs-12\">\n" +
    "												  <p class=\"h4 htruncate-m3\">\n" +
    "													<a href=\"#!/{{model.learningCourses.data[$index].course_slug}}/learn/{{model.learningCourses.data[$index].course_id}}\">{{model.learningCourses.data[$index].course_title}}</a>\n" +
    "												  </p>\n" +
    "												  <div class=\"navbar-btn clearfix\"></div>\n" +
    "												  <p class=\"htruncate-m2\"> {{model.learningCourses.data[$index].subtitle}}</p>\n" +
    "												  <div class=\"well-sm\"></div>\n" +
    "												  <ul class=\"list-inline\">\n" +
    "													<li ng-if=\"model.learningCourses.data[$index].parent_category_name\"class=\"navbar-btn clearfix list-group-item-heading\"><a ui-sref=\"CourseSearch({ category_id: model.learningCourses.data[$index].parent_category_id })\" title=\"{{model.learningCourses.data[$index].parent_category_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.learningCourses.data[$index].parent_category_name}}</small></strong></span></a></li>\n" +
    "													<li ng-if=\"model.learningCourses.data[$index].category_name\" class=\"navbar-btn clearfix list-group-item-heading\"><a ui-sref=\"CourseSearch({ category_id: model.learningCourses.data[$index].category_id })\" title=\"{{model.learningCourses.data[$index].category_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.learningCourses.data[$index].category_name}}</small></strong></span></a></li>\n" +
    "													<li ng-if=\"model.learningCourses.data[$index].instructional_level_name\"><a ui-sref=\"CourseSearch({ instructionLevel: model.learningCourses.data[$index].instructional_level_id })\" title=\"{{model.learningCourses.data[$index].instructional_level_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.learningCourses.data[$index].instructional_level_name}}</small></strong></span></a></li>\n" +
    "													<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\" class=\"navbar-btn clearfix list-group-item-heading\">\n" +
    "														<span ng-if=\"model.learningCourses.data[$index].teacher_name\">\n" +
    "														<strong><small><profile-name  user-name-class=\"btn btn-default\" user-small-text=\"true\" user-profile-id='model.learningCourses.data[$index].teacher_user_id' ng-if='model.learningCourses.data[$index]' user-display-name='model.learningCourses.data[$index].teacher_name'></profile-name></small></strong>\n" +
    "														</span>\n" +
    "													</li>\n" +
    "													<li><rating-button average-rating='{{model.learningCourses.data[$index].rating}}' courseuserid='{{model.learningCourses.data[$index].id}}'  btnstyle=\"buttonwithsmallstar\" btntext=\"{{'Rate It'|translate}}\" user-id='{{model.learningCourses.data[$index].user_id}}' course-id='{{model.learningCourses.data[$index].course_id}}' ng-if='model.learningCourses.data[$index].id'></rating-button></li>\n" +
    "												  </ul>\n" +
    "												</div>\n" +
    "											  </div>\n" +
    "											</div>\n" +
    "										  </li>\n" +
    "										  <li class=\"col-sm-6\" ng-if=\"$index + 1 < model.learningCourses.data.length\" id=\"learning_elements_{{model.learningCourses.data[$index+1].id}}\">\n" +
    "											<div class=\"panel panel-info\">\n" +
    "											  <div class=\"panel-heading clearfix\">\n" +
    "												<div class=\"col-xs-12\">\n" +
    "												  <div class=\"pull-left\">\n" +
    "													<div class=\"navbar-btn clearfix list-group-item-heading\"></div>\n" +
    "													<ul class=\"list-inline\">\n" +
    "														<li><span title=\"{{'course'|translate}}\"><img src=\"assets/img/course.png\" alt=\"[Image: {{'Course'|translate}}]\" title=\"{{'Course'|translate}}\"></span> </li>\n" +
    "													</ul>\n" +
    "												  </div>\n" +
    "												  <div class=\"pull-right well-sm dropdown\" ng-if=\"model.learningCourses.data[$index+1].course_user_status !== 'Archived'\"> <a href=\"javascript:void(0)\"  class=\"btn btn-default btn-sm\" title=\"{{'Options'|translate}}\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v fa-lg\"></i></a>\n" +
    "													<ul class=\"dropdown-menu\">\n" +
    "													  <li><a href=\"#\" ng-click=\"model.addToArchive(model.learningCourses.data[$index+1].id, $event, ordering)\" title=\"{{'Archive'|translate}}\" class=\"text-muted\">{{'Archive'|translate}}</a></li>\n" +
    "													</ul>\n" +
    "												  </div>\n" +
    "												</div>\n" +
    "											  </div>\n" +
    "											  <div class=\"panel-body\">\n" +
    "												<div class=\"col-xs-12\">\n" +
    "												  <p class=\"h4 htruncate-m3\">\n" +
    "													<a href=\"#!/{{model.learningCourses.data[$index+1].course_slug}}/learn/{{model.learningCourses.data[$index+1].course_id}}\">{{model.learningCourses.data[$index + 1].course_title}}</a>\n" +
    "												  </p>\n" +
    "												  <div class=\"navbar-btn clearfix\"></div>\n" +
    "												  <p class=\"htruncate-m2\"> {{model.learningCourses.data[$index + 1].subtitle}}</p>\n" +
    "												  <div class=\"well-sm\"></div>\n" +
    "												  <ul class=\"list-inline\">\n" +
    "													<li ng-if =\"model.learningCourses.data[$index + 1].parent_category_name\" class=\"navbar-btn clearfix list-group-item-heading\"><a ui-sref=\"CourseSearch({ category_id: model.learningCourses.data[$index + 1].parent_category_id })\" title=\"{{model.learningCourses.data[$index + 1].parent_category_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.learningCourses.data[$index + 1].parent_category_name}}</small></strong></span></a></li>\n" +
    "													<li ng-if=\"model.learningCourses.data[$index + 1].category_name\" class=\"navbar-btn clearfix list-group-item-heading\"><a ui-sref=\"CourseSearch({ category_id: model.learningCourses.data[$index + 1].category_id })\" title=\"{{model.learningCourses.data[$index + 1].category_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.learningCourses.data[$index + 1].category_name}}</small></strong></span></a></li>\n" +
    "													<li ng-if=\"model.learningCourses.data[$index + 1].instructional_level_name\"><a ui-sref=\"CourseSearch({ instructionLevel: model.learningCourses.data[$index + 1].instructional_level_id })\" title=\"{{model.learningCourses.data[$index + 1].instructional_level_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.learningCourses.data[$index + 1].instructional_level_name}}</small></strong></span></a></li>\n" +
    "													<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\" class=\"navbar-btn clearfix list-group-item-heading\">\n" +
    "													<span ng-if=\"model.learningCourses.data[$index + 1].teacher_name\">\n" +
    "													<strong><small><profile-name user-name-class=\"btn btn-default\" user-small-text=\"true\" user-profile-id='model.learningCourses.data[$index + 1].teacher_user_id' ng-if='model.learningCourses.data[$index + 1]' user-display-name='model.learningCourses.data[$index + 1].teacher_name'></profile-name></small></strong></span></li>\n" +
    "													<li>\n" +
    "														<rating-button average-rating='{{model.learningCourses.data[$index+1].rating}}'  courseuserid='{{model.learningCourses.data[$index+1].id}}' class=\"\" btnstyle=\"buttonwithsmallstar\" btntext=\"{{'Rate It'|translate}}\" user-id='{{model.learningCourses.data[$index+1].user_id}}' course-id='{{model.learningCourses.data[$index+1].course_id}}' ng-if='model.learningCourses.data[$index+1].id'></rating-button>\n" +
    "													</li>\n" +
    "												  </ul>\n" +
    "												</div>\n" +
    "											  </div>\n" +
    "											</div>\n" +
    "										  </li>\n" +
    "										</ul>\n" +
    "									  </div>\n" +
    "									</div>\n" +
    "								  </div>\n" +
    "							  </div>     \n" +
    "								<div  class=\"text-center\" ng-show=\"_metadata.total_records === 0\"><h3 class=\"text-muted\">{{'No records found'|translate}}</h3></div>\n" +
    "								<div class=\"wel-sm\"></div>\n" +
    "								<div class=\"paging clearfix text-center\" ng-show=\"_metadata.total_records > 0\">\n" +
    "									<pagination total-items=\"_metadata.total_records\"  ng-model=\"currentPage\" ng-change=\"paginate('#learning-courses')\" max-size=\"_metadata.maxSize\" boundary-links=\"true\" num-pages=\"_metadata.noOfPages\" items-per-page=\"_metadata.limit\" first-text=\"{{'First'|translate}}\" last-text=\"{{'Last'|translate}}\" next-text=\"{{'Next'|translate}}\" previous-text=\"{{'Previous'|translate}}\"></pagination>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						  </div>\n" +
    "						</div>\n" +
    "					  </div>\n" +
    "					</section>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "<!--section end-->");
}]);

angular.module("themes/teamr/views/courses/manageCourse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/manageCourse.tpl.html",
    "<section class=\"clearfix ng-scope\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"well\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-11 col-sm-12 col-xs-12 nav navbar-right\">\n" +
    "					<section class=\"clearfix panel\">\n" +
    "						<div class=\"container\">			\n" +
    "							<course-navbar></course-navbar>		\n" +
    "							<div class=\"\">\n" +
    "							<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix\" ng-if=\"model.loading === false\">	\n" +
    "								<div class=\"tab-pane active\" id=\"course_roadmap\">\n" +
    "									<div class=\"panel well-sm\">	\n" +
    "										<p ng-bind-html=\"model.courseRoadmap.content\"></p>\n" +
    "									</div>\n" +
    "								</div>		\n" +
    "							</div>\n" +
    "						  </div>\n" +
    "						</div>\n" +
    "					</section>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/teamr/views/courses/manageCourseBasics.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/manageCourseBasics.tpl.html",
    "<section class=\"clearfix ng-scope\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"well\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-11 col-sm-12 col-xs-12 nav navbar-right\">\n" +
    "					<section class=\"clearfix panel\">\n" +
    "						<div class=\"container\">	\n" +
    "							<course-navbar></course-navbar>		\n" +
    "							<div class=\"\">\n" +
    "							<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "								 <div  class=\"tab-pane active\" id=\"basics\">\n" +
    "									<div class=\"panel\">					\n" +
    "										<div class=\"list-header text-center\">\n" +
    "											<h3>{{'Basics'|translate}}</h3>\n" +
    "											<span>{{'Help students find your course.'|translate}}</span>\n" +
    "										</div>					\n" +
    "									</div>				\n" +
    "									<div class=\"well-lg panel clearfix\">\n" +
    "										<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-12\">\n" +
    "											\n" +
    "											<form role=\"form\" class=\"form-horizontal clearfix\" name='manage_course_basics' ng-submit='model.saveCourseBasic()'>\n" +
    "													<div class=\"form-group\"  ng-show=\"$root.auth.providertype === 'admin'\">\n" +
    "														<label class=\"control-label\" for=\"course_title\">{{'Lecturer'|translate}}</label>\n" +
    "														<select class=\"form-control\" id=\"sub_category\" ng-model=\"model.courseBasic.user_id\" ng-options=\"Instructors.user_id as Instructors.displayname for Instructors in model.instructors\"  name=\"sub_category\">\n" +
    "															<option value=\"\" >---{{'Please select'|translate}}---</option>													\n" +
    "														</select>\n" +
    "														<span class=\"help-block\"><span class=\"text-info\">{{'Leave it blank, if it is site\\'s course.'|translate}}</span></span>\n" +
    "													</div>\n" +
    "													<div class=\"form-group\">\n" +
    "														<label class=\"control-label\" for=\"course_title\">{{'Title'|translate}}</label>\n" +
    "														<div class=\"input-group\">\n" +
    "															<input type=\"text\" class=\"form-control\" id=\"course_title\" placeholder=\"{{'Title'|translate}}\" maxlength = \"100\" ng-model=\"model.courseBasic.title\" required >	\n" +
    "															<span class=\"input-group-addon\">{{model.courseBasic.title.length}}</span>\n" +
    "														</div>\n" +
    "													</div>\n" +
    "													<div class=\"form-group\">\n" +
    "														<label class=\"control-label\" for=\"course_subtitle\">{{'Sub Title'|translate}}</label>\n" +
    "														<div class=\"input-group\">\n" +
    "															<input type=\"text\" class=\"form-control\" id=\"course_sub_title\" placeholder=\"{{'Sub Title'|translate}}\" maxlength = \"200\" ng-model=\"model.courseBasic.subtitle\" required>\n" +
    "															<span class=\"input-group-addon\">{{model.courseBasic.subtitle.length}}</span>\n" +
    "														</div>\n" +
    "													</div>\n" +
    "													<div class=\"form-group\">\n" +
    "														<div class=\"row\">\n" +
    "															<div class=\"col-md-6\">\n" +
    "																<label class=\"control-label\" for=\"language\">{{'Language'|translate}}</label>\n" +
    "																	<div class=\"\">\n" +
    "																		<select class=\"form-control\" id=\"language\"  name=\"language\" ng-model=\"model.courseBasic.language_id\" ng-options=\"languages.id as languages.name for languages in model.languages\" required >\n" +
    "																			<option value=\"\" >---{{'Please select'|translate}}---</option>\n" +
    "																		</select>							\n" +
    "																	</div>\n" +
    "															</div>\n" +
    "															<div class=\"col-md-6\">\n" +
    "																<label class=\"control-label\" for=\"parent_category\">{{'Category'|translate}}</label>\n" +
    "																<div class=\"\">\n" +
    "																	<select class=\"form-control\" id=\"parent_category\" name=\"parent_category\" ng-model=\"model.courseBasic.parent_category_id\" data-ng-change=\"model.getSubCategories()\" ng-options=\"parentCategory.id as parentCategory.sub_category_name for parentCategory in model.listcourse.category\" required >\n" +
    "																		<option value=\"\" >---{{'Please select'|translate}}---</option>\n" +
    "																	</select>							\n" +
    "																</div>\n" +
    "															</div>										\n" +
    "														</div>\n" +
    "													</div>\n" +
    "													 <div class=\"form-group\" ><!-- ng-show=\"model.subCategories.length\" -->\n" +
    "														<div class=\"row\">\n" +
    "															<div class=\"col-md-6\">\n" +
    "																\n" +
    "															</div>\n" +
    "															<div class=\"col-md-6\">\n" +
    "																<label class=\"control-label\" for=\"sub_category\">{{'Sub Category'|translate}}</label>\n" +
    "																<div class=\"\">\n" +
    "																	<select class=\"form-control\" id=\"sub_category\" ng-model=\"model.courseBasic.category_id\" ng-options=\"subCategory.category_id as subCategory.sub_category_name for subCategory in model.subCategories\"  name=\"sub_category\" required >\n" +
    "																		<option value=\"\" >---{{'Please select'|translate}}---</option>\n" +
    "																	</select>							\n" +
    "																</div>\n" +
    "															</div>\n" +
    "														</div>\n" +
    "													</div>															\n" +
    "													<div class=\"well well-sm clearfix\">\n" +
    "														<div class=\"pull-right\">\n" +
    "															<label class=\"sr-only\" for=\"submit\">{{'Save'|translate}}</label>\n" +
    "															<input type=\"submit\" class=\"btn btn-primary btn-lg\" id=\"submit\" value=\"{{'Save'|translate}}\" >\n" +
    "														</div>\n" +
    "													</div>\n" +
    "											</form>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>		  \n" +
    "							</div>\n" +
    "						  </div>\n" +
    "						</div>\n" +
    "					</section>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/teamr/views/courses/manageCourseCurriculum.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/manageCourseCurriculum.tpl.html",
    "<section class=\"clearfix ng-scope\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"well\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-11 col-sm-12 col-xs-12 nav navbar-right\">\n" +
    "					<section class=\"clearfix panel\">\n" +
    "						<div class=\"container\">	\n" +
    "							<course-navbar></course-navbar>		\n" +
    "							<div class=\"\">\n" +
    "							<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix curriculum\" ng-if=\"model.loading === false\">	\n" +
    "								 <div class=\"navabar-default tab-pane active\" id=\"curriculum\">\n" +
    "								 <div class=\"panel\">\n" +
    "									<div class=\"list-header text-center\"><h3>{{'Curriculum'|translate}}</h3></div>	\n" +
    "								 </div>\n" +
    "									<div class=\"panel clearfix\">\n" +
    "										<!-- lessons and chapters listing -->\n" +
    "										<ul class=\"clearfix list-unstyled navbar-btn col-xs-12\" ui-sortable=\"sortableOptions\" ng-model=\"model.OnlineCourse.data\">													 \n" +
    "											<li class=\"clearfix\" ng-repeat='OnlineCourse in model.OnlineCourse.data' >\n" +
    "												<div class=\"col-xs-12 navbar-btn\" ng-if=\"OnlineCourse.is_chapter === 1\"  ng-class=\"{'btn-default': OnlineCourse.is_chapter == '1'}\">\n" +
    "													<div class=\"clearfix well-sm\">\n" +
    "													<div class=\"col-xs-10 row\">\n" +
    "														<span class=\"clearfix\"><strong>{{'Chapter'|translate}}: {{OnlineCourse.lesson_name}}</strong></span>\n" +
    "														<i class=\"clearfix htruncate-m2\">{{OnlineCourse.lesson_description}}</i>\n" +
    "													</div>								\n" +
    "													<ul class=\"list-inline clearfix pull-right\">\n" +
    "															<li ng-if=\"!OnlineCourse.showDetailsChapter\">\n" +
    "															  <a href=\"#\" class=\"btn pull-right text-info\" ng-click=\"model.lessonTitleEdit($event, OnlineCourse.id, OnlineCourse, 'chapter')\" ><span class=\"\" ><i class=\"fa fa-pencil\"></i></span></a>	\n" +
    "															</li>\n" +
    "															<li ng-if=\"OnlineCourse.showDetailsChapter\">\n" +
    "															  <a href=\"#\" class=\"btn  btn-default text-info pull-right\" ng-click=\"model.lessonTitleEditClose($event, OnlineCourse.id, OnlineCourse, 'chapter')\" ><span class=\"\" ><i class=\"fa fa-times\"></i></span></a>	\n" +
    "															</li>								\n" +
    "														</ul>\n" +
    "														\n" +
    "													<a href=\"#\" class=\"btn pull-right  text-info\" ng-click=\"model.deleteLessonFun($event, OnlineCourse.id)\"><span class=\"\" ><i class=\"fa fa-trash-o\"></i></span></a>\n" +
    "													\n" +
    "													</div>\n" +
    "													<div  class=\"navbar-btn clearfix panel text-primary well-sm \" ng-if=\"OnlineCourse.id === OnlineCourse.currenItem1 && currentView === 'edit' && OnlineCourse.showDetailsChapter\" >									\n" +
    "													<div class=\"col-xs-12 clearfix \" >\n" +
    "													<div class=\"panel well-sm clearfix \" ng-show=\"model.editsection === true\">\n" +
    "														<form role=\"form\" name=\"chapter_edit \"class=\"form-horizontal clearfix text-muted\"  ng-submit=\"model.updateChapter(OnlineCourse.id )\" >		\n" +
    "																<div class=\"form-group\" >\n" +
    "																	<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-8 col-xs-offset-2 row\">\n" +
    "																		<label class=\"control-label\" for=\"chapter_name\">{{'Title'|translate}}</label>											\n" +
    "																		<div class=\"input-group\">			\n" +
    "																				<input type=\"text\" class=\"form-control\" name=\"chapter_name\" id=\"chapter_name\" ng-model=\"model.editOnlineChapter.lesson_name\" required maxlength=\"50\">\n" +
    "																				<span class=\"input-group-addon\">{{model.editOnlineChapter.lesson_name.length}}</span>																						\n" +
    "																		</div>													\n" +
    "																	</div>\n" +
    "																</div>\n" +
    "																<div class=\"form-group\" >\n" +
    "																	<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-8 col-xs-offset-2 row\">\n" +
    "																		<label class=\"control-label\" for=\"chapter_description\">{{'Enter short description about this chapter'|translate}}</label>				\n" +
    "																		<textarea type=\"text\" class=\"form-control\" id=\"chapter_description\" name=\"chapter_description\" ng-model=\"model.editOnlineChapter.lesson_description\" maxlength=\"150\"></textarea>														\n" +
    "																	</div>\n" +
    "																</div>\n" +
    "																<div class=\"clearfix\">\n" +
    "																	<div class=\"text-center\">\n" +
    "																		<label class=\"sr-only\" for=\"section_save\">{{'Save'|translate}}</label>\n" +
    "																		<input type=\"submit\" ng-disabled=\"disableUpdateButton\" class=\"btn btn-primary\" id=\"section_save\" value=\"{{'Save'|translate}}\" >\n" +
    "																	 </div>\n" +
    "															</div>\n" +
    "														</form>\n" +
    "														</div>\n" +
    "													</div>\n" +
    "													\n" +
    "												</div>\n" +
    "												\n" +
    "												</div>\n" +
    "												<div class=\"col-xs-12 navbar-btn\" ng-if=\"OnlineCourse.is_chapter === 0\" >\n" +
    "													<div class=\"col-xs-12\" ng-class=\"{'btn-default': OnlineCourse.is_chapter == '1', 'btn-success':OnlineCourse.is_chapter == '0'}\">\n" +
    "														<div class=\"clearfix well-sm\"><span><strong>{{'Lecture'|translate}}: {{OnlineCourse.lesson_name}}</strong></span>									\n" +
    "														<a ng-click=\"showDetails = ! showDetails\" class=\"btn text-info pull-right\"><span><i class=\"fa fa-lg fa-caret-square-o-down\"></i></span></a>									\n" +
    "														<a href=\"#\" class=\"btn  text-info pull-right\" ng-click=\"model.deleteLessonFun($event, OnlineCourse.id)\"><span class=\"\" ><i class=\"fa fa-trash-o\"></i></span></a>\n" +
    "														</div>\n" +
    "														<div  class=\"navbar-btn clearfix panel text-primary well-sm \" ng-show=\"showDetails\">\n" +
    "															<div class=\"clearfix\">\n" +
    "																<div ng-show=\"OnlineCourse.lesson_description\"><span class=\"htruncate-m2\">&nbsp;{{OnlineCourse.lesson_description}}</span></div>\n" +
    "																<span ng-if=\"OnlineCourse.online_lesson_type_id === 5\" class=\"text-muted\"><i class=\"fa fa-download\"></i>&nbsp;{{OnlineCourse.filename}}</span>\n" +
    "																<span ng-if=\"OnlineCourse.online_lesson_type_id === 4\" class=\"text-muted\"><i class=\"fa fa-file-video-o\"></i>&nbsp;{{OnlineCourse.lesson_name}}</span>\n" +
    "																<span ng-if=\"OnlineCourse.online_lesson_type_id === 3\" class=\"text-muted\"><i class=\"fa fa-play-circle-o\"></i></i>&nbsp;{{OnlineCourse.filename}}</span>										\n" +
    "															</div>\n" +
    "															<ul class=\"list-inline clearfix pull-right\">\n" +
    "															<li ng-if=\"!OnlineCourse.showDetailsLesson\">\n" +
    "															 <a href=\"#\" class=\"btn  text-info pull-right\" ng-click=\"model.lessonTitleEdit($event, OnlineCourse.id,OnlineCourse, 'lesson')\" ><span class=\"\" ><i class=\"fa fa-pencil\"></i></span></a>\n" +
    "															</li>\n" +
    "															<li ng-if=\"OnlineCourse.showDetailsLesson\">\n" +
    "															  <a href=\"#\" class=\"btn  btn-default text-info pull-right\" ng-click=\"model.lessonTitleEditClose($event, OnlineCourse.id, OnlineCourse, 'lesson')\" ><span class=\"\" ><i class=\"fa fa-times\"></i></span></a>	\n" +
    "															</li>								\n" +
    "														</ul>\n" +
    "														<div class='text-muted navbar-btn' ng-if=\"!OnlineCourse.showDetailsLesson && OnlineCourse.online_lesson_type_id === 1\">\n" +
    "															<strong>{{'Article Content'|translate}}</strong>\n" +
    "															<p ng-bind-html='OnlineCourse.article_content' class=\"well navbar-btn\"></p>\n" +
    "														</div>	\n" +
    "														<div class='text-muted navbar-btn well-lg' ng-if=\"!OnlineCourse.showDetailsLesson && OnlineCourse.online_lesson_type_id === 3\">					\n" +
    "														<div class=\"alert alert-info\" ng-if=\"OnlineCourse.is_video_converting_is_processing === 1\">\n" +
    "														\n" +
    "																<span class=\"well-sm\">{{'Video converting under progressing'|translate}}</span>\n" +
    "															</div>\n" +
    "															<div class=\"alert alert-danger\" ng-if=\"OnlineCourse.is_video_converting_is_processing === 0 && OnlineCourse.is_lesson_ready_to_view !== 1\">\n" +
    "																<span class=\"well-sm\">{{'Video conversion Failed. Students can\\'t view this lesson'|translate}}</span>\n" +
    "															</div>\n" +
    "															<video id=\"video\"  ng-src=\"{{OnlineCourse.video_url}}\" controls=\"true\" ng-if=\"OnlineCourse.is_lesson_ready_to_view === 1\"></video>\n" +
    "														</div>\n" +
    "														<div class='text-muted navbar-btn well-lg' ng-if=\"!OnlineCourse.showDetailsLesson && OnlineCourse.online_lesson_type_id === 4\">											\n" +
    "															<p class=\"videoWrapper\" ng-bind-html=\"OnlineCourse.embed_code | to_trusted\"></p>			\n" +
    "																	\n" +
    "														</div>\n" +
    "														<div class=\"col-xs-12 clearfix \" ng-if=\"OnlineCourse.id === OnlineCourse.currenItemLesson && currentLessonView === 'edit'  && OnlineCourse.showDetailsLesson\">									\n" +
    "														<div class=\"panel well-sm clearfix \">\n" +
    "															<video-lessons-form course='{{courseID}}' action='edit' lesson-id='{{OnlineCourse.id}}'  ng-if=\"OnlineCourse.online_lesson_type_id === 3 && $root.settings['site.enabled_plugins'].indexOf('VideoLessons') > -1\"  updateparent=\"model.getOnlineCourses()\" ></video-lessons-form>\n" +
    "															<video-external-embed-lessons-form course='{{courseID}}' action='edit' lesson-id='{{OnlineCourse.id}}' ng-if=\"OnlineCourse.online_lesson_type_id === 4 && $root.settings['site.enabled_plugins'].indexOf('VideoExternalEmbedLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></video-external-embed-lessons-form>\n" +
    "															<article-lessons-form course='{{courseID}}' action='edit' lesson-id='{{OnlineCourse.id}}' ng-if=\"OnlineCourse.online_lesson_type_id === 1 && $root.settings['site.enabled_plugins'].indexOf('ArticleLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></article-lessons-form>\n" +
    "															<downloadable-file-lessons-form course='{{courseID}}' lesson-id='{{OnlineCourse.id}}' action='edit'  ng-if=\"OnlineCourse.online_lesson_type_id === 5 && $root.settings['site.enabled_plugins'].indexOf('DownloadableFileLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></downloadable-file-lessons-form>		\n" +
    "															</div>\n" +
    "														</div>\n" +
    "													</div>\n" +
    "												</div>							\n" +
    "											</li>\n" +
    "										</ul>\n" +
    "										<!-- lesson and chapter add section -->	\n" +
    "										<div class=\"navbar-btn clearfix\">		\n" +
    "												<div class=\"well-lg navbar-btn\">\n" +
    "													<div class=\"well-lg clearfix\"></div>\n" +
    "													<div class=\"col-sm-6 col-xs-12\">\n" +
    "														<a class=\"btn btn-info btn-block btn-lg navbar-btn\" href=\"#\" ng-click=\"model.addChapterClick($event)\" ng-disabled=\"model.addsection === true\" ><i class=\"fa fa-plus-square\"></i>&nbsp; {{'Add Chapter'|translate}}</a>\n" +
    "													</div>\n" +
    "													<div class=\"col-sm-6 col-xs-12\">\n" +
    "														<a class=\"btn btn-primary btn-block btn-lg navbar-btn\" href=\"#\" ng-click=\"model.addLesson($event)\" ><i class=\"fa fa-plus-square\"></i>&nbsp; {{'Add Lesson'|translate}}</a>\n" +
    "													</div>\n" +
    "												</div>\n" +
    "												<div class=\"col-xs-12 clearfix  navbar-btn\" ng-show=\"model.addsection === true\">							\n" +
    "													<div class=\"panel panel-default well-sm\">				\n" +
    "														<form role=\"form\" name=\"chapter_add\" class=\"form-horizontal clearfix\" ng-submit=\"model.addChapter($event)\">		\n" +
    "															<div class=\"form-group\" >\n" +
    "																<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-8 col-xs-offset-2 row\">\n" +
    "																	<label class=\"control-label\" for=\"chapter_name\">{{'Title'|translate}}</label>											\n" +
    "																	<div class=\"input-group\">			\n" +
    "																			<input type=\"text\" class=\"form-control\" name=\"chapter_name\" id=\"chapter_name\" ng-model=\"model.AddOnlineChapter.name\" required maxlength=\"50\">\n" +
    "																			<span class=\"input-group-addon\">{{model.AddOnlineChapter.name.length}}</span>																						\n" +
    "																	</div>\n" +
    "																	\n" +
    "																</div>\n" +
    "															</div>\n" +
    "															<div class=\"form-group\" >\n" +
    "																<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-8 col-xs-offset-2 row\">\n" +
    "																	<label class=\"control-label\" for=\"chapter_description\">{{'Enter short description about this chapter'|translate}}</label>\n" +
    "																		<textarea type=\"text\" class=\"form-control\" id=\"chapter_description\" name=\"chapter_description\" ng-model=\"model.AddOnlineChapter.description\" maxlength=\"150\"></textarea>												\n" +
    "																</div>\n" +
    "															</div>\n" +
    "															<div class=\"clearfix\">\n" +
    "																<div class=\"text-center\">\n" +
    "																	<label class=\"sr-only\" for=\"section_save\">{{'Save'|translate}}</label>\n" +
    "																	<input type=\"submit\" ng-disabled=\"disableButton\" class=\"btn btn-primary\" id=\"section_save\"  value=\"{{'Save'|translate}}\" >\n" +
    "																	<a href=\"#\" ng-click=\"model.addChapterCancel($event)\" class=\"\">{{'Cancel'|translate}}</a>\n" +
    "																 </div>\n" +
    "															</div>\n" +
    "														</form>\n" +
    "													</div>\n" +
    "												</div>\n" +
    "												\n" +
    "												<div class=\"col-xs-12 clearfix  navbar-btn lessonTypes\" ng-show=\"currentView === 'add'\">														\n" +
    "														<div class=\"panel panel-default well-sm clearfix\">\n" +
    "															<a href=\"#\" class=\"navbar-btn pull-right text-primary add-lession-cancel\" ng-click=\"model.cancelAddLesson($event);\">&nbsp;{{'Cancel'|translate}}</a>\n" +
    "															<video-lessons-form course='{{courseID}}' action='add' ng-if=\"$root.settings['site.enabled_plugins'].indexOf('VideoLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></video-lessons-form>\n" +
    "															<video-external-embed-lessons-form course='{{courseID}}' action='add'  ng-if=\"$root.settings['site.enabled_plugins'].indexOf('VideoExternalEmbedLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></video-external-embed-lessons-form>\n" +
    "															<article-lessons-form course='{{courseID}}' action='add'  ng-if=\"$root.settings['site.enabled_plugins'].indexOf('ArticleLessons') > -1\" updateparent=\"model.getOnlineCourses()\"></article-lessons-form>\n" +
    "															<downloadable-file-lessons-form course='{{courseID}}' action='add' ng-if=\"$root.settings['site.enabled_plugins'].indexOf('DownloadableFileLessons') > -1\"  updateparent=\"model.getOnlineCourses()\"></downloadable-file-lessons-form>						\n" +
    "														</div>\n" +
    "												</div>\n" +
    "												<div class=\"well-lg\"></div>\n" +
    "											</div>																	\n" +
    "										</div>						    					  \n" +
    "									</div>	\n" +
    "								</div>\n" +
    "						    </div>\n" +
    "						</div>\n" +
    "					</section>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/teamr/views/courses/manageCourseDangeZone.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/manageCourseDangeZone.tpl.html",
    "<section class=\"clearfix ng-scope\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"well\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-11 col-sm-12 col-xs-12 nav navbar-right\">\n" +
    "					<section class=\"clearfix panel\">\n" +
    "						<div class=\"container\">	\n" +
    "							<course-navbar></course-navbar>		\n" +
    "							<div class=\"\">\n" +
    "							<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "								<div class=\"navbar_default tab-pane active\" id=\"danger_zone\">\n" +
    "									<div class=\"panel\">					\n" +
    "										<div class=\"list-header text-center\">\n" +
    "											<h3>{{model.courseDangerZone.title}}</h3>								\n" +
    "										</div>					\n" +
    "									</div>\n" +
    "									<div class=\"well-lg panel clearfix\">\n" +
    "										<p ng-bind-html=\"model.courseDangerZone.content\"></p>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						  </div>\n" +
    "						</div>\n" +
    "					</section>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/teamr/views/courses/manageCourseFeedback.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/manageCourseFeedback.tpl.html",
    "<section class=\"clearfix ng-scope\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"well\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-11 col-sm-12 col-xs-12 nav navbar-right\">\n" +
    "					<section class=\"clearfix panel\">\n" +
    "						<div class=\"container\">	\n" +
    "							<course-navbar></course-navbar>		\n" +
    "							<div class=\"\">\n" +
    "							<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "								<div class=\"tab-pane active\" id=\"course_feedback\">\n" +
    "									<div class=\"panel well-sm\">					\n" +
    "										<p ng-bind-html=\"model.courseFeedback.content\"></p>\n" +
    "									</div>\n" +
    "								</div>	\n" +
    "							</div>\n" +
    "						  </div>\n" +
    "						</div>\n" +
    "					</section>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/teamr/views/courses/manageCourseGoals.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/manageCourseGoals.tpl.html",
    "<section class=\"clearfix ng-scope\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"well\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-11 col-sm-12 col-xs-12 nav navbar-right\">\n" +
    "					<section class=\"clearfix panel\">\n" +
    "						<div class=\"container\">	\n" +
    "							<course-navbar></course-navbar>		\n" +
    "							<div class=\"\">\n" +
    "							<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "								<div class=\"tab-pane active\" id=\"course_goals\">	 \n" +
    "									<div class=\"panel\">					\n" +
    "										<div class=\"list-header text-center\">\n" +
    "											<h3>{{'Course Goals'|translate}}</h3>\n" +
    "											<span>{{'Set your audience, what students will learn, and what they need in order to be successful'|translate}}.</span>\n" +
    "										</div>					\n" +
    "									</div>\n" +
    "									<div class=\"panel clearfix\">\n" +
    "										<div class=\"col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1 col-xs-12\">\n" +
    "											\n" +
    "											<form role=\"form\" class=\"form-horizontal clearfix navbar-btn\" ng-submit=\"model.goalsSave()\" name=\"manage_course_goals\">	\n" +
    "												<div class=\"form-group\">\n" +
    "													<div class=\"col-md-12 col-sm-12\"><label><strong class=\"text-primary\">{{'Instructional Level'|translate}}*</strong></label>							\n" +
    "													</div>	\n" +
    "													<div class=\"col-md-12 col-sm-12\">\n" +
    "													<div class=\"radio radio-inline\" ng-repeat=\"InstructionLevels in model.InstructionLevels\" ng-click='model.courseGoals.instructional_level_id = InstructionLevels.id'>\n" +
    "														<label for=\"{{InstructionLevels.name}}\"><input type=\"radio\" value=\"{{InstructionLevels.id}}\" id=\"Beginner_Level_{{InstructionLevels.id}}\" name=\"course_Level\" ng-model=\"model.courseGoals.instructional_level_id\" required>\n" +
    "														{{InstructionLevels.name}}</label>\n" +
    "													</div>																\n" +
    "													<div class=\"clearfix\"></div>\n" +
    "													</div>\n" +
    "												</div>\n" +
    "												<div class=\"form-group\">\n" +
    "													<div class=\"col-md-12 col-sm-12\"><label><strong class=\"text-primary\">{{'At the end of my course, students will be able to...'|translate}}</strong></label>\n" +
    "													<p>{{'Start with a verb. Include details on specific skills students will learn and where students can apply them.'|translate}}</p>\n" +
    "													</div>					\n" +
    "													<div class=\"col-md-12 col-sm-12\">\n" +
    "														<div text-angular ng-model=\"model.courseGoals.students_will_be_able_to\" name=\"students_will_be_able_to\"\n" +
    "														ta-toolbar=\"[['p','pre','quote'], ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'],  ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'], ['insertImage', 'insertLink', 'wordcount', 'charcount']]\"\n" +
    "														ta-toolbar-class=\"btn-toolbar\" \n" +
    "														ta-toolbar-group-class=\"btn-group\" \n" +
    "														ta-toolbar-button-class=\"btn btn-primary\" \n" +
    "														ta-toolbar-button-active-class=\"active\"\n" +
    "														ta-focussed-class=\"focussed\"\n" +
    "														ta-text-editor-class=\"form-control\"\n" +
    "														ta-html-editor-class=\"form-control\"></div>\n" +
    "													</div>\n" +
    "												</div>\n" +
    "												<div class=\"form-group\">\n" +
    "													<div class=\"col-md-12 col-sm-12\"><label><strong class=\"text-primary\">{{'Who should take this course? Who should not?'|translate}}</strong></label>\n" +
    "													<p>{{'Students appreciate instructors who set the right expectations by telling them what specific student needs they are solving, who the course is best suited for, and who it is NOT for.'|translate}}</p>\n" +
    "													</div>\n" +
    "													<div class=\"col-md-12 col-sm-12\">\n" +
    "														<div text-angular ng-model=\"model.courseGoals.who_should_take_this_course_and_who_should_not\" name=\"who_should_take_this_course_and_who_should_not\"\n" +
    "														ta-toolbar=\"[['p','pre','quote'], ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'],  ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'], ['insertImage', 'insertLink', 'wordcount', 'charcount']]\"\n" +
    "														ta-toolbar-class=\"btn-toolbar\" \n" +
    "														ta-toolbar-group-class=\"btn-group\" \n" +
    "														ta-toolbar-button-class=\"btn btn-primary\" \n" +
    "														ta-toolbar-button-active-class=\"active\"\n" +
    "														ta-focussed-class=\"focussed\"\n" +
    "														ta-text-editor-class=\"form-control\"\n" +
    "														ta-html-editor-class=\"form-control\"></div>\n" +
    "													</div>\n" +
    "													\n" +
    "												</div>\n" +
    "												<div class=\"form-group\">\n" +
    "													<div class=\"col-md-12 col-sm-12\"><label><strong class=\"text-primary\">{{'What will students need to know or do before starting this course?'|translate}}</strong></label>\n" +
    "													<p>{{'What materials/software do the students need and what actions do they have to perform before the course begins?'|translate}}</p>\n" +
    "													</div>	\n" +
    "													<div class=\"col-md-12 col-sm-12\">\n" +
    "														<div text-angular ng-model=\"model.courseGoals.what_actions_students_have_to_perform_before_begin\" name=\"what_actions_students_have_to_perform_before_begin\"\n" +
    "														ta-toolbar=\"[['p','pre','quote'], ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'],  ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'], ['insertImage', 'insertLink', 'wordcount', 'charcount']]\"\n" +
    "														ta-toolbar-class=\"btn-toolbar\" \n" +
    "														ta-toolbar-group-class=\"btn-group\" \n" +
    "														ta-toolbar-button-class=\"btn btn-primary\" \n" +
    "														ta-toolbar-button-active-class=\"active\"\n" +
    "														ta-focussed-class=\"focussed\"\n" +
    "														ta-text-editor-class=\"form-control\"\n" +
    "														ta-html-editor-class=\"form-control\"></div>												\n" +
    "													</div>\n" +
    "													\n" +
    "												</div>\n" +
    "												\n" +
    "												<div class=\"well well-sm clearfix\">\n" +
    "													<div class=\"pull-right\">\n" +
    "														<label class=\"sr-only\" for=\"submit\">{{'Save'|translate}}</label>\n" +
    "														<input type=\"submit\" class=\"btn btn-primary btn-lg\" id=\"submit\" value=\"{{'Save'|translate}}\" >\n" +
    "													</div>\n" +
    "												</div>\n" +
    "											</form>\n" +
    "										</div>\n" +
    "									</div>				\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						  </div>\n" +
    "						</div>\n" +
    "					</section>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/teamr/views/courses/manageCourseHelp.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/manageCourseHelp.tpl.html",
    "<section class=\"clearfix ng-scope\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"well\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-11 col-sm-12 col-xs-12 nav navbar-right\">\n" +
    "					<section class=\"clearfix panel\">\n" +
    "						<div class=\"container\">	\n" +
    "							<course-navbar></course-navbar>		\n" +
    "							<div class=\"\">\n" +
    "							<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "								<div class=\"navbar_default tab-pane active\" id=\"help\">\n" +
    "									<div class=\"panel\">					\n" +
    "										<div class=\"list-header text-center\">\n" +
    "											<h3>{{model.courseHelp.title}}</h3>					\n" +
    "										</div>					\n" +
    "									</div>	\n" +
    "									<div class=\"navbar-btn panel well-sm clearfix\">\n" +
    "										<p ng-bind-html=\"model.courseHelp.content\"></p>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						  </div>\n" +
    "						</div>\n" +
    "					</section>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/teamr/views/courses/manageCourseImage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/manageCourseImage.tpl.html",
    "<section class=\"clearfix ng-scope\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"well\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-11 col-sm-12 col-xs-12 nav navbar-right\">\n" +
    "					<section class=\"clearfix panel\">\n" +
    "						<div class=\"container\">	\n" +
    "							<course-navbar></course-navbar>		\n" +
    "							<div class=\"\">\n" +
    "							<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "								<div  class=\"tab-pane active\" id=\"course_image\">\n" +
    "									<div class=\"panel\">					\n" +
    "										<div class=\"list-header text-center\">\n" +
    "											<h3>{{'Image'|translate}}</h3>\n" +
    "										</div>\n" +
    "										\n" +
    "									</div>				\n" +
    "									<div class=\"panel clearfix\">\n" +
    "										<span class=\"navbar-btn\">{{'Cover Preview'|translate}}:*</span>\n" +
    "										<div class=\"thumbnail clearfix\">\n" +
    "												<!-- course image when is_from_mooc_affiliate false -->\n" +
    "												<div ng-if=\"model.courseImage.is_from_mooc_affiliate !== 1\">\n" +
    "													<a ng-if=\"model.courseImage.image_hash && preview_picture_filename === ''\" href=\"#\"> \n" +
    "														<img ng-src=\"{{$root.site_url}}img/big_thumb/Course/{{model.courseImage.image_hash}}\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "													</a>\n" +
    "													<a ng-if=\"!model.courseImage.image_hash && preview_picture_filename === ''\" href=\"#\"> \n" +
    "														<img ng-src=\"{{$root.site_url}}img/big_thumb/Course/0.default.jpg\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "													</a>\n" +
    "													<a ng-if=\"preview_picture_filename !== ''\" href=\"#\"> \n" +
    "														<img ng-src=\"{{$root.site_url}}img/big_thumb/CoursePreview/{{model.courseImage.id}}.{{preview_picture_filename}}\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "													</a>\n" +
    "												</div>\n" +
    "												<!-- course image when is_from_mooc_affiliate true -->\n" +
    "												<div ng-if=\"model.courseImage.is_from_mooc_affiliate === 1\" >							\n" +
    "													<a ng-if=\"model.courseImage.course_image && preview_picture_filename === ''\" href=\"#\"> \n" +
    "														<img ng-src=\"{{model.courseImage.course_image}}\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "													</a>\n" +
    "													<a ng-if=\"!model.courseImage.course_image  && preview_picture_filename === ''\" href=\"#\"> \n" +
    "														<img ng-src=\"{{$root.site_url}}img/big_thumb/Course/0.default.jpg\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "													</a>\n" +
    "													<a ng-if=\"preview_picture_filename !== ''\" href=\"#\"> \n" +
    "														<img ng-src=\"{{$root.site_url}}img/big_thumb/CoursePreview/{{model.courseImage.id}}.{{preview_picture_filename}}\" alt=\"[Image: {{model.courseImage.title}}]\" title=\"{{model.courseImage.title}}\" class=\"img-responsive\" />\n" +
    "													</a>\n" +
    "												</div>\n" +
    "																	\n" +
    "											<div class=\"panel-body\">\n" +
    "												<p>{{'A good course image is critical to a course'|translate}}'{{'s success. It should grab the attention of the viewer and help them understand the essence of what the course has to offer.'|translate}}</p>					\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										\n" +
    "										<div class=\"well-lg\">\n" +
    "											<form role=\"form\" class=\"form-horizontal clearfix\" name=\"manage_course_image\"  ng-submit=\"model.saveCourseImage()\">		\n" +
    "												<div class=\"form-group\">\n" +
    "													<label class=\"col-md-3 col-sm-3 control-label\" for=\"course_image\">{{'Add/Change Image'|translate}}:</label>\n" +
    "													<div class=\"col-md-9 col-sm-9\">\n" +
    "														<div class=\"pull-left col-md-12 col-sm-12 col-xs-12\" ng-init=\"beforeUpload=true; afterUpload= false; duringUpload= false;\">\n" +
    "															<!--<span class=\"\">\n" +
    "															<i class=\"fa fa-upload\" ng-show=\"beforeUpload\"></i>\n" +
    "															<i class=\"fa fa-spinner fa-spin\" ng-show=\"duringUpload\"></i>\n" +
    "															<i class=\"fa fa-check\" ng-show=\"afterUpload\"></i>\n" +
    "															Upload</span>-->\n" +
    "															<input type=\"file\" class=\"navbar-btn\" id=\"inputTaskAttachments\" name=\"attachment\" required onchange=\"angular.element(this).scope().uploadFile(this.files)\" >\n" +
    "															<span class=\"text-danger help-block\">{{'Allowed extensions: jpg, jpeg, gif, png'|translate}}</span>\n" +
    "														</div>\n" +
    "													</div>\n" +
    "												</div>\n" +
    "												\n" +
    "												<div class=\"well well-sm clearfix\">\n" +
    "													<div class=\"pull-right\">\n" +
    "														<label class=\"sr-only\" for=\"submit\">{{'Save'|translate}}</label>\n" +
    "														<input type=\"submit\" class=\"btn btn-primary btn-lg\"  id=\"course_image_save\" value=\"{{'Save'|translate}}\" ng-hide=\"disableSave\" >\n" +
    "														<input type=\"submit\" class=\"btn btn-primary btn-lg\" ng-disabled=\"true\" id=\"course_image_save\" value=\"{{' Validating...'|translate}}\" ng-hide=\"!disableSave\" >\n" +
    "														<input type=\"button\" class=\"btn btn-primary btn-lg\" ng-click=\"model.uploadCancel()\"  value=\"Cancel\"  ng-show=\"duringUpload\" >\n" +
    "													</div>\n" +
    "												</div>\n" +
    "											</form>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "								</div>	\n" +
    "							</div>\n" +
    "						  </div>\n" +
    "						</div>\n" +
    "					</section>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/teamr/views/courses/manageCoursePrice.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/manageCoursePrice.tpl.html",
    "<section class=\"clearfix ng-scope\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"well\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-11 col-sm-12 col-xs-12 nav navbar-right\">\n" +
    "					<section class=\"clearfix panel\">\n" +
    "						<div class=\"container\">	\n" +
    "							<course-navbar></course-navbar>		\n" +
    "							<div class=\"\">\n" +
    "							<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "								<div class=\"navbar_default tab-pane active\" id=\"price_coupons\">\n" +
    "									<div class=\"panel\">					\n" +
    "										<div class=\"list-header text-center\">\n" +
    "											<h3 class=\"text-default\">{{'Price'|translate}}</h3>\n" +
    "											<span class=\"text-default\">{{'Set the price of your course.'|translate}}</span>						\n" +
    "										</div>					\n" +
    "									</div>	\n" +
    "									<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\">\n" +
    "									<form role=\"form\" class=\"form-horizontal panel clearfix\" name=\"manage_course_price\" ng-submit='model.priceSave()'>			\n" +
    "										<div class=\"form-group navbar-btn\" ng-class=\"{ 'has-error' : manage_course_price.price.$invalid && manage_course_price.price.$dirty }\">\n" +
    "											<label class=\"col-md-3 col-sm-3 control-label\" for=\"course_price\">{{'Price'|translate}}<span ng-if=\"$root.settings['site.currency_symbol'] !== ''\">&nbsp;({{$root.settings['site.currency_symbol']}})</span><span ng-if=\"$root.settings['site.currency_symbol'] === ''\">&nbsp;({{$root.settings['site.currency_code']}})</span></label>\n" +
    "											<div class=\"col-md-5 col-sm-9\">\n" +
    "												<input type=\"number\" class=\"form-control\" id=\"course_price\" placeholder=\"{{'Price'|translate}}\" ng-model=\"model.coursePrice.price\" min=0 max=\"{{$root.settings['course.max_course_fee']}}\" required>						\n" +
    "												<div class=\"help-block text-danger\" name=\"price\" ng-if=\"manage_course_price.price.$dirty\" ng-messages=\"manage_course_price.price.$error\">\n" +
    "													<div ng-message=\"max\">{{'You can set price upto '|translate}} <span><amount-display amount=\"{{$root.settings['course.max_course_fee']}}\" fraction='0' is-course-price='no'></amount-display></span></div>\n" +
    "												</div>												\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"well well-sm clearfix\">\n" +
    "											<div class=\"pull-right\">\n" +
    "												<label class=\"sr-only\" for=\"submit\">{{'Save'|translate}}</label>\n" +
    "												<input type=\"submit\" class=\"btn btn-primary btn-lg\" id=\"submit\" value=\"{{'Save'|translate}}\" >\n" +
    "											</div>\n" +
    "										</div>\n" +
    "									</form>\n" +
    "									</div>\n" +
    "									<div class=\"well-lg panel text-center clearfix\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') === -1 && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') === -1\">{{'Site is not enabled any payment option. So this course will be free access.' | translate}}\n" +
    "									</div>\n" +
    "								</div>	\n" +
    "							</div>\n" +
    "						  </div>\n" +
    "						</div>\n" +
    "					</section>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/teamr/views/courses/manageCoursePromoVideo.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/manageCoursePromoVideo.tpl.html",
    "<section class=\"clearfix ng-scope\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"well\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-11 col-sm-12 col-xs-12 nav navbar-right\">\n" +
    "					<section class=\"clearfix panel\">\n" +
    "						<div class=\"container\">	\n" +
    "							<course-navbar></course-navbar>		\n" +
    "							<div class=\"\">\n" +
    "							<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix\" ng-if=\"model.loading === false\">	\n" +
    "								<div class=\"tab-pane active\" id=\"promo_video\">\n" +
    "									<div class=\"panel\">					\n" +
    "										<div class=\"list-header text-center\">\n" +
    "											<h3>{{'Promo Video'|translate}}</h3>\n" +
    "											<p>{{'Add a promotional video to your course.'|translate}}</p>															\n" +
    "										</div>	\n" +
    "									</div>				\n" +
    "									<div class=\"panel clearfix\">\n" +
    "										<span class=\"navbar-btn\">{{'Video Preview'|translate}}:*</span>\n" +
    "										<div class=\"thumbnail clearfix\">\n" +
    "											<div ng-if=\"model.courseVideo.video_url && model.courseVideo.is_promo_video_convert_error === 0 && model.courseVideo.is_promo_video_converting_is_processing === 0\">\n" +
    "												<video id=\"video\" ng-src=\"{{model.courseVideo.video_url}}\" controls=\"true\" ></video>\n" +
    "											</div>\n" +
    "											\n" +
    "											<div class=\"alert alert-info\" ng-if=\"model.courseVideo.is_promo_video_converting_is_processing === 1\">\n" +
    "												<span class=\"well-sm\">{{'Video converting under progressing'|translate}}</span>\n" +
    "											</div>\n" +
    "											<div class=\"alert alert-danger\" ng-if=\" model.courseVideo.is_promo_video_converting_is_processing === 0 && model.courseVideo.is_promo_video_convert_error === 1\">\n" +
    "												<span class=\"well-sm\">{{'Video conversion Failed. Students can\\'t view this lesson'|translate}}</span>\n" +
    "											</div>\n" +
    "											<h3 class=\"text-primary\"><span>{{'Explore our second-by-second researched recipe for creating the perfect promo video'|translate}}</span></h3>\n" +
    "											<div class=\"panel-body\">\n" +
    "												<p><strong>{{'Don\\'t forget to add a promo video!'|translate}}</strong></p>\n" +
    "												<p>{{'Students who watch a well-made promo video are 5X more likely to enroll in your course. We\\'ve seen that statistic go up to 10X for exceptionally awesome videos. Learn how to make yours awesome'|translate}}!</p>							\n" +
    "											</div>\n" +
    "										</div>\n" +
    "										<div class=\"well-lg\">\n" +
    "											<form role=\"form\" class=\"form-horizontal clearfix\" name=\"manage_course_provideo\" ng-submit=\"model.videoSave()\">		\n" +
    "												<div class=\"form-group\">\n" +
    "													<label class=\"col-md-3 col-sm-3 control-label\" for=\"course_video\">{{'Add/Change Video'|translate}}:</label>\n" +
    "													<div class=\"col-md-8 col-sm-9\">\n" +
    "														<div class=\"alert alert-warning\">\n" +
    "															<p><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> {{'Should be 720p minimum with clear lighting, composition, and a steady camera exported in 16:9 format.'|translate}}</p>\n" +
    "															<p ng-if=\"$root.settings['video.max_size_to_allow_video_file'] !== ''\"><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> {{'File size should be lesser than'|translate}} {{$root.settings['video.max_size_to_allow_video_file'] | bytes}}</p>\n" +
    "														</div>\n" +
    "														<input type=\"file\" class=\"navbar-btn\" id=\"inputTaskAttachments\" name=\"attachment\" onchange=\"angular.element(this).scope().uploadVideo(this.files)\" required=\"\" ng-model=\"model.courseVideo.promo_video\"/>	\n" +
    "														<span class=\"text-danger help-block\">{{'Allowed extensions: mov, mpeg4, avi, wmv, mpeg, flv, 3gpp, webm, mp4'|translate}}</span>\n" +
    "													</div>\n" +
    "												</div>\n" +
    "												<div class=\"well well-sm clearfix\">\n" +
    "													<div class=\"pull-right\">\n" +
    "														<label class=\"sr-only\" for=\"course_video_save\">{{'Save'|translate}}</label>\n" +
    "														<input type=\"submit\" class=\"btn btn-primary btn-lg\"  id=\"course_video_save\" value=\"{{'Save'|translate}}\" ng-hide=\"disableSave\" >\n" +
    "														<input type=\"submit\" class=\"btn btn-primary btn-lg\" ng-disabled=\"true\" id=\"course_video_save\" value=\"{{' Validating...'|translate}}\" ng-hide=\"!disableSave\" >\n" +
    "													</div>\n" +
    "												</div>\n" +
    "											</form>\n" +
    "										</div>\n" +
    "									</div>\n" +
    "									\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						  </div>\n" +
    "						</div>\n" +
    "					</section>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/teamr/views/courses/manageCourseSummary.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/manageCourseSummary.tpl.html",
    "<section class=\"clearfix ng-scope\" ng-show=\"model.loading === false\">\n" +
    "	<div class=\"well\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-11 col-sm-12 col-xs-12 nav navbar-right\">\n" +
    "					<section class=\"clearfix panel\">\n" +
    "						<div class=\"container\">			\n" +
    "							<course-navbar></course-navbar>		\n" +
    "							<div class=\"\">\n" +
    "							<div class=\"tab-content col-sm-10 col-xs-12 col-md-10 clearfix \" ng-if=\"model.loading === false\">	\n" +
    "								<div  class=\"tab-pane active\" id=\"course_summary\">\n" +
    "										<div class=\"list-header text-center\">\n" +
    "											<h3>{{'Course Summary'|translate}}</h3>\n" +
    "											<span>{{'Highlight what the course covers, how it is taught, benefits of course and why students should enroll.'|translate}}</span>\n" +
    "										</div>	\n" +
    "										<div class=\"well-lg panel clearfix\">\n" +
    "											\n" +
    "											<form role=\"form\" class=\"form-horizontal clearfix\" name='manage_course_summary' ng-submit=\"model.saveCourseSummary(manage_course_summary)\">		\n" +
    "												<div class=\"form-group\">\n" +
    "													<div class=\"col-md-12 col-sm-12\">\n" +
    "														<div text-angular ng-model=\"model.courseSummary.description\" name='summary' \n" +
    "														ta-toolbar=\"[['p','pre','quote'], ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol'],  ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'], ['insertImage', 'insertLink', 'wordcount', 'charcount']]\"\n" +
    "														ta-toolbar-class=\"btn-toolbar\" \n" +
    "														ta-toolbar-group-class=\"btn-group\" \n" +
    "														ta-toolbar-button-class=\"btn btn-primary\" \n" +
    "														ta-toolbar-button-active-class=\"active\"\n" +
    "														ta-focussed-class=\"focussed\"\n" +
    "														ta-text-editor-class=\"form-control\"\n" +
    "														ta-html-editor-class=\"form-control\" ta-required='true' required=\"\"></div>	\n" +
    "														<div class=\"alert navbar-btn\" ng-class=\"{'alert-info': !error, 'alert-danger': error}\" role=\"alert\" ng-if='error'>{{info}}</div>\n" +
    "													</div>								\n" +
    "												</div>\n" +
    "												<div class=\"well well-sm clearfix\">\n" +
    "													<div class=\"pull-right\">\n" +
    "														<label class=\"sr-only\" for=\"submit\">{{'Save'|translate}}</label>\n" +
    "														<input type=\"submit\" class=\"btn btn-primary btn-lg\" id=\"submit\" value=\"{{'Save'|translate}}\" >\n" +
    "													</div>\n" +
    "												</div>\n" +
    "											</form>\n" +
    "										</div>\n" +
    "								\n" +
    "									\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						  </div>\n" +
    "						</div>\n" +
    "					</section>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/teamr/views/courses/search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/search.tpl.html",
    "<!--section start-->\n" +
    "<section class=\"clearfix\" id=\"search-results\">\n" +
    "	<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "	<div class=\"well\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-11 col-sm-12 col-xs-12 nav navbar-right\">\n" +
    "					<div class=\"clearfix\">\n" +
    "					  <div class=\"panel clearfix\">\n" +
    "						<div class=\"navbar-left col-sm-4\">\n" +
    "						  <form class=\"form-inline navbar-btn\">\n" +
    "							<div class=\"form-group\">\n" +
    "								<div class=\"input-group\">\n" +
    "									<span class=\"input-group-addon\"><i class=\"fa fa-search fa-lg form-control-feedback\"></i></span>\n" +
    "									<input type=\"search\" class=\"form-control\" ng-model=\"hsearchVal\" ng-keyup=\"$event.keyCode == 13 ? goToState('CourseSearch', {q: hsearchVal}) : null\" placeholder=\"{{'Search Courses'|translate}}\" />\n" +
    "								</div>\n" +
    "							</div>\n" +
    "						  </form>\n" +
    "						</div>\n" +
    "						<div class=\"navbar-right col-sm-8\">\n" +
    "						  <!--sorting dropdown starts -->\n" +
    "						  <ul class=\"nav navbar-nav\">\n" +
    "							<li class=\"dropdown text-center\">\n" +
    "								<a href=\"javascript:void(0)\" ng-show=\"sortValue === 'popular'\" title=\"{{'Popularity'|translate}}\" data-toggle=\"dropdown\" class=\"h5 list-group-item-text list-group-item-heading text-muted dropdown-toggle ng-scope\" data-toggle=\"dropdown\"><strong> {{'Popularity'|translate}} <i class=\"fa fa-angle-down fa-lg fa-fw\"></i> </strong></a>\n" +
    "								<a href=\"javascript:void(0)\" ng-show=\"sortValue === 'reviews'\" title=\"{{'Reviews'|translate}}\" data-toggle=\"dropdown\"  ng-if=\"$root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\" class=\"h5 list-group-item-text list-group-item-heading text-muted dropdown-toggle ng-scope\" data-toggle=\"dropdown\"><strong> {{'Reviews'|translate}} <i class=\"fa fa-angle-down fa-lg fa-fw\"></i> </strong></a>\n" +
    "								<a href=\"javascript:void(0)\" ng-show=\"sortValue === 'id' || !sortValue || sortValue === ''\" title=\"{{'Newest'|translate}}\" data-toggle=\"dropdown\" class=\"h5 list-group-item-text list-group-item-heading text-muted dropdown-toggle ng-scope\" data-toggle=\"dropdown\"><strong>{{'Newest'|translate}}  <i class=\"fa fa-angle-down fa-lg fa-fw\"></i> </strong> </a>\n" +
    "								<a href=\"javascript:void(0)\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') == -1  && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\" ng-show=\"sortValue === 'ASC'\" title=\"{{'Price: Low to High'|translate}}\" data-toggle=\"dropdown\" class=\"h5 list-group-item-text list-group-item-heading text-muted dropdown-toggle ng-scope\" data-toggle=\"dropdown\"><strong> {{'Price: Low to High'|translate}} <i class=\"fa fa-angle-down fa-lg fa-fw\"></i> </strong></a>\n" +
    "								<a href=\"javascript:void(0)\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') == -1  && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\" ng-show=\"sortValue === 'DESC'\" title=\"{{'Price: High to Low'|translate}}\" data-toggle=\"dropdown\" class=\"h5 list-group-item-text list-group-item-heading text-muted dropdown-toggle ng-scope\" data-toggle=\"dropdown\"><strong> {{'Price: High to Low'|translate}} <i class=\"fa fa-angle-down fa-lg fa-fw\"></i> </strong></a>\n" +
    "								<a href=\"javascript:void(0)\" ng-show=\"sortValue === 'featured'\"  title=\"{{'Featured'|translate}}\" data-toggle=\"dropdown\" class=\"h5 list-group-item-text list-group-item-heading text-muted dropdown-toggle ng-scope\" data-toggle=\"dropdown\"><strong> {{'Featured'|translate}} <i class=\"fa fa-angle-down fa-lg fa-fw\"></i> </strong></a>\n" +
    "								<ul class=\"dropdown-menu text-left\">	\n" +
    "									<li><a ui-sref=\"CourseSearch({ sort:'popular', page: 1 })\" title=\"{{'Popularity'|translate}}\">{{'Popularity'|translate}}</a></li>\n" +
    "									<li><a ui-sref=\"CourseSearch({ sort:'reviews', page: 1 })\" title=\"{{'Reviews'|translate}}\"  ng-if=\"$root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\">{{'Reviews'|translate}}</a></li>\n" +
    "									<li><a ui-sref=\"CourseSearch({ sort:'id', page: 1 })\" title=\"{{'Newest'|translate}}\">{{'Newest'|translate}}</a></li>\n" +
    "									<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') == -1  && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\"><a ui-sref=\"CourseSearch({ sort:'ASC', page: 1 })\" title=\"{{'Price: Low to High'|translate}}\">{{'Price: Low to High'|translate}}</a></li>\n" +
    "									<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') == -1  && $root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\"><a ui-sref=\"CourseSearch({ sort:'DESC', page: 1 })\" title=\"{{'Price: High to Low'|translate}}\">{{'Price: High to Low'|translate}}</a></li>\n" +
    "									<li><a ui-sref=\"CourseSearch({ sort:'featured', page: 1 })\" title=\"{{'Featured'|translate}}\">{{'Featured'|translate}}</a></li>\n" +
    "								</ul>\n" +
    "						   </li>\n" +
    "						   <li class=\"dropdown text-center\">\n" +
    "							<categories-list filter=\"parent\" class=\"well-sm navbar-btn\"></categories-list>\n" +
    "						   </li>\n" +
    "						  </ul>\n" +
    "						   <!--sorting dropdown ends -->\n" +
    "						   <!--Category dropdown starts -->\n" +
    "						   <ul class=\"nav navbar-nav\">\n" +
    "							<li class=\"dropdown text-center\">\n" +
    "								<a href=\"javascript:void(0)\" title=\"{{'Category'|translate}}\" data-toggle=\"dropdown\" class=\"h5 list-group-item-text list-group-item-heading text-muted dropdown-toggle ng-scope\" data-toggle=\"dropdown\" ng-if=\"!categorySelected\"><strong>{{'Category'|translate}}<i class=\"fa fa-angle-down fa-lg fa-fw\"></i> </strong></a>								\n" +
    "								<a href=\"javascript:void(0)\" title=\"{{categorySelected}}\" data-toggle=\"dropdown\" class=\"h5 list-group-item-text list-group-item-heading text-muted dropdown-toggle ng-scope\" data-toggle=\"dropdown\"  ng-if=\"categorySelected\"><strong> {{categorySelected}} <i class=\"fa fa-angle-down fa-lg fa-fw\"></i> </strong></a>								\n" +
    "								<ul class=\"dropdown-menu text-left\">	\n" +
    "									<li ng-repeat=\"parentCategory in model.common.parentCategories.data\" ><a ui-sref=\"CourseSearch({ category_id: {{parentCategory.id}}, page: 1 })\" title=\"{{parentCategory.sub_category_name}}\" ng-click=\"DropDownItemSelect(parentCategory, 'category')\">{{parentCategory.sub_category_name}}</a></li>									\n" +
    "								</ul>\n" +
    "						   </li>\n" +
    "						   <li class=\"dropdown text-center\">\n" +
    "							<categories-list filter=\"parent\" class=\"well-sm navbar-btn\"></categories-list>\n" +
    "						   </li>\n" +
    "						  </ul>\n" +
    "						  <!--Category dropdown ends -->\n" +
    "						  <!--instruction levels dropdown starts -->\n" +
    "						   <ul class=\"nav navbar-nav\">\n" +
    "							<li class=\"dropdown text-center\">\n" +
    "								<a href=\"javascript:void(0)\" title=\"{{'Levels'|translate}}\" data-toggle=\"dropdown\" class=\"h5 list-group-item-text list-group-item-heading text-muted dropdown-toggle ng-scope\" data-toggle=\"dropdown\" ng-if=\"!levelsSelected\"><strong>{{'Levels'|translate}}<i class=\"fa fa-angle-down fa-lg fa-fw\"></i> </strong></a>								\n" +
    "								<a href=\"javascript:void(0)\" title=\"{{levelsSelected}}\" data-toggle=\"dropdown\" class=\"h5 list-group-item-text list-group-item-heading text-muted dropdown-toggle ng-scope\" data-toggle=\"dropdown\"  ng-if=\"levelsSelected\"><strong> {{levelsSelected}} <i class=\"fa fa-angle-down fa-lg fa-fw\"></i> </strong></a>								\n" +
    "								<ul class=\"dropdown-menu text-left\">	\n" +
    "									<li ng-repeat=\"InstructionLevels in model.InstructionLevels\" ><a ui-sref=\"CourseSearch({ instructionLevel:{{InstructionLevels.id}}, page: 1 })\"  title=\"{{InstructionLevels.name}}\" ng-click=\"DropDownItemSelect(InstructionLevels, 'levels')\">{{InstructionLevels.name}}</a></li>									\n" +
    "								</ul>\n" +
    "						   </li>\n" +
    "						   <li class=\"dropdown text-center\">\n" +
    "							<categories-list filter=\"parent\" class=\"well-sm navbar-btn\"></categories-list>\n" +
    "						   </li>\n" +
    "						  </ul>\n" +
    "						   <!--instruction levels dropdown ends -->\n" +
    "						   <!--language levels dropdown starts -->\n" +
    "						   <ul class=\"nav navbar-nav\">\n" +
    "							<li class=\"dropdown text-center\">\n" +
    "								<a href=\"javascript:void(0)\" title=\"{{'Languages'|translate}}\" data-toggle=\"dropdown\" class=\"h5 list-group-item-text list-group-item-heading text-muted dropdown-toggle ng-scope\" data-toggle=\"dropdown\" ng-if=\"!languageSelected\"><strong>{{'Languages'|translate}}<i class=\"fa fa-angle-down fa-lg fa-fw\"></i> </strong></a>								\n" +
    "								<a href=\"javascript:void(0)\" title=\"{{languageSelected}}\" data-toggle=\"dropdown\" class=\"h5 list-group-item-text list-group-item-heading text-muted dropdown-toggle ng-scope\" data-toggle=\"dropdown\"  ng-if=\"languageSelected\"><strong> {{languageSelected}} <i class=\"fa fa-angle-down fa-lg fa-fw\"></i> </strong></a>								\n" +
    "								<ul class=\"dropdown-menu text-left\">	\n" +
    "									<li  ng-repeat=\"languages in model.languages\" ><a ui-sref=\"CourseSearch({ language:{{languages.id}}, page: 1 })\" title=\"{{languages.name}}\" ng-click=\"DropDownItemSelect(languages, 'languages')\">{{languages.name}}</a></li>									\n" +
    "								</ul>\n" +
    "						   </li>\n" +
    "						   <li class=\"dropdown text-center\">\n" +
    "							<categories-list filter=\"parent\" class=\"well-sm navbar-btn\"></categories-list>\n" +
    "						   </li>\n" +
    "						  </ul>\n" +
    "						   <!--language levels dropdown ends -->\n" +
    "						   <!-- reset filter -->\n" +
    "						   <div class=\"pull-right\">\n" +
    "								<div class=\"well-sm\"></div>\n" +
    "								<a class=\"text-info\" href=\"#!/courses/search\">{{'Reset Filter'|translate}}</a>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					  </div>\n" +
    "					  <div>\n" +
    "						<div class=\"navbar-btn clearfix\"></div>\n" +
    "						<div class=\"row\">\n" +
    "						  <div class=\"col-xs-12\" ng-repeat=\"courses in model.courses.data\" ng-if=\"model.courseLength > 0\">\n" +
    "							<ul class=\"row list-unstyled course-listing\" ng-if=\"$index%2==0\">\n" +
    "							  <li class=\"col-sm-6\" ng-if=\"$index < model.courseLength\">\n" +
    "								<div class=\"panel panel-info\">\n" +
    "								  <div class=\"panel-heading clearfix\">\n" +
    "									<div class=\"col-xs-12\">\n" +
    "									  <div class=\"pull-left\">\n" +
    "										<div class=\"navbar-btn clearfix list-group-item-heading\"></div>\n" +
    "										<ul class=\"list-inline\">\n" +
    "											<li><a href=\"#\" title=\"course\"><img src=\"assets/img/course.png\" alt=\"[Image: {{'Course'|translate}}]\" title=\"{{'Course'|translate}}\"></a> </li>\n" +
    "										</ul>\n" +
    "									  </div>\n" +
    "									</div>\n" +
    "								  </div>\n" +
    "								  <div class=\"panel-body\">\n" +
    "									<div class=\"col-xs-12\">\n" +
    "									  <p class=\"h4 htruncate-m3\">\n" +
    "										<a href=\"#!/course/{{model.courses.data[$index].id}}/{{model.courses.data[$index].slug}}\">{{model.courses.data[$index].title}}</a>\n" +
    "									  </p>\n" +
    "									  <div class=\"navbar-btn clearfix\"></div>\n" +
    "									  <p class=\"htruncate-m2\"> {{model.courses.data[$index].subtitle}}</p>\n" +
    "									  <div class=\"well-sm\"></div>\n" +
    "									  <ul class=\"list-inline\">\n" +
    "										<li ng-if=\"model.courses.data[$index].parent_category_name\" class=\"navbar-btn clearfix list-group-item-heading\"><a ui-sref=\"CourseSearch({ category_id: model.courses.data[$index].parent_category_id , page: 1})\" title=\"{{model.courses.data[$index].parent_category_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.courses.data[$index].parent_category_name}}</small></strong></span></a></li>\n" +
    "										<li ng-if=\"model.courses.data[$index].category_name\" class=\"navbar-btn clearfix list-group-item-heading\"><a ui-sref=\"CourseSearch({ category_id: model.courses.data[$index].category_id , page: 1})\" title=\"{{model.courses.data[$index].category_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.courses.data[$index].category_name}}</small></strong></span></a></li>\n" +
    "										<li ng-if=\"model.courses.data[$index].instructional_level_name\"><a ui-sref=\"CourseSearch({ instructionLevel: model.courses.data[$index].instructional_level_id , page: 1})\"title=\"{{model.courses.data[$index].instructional_level_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.courses.data[$index].instructional_level_name}}</small></strong></span></a></li>\n" +
    "										<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\"><span title=\"{{model.courses.data[$index].price}}\" class=\"btn btn-default\"><strong><small><amount-display amount='{{model.courses.data[$index].price}}' fraction='0' is-course-price='yes'></amount-display></small></strong></span></li>\n" +
    "										<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1 && model.courses.data[$index].user_id\" class=\"navbar-btn clearfix list-group-item-heading\">\n" +
    "											<span ng-if=\"model.courses.data[$index].displayname\">\n" +
    "											<strong><small><profile-name  user-name-class=\"btn btn-default\" user-small-text=\"true\" user-profile-id='model.courses.data[$index].user_id' ng-if='model.courses.data[$index]' user-display-name='model.courses.data[$index].displayname'></profile-name></small></strong>\n" +
    "											</span>\n" +
    "										</li>\n" +
    "									  </ul>\n" +
    "									</div>\n" +
    "								  </div>\n" +
    "								</div>\n" +
    "							  </li>\n" +
    "							  <li class=\"col-sm-6\" ng-if=\"$index + 1 < model.courseLength\">\n" +
    "								<div class=\"panel panel-info\">\n" +
    "								  <div class=\"panel-heading clearfix\">\n" +
    "									<div class=\"col-xs-12\">\n" +
    "									  <div class=\"pull-left\">\n" +
    "										<div class=\"navbar-btn clearfix list-group-item-heading\"></div>\n" +
    "										<ul class=\"list-inline\">\n" +
    "											<li><a href=\"#\" title=\"{{'course'|translate}}\"><img src=\"assets/img/course.png\" alt=\"[Image: Course]\" title=\"Course\"></a> </li>\n" +
    "										</ul>\n" +
    "									  </div>\n" +
    "									</div>\n" +
    "								  </div>\n" +
    "								  <div class=\"panel-body\">\n" +
    "									<div class=\"col-xs-12\">\n" +
    "									  <p class=\"h4 htruncate-m3\">\n" +
    "										<a href=\"#!/course/{{model.courses.data[$index + 1].id}}/{{model.courses.data[$index + 1].slug}}\">{{model.courses.data[$index + 1].title}}</a>\n" +
    "									  </p>\n" +
    "									  <div class=\"navbar-btn clearfix\"></div>\n" +
    "									  <p class=\"htruncate-m2\"> {{model.courses.data[$index + 1].subtitle}}</p>\n" +
    "									  <div class=\"well-sm\"></div>\n" +
    "									  <ul class=\"list-inline\">\n" +
    "										<li ng-if=\"model.courses.data[$index + 1].parent_category_name\" class=\"navbar-btn clearfix list-group-item-heading\"><a ui-sref=\"CourseSearch({ category_id: model.courses.data[$index + 1].parent_category_id , page: 1})\" title=\"{{model.courses.data[$index + 1].parent_category_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.courses.data[$index + 1].parent_category_name}}</small></strong></span></a></li>\n" +
    "										<li ng-if=\"model.courses.data[$index + 1].category_name\" class=\"navbar-btn clearfix list-group-item-heading\"><a ui-sref=\"CourseSearch({ category_id: model.courses.data[$index + 1].category_id , page: 1})\" title=\"{{model.courses.data[$index + 1].category_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.courses.data[$index + 1].category_name}}</small></strong></span></a></li>\n" +
    "										<li ng-if=\"model.courses.data[$index + 1].instructional_level_name\"><a ui-sref=\"CourseSearch({ instructionLevel: model.courses.data[$index + 1].instructional_level_id , page: 1})\" title=\"{{model.courses.data[$index + 1].instructional_level_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.courses.data[$index + 1].instructional_level_name}}</small></strong></span></a></li>\n" +
    "										<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseCheckout') > -1\"><span title=\"{{model.courses.data[$index + 1].price}}\" class=\"btn btn-default\"><strong><small><amount-display amount='{{model.courses.data[$index + 1].price}}' fraction='0' is-course-price='yes'></amount-display></small></strong></span></li>\n" +
    "										<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1 && model.courses.data[$index+1].user_id\" class=\"navbar-btn clearfix list-group-item-heading\">\n" +
    "											<span ng-if=\"model.courses.data[$index+1].displayname\">\n" +
    "											<strong><small><profile-name  user-name-class=\"btn btn-default\" user-small-text=\"true\" user-profile-id='model.courses.data[$index+1].user_id' ng-if='model.courses.data[$index+1]' user-display-name='model.courses.data[$index+1].displayname'></profile-name></small></strong>\n" +
    "											</span>\n" +
    "										</li>\n" +
    "									  </ul>\n" +
    "									</div>\n" +
    "								  </div>\n" +
    "								</div>\n" +
    "							  </li>							  \n" +
    "							</ul>														\n" +
    "						  </div>\n" +
    "						  \n" +
    "						<div class=\"text-center\" ng-if=\"model.courseLength === 0\" >							\n" +
    "							<h2 class=\"text-warning\" ng-if=\"!noFiltersUsed\">{{'Your search did not match any courses.'|translate}}</h2>\n" +
    "							<h2 class=\"text-warning\" ng-if=\"noFiltersUsed\">{{'No courses available.'|translate}}</h2>\n" +
    "						</div>\n" +
    "						<div class=\"text-center\" ng-if=\"model.courseLength === 0 && !searchingText\" >\n" +
    "							\n" +
    "						</div>\n" +
    "						  <div class=\"paging clearfix text-center\" ng-show=\"_metadata.total_records > 0\">\n" +
    "								<pagination total-items=\"_metadata.total_records\"  ng-model=\"currentPage\" ng-change=\"paginate('#search-results')\" max-size=\"_metadata.maxSize\" boundary-links=\"true\" num-pages=\"_metadata.noOfPages\" items-per-page=\"_metadata.limit\" first-text=\"{{'First'|translate}}\" last-text=\"{{'Last'|translate}}\" next-text=\"{{'Next'|translate}}\" previous-text=\"{{'Previous'|translate}}\"></pagination>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					  </div>\n" +
    "					</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "<section ng-show=\"model.loading === false\">\n" +
    "	<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "</section>\n" +
    "  <!--section End-->");
}]);

angular.module("themes/teamr/views/courses/teaching.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/teaching.tpl.html",
    "<!--section start-->\n" +
    "<section class=\"clearfix\">\n" +
    "	<div class=\"well\">\n" +
    "		<section>\n" +
    "		  <instructor-courses theme-name ='teamr' ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\"></instructor-courses>\n" +
    "		</section>		\n" +
    "	</div>			\n" +
    "</section>");
}]);

angular.module("themes/teamr/views/courses/viewCourse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/viewCourse.tpl.html",
    "<!--main section start-->\n" +
    "  <main id=\"main\" class=\"main\">\n" +
    "    <div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "    <section class=\"clearfix\" ng-show=\"model.loading === false\">\n" +
    "    <div class=\"well\">\n" +
    "      <div class=\"row\">\n" +
    "        <div class=\"col-md-11 col-sm-12 col-xs-12 nav navbar-right\">\n" +
    "			<div class=\"panel clearfix\">\n" +
    "				<div class=\"col-xs-12 max-img\">\n" +
    "					<div class=\"course-bg bg-danger clearfix row bg-primary\">\n" +
    "						<!-- course image when is_from_mooc_affiliate false and promo video not enabled -->\n" +
    "						<div ng-if=\"!model.course.video_url && model.course.is_from_mooc_affiliate !== 1\">\n" +
    "							<div ng-if=\"!model.course.image_hash\" class=\"course-view\">\n" +
    "								<div class=\"well-lg hidden-xs\"></div>\n" +
    "								<div class=\"well-lg hidden-xs\"></div>\n" +
    "								<div class=\"well-lg\"></div>\n" +
    "								<div class=\"well-sm navbar-btn\"></div>\n" +
    "								<div class=\"well-lg hidden-xs\"></div>\n" +
    "								<div class=\"well-lg hidden-xs\"></div>\n" +
    "								<div class=\"well-lg hidden-xs\"></div>\n" +
    "								<div class=\"well-sm navbar-btn hidden-xs\"></div>\n" +
    "								<div class=\"well-sm\"></div>\n" +
    "							</div>\n" +
    "							<img ng-if=\"model.course.image_hash\" ng-src='{{$root.site_url}}img/large_thumb/Course/{{model.course.image_hash}}' class=\"img-responsive center-block\">\n" +
    "						</div>\n" +
    "						<!-- course image when is_from_mooc_affiliate true -->\n" +
    "						<div ng-if=\"model.course.is_from_mooc_affiliate === 1\">\n" +
    "							<div ng-if=\"!model.course.course_image\" class=\"course-view\">\n" +
    "								<div class=\"well-lg hidden-xs\"></div>\n" +
    "								<div class=\"well-lg hidden-xs\"></div>\n" +
    "								<div class=\"well-lg\"></div>\n" +
    "								<div class=\"well-sm navbar-btn\"></div>\n" +
    "								<div class=\"well-lg hidden-xs\"></div>\n" +
    "								<div class=\"well-lg hidden-xs\"></div>\n" +
    "								<div class=\"well-lg hidden-xs\"></div>\n" +
    "								<div class=\"well-sm navbar-btn hidden-xs\"></div>\n" +
    "								<div class=\"well-sm\"></div>\n" +
    "							</div>\n" +
    "							<img ng-if=\"model.course.course_image\" ng-src=\"{{model.course.course_image}}\" class=\"img-responsive center-block\">\n" +
    "						</div>\n" +
    "						<!-- course image when promo video failed or videolessonplugin or promo video enabled settings disabled -->\n" +
    "						<div ng-if=\"model.course.video_url && is_from_mooc_affiliate !== 1\" >\n" +
    "							<div ng-if=\"(model.course.video_url && model.course.is_promo_video_convert_error !== 0 || model.course.is_promo_video_converting_is_processing !== 0) || ($root.settings['site.enabled_plugins'].indexOf('VideoLessons') === -1 && model.course.video_url) || ($root.settings['video.is_enabled_promo_video'] === '0' && model.course.video_url) && model.course.is_from_mooc_affiliate !== 1\" class=\"course-view\">\n" +
    "								<div ng-if=\"!model.course.image_hash\" class=\"course-view\">\n" +
    "									<div class=\"well-lg hidden-xs\"></div>\n" +
    "									<div class=\"well-lg hidden-xs\"></div>\n" +
    "									<div class=\"well-lg\"></div>\n" +
    "									<div class=\"well-sm navbar-btn\"></div>\n" +
    "									<div class=\"well-lg hidden-xs\"></div>\n" +
    "									<div class=\"well-lg hidden-xs\"></div>\n" +
    "									<div class=\"well-lg hidden-xs\"></div>\n" +
    "									<div class=\"well-sm navbar-btn hidden-xs\"></div>\n" +
    "									<div class=\"well-sm\"></div>\n" +
    "								</div>\n" +
    "								<img ng-if=\"model.course.image_hash\" ng-src='{{$root.site_url}}img/large_thumb/Course/{{model.course.image_hash}}' class=\"img-responsive center-block\">\n" +
    "							</div>\n" +
    "							<!-- course image when is_from_mooc_affiliate false and promo video enabled and videolessons plugin should be enabled -->\n" +
    "							<div ng-if=\"model.course.video_url && model.course.is_promo_video_convert_error === 0 && model.course.is_promo_video_converting_is_processing === 0 && model.course.is_from_mooc_affiliate !== 1 && $root.settings['site.enabled_plugins'].indexOf('VideoLessons') > -1 && $root.settings['video.is_enabled_promo_video'] === '1'\">\n" +
    "								<div class=\"well-sm\"></div>\n" +
    "								<div class=\"well-sm hidden-xs\"></div>\n" +
    "								<div class=\"col-md-12 clearfix\">\n" +
    "									<div class=\"col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-12\">\n" +
    "										<video id=\"video\"  ng-src=\"{{model.course.video_url}}\" controls=\"true\"></video>\n" +
    "									</div>\n" +
    "								</div>\n" +
    "								<h3 class=\"h2 navbar-btn text-center\"><strong>{{model.course.title}}</strong></h3>\n" +
    "								<p class=\"h4 text-center\"><strong>{{model.course.subtitle}}</strong></p>\n" +
    "								<div class=\"h2 list-group-item-heading text-center\">\n" +
    "									<strong><amount-display amount='{{model.course.price}}' fraction='2' is-course-price='yes'></amount-display></strong>\n" +
    "								</div>\n" +
    "								<div class=\"text-center\">\n" +
    "									 <payment-buttons  user-id=\"{{model.course.user_id}}\" btn-link=\"{{model.course.mooc_affiliate_course_link}}\" instruction-level='{{model.course.instructional_level_id}}' title='{{model.course.title}}' slug='{{model.course.slug}}' course-price='{{model.course.price}}' course-id='{{model.course.id}}' ng-if='model.course.id'></payment-buttons>														\n" +
    "								</div>\n" +
    "								<div class=\"well-lg hidden-xs\"></div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "						\n" +
    "					\n" +
    "					</div>					\n" +
    "					  <div class=\"course-bg-caption\" ng-if=\"!model.course.video_url || ((model.course.video_url && model.course.is_promo_video_convert_error !== 0 || model.course.is_promo_video_converting_is_processing !== 0) || ($root.settings['site.enabled_plugins'].indexOf('VideoLessons') === -1 && model.course.video_url) || ($root.settings['video.is_enabled_promo_video'] === '0' && model.course.video_url))\">\n" +
    "						<h3 class=\"h2 navbar-btn text-center\"><strong>{{model.course.title}}</strong></h3>\n" +
    "						<p class=\"h4 text-center\"><strong>{{model.course.subtitle}}</strong></p>\n" +
    "						<div class=\"h2 list-group-item-heading text-center\">\n" +
    "							<strong><amount-display amount='{{model.course.price}}' fraction='2' is-course-price='yes'></amount-display></strong>\n" +
    "						</div>\n" +
    "						<div class=\"text-center\">\n" +
    "							 <payment-buttons  user-id=\"{{model.course.user_id}}\" btn-link=\"{{model.course.mooc_affiliate_course_link}}\" instruction-level='{{model.course.instructional_level_id}}' title='{{model.course.title}}' slug='{{model.course.slug}}' course-price='{{model.course.price}}' course-id='{{model.course.id}}' ng-if='model.course.id'></payment-buttons>														\n" +
    "						</div>\n" +
    "						<div class=\"well-lg hidden-xs\"></div>\n" +
    "						<div class=\"well-lg hidden-xs\"></div>\n" +
    "						<div class=\"well-lg hidden-xs\"></div>\n" +
    "						<div class=\"well-sm navbar-btn hidden-xs\"></div>\n" +
    "						<div class=\"well-sm\"></div>\n" +
    "					  </div>\n" +
    "				\n" +
    "					<div class=\"well-sm\"></div>\n" +
    "					<div class=\"col-xs-12 navbar-btn clearfix\">\n" +
    "						<ul class=\"list-inline\">\n" +
    "						  <li ng-if=\"model.course.category_name\"><a ui-sref=\"CourseSearch({ category_id: model.course.category_id })\" class=\"btn btn-default btn-sm\"\n" +
    "						  title=\"{{model.course.category_name}}\"><span class=\"text-danger\"><strong>{{model.course.category_name}}</strong></span></a>\n" +
    "							<div class=\"well-sm visible-xs\"></div>\n" +
    "						  </li>\n" +
    "						  <li ng-if=\"model.course.instructional_level_name\"><a href=\"#!/courses/search?instructionLevel={{model.course.instructional_level_id}}\" class=\"btn btn-default btn-sm\" title=\"{{model.course.instructional_level_name}}\"><span class=\"text-info\"><strong>{{model.course.instructional_level_name}}</strong></span></a></li>\n" +
    "						  <li>\n" +
    "						    <course-wishlist course-wishlist='model.course' wishlist-type='heartWithText' wishlist-label={{'Wishlist'|translate}} wishlisted-label={{'Wishlisted'|translate}}  ng-if=\"model.course && $root.settings['site.enabled_plugins'].indexOf('CourseWishlist') > -1\"></course-wishlist>\n" +
    "						  </li>\n" +
    "						  <li class=\"pull-right\">\n" +
    "							<social-share share-title='{{model.course.title}}' share-style='ListInline' share-link = '#!/course/{{model.course.id}}/{{model.course.slug}}' ng-if=\"model.course.id && $root.settings['site.enabled_plugins'].indexOf('SocialShare') > -1\"></social-share>\n" +
    "						  </li>\n" +
    "						  <li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1 && model.course.is_from_mooc_affiliate !== 1\" class=\"pull-right\">\n" +
    "							<div >\n" +
    "								<p class=\"show navbar-btn\">\n" +
    "								<rating-stars average-rating='{{model.course.average_rating}}' ng-click=\"gotoAnchorLink($event,'reviews',model.course.course_user_feedback_count)\" ng-if=\"model.course && $root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\" ></rating-stars><span>&nbsp;({{model.course.course_user_feedback_count}} {{'ratings'|translate}})</span>  </p>\n" +
    "							</div>\n" +
    "						  </li>\n" +
    "						</ul>\n" +
    "						<hr>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col-md-8 col-sm-12 max-img\">\n" +
    "					<div class=\"col-xs-12\">\n" +
    "						<div class=\"clearfix\" ng-show='model.course.description !== null && model.course.description'>\n" +
    "							<h3 class=\"list-group-item-heading\"><strong>{{'About this Course'|translate}}</strong></h3>\n" +
    "							<p class=\"\" ng-bind-html=\"model.course.description\"></p>\n" +
    "						</div>\n" +
    "						<div class=\"navbar-btn clearfix list-group-item-text\" ng-show=\"WhatActionsStudentsHaveToPerformBeforeBegin !== '' && WhatActionsStudentsHaveToPerformBeforeBegin !== null\">\n" +
    "							<h4><strong>{{'What are the requirements?'|translate}}</strong></h4>\n" +
    "							<p class=\"\" ng-bind-html=\"WhatActionsStudentsHaveToPerformBeforeBegin\"></p>  \n" +
    "						</div>\n" +
    "						<div class=\"navbar-btn clearfix list-group-item-text\" ng-show=\"studentsWillBeAbleTo !== '' && studentsWillBeAbleTo !== null\">\n" +
    "							<h4><strong>{{'What am I going to get from this course?'|translate}}</strong></h4>\n" +
    "							<p class=\"\" ng-bind-html=\"studentsWillBeAbleTo\"></p>\n" +
    "						</div>\n" +
    "						<div class=\"navbar-btn clearfix list-group-item-text\" ng-show=\"whoShouldTakeThisCourseAndWhoShouldNot !== '' && whoShouldTakeThisCourseAndWhoShouldNot !== null\">\n" +
    "							<h4><strong>{{'What is the target audience?'|translate}}</strong></h4>\n" +
    "							<p class=\"\" ng-bind-html=\"whoShouldTakeThisCourseAndWhoShouldNot\"></p>\n" +
    "						</div>\n" +
    "						<div class=\"well-sm navbar-btn\"></div>\n" +
    "						   <online-lessons ng-if=\"model.course.id\"></online-lessons>\n" +
    "						<div class=\"well-sm navbar-btn\"></div>\n" +
    "						<div id=\"reviews\">\n" +
    "							<course-feedback course-id='{{model.course.id}}' ng-if=\"model.course.id && $root.settings['site.enabled_plugins'].indexOf('RatingAndReview') > -1\"></course-feedback>	\n" +
    "						</div>\n" +
    "						<!-- comments section -->\n" +
    "						<div class=\"well-sm navbar-btn\"></div>\n" +
    "						<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Comments') > -1 && ($root.settings['facebook.is_enabled_facebook_comment'] === '1'|| $root.settings['disqus.is_enabled_disqus_comment'] === '1')\">\n" +
    "							<facebook-comments ng-if=\"$root.settings['facebook.comments.api_key'] && $root.settings['facebook.is_enabled_facebook_comment'] === '1'\"></facebook-comments>			\n" +
    "							<dir-disqus config=\"disqusConfig\" ng-if=\"model.course.id && $root.settings['disqus.comments.shortname'] && $root.settings['disqus.is_enabled_disqus_comment'] === '1'\" ></dir-disqus>\n" +
    "						</div>\n" +
    "						<div class=\"well-lg\"></div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col-md-4 col-sm-12 col-xs-12\" ng-show=\"model.course.user_id\">\n" +
    "					<div class=\"media\" ng-if=\"model.course.user_id\">					\n" +
    "					<h3 class=\"list-group-item-heading\"><strong>{{'Teacher'|translate}}</strong></h3>\n" +
    "					  <div class=\"pull-right\">\n" +
    "						<div class=\"navbar-btn clearfix\"></div>\n" +
    "						<profile-image  user-image-hash='model.course.user_image_hash' user-display-name='{{model.course.displayname}}' user-profile-id='model.course.user_id' ng-if='model.course' user-profile-thumb='normal_thumb' image-type ='imagecircle'></profile-image>\n" +
    "						</div>\n" +
    "					  <div class=\"media-body\">\n" +
    "						<profile-name user-display-name='model.course.displayname' user-profile-id='model.course.user_id' ng-if='model.course.user_id' user-designation='yes' user-designation-text='{{model.course.designation}}'></profile-name>\n" +
    "						<div>\n" +
    "						<ul class=\"list-inline\">\n" +
    "							<li ng-show=\"model.user_profile.twitter_profile_link\"><a href=\"{{model.user_profile.twitter_profile_link}}\" target=\"_blank\"  class=\"text-muted\"><span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i> </span> </a></li>\n" +
    "							<li ng-show=\"model.user_profile.google_plus_profile_link\"><a href=\"{{model.user_profile.google_plus_profile_link}}\" target=\"_blank\" class=\"text-muted\"> <span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-google-plus fa-stack-1x fa-inverse\"></i> </span></a></li>\n" +
    "							<li ng-show=\"model.user_profile.facebook_profile_link\"><a href=\"{{model.user_profile.facebook_profile_link}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i> </span></a></li>\n" +
    "							<li ng-show=\"model.user_profile.youtube_profile_link\"><a href=\"{{model.user_profile.youtube_profile_link}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-youtube fa-stack-1x fa-inverse\"></i> </span> </a></li>\n" +
    "							<li ng-show=\"model.user_profile.website\"><a href=\"{{model.user_profile.website}}\" target=\"_blank\" class=\"text-muted\"><span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-globe fa-stack-1x fa-inverse\"></i> </span> </a></li>\n" +
    "							<li ng-show=\"model.user_profile.linkedin_profile_link\"><a href=\"{{model.user_profile.linkedin_profile_link}}\" target=\"_blank\"  class=\"text-muted\"><span class=\"fa-stack fa-lg\"> <i class=\"fa fa-square fa-stack-2x\"></i> <i class=\"fa fa-linkedin fa-stack-1x fa-inverse\"></i> </span> </a></li>\n" +
    "						</ul>\n" +
    "						</div>\n" +
    "						<p class=\"\" ng-if=\"model.user_profile.biography\" ng-bind-html=\"model.user_profile.biography | nl2br\"></p>\n" +
    "					  </div>\n" +
    "					</div>\n" +
    "				\n" +
    "					<div banner position=\"courseBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\" class=\"max-img\"></div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    </section>\n" +
    "    <hr class=\"list-group-item-heading list-group-item-text\">\n" +
    "	<section ng-show=\"model.loading === false\">\n" +
    "		<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "	</section>\n" +
    "  </main>\n" +
    "  <!--main section End-->");
}]);

angular.module("themes/teamr/views/courses/wishlist.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/courses/wishlist.tpl.html",
    "<!--section start-->\n" +
    "<section class=\"clearfix\" id=\"wishlist-courses\">\n" +
    "	<div class=\"well\">\n" +
    "		<div class=\"row\">\n" +
    "			<div class=\"col-md-11 col-sm-12 col-xs-12 nav navbar-right\">\n" +
    "				<div class=\"panel clearfix\">\n" +
    "					<section>\n" +
    "					  <div class=\"container\">\n" +
    "						<div class=\"row\">\n" +
    "						  <div class=\"col-sm-3 navbar-btn nav\">\n" +
    "							<h3 class=\"h1 navbar-btn list-group-item-text\">{{'My Courses'|translate}}</h3>\n" +
    "						  </div>\n" +
    "						  <div class=\"col-sm-6 navbar-btn\">\n" +
    "							<ul class=\"list-inline navbar-btn nav nav-tabs\" role=\"tablist\">\n" +
    "							  <li class=\"\"><a href=\"#!/my-courses/learning\" title=\"{{'Learning'|translate}}\" aria-controls=\"learning\" role=\"tab\" >{{'Learning'|translate}}</a></li>\n" +
    "							  <li class=\"active\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('CourseWishlist') > -1\"><a href=\"#!/my-courses/wishlist\" title=\"{{'Wishlist'|translate}}\" aria-controls=\"wishlist\" role=\"tab\" >{{'Wishlist'|translate}}</a></li>\n" +
    "							</ul>\n" +
    "						  </div>\n" +
    "						 </div>\n" +
    "					  </div>\n" +
    "					   <hr class=\"list-group-item-text list-group-item-heading\">\n" +
    "					</section>\n" +
    "					<section>\n" +
    "					  <div class=\"container\">\n" +
    "					   <div class=\"clearfix\">	   \n" +
    "						 <div class=\"col-xs-12\">		\n" +
    "							<div class=\"tab-content navbar-btn\">    			\n" +
    "							  <div id=\"wishlist\" class=\"tab-pane active\" role=\"tabpanel\">\n" +
    "								<div>\n" +
    "									<div class=\"row\">\n" +
    "									  <div class=\"col-xs-12\" ng-repeat=\"wishlistCourses in model.wishlistCourses.data\" ng-if=\"model.wishlistCourses.data.length > 0 && $root.settings['site.enabled_plugins'].indexOf('CourseWishlist') > -1\" >\n" +
    "										<ul class=\"row list-unstyled course-listing\" ng-if=\"$index%2==0\">\n" +
    "										  <li class=\"col-sm-6\" ng-if=\"$index < model.wishlistCourses.data.length\" id=\"Wishlist_elements_{{model.wishlistCourses.data[$index].id}}\">\n" +
    "											<div class=\"panel panel-info\">\n" +
    "											  <div class=\"panel-heading clearfix\">\n" +
    "												<div class=\"col-xs-12\">\n" +
    "												  <div class=\"pull-left\">\n" +
    "													<div class=\"navbar-btn clearfix list-group-item-heading\"></div>\n" +
    "													<ul class=\"list-inline\">\n" +
    "														<li><span title=\"{{'course'|translate}}\"><img src=\"assets/img/course.png\" alt=\"[Image: {{'Course'|translate}}]\" title=\"{{'Course'|translate}}\"></span> </li>\n" +
    "													</ul>\n" +
    "												  </div>\n" +
    "												 <div class=\"pull-right dropdown\">\n" +
    "													<a href=\"javascript:void(0);\" title=\"{{'Options'|translate}}\" class=\"btn btn-default btn-sm\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v fa-lg\"></i></a> \n" +
    "													<ul class=\"dropdown-menu\">\n" +
    "													  <li><a href=\"#\" title=\"{{'Unfavourite'|translate}}\" ng-click=\"model.deleFavourites(model.wishlistCourses.data[$index].id, $event)\" class=\"text-muted\">{{'Unfavourite'|translate}}</a></li>\n" +
    "													</ul>\n" +
    "												</div>\n" +
    "												  \n" +
    "												</div>\n" +
    "											  </div>\n" +
    "											  <div class=\"panel-body\">\n" +
    "												<div class=\"col-xs-12\">\n" +
    "												  <p class=\"h4 htruncate-m3\">\n" +
    "													<a href=\"#!/course/{{model.wishlistCourses.data[$index].course_id}}/{{model.wishlistCourses.data[$index].course_slug}}\">{{model.wishlistCourses.data[$index].course_title}}</a>\n" +
    "												  </p>\n" +
    "												  <div class=\"navbar-btn clearfix\"></div>\n" +
    "												  <p class=\"htruncate-m2\"> {{model.wishlistCourses.data[$index].subtitle}}</p>\n" +
    "												  <div class=\"well-sm\"></div>\n" +
    "												  <ul class=\"list-inline\">\n" +
    "													<li ng-if=\"model.wishlistCourses.data[$index].parent_category_name\" class=\"navbar-btn clearfix list-group-item-heading\"><a ui-sref=\"CourseSearch({ category_id: model.wishlistCourses.data[$index].parent_category_id })\" title=\"{{model.wishlistCourses.data[$index].parent_category_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.wishlistCourses.data[$index].parent_category_name}}</small></strong></span></a></li>\n" +
    "													<li ng-if=\"model.wishlistCourses.data[$index].category_name\" class=\"navbar-btn clearfix list-group-item-heading\"><a ui-sref=\"CourseSearch({ category_id: model.wishlistCourses.data[$index].category_id })\"  title=\"{{model.wishlistCourses.data[$index].category_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.wishlistCourses.data[$index].category_name}}</small></strong></span></a></li>\n" +
    "													<li ng-if=\"model.wishlistCourses.data[$index].instructional_level_name\" ><a ui-sref=\"CourseSearch({ instructionLevel: model.wishlistCourses.data[$index].instructional_level_id })\"  title=\"{{model.wishlistCourses.data[$index].instructional_level_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.wishlistCourses.data[$index].instructional_level_name}}</small></strong></span></a></li>\n" +
    "													<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\" >\n" +
    "													<span ng-if=\"model.wishlistCourses.data[$index].teacher_name\">\n" +
    "													<strong><small><profile-name user-name-class=\"btn btn-default\" user-small-text=\"true\" user-profile-id='model.wishlistCourses.data[$index].teacher_user_id' ng-if='model.wishlistCourses.data[$index]' user-display-name='model.wishlistCourses.data[$index].teacher_name' ></profile-name></small>\n" +
    "													</strong></span></li>\n" +
    "													\n" +
    "												  </ul>\n" +
    "												</div>\n" +
    "											  </div>\n" +
    "											</div>\n" +
    "										  </li>\n" +
    "										  <li class=\"col-sm-6\" id=\"Wishlist_elements_{{model.wishlistCourses.data[$index + 1].id}}\" ng-if=\"$index + 1 < model.wishlistCourses.data.length\">\n" +
    "											<div class=\"panel panel-info\">\n" +
    "											  <div class=\"panel-heading clearfix\">\n" +
    "												<div class=\"col-xs-12\">\n" +
    "												  <div class=\"pull-left\">\n" +
    "													<div class=\"navbar-btn clearfix list-group-item-heading\"></div>\n" +
    "													<ul class=\"list-inline\">\n" +
    "														<li><span title=\"{{'course'|translate}}\"><img src=\"assets/img/course.png\" alt=\"[Image: {{'Course'|translate}}]\" title=\"{{'Course'|translate}}\"></span> </li>\n" +
    "													</ul>\n" +
    "												  </div>\n" +
    "												   <div class=\"pull-right dropdown\">\n" +
    "													<a href=\"javascript:void(0);\" title=\"{{'Options'|translate}}\" class=\"btn btn-default btn-sm\" data-toggle=\"dropdown\"><i class=\"fa fa-ellipsis-v fa-lg\"></i></a> \n" +
    "													<ul class=\"dropdown-menu\">\n" +
    "													  <li><a href=\"#\" title=\"{{'Unfavourite'|translate}}\" ng-click=\"model.deleFavourites(model.wishlistCourses.data[$index + 1].id, $event)\" class=\"text-muted\">{{'Unfavourite'|translate}}</a></li>\n" +
    "													</ul>\n" +
    "												</div>\n" +
    "												</div>\n" +
    "											  </div>\n" +
    "											  <div class=\"panel-body\">\n" +
    "												<div class=\"col-xs-12\">\n" +
    "												  <p class=\"h4 htruncate-m3\">\n" +
    "													<a href=\"#!/course/{{model.wishlistCourses.data[$index + 1].course_id}}/{{model.wishlistCourses.data[$index + 1].course_slug}}\">{{model.wishlistCourses.data[$index + 1].course_title}}</a>\n" +
    "												  </p>\n" +
    "												  <div class=\"navbar-btn clearfix\"></div>\n" +
    "												  <p class=\"htruncate-m2\"> {{model.wishlistCourses.data[$index + 1].subtitle}}</p>\n" +
    "												  <div class=\"well-sm\"></div>\n" +
    "												  <ul class=\"list-inline\">\n" +
    "													<li ng-if=\"model.wishlistCourses.data[$index + 1].parent_category_name\" class=\"navbar-btn clearfix list-group-item-heading\"><a ui-sref=\"CourseSearch({ category_id: model.wishlistCourses.data[$index + 1].parent_category_id })\" title=\"\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.wishlistCourses.data[$index + 1].parent_category_name}}</small></strong></span></a></li>\n" +
    "													<li ng-if=\"model.wishlistCourses.data[$index + 1].category_name\" class=\"navbar-btn clearfix list-group-item-heading\"><a ui-sref=\"CourseSearch({ category_id: model.wishlistCourses.data[$index + 1].category_id })\" title=\"{{model.wishlistCourses.data[$index + 1].category_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.wishlistCourses.data[$index + 1].category_name}}</small></strong></span></a></li>\n" +
    "													<li ng-if=\"model.wishlistCourses.data[$index + 1].instructional_level_name\" ><a ui-sref=\"CourseSearch({ instructionLevel: model.wishlistCourses.data[$index + 1].instructional_level_id })\" title=\"{{model.wishlistCourses.data[$index + 1].instructional_level_name}}\" class=\"btn btn-default\"><span class=\"text-info\"><strong><small>{{model.wishlistCourses.data[$index + 1].instructional_level_name}}</small></strong></span></a></li>\n" +
    "													<li ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Instructor') > -1\" >\n" +
    "														<span ng-if=\"model.wishlistCourses.data[$index + 1].teacher_name\">\n" +
    "															<strong><small><profile-name user-name-class=\"btn btn-default\" user-small-text=\"true\" user-profile-id='model.wishlistCourses.data[$index + 1].teacher_user_id' ng-if='model.wishlistCourses.data[$index + 1]' user-display-name='model.wishlistCourses.data[$index + 1].teacher_name'></profile-name></small></strong>\n" +
    "														</span>\n" +
    "													</li>\n" +
    "												  </ul>\n" +
    "												</div>\n" +
    "											  </div>\n" +
    "											</div>\n" +
    "										  </li>\n" +
    "										</ul>\n" +
    "									  </div>\n" +
    "									</div>\n" +
    "								  </div>\n" +
    "							  </div>\n" +
    "							  <div  class=\"text-center\" ng-show=\"_metadata.total_records === 0\"><h3 class=\"text-muted\">{{'No records found'|translate}}</h3></div>\n" +
    "							  <div class=\"wel-sm\"></div>\n" +
    "							  <div class=\"paging clearfix text-center\" ng-show=\"_metadata.total_records > 0\">\n" +
    "								<pagination total-items=\"_metadata.total_records\"  ng-change=\"currentPage\" ng-change=\"paginate('#wishlist-courses')\" max-size=\"_metadata.maxSize\" boundary-links=\"true\" num-pages=\"_metadata.noOfPages\" items-per-page=\"_metadata.limit\" first-text=\"{{'First'|translate}}\" last-text=\"{{'Last'|translate}}\" next-text=\"{{'Next'|translate}}\" previous-text=\"{{'Previous'|translate}}\"></pagination>\n" +
    "							  </div>\n" +
    "							</div>\n" +
    "						  </div>\n" +
    "					   </div>\n" +
    "					  </div>\n" +
    "					</section>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/teamr/views/home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/home/home.tpl.html",
    "<main id=\"main\" class=\"main\">\n" +
    "    <section class=\"bg-success\">\n" +
    "		<div class=\"well-lg\"></div><div class=\"well-lg\"></div>\n" +
    "		<div class=\"container\">\n" +
    "			<div class=\"col-sm-6 col-xs-12\">\n" +
    "				<div class=\"well-lg\"></div>\n" +
    "				<div class=\"well-lg\"></div>\n" +
    "				<div class=\"text-left\">\n" +
    "				  <h3 class=\"h1 fa-inverse\"><strong>{{'Learn Web Design, Coding And Much More'| translate}}</strong></h3>\n" +
    "				  <div class=\"navbar-btn clearfix list-group-item-text\"></div>\n" +
    "				  <p class=\"h4 fa-inverse\"><strong>{{'Get your free trial started today!'| translate}}</strong></p>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"col-sm-6 col-xs-12\">\n" +
    "				<div class=\"well-lg\"></div><div class=\"well-sm\"></div>\n" +
    "				<div class=\"panel panel-default panel-primary\">\n" +
    "				  <div class=\"panel-heading well\">\n" +
    "					<h3 class=\"panel-title text-center\"><span class=\"fa-inverse text-center\"><strong>{{'Get Started today!'| translate}}</strong></span></h3>\n" +
    "				  </div>\n" +
    "				  <div class=\"panel-body\">\n" +
    "					<form method=\"post\" class=\"form-inline\" name=\"freetrail\" ng-submit=\"model.claimFreeTrail(model.freetrail);\">\n" +
    "					  <div class=\"center-block text-center navbar-btn col-sm-6\" ng-class=\"{ 'has-error' : freetrail.displayname.$invalid && freetrail.displayname.$dirty }\">\n" +
    "						<label class=\"sr-only\">{{'User name '| translate}}*</label>\n" +
    "						<input type=\"text\" name=\"displayname\" class=\"form-control\" placeholder=\"{{'First name'|translate}} *\" ng-model=\"model.freetrail.displayname\" required>\n" +
    "						<div class=\"help-block text-danger\" ng-if=\"freetrail.displayname.$dirty\" ng-messages=\"freetrail.displayname.$error\">\n" +
    "							<div ng-message=\"required\">{{'Required'|translate}}.</div>\n" +
    "						</div>\n" +
    "					  </div>\n" +
    "					 <div class=\"center-block text-center navbar-btn col-sm-6\" ng-class=\"{ 'has-error' : freetrail.lastname.$invalid && freetrail.lastname.$dirty }\">\n" +
    "						<label class=\"sr-only\">{{'Last name'| translate}} *</label>\n" +
    "						<input type=\"text\" name=\"lastname\" class=\"form-control\" placeholder=\"{{'Last name'|translate}} *\" ng-model=\"model.freetrail.last_name\" required>\n" +
    "						<div class=\"help-block text-danger\" ng-if=\"freetrail.lastname.$dirty\" ng-messages=\"freetrail.lastname.$error\">\n" +
    "							<div ng-message=\"required\">{{'Required'|translate}}.</div>\n" +
    "						</div>\n" +
    "					  </div>\n" +
    "					<div class=\"center-block text-center col-sm-12\" ng-class=\"{ 'has-error' : freetrail.email.$invalid && freetrail.email.$dirty }\">\n" +
    "					<label class=\"sr-only\">{{'Email address'| translate}} *</label>\n" +
    "					<input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"{{'Email address'|translate}} *\" ng-model=\"model.freetrail.email\" required>\n" +
    "					<div class=\"help-block text-danger\" ng-if=\"freetrail.email.$dirty\" ng-messages=\"freetrail.email.$error\">\n" +
    "							<div ng-message=\"required\">{{'Required'|translate}}.</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<hr class=\"col-xs-11\">\n" +
    "					<button type=\"submit\" class=\"btn btn-primary btn-lg\"> <strong>{{'Claim Your Free Trail'| translate}}</strong> <i class=\"fa fa-caret-right fa-sm\"></i></button>\n" +
    "					</form>\n" +
    "				  </div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"well-lg\"></div><div class=\"well-sm\"></div>\n" +
    "    </section>\n" +
    "	<section class=\"clearfix\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "          <div class=\"well-lg\"></div>\n" +
    "          <div class=\"text-center\">\n" +
    "            <h3><strong>{{'How It Works'| translate}}</strong></h3>\n" +
    "            <div class=\"navbar-btn clearfix list-group-item-text\"></div>\n" +
    "            <p> <strong>{{'Achieve your dreams and change the world '| translate}}</strong></p>\n" +
    "            <div class=\"well-lg\"></div>\n" +
    "				<div class=\"col-xs-10 col-xs-offset-1\">\n" +
    "					<div class=\"col-sm-5 well-lg bg-danger\">\n" +
    "						<img src=\"assets/img/works-img1.png\" alt=\"[Image:{{'Works'| translate}}]\" title=\"{{'Works'| translate}}\" class=\"img-responsive center-block\"/>\n" +
    "					</div>\n" +
    "					<div class=\"col-sm-7\">\n" +
    "						<div class=\"well-sm\"></div>\n" +
    "						<div class=\"col-xs-12\">\n" +
    "							 <h4 class=\"text-left\"><strong>{{'Courses'| translate}}</strong></h4>\n" +
    "							 <p class=\"text-left\"><strong>{{'Learn from over 1000 videos created by expert teachers on web design, coding, business, and much more. Our library is continually refreshed with the latest on web technology so you\\'ll never fall behind.'| translate}}</strong></p>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"well-lg clearfix\"></div>\n" +
    "				<div class=\"col-xs-10 col-xs-offset-1\">\n" +
    "					<div class=\"col-xs-12 col-sm-12 col-md-12\">\n" +
    "						<div class=\"well-sm\"></div>\n" +
    "						<div class=\"col-xs-12 col-sm-5 navbar-right well-lg bg-info\">\n" +
    "							<img src=\"assets/img/works-img2.png\" alt=\"[Image: {{'Works'|translate}}]\" title=\"{{'Works'|translate}}\" class=\"img-responsive center-block\"/>\n" +
    "						</div>\n" +
    "						<div class=\"col-xs-12 col-sm-7 navbar-right\">\n" +
    "							<div class=\"well-sm\"></div>\n" +
    "							 <h4 class=\"text-left\"><strong>{{'Learn'| translate}}</strong></h4>\n" +
    "							 <p class=\"text-left\"><strong>{{'Subscribe our plan and get unlimited access to the entire catalog and their videos lessons and you\\'ll be continually refreshed your skillset.'| translate}}</strong></p>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </section>\n" +
    "    <section class=\"clearfix\">\n" +
    "      <div class=\"container\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "          <div class=\"well-lg\"></div>\n" +
    "          <div class=\"text-center\">\n" +
    "            <h3><strong>{{'Some of the Awesome Stuff You\\'ll Learn'| translate}}</strong></h3>\n" +
    "            <div class=\"navbar-btn clearfix list-group-item-text\"></div>\n" +
    "            <p>{{'The fast, easy, and affordable way to build your skills'| translate}}</p>\n" +
    "            <div class=\"navbar-btn clearfix\"></div>\n" +
    "            <div class=\"row\">\n" +
    "				<div class=\"col-sm-3 col-xs-12 well-lg\">\n" +
    "					<img src=\"assets/img/Learn-img1.png\" alt=\"[Image: {{'Learn'| translate}}]\" title=\"{{'Learn'| translate}}\" class=\"img-circle img-responsive\">\n" +
    "					<div class=\"well-sm navbar-btn\"></div>\n" +
    "					<h4 class=\"h5 text-left\"><strong>{{'Build a Website'| translate}}</strong></h4>\n" +
    "					<p class=\"text-left text-muted navbar-btn\"><strong>{{'You\\'ll learn the basics to building a website with an introduction to text editors, basic HTML tabs, and advanced HTML skills.'| translate}}</strong></p>\n" +
    "					<a href=\"#!/courses/search\" title=\"{{'Get Started'| translate}}\" class=\"navbar-btn pull-left\"><span class=\"text-info\"><strong>{{'Get Started'| translate}}<strong></span></a>\n" +
    "				</div>\n" +
    "				<div class=\"col-sm-3 col-xs-12 well-lg\">\n" +
    "					<img src=\"assets/img/Learn-img2.png\" alt=\"[Image: {{'Learn'| translate}}]\" title=\"{{'Learn'| translate}}\" class=\"img-circle img-responsive\">\n" +
    "					<div class=\"well-sm navbar-btn\"></div>\n" +
    "					<h4 class=\"h5 text-left\"><strong>{{'Learn to Code'| translate}}</strong></h4>\n" +
    "					<p class=\"text-left text-muted navbar-btn\"><strong>{{'Learn technologies such as Ruby on Rails to help you build the next world changing product'| translate}}.</strong></p>\n" +
    "					<a href=\"#!/courses/search\" title=\"{{'Get Started'| translate}}\" class=\"navbar-btn pull-left\"><span class=\"text-info\"><strong>{{'Get Started'| translate}}<strong></span></a>\n" +
    "				</div>\n" +
    "			    <div class=\"col-sm-3 col-xs-12 well-lg\">\n" +
    "					<img src=\"assets/img/Learn-img3.png\" alt=\"[Image: {{'Learn'| translate}}]\" title=\"{{'Learn'| translate}}\" class=\"img-circle img-responsive\">\n" +
    "					<div class=\"well-sm navbar-btn\"></div>\n" +
    "					<h4 class=\"h5 text-left\"><strong>{{'Build an App'| translate}}</strong></h4>\n" +
    "					<p class=\"text-left text-muted navbar-btn\"><strong>{{'This is the spot to learn how to build apps. You\\'ll learn the language, tools, and necessary concepts to get your app out the door.'| translate}}</strong></p>\n" +
    "					<a href=\"#!/courses/search\" title=\"{{'Get Started'| translate}}\" class=\"navbar-btn pull-left\"><span class=\"text-info\"><strong>{{'Get Started'| translate}}<strong></span></a>\n" +
    "				</div>\n" +
    "				<div class=\"col-sm-3 col-xs-12 well-lg\">\n" +
    "					<img src=\"assets/img/Learn-img4.png\" alt=\"[Image: {{'Learn'| translate}}]\" title=\"{{'Learn'| translate}}\" class=\"img-circle img-responsive\">\n" +
    "					<div class=\"well-sm navbar-btn\"></div>\n" +
    "					<h4 class=\"h5 text-left\"><strong>{{'Start a Business'| translate}}</strong></h4>\n" +
    "					<p class=\"text-left text-muted navbar-btn\"><strong>{{'Find out how to get your business off on the right foot. Topics include corporate structure, marketing, finance, and more!'| translate}}</strong></p>\n" +
    "					<a href=\"#!/courses/search\" title=\"{{'Get Started'| translate}}\" class=\"navbar-btn pull-left\"><span class=\"text-info\"><strong>{{'Get Started'| translate}}<strong></span></a>\n" +
    "				</div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "	  <div class=\"well-lg\"></div>\n" +
    "    </section>\n" +
    "    <!--sectin3-->\n" +
    "	\n" +
    "	<section class=\"well clearfix list-group-item-heading\">\n" +
    "      <div class=\"clearfix\">\n" +
    "        <div class=\"container\">\n" +
    "			<div class=\"row\">\n" +
    "				<div class=\"col-md-6 col-sm-6 col-xs-12\">\n" +
    "					<div class=\"well-lg\"></div>\n" +
    "					<em class=\"h4 italicized\"> \" {{'Teamr has a library of lessons that goes far beyond the surface, touching nearly every aspect of how to design and develop for the web and iOS.'| translate}} \" </em>\n" +
    "					<div class=\"well-sm clearfix\"></div>\n" +
    "					<div class=\"media navbar-btn\"> \n" +
    "						<div class=\"pull-left\"> <a href=\"#\"> <img src=\"assets/img/shay-howe.jpg\" \n" +
    "						class=\"img-circle img-responsive center-block\"></a> </div> \n" +
    "						<div class=\"media-body\">\n" +
    "							<h4 class=\"media-heading\"><strong>{{'Shay Howe'| translate}}</strong></h4>  \n" +
    "							<p class=\"text-muted\"><strong ng-bind-html=\"'Designer & Develper'|translate|to_trusted\"></strong></p>\n" +
    "						</div> \n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"col-md-6 col-sm-6 col-xs-12\">\n" +
    "					<div class=\"well-lg\"></div>\n" +
    "					<em class=\"h4 italicized\"> \" {{'Wondering how I never heard of @AgriyaTeamr until now!... There\\'s a breadth of free, applicable skills worth learning. #Innovate'| translate}} \" </em>\n" +
    "					<div class=\"well-sm clearfix\"></div>\n" +
    "					<div class=\"media navbar-btn\"> \n" +
    "						<div class=\"pull-left\"> <a href=\"#\"> <img src=\"assets/img/shawn-michael.jpg\" \n" +
    "						class=\"img-circle img-responsive center-block\"></a> </div> \n" +
    "						<div class=\"media-body\">\n" +
    "							<h4 class=\"media-heading\"><strong>{{'Shawn Michael'| translate}}</strong></h4>  \n" +
    "							<p class=\"text-muted\"><strong>{{'iPhone App Developer'|translate}}</strong></p>\n" +
    "						</div> \n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </section>\n" +
    "	\n" +
    "	<section class=\"clearfix\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\">\n" +
    "		<div class=\"bg-success\">\n" +
    "			<div class=\"well-lg\"></div>\n" +
    "			<div class=\"container\">\n" +
    "				<subscriptions-plans ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\"></subscriptions-plans>\n" +
    "			</div>\n" +
    "			<div class=\"clearfix\"></div><div class=\"well-sm navbar-btn\"></div>\n" +
    "		</div>\n" +
    "    </section>\n" +
    "	<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "  </main>");
}]);

angular.module("themes/teamr/views/pages/pages.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/pages/pages.tpl.html",
    "<!--- Contact Form--->\n" +
    "<div class=\"container\">\n" +
    "	<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "	<h2>{{model.page.title}}</h2>\n" +
    "	<p ng-bind-html='model.page.content'></p>\n" +
    "	<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "</div>");
}]);

angular.module("themes/teamr/views/users/activation.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/users/activation.tpl.html",
    "");
}]);

angular.module("themes/teamr/views/users/change_password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/users/change_password.tpl.html",
    "<section class=\"clearfix\">\n" +
    "	<div class=\"container\">	\n" +
    "		<div class=\"panel\">\n" +
    "			<div class=\"list-header text-center well-sm\">\n" +
    "				<h3>{{'Change Password'|translate}}</h3>\n" +
    "			</div>					\n" +
    "		</div>\n" +
    "		<div class=\"well-lg panel clearfix\">\n" +
    "				<form method=\"post\" class=\"form-horizontal clearfix\" name=\"changePasswordForm\" ng-submit=\"change_password(changePasswordForm.$valid, user);changePasswordForm.$setPristine()\">\n" +
    "			    <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : changePasswordForm.old_password.$invalid && changePasswordForm.old_password.$dirty }\">\n" +
    "					<label class=\"col-sm-3 control-label\">{{'Current Password'|translate}}</label>\n" +
    "					<div class=\"col-md-5 col-sm-9\">\n" +
    "						<input class=\"form-control \" type=\"password\" name=\"old_password\" ng-model=\"user.old_password\" placeholder=\"{{'Current Password'|translate}}\" required>\n" +
    "						<div class=\"help-block text-danger\" ng-if=\"changePasswordForm.old_password.$dirty\" ng-messages=\"changePasswordForm.old_password.$error\">\n" +
    "						  <div ng-message=\"required\">{{'Required'|translate}}.</div>\n" +
    "						</div>							\n" +
    "					</div>\n" +
    "			    </div>\n" +
    "				<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : changePasswordForm.new_password.$invalid && changePasswordForm.new_password.$dirty }\">\n" +
    "					<label class=\"col-sm-3 control-label\">{{'New Password'|translate}}</label>\n" +
    "					<div class=\"col-md-5 col-sm-9\">\n" +
    "						<input class=\"form-control\" type=\"password\" minlength=\"5\" name=\"new_password\" ng-model=\"user.new_password\" placeholder=\"{{'New Password'|translate}}\" required>\n" +
    "						<div class=\"help-block text-danger\" ng-if=\"changePasswordForm.new_password.$dirty\" ng-messages=\"changePasswordForm.new_password.$error\">\n" +
    "						  <div ng-message=\"required\">{{'Required'|translate}}.</div>\n" +
    "						  <div ng-message=\"minlength\">{{'Password must be 5 characters'|translate}}.</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "			    </div>\n" +
    "				<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : changePasswordForm.confirm_new_password.$invalid && changePasswordForm.confirm_new_password.$dirty }\">\n" +
    "					<label class=\"col-sm-3 control-label\">{{'Re-type New Password'|translate}}</label>\n" +
    "					<div class=\"col-md-5 col-sm-9\">\n" +
    "						<input class=\"form-control\" type=\"password\" minlength=\"5\" name=\"confirm_new_password\" ng-model=\"user.confirm_new_password\" data-match=\"user.new_password\" placeholder=\"{{'Re-type New Password'|translate}}\" required>\n" +
    "						<div class=\"help-block text-danger\" ng-if=\"changePasswordForm.confirm_new_password.$dirty\" ng-messages=\"changePasswordForm.confirm_new_password.$error\">\n" +
    "						  <div ng-message=\"required\">{{'Required'|translate}}.</div>\n" +
    "						  <div ng-message=\"minlength\">{{'Password must be 5 characters'|translate}}.</div>\n" +
    "						  <div ng-message=\"match\">{{'Password and confirm password must be same'|translate}}.</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "			    </div>\n" +
    "				<div class=\"well well-sm clearfix\">\n" +
    "					<div class=\"pull-right\">\n" +
    "						<label class=\"sr-only\" for=\"submit\">{{'Change Password'|translate}}</label>\n" +
    "						<button type=\"submit\" class=\"btn btn-primary btn-lg\" ng-disabled=\"changePasswordForm.$invalid || disableButton\" id=\"submit\">{{'Change Password'|translate}} <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "");
}]);

angular.module("themes/teamr/views/users/directives/profileImage.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/users/directives/profileImage.tpl.html",
    "<a ng-if=\"model.userImageHash !== '' && model.userImageHash !== null && $root.settings['site.enabled_plugins'].indexOf('UserProfile') > -1\" href=\"#!/user/{{user_id}}/{{model.userDisplayName|slugify}}/\" title=\"{{model.userDisplayName}}\"> \n" +
    "	<img animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\" lazy-src=\"{{$root.site_url}}img/{{model.userProfileThumb}}/User/{{model.userImageHash}}\" alt=\"[Image: {{model.userDisplayName}}]\" title=\"{{model.userDisplayName}}\" class=\"img-responsive\" ng-class=\"{'img-circle': model.imageType === 'imagecircle'}\" /> \n" +
    "</a>\n" +
    "<a ng-if=\"model.userImageHash === '' || model.userImageHash === null && $root.settings['site.enabled_plugins'].indexOf('UserProfile') > -1\" href=\"#!/user/{{user_id}}/{{model.userDisplayName|slugify}}/\" title=\"{{model.userDisplayName}}\"> \n" +
    "	<img  animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\"  lazy-src=\"{{$root.site_url}}img/{{model.userProfileThumb}}/User/0.default.jpg\" alt=\"[Image: {{model.userDisplayName}}]\" title=\"{{model.userDisplayName}}\" class=\"img-responsive\" ng-class=\"{'img-circle': model.imageType === 'imagecircle'}\" /> \n" +
    "</a> \n" +
    " <img  ng-if=\"model.userImageHash !== '' && model.userImageHash !== null && $root.settings['site.enabled_plugins'].indexOf('UserProfile') === -1\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\"  lazy-src=\"{{$root.site_url}}img/{{model.userProfileThumb}}/User/{{model.userImageHash}}\" alt=\"[Image: {{model.userDisplayName}}]\" title=\"{{model.userDisplayName}}\" class=\"img-responsive\" ng-class=\"{'img-circle': model.imageType === 'imagecircle'}\" /> \n" +
    " <img  ng-if=\"model.userImageHash === '' || model.userImageHash === null && $root.settings['site.enabled_plugins'].indexOf('UserProfile') === -1\" animate-visible=\"{{ImgLazyLoad.AnimateVisible}}\" animate-speed=\"{{ImgLazyLoad.AnimateSpeed}}\"  lazy-src=\"{{$root.site_url}}img/{{model.userProfileThumb}}/User/0.default.jpg\" alt=\"[Image: {{model.userDisplayName}}]\" title=\"{{model.userDisplayName}}\" class=\"img-responsive\" ng-class=\"{'img-circle': model.imageType === 'imagecircle'}\" /> ");
}]);

angular.module("themes/teamr/views/users/directives/profileName.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/users/directives/profileName.tpl.html",
    "<div class=\"media-heading\">\n" +
    "<a href=\"#!/user/{{user_id}}/{{model.userDisplayName|slugify}}/\" title=\"{{model.userDisplayName}}\" class=\"{{model.userNameClass}}\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserProfile') > -1\">\n" +
    "<span>\n" +
    "	<strong ng-if=\"model.userSmallText !== 'true'\">{{model.userDisplayName}}</strong>\n" +
    "	<strong ng-if=\"model.userSmallText === 'true'\" ng-class=\"{'text-info': model.userSmallText === 'true'}\"><small>{{model.userDisplayName}}</small></strong>\n" +
    "</span></a>\n" +
    "\n" +
    "\n" +
    "<span title=\"{{model.userDisplayName}}\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('UserProfile') === -1\" class=\"{{model.userNameClass}}\" >\n" +
    "	<strong ng-if=\"model.userSmallText !== 'true'\">{{model.userDisplayName}}</strong>\n" +
    "	<strong ng-if=\"model.userSmallText === 'true'\"><small>{{model.userDisplayName}}</small></strong>\n" +
    "</span>\n" +
    "\n" +
    "</div>\n" +
    "<p ng-if=\"model.userDesignation === 'yes' && model.userDesignationText && $root.settings['site.enabled_plugins'].indexOf('UserProfile') > -1\">{{model.userDesignationText}}</p>\n" +
    "\n" +
    "");
}]);

angular.module("themes/teamr/views/users/forgot_password.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/users/forgot_password.tpl.html",
    "<section class=\"clearfix\">\n" +
    "	<div class=\"container\">\n" +
    "		<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "		<div class=\"panel-body\">\n" +
    "			<h3 class=\"lead text-center text-primary\"><strong>{{'Forgot your password?' | translate}}</strong></h3>\n" +
    "			<hr>\n" +
    "		</div>					\n" +
    "		<div class=\"well-lg panel clearfix\">			\n" +
    "			<div class=\"alert alert-info\">{{'Please provide the email address. We\\'ll send you an email with new password.' | translate}}</div>\n" +
    "			<form class=\"form-horizontal\" method=\"post\" name=\"forgotPasswordForm\" ng-submit=\"forgot_password(forgotPasswordForm.$valid, user);forgotPasswordForm.$setPristine()\">\n" +
    "				<div class=\"form-group clearfix\" ng-class=\"{ 'has-error' : forgotPasswordForm.email.$invalid && forgotPasswordForm.email.$dirty }\">\n" +
    "					<label class=\"col-md-3 col-sm-3 control-label\" for=\"designation\">{{'Email' | translate}}</label>\n" +
    "					<div class=\"col-md-5 col-sm-9\">\n" +
    "						<input class=\"form-control input-lg\" type=\"email\" name=\"email\" ng-model=\"user.email\" placeholder=\"{{'Email your email' | translate}}\" required autofocus>\n" +
    "						<div class=\"help-block text-danger\" ng-if=\"forgotPasswordForm.email.$dirty\" ng-messages=\"forgotPasswordForm.email.$error\">\n" +
    "							<div ng-message=\"required\">{{'Please Enter Email' | translate}}.</div>\n" +
    "							<div ng-message=\"email\">{{'Your email address is invalid'|translate}}.</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div class=\"well well-sm clearfix\">\n" +
    "					<div class=\"pull-right\">\n" +
    "						<button type=\"submit\" ng-disabled=\"forgotPasswordForm.$invalid || disableButton\" class=\"btn btn-lg btn-primary\">{{'Send' | translate}} <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			    <br/>\n" +
    "			    <p class=\"text-center text-muted\">\n" +
    "					<small>{{'Don\\'t have an account yet? '|translate}}<a ng-href=\"#!/users/signup\" >{{'Sign up'|translate}}</a></small>\n" +
    "			    </p>\n" +
    "			</form>\n" +
    "		</div> \n" +
    "		<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "	</div>\n" +
    "</section>");
}]);

angular.module("themes/teamr/views/users/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/users/login.tpl.html",
    "<div class=\"well-lg\" ng-class=\"{'container': currentPageType === 'page'}\">	\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"center-form\" ng-class=\"{'col-xs-12 col-sm-8 col-sm-offset-2': currentPageType === 'page' ,'panel': currentPageType === 'modal'}\">\n" +
    "      <div class=\"panel-body \">\n" +
    "		<a data-dismiss=\"modal\" ng-click=\"modalClose($event)\" class=\"modalClose\" ng-if=\"currentPageType === 'modal'\"><i class=\"fa fa-lg fa-times-circle close\"></i></a>\n" +
    "        <div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1 && currentPageType === 'page'\"></div>\n" +
    "		<h3 class=\"lead text-center text-primary\"><strong>{{'Login to your'|translate}} {{$root.settings['site.name']}} {{'account!'|translate}}</strong></h3>\n" +
    "		<hr>\n" +
    "		<div class=\"row\">\n" +
    "			<div  class=\"col-md-offset-1 col-md-10\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('SocialLogins') > -1\">\n" +
    "				<h3 class=\"lead text-center text-primary\">{{'Login with social accounts'|translate}}</h3>\n" +
    "				<social-login page-type='{{currentPageType}}'></social-login>\n" +
    "			</div>\n" +
    "			<div class=\"well-sm\"></div>\n" +
    "			<div class=\"col-md-offset-1 col-md-10\" ng-if='!contentInIframe'>\n" +
    "				<h3 class=\"lead text-center text-primary\">{{'Login with your email'|translate}}</h3>\n" +
    "				<form method=\"post\" name=\"loginForm\">\n" +
    "					<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : loginForm.email.$invalid && loginForm.email.$dirty }\">\n" +
    "						<input class=\"form-control text-muted input-lg\" type=\"email\" name=\"email\" ng-model=\"user.email\" placeholder=\"{{'Email'|translate}}\" required autofocus>\n" +
    "						<span class=\"ion-at form-control-feedback\"></span>\n" +
    "						<div class=\"help-block text-danger\" ng-if=\"loginForm.email.$dirty\" ng-messages=\"loginForm.email.$error\">\n" +
    "						  <div ng-message=\"required\">{{'Please Enter Email' | translate}}.</div>\n" +
    "						  <div ng-message=\"email\">{{'Your email address is invalid'|translate}}.</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : loginForm.password.$invalid && loginForm.password.$dirty }\">\n" +
    "						<input class=\"form-control text-muted input-lg\" type=\"password\" name=\"password\" ng-model=\"user.password\" placeholder=\"{{'Password'|translate}}\" required>\n" +
    "						<span class=\"ion-key form-control-feedback\"></span>\n" +
    "						<div class=\"help-block text-danger\" ng-if=\"loginForm.password.$dirty\" ng-messages=\"loginForm.password.$error\">\n" +
    "						  <div ng-message=\"required\">{{'Password cannot be empty'|translate}}.</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"col-xs-12 text-center\"><button ng-click=\"loginUser(loginForm.$valid, user);loginForm.$setPristine()\" ng-disabled=\"loginForm.$invalid || disableButton\" class=\"btn btn-lg btn-success\"><strong>{{'Sign in'|translate}} <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></strong></button></div>\n" +
    "					<br/>\n" +
    "					<p class=\"text-center text-muted\">\n" +
    "						<small>{{'Don\\'t have an account yet?'|translate}} <a ng-if=\"currentPageType === 'page'\" ng-href=\"#!/users/signup\" >&nbsp;&nbsp;{{'Sign up'|translate}}</a>\n" +
    "						<a ng-if=\"currentPageType === 'modal'\" ng-click=\"goToState('Signup')\" ng-href=\"#!/users/signup\" >&nbsp;&nbsp;{{'Sign up'|translate}}</a>\n" +
    "						</small>\n" +
    "					</p>\n" +
    "					<hr>\n" +
    "					<p class=\"text-center text-muted\"><a ng-href=\"#!/users/forgot_password\" title=\"{{'I forgot my password'|translate}}\"><span class=\"icon icon-help-mini\"></span>{{'I forgot my password'|translate}}</a></p>\n" +
    "					\n" +
    "				</form>\n" +
    "			</div>\n" +
    "		</div>             \n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1 && currentPageType === 'page'\"></div>\n" +
    "</div>");
}]);

angular.module("themes/teamr/views/users/logout.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/users/logout.tpl.html",
    "");
}]);

angular.module("themes/teamr/views/users/signup.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/users/signup.tpl.html",
    "<div class=\"well-lg\" ng-class=\"{'container': currentPageType === 'page'}\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"center-form\" ng-class=\"{'col-sm-8 col-sm-offset-2': currentPageType === 'page' , 'panel': currentPageType === 'modal'}\">\n" +
    "      <div class=\"panel-body row\">\n" +
    "		<a data-dismiss=\"modal\" ng-click=\"modalClose($event)\" class=\"modalClose\" ng-if=\"currentPageType === 'modal'\"><i class=\"fa fa-lg fa-times-circle close\"></i></a>\n" +
    "         <div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1 && currentPageType === 'page'\"></div>\n" +
    "		<h2 class=\"lead text-center text-primary\"><strong>{{'Sign up to'|translate}} {{$root.settings['site.name']}} {{'account!'|translate}}</strong></h2>\n" +
    "		<hr>\n" +
    "		<div class=\"col-md-offset-1 col-md-10 row\">\n" +
    "			<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\">\n" +
    "					<h3 class=\"lead text-center text-primary\">{{'Choose Subscription Plan'|translate}}</h3>\n" +
    "					<div class=\"well-sm\" ng-repeat=\"subscriptions in model.SubscriptionsList\" ng-class=\"{ 'bg-success' : model.Subscriptions.id === subscriptions.id }\">\n" +
    "						<div class=\"radio\" ng-click=\"model.Subscriptions.id = subscriptions.id;\">\n" +
    "							<div class=\"form-group\">\n" +
    "								<label for=\"{{subscriptions.name}}\" class=\"h4\" ng-class=\"{ 'text-muted' : model.Subscriptions.id !== subscriptions.id  }\"  popover-placement=\"top\" popover-html-unsafe=\"{{subscriptions.description}}\">\n" +
    "									<input type=\"radio\" value=\"{{subscriptions.id}}\" id=\"subscriptions_{{subscriptions.id}}\" name=\"subscriptions_Level\" ng-model=\"model.Subscriptions.id\" >\n" +
    "									{{subscriptions.name}} - <amount-display amount='{{subscriptions.price}}' fraction='0' is-course-price='no'> / {{subscriptions.interval_unit}}\n" +
    "								</label>				\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				<hr>\n" +
    "		    </div>\n" +
    "			<div ng-if=\"$root.settings['site.enabled_plugins'].indexOf('SocialLogins') > -1\">\n" +
    "			<h3 class=\"lead text-center text-primary\">{{'Sign up with social accounts'|translate}}</h3>\n" +
    "			<social-login page-type='{{currentPageType}}'></social-login>\n" +
    "			</div>\n" +
    "			<form method=\"post\" name=\"signupForm\">			\n" +
    "		    <div class=\"well-sm\"></div>\n" +
    "			<div ng-if='!contentInIframe'>\n" +
    "				<h3 class=\"lead text-center text-primary\">{{'Sign up with your email'|translate}}</h3>\n" +
    "				 <input type=\"hidden\" name=\"subscription_id\" ng-model=\"user.subscription_id\" ng-if=\"subscriptionId && $root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\">\n" +
    "				  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : signupForm.displayname.$invalid && signupForm.displayname.$dirty }\">\n" +
    "					<input class=\"form-control input-lg\" type=\"text\" name=\"displayname\" ng-model=\"user.displayname\" placeholder=\"{{'Name'|translate}}\" required autofocus>\n" +
    "					<span class=\"ion-person form-control-feedback\"></span>\n" +
    "					<div class=\"help-block text-danger\" ng-if=\"signupForm.displayname.$dirty\" ng-messages=\"signupForm.displayname.$error\">\n" +
    "					  <div ng-message=\"required\">{{'You must enter your name'|translate}}.</div>\n" +
    "					</div>\n" +
    "				  </div>\n" +
    "				  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : signupForm.email.$invalid && signupForm.email.$dirty }\">\n" +
    "					<input class=\"form-control input-lg\" type=\"email\" id=\"email\" name=\"email\" ng-model=\"user.email\" placeholder=\"{{'Email'|translate}}\" required autofocus>\n" +
    "					<span class=\"ion-at form-control-feedback\"></span>\n" +
    "					<div class=\"help-block text-danger\" ng-if=\"signupForm.email.$dirty\" ng-messages=\"signupForm.email.$error\">\n" +
    "					  <div ng-message=\"required\">{{'Your email address is required'|translate}}.</div>\n" +
    "					  <div ng-message=\"email\">{{'Your email address is invalid'|translate}}.</div>\n" +
    "					</div>\n" +
    "				  </div>\n" +
    "				  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : signupForm.password.$invalid && signupForm.password.$dirty }\">\n" +
    "					<input class=\"form-control input-lg\" type=\"password\" minlength=\"5\" name=\"password\" ng-model=\"user.password\" placeholder=\"{{'Password'|translate}}\" required>\n" +
    "					<span class=\"ion-key form-control-feedback\"></span>\n" +
    "					<div class=\"help-block text-danger\" ng-if=\"signupForm.password.$dirty\" ng-messages=\"signupForm.password.$error\">\n" +
    "					  <div ng-message=\"required\">{{'Password is required'|translate}}.</div>\n" +
    "					  <div ng-message=\"minlength\">{{'Password must be 5 characters'|translate}}.</div>\n" +
    "					</div>\n" +
    "				  </div>\n" +
    "				  <div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : signupForm.confirmPassword.$invalid && signupForm.confirmPassword.$dirty }\">\n" +
    "					<input password-match=\"user.password\" class=\"form-control input-lg\" type=\"password\" minlength=\"5\" name=\"confirmPassword\" ng-model=\"user.confirm_password\" placeholder=\"{{'Confirm Password'|translate}}\" required>\n" +
    "					<span class=\"ion-key form-control-feedback\"></span>\n" +
    "					<div class=\"help-block text-danger\" ng-if=\"signupForm.confirmPassword.$dirty\" ng-messages=\"signupForm.confirmPassword.$error\">\n" +
    "					  <div ng-message=\"compareTo\">{{'Password and confirm password must be same'|translate}}.</div>\n" +
    "					  <div ng-message=\"required\">{{'Confirm password is required'|translate}}.</div>\n" +
    "					</div>\n" +
    "				  </div>\n" +
    "				  <p class=\"text-center text-muted\"><small>{{'By clicking on Sign up, you agree to'|translate}} <a href=\"#!/page/terms\" target=\"_blank\" ng-bind-html=\"'Terms & Conditions'|translate|to_trusted\"></a> {{'and '|translate}}&nbsp;<a href=\"#!/page/privacy-policy\" target=\"_blank\">{{'Privacy Policy'|translate}}</a></small></p>\n" +
    "				  <div class=\"col-xs-12 text-center\"><button  ng-click=\"onSubmitted(user);signupForm.$setPristine();\" ng-disabled=\"signupForm.$invalid || disableButton\" class=\"btn btn-lg btn-success\">{{'Sign up'|translate}} <span ng-show=\"disableButton\"><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button></div>\n" +
    "				  <br/>\n" +
    "				  <p class=\"text-center text-muted\">{{'Already have an account?'|translate}} \n" +
    "				  <a ng-if=\"currentPageType === 'page'\" href=\"#!/users/login\">{{'Log in now'|translate}}</a>\n" +
    "				  <a ng-if=\"currentPageType === 'modal'\" ng-click=\"goToState('Login')\" href=\"#!/users/login\">{{'Log in now'|translate}}</a></p>\n" +
    "				</div>\n" +
    "			</form>\n" +
    "		</div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1 && currentPageType === 'page'\"></div>\n" +
    "</div>");
}]);

angular.module("themes/teamr/views/users/subscribe_plans.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/users/subscribe_plans.tpl.html",
    "<section>\n" +
    "	<div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n" +
    "		<div class=\"carousel-inner\" role=\"listbox\">\n" +
    "		  <div class=\"item active\"> <img src=\"assets/img/banner-block.png\" alt=\"[Image: {{'Banner-Block'| translate}}]\" title=\"{{'Banner-Block'| translate}}\">\n" +
    "			<div class=\"well-lg\"></div>\n" +
    "			<div class=\"well-sm\"></div>\n" +
    "			<div class=\"carousel-caption\">\n" +
    "			  <div class=\"text-center\">\n" +
    "				<p class=\"h5 fa-inverse\"><strong>{{'Start learning today'| translate}}</strong></p>\n" +
    "				<h3 class=\"h1 fa-inverse navbar-btn\"><strong>{{'Sign up for'| translate}} {{$root.settings['site.name']}}</strong></h3>\n" +
    "			  </div>\n" +
    "			  <div class=\"well-sm hidden-xs hidden-sm hidden-md\"></div>\n" +
    "				<subscriptions-plans ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Subscriptions') > -1\"></subscriptions-plans>\n" +
    "			</div>\n" +
    "		  </div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</section>\n" +
    "<div banner position=\"topBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "<section>\n" +
    "  <div class=\"well-sm\"></div>\n" +
    "  <div class=\"container\">\n" +
    "	<div class=\"jumbotron\">\n" +
    "	  <div class=\"text-center\">\n" +
    "		<h5 class=\"col-sm-10 col-sm-offset-1 fa-inverse\"><strong>{{'Hundreds of businesses, schools and community organizations use'| translate}} {{$root.settings['site.name']}} {{'for Organizations to fuel their successful training programs and keep their workforce sharp.'| translate}}</strong></h5>\n" +
    "		<div class=\"well-lg\"></div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "<section>\n" +
    "  <div class=\"container\">\n" +
    "	<div class=\"navbar-btn clearfix\"></div>\n" +
    "	<h4 class=\"h3 text-center\"><strong>{{'Success is in the air'| translate}}</strong></h4>\n" +
    "	<div class=\"navbar-btn clearfix\"></div>\n" +
    "	<div class=\"navbar-btn clearfix\"></div>\n" +
    "	<div class=\"col-xs-12\">\n" +
    "	  <div class=\"col-md-4 col-sm-6\">\n" +
    "		<div class=\"well\">\n" +
    "		  <div class=\"col-xs-12\">\n" +
    "			<div class=\"text-success\"><i class=\"fa fa-quote-left\"></i></div>\n" +
    "		  </div>\n" +
    "		  <div class=\"navbar-btn clearfix\"></div>\n" +
    "		  <div class=\"navbar-btn clearfix\"></div>\n" +
    "		  <div class=\"well-sm clearfix\"></div>\n" +
    "		  <p class=\"clearfix\"><span class=\"nav col-xs-12\">{{'[...] I am so thankful that'| translate}} {{$root.settings['site.name']}} {{'has allowed me to get started and follow something that I\\'m truly passionate about.'| translate}}</span></p>\n" +
    "		  <div class=\"navbar-btn clearfix hidden-xs\"></div>\n" +
    "		  <div class=\"navbar-btn clearfix visible-sm\"></div>\n" +
    "		  <div class=\"navbar-btn clearfix list-group-item-heading hidden-xs\"></div>\n" +
    "		  <div class=\"navbar-btn clearfix visible-sm list-group-item-heading\"></div>\n" +
    "		  <div class=\"media\">\n" +
    "			<div class=\"pull-right\"><a href=\"#\" title=\"{{'Client1'|translate}}\"><img src=\"assets/img/client1.jpeg\" alt=\"[Image: {{'Client1'|translate}}]\" title=\"{{'Client1'|translate}}\" class=\"img-responsive img-circle\" height=\"60\" width=\"60\"></a></div>\n" +
    "			<div class=\"media-body\">\n" +
    "			  <div class=\"navbar-btn clearfix list-group-item-heading\"></div>\n" +
    "			  <div class=\"media-heading list-group-item-text\"> <span title=\"{{'Jon Farrell'| translate}}\" class=\"h5\"><strong>{{'Jon Farrell'| translate}}</strong></span> </div>\n" +
    "			  <span title=\"{{'Sydney Australia'| translate}}\" class=\"h6\">{{'Sydney Australia'| translate}}</span> </div>\n" +
    "		  </div>\n" +
    "		  <div class=\"well-lg visible-xs\"></div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	  <div class=\"col-md-4 col-sm-6\">\n" +
    "		<div class=\"well\">\n" +
    "		  <div class=\"col-xs-12\">\n" +
    "			<div class=\"text-success\"><i class=\"fa fa-quote-left\"></i></div>\n" +
    "		  </div>\n" +
    "		  <div class=\"navbar-btn clearfix\"></div>\n" +
    "		  <div class=\"navbar-btn clearfix\"></div>\n" +
    "		  <p>{{'Watching the'| translate}} {{$root.settings['site.name']}} {{'videos, I was having little \"Ahaaa, that makes sense!\" moments, the videos are broken down into just the right amount to be able to absorb, without getting too frustrated.'|translate}}</p>\n" +
    "		  <div class=\"hidden-sm\"></div>\n" +
    "		  <div class=\"well-sm visible-sm\"></div>\n" +
    "		  <div class=\"navbar-btn clearfix visible-sm\"></div>\n" +
    "		  <div class=\"media\">\n" +
    "			<div class=\"pull-right\"><a href=\"#\" title=\"{{'Client2'| translate}}\"><img src=\"assets/img/client2.jpeg\" alt=\"[Image: {{'Client2'| translate}}]\" title=\"{{'Client2'| translate}}\" class=\"img-responsive img-circle\" height=\"60\" width=\"60\"></a></div>\n" +
    "			<div class=\"media-body\">\n" +
    "			  <div class=\"navbar-btn clearfix list-group-item-heading\"></div>\n" +
    "			  <div class=\"media-heading list-group-item-text\"> <span title=\"Toby Powell\" class=\"h5\"><strong>{{'Toby Powell'| translate}}</strong></span> </div>\n" +
    "			  <span title=\"{{'Sydney Australia'| translate}}\" class=\"h6\">{{'Bangkok, Thailand'| translate}}</span> </div>\n" +
    "		  </div>\n" +
    "		  <div class=\"well-lg visible-xs\"></div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	  <div class=\"col-md-4 col-sm-12\">\n" +
    "		<div class=\"well\">\n" +
    "		  <div class=\"col-xs-12\">\n" +
    "			<div class=\"text-success\"><i class=\"fa fa-quote-left\"></i></div>\n" +
    "		  </div>\n" +
    "		  <div class=\"navbar-btn clearfix\"></div>\n" +
    "		  <div class=\"navbar-btn clearfix\"></div>\n" +
    "		  <p>{{'I\\'m starting a business based on the web, and that\\'s huge to me. I am attributing this to '| translate}}      {{$root.settings['site.name']}} {{'because it gave me the skills under my belt, and the confidence to start my own business.'| translate}}</p>\n" +
    "		  <div class=\"navbar-btn clearfix list-group-item-heading hidden-sm\"></div>\n" +
    "		  <div class=\"media\">\n" +
    "			<div class=\"pull-right\"><a href=\"#\" title=\"{{'Client3'| translate}}\"><img src=\"assets/img/client3.jpeg\" alt=\"[Image: {{'Client3'| translate}}]\" title=\"{{'Client3'| translate}}\" class=\"img-responsive img-circle\" height=\"60\" width=\"60\"></a></div>\n" +
    "			<div class=\"media-body\">\n" +
    "			  <div class=\"navbar-btn clearfix list-group-item-heading\"></div>\n" +
    "			  <div class=\"media-heading list-group-item-text\"> <span title=\"{{'Martha Chumo'| translate}}\" class=\"h5\"><strong>{{'Martha Chumo'| translate}}</strong></span> </div>\n" +
    "			  <span title=\"{{'Nairobi, Kenya'| translate}}\" class=\"h6\">{{'Nairobi, Kenya'| translate}}</span> </div>\n" +
    "		  </div>\n" +
    "		  <div class=\"well-lg visible-xs\"></div>\n" +
    "		</div>\n" +
    "	  </div>\n" +
    "	</div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "<section>\n" +
    "  <div class=\"container\">\n" +
    "	<div class=\"col-xs-12\">\n" +
    "	  <div class=\"page-header\"></div>\n" +
    "	  <div class=\"text-center h3 text-success col-xs-12 col-sm-9 col-sm-offset-2\"> {{$root.settings['site.name']}} {{'not only provided a great learning foundation for what I do on a daily basis... I now have friends across the globe, who I would never have met had it not been for'| translate}}{{$root.settings['site.name']}}. {{'I definitely would not be where I am today in terms of development both personally and professionally if it wasn\\'t for this community.'| translate}}</div>\n" +
    "	</div>\n" +
    "	<div class=\"navbar-btn clearfix\"></div>\n" +
    "	<p class=\"h4 text-center\"><strong>- {{'Graham Davidson Birmingham, England'| translate}}</strong></p>\n" +
    "	<hr>\n" +
    "  </div>\n" +
    "</section>\n" +
    "<div banner position=\"bottomBanner\" ng-if=\"$root.settings['site.enabled_plugins'].indexOf('Banner') > -1\"></div>\n" +
    "");
}]);

angular.module("themes/teamr/views/users/user_profile.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("themes/teamr/views/users/user_profile.tpl.html",
    "<section>\n" +
    "		<div class=\"container\">\n" +
    "		<div class=\"panel\">\n" +
    "			<div class=\"list-header text-center well-sm\">\n" +
    "				<h3>{{'Profile'|translate}}</h3>\n" +
    "				<span>{{'Add information about yourself to share on your profile.'|translate}}</span>\n" +
    "			</div>					\n" +
    "		</div>\n" +
    "		<div class=\"well-lg panel clearfix\">\n" +
    "				<form class=\"form-horizontal\" name=\"editprofile\" ng-submit=\"editProfile()\" >\n" +
    "					<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.designation.$invalid && editprofile.designation.$dirty }\">\n" +
    "						<label class=\"col-md-3 col-sm-3 control-label\" for=\"designation\">{{'Designation'|translate}}</label>\n" +
    "						<div class=\"col-md-5 col-sm-9\">\n" +
    "							<input type=\"text\" class=\"form-control\" name=\"designation\" id=\"designation\" placeholder=\"{{'Designation'|translate}}\" ng-model=\"model.user_profile.designation\" maxlength=\"60\" required />\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"editprofile.designation.$dirty\" ng-messages=\"editprofile.designation.$error\">\n" +
    "								<div ng-message=\"required\">{{'You must enter your Designation'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group has-feedback\"  ng-class=\"{ 'has-error' : editprofile.displayname.$invalid && editprofile.displayname.$dirty }\">\n" +
    "						<label class=\"col-md-3 col-sm-3 control-label\" for=\"displayname\">{{'Display Name'|translate}}</label>\n" +
    "						<div class=\"col-md-5 col-sm-9\">\n" +
    "							<input type=\"text\" class=\"form-control\" name=\"displayname\" id=\"displayname\" placeholder=\"{{'Display Name'|translate}}\" ng-model=\"model.user_profile.displayname\" required />\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"editprofile.displayname.$dirty\" ng-messages=\"editprofile.displayname.$error\">\n" +
    "								<div ng-message=\"required\">{{'You must enter your Display Name'|translate}}.</div>\n" +
    "						  </div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.headline.$invalid && editprofile.headline.$dirty }\">\n" +
    "						<label class=\"col-md-3 col-sm-3 control-label\" for=\"headline\">{{'Headline'|translate}}</label>\n" +
    "						<div class=\"col-md-5 col-sm-9\">\n" +
    "							<input type=\"text\" class=\"form-control\" id=\"headline\" name=\"headline\" placeholder=\"{{'Headline'|translate}}\" ng-model=\"model.user_profile.headline\" required />\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"editprofile.headline.$dirty\" ng-messages=\"editprofile.headline.$error\">\n" +
    "								<div ng-message=\"required\">{{'You must enter your Headline'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.biography.$invalid && editprofile.biography.$dirty }\">\n" +
    "						<label class=\"col-md-3 col-sm-3 control-label\" for=\"biography\">{{'Biography'|translate}}</label>\n" +
    "						<div class=\"col-md-5 col-sm-9\">\n" +
    "							<textarea class=\"form-control\" id=\"biography\" name=\"biography\" placeholder=\"{{'Biography'|translate}}\" ng-model=\"model.user_profile.biography\" required></textarea>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"editprofile.biography.$dirty\" ng-messages=\"editprofile.biography.$error\">\n" +
    "								<div ng-message=\"required\">{{'You must enter your Biography'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\">\n" +
    "						<label class=\"col-md-3 col-sm-3 control-label\" for=\"inputTaskAttachments\">{{'Avatar'|translate}}</label>\n" +
    "						<div class=\"col-md-5 col-sm-9\">\n" +
    "							<input type=\"file\" id=\"inputTaskAttachments\" name=\"attachment\"  onchange=\"angular.element(this).scope().uploadFile(this.files)\" />\n" +
    "							<span class=\"text-danger help-block\">{{'Allowed extensions: jpg, jpeg, gif, png'|translate}}</span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.website.$invalid && editprofile.website.$dirty }\">\n" +
    "						<label class=\"col-md-3 col-sm-3 control-label\" for=\"website\">{{'Website'|translate}}</label>\n" +
    "						<div class=\"col-md-5 col-sm-9\">\n" +
    "							<input type=\"url\" class=\"form-control\" name=\"website\" id=\"website\" placeholder=\"{{'Website'|translate}}\" ng-model=\"model.user_profile.website\"/>\n" +
    "							<span class=\"text-danger help-block\">{{'Enter your website URL start with http:// or https://'|translate}}</span>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"editprofile.website.$dirty\" ng-messages=\"editprofile.website.$error\">\n" +
    "								<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.facebook_profile_link.$invalid && editprofile.facebook_profile_link.$dirty }\">\n" +
    "						<label class=\"col-md-3 col-sm-3 control-label\" for=\"facebook_profile_link\">{{'Facebook profile link'|translate}}</label>\n" +
    "						<div class=\"col-md-5 col-sm-9\">\n" +
    "							<input type=\"url\" class=\"form-control\" name=\"facebook_profile_link\" id=\"facebook_profile_link\" placeholder=\"{{'Facebook profile link'|translate}}\" ng-model=\"model.user_profile.facebook_profile_link\" />\n" +
    "							<span class=\"text-danger help-block\">{{'Enter your facebook URL start with http:// or https://'|translate}}</span>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"editprofile.facebook_profile_link.$dirty\" ng-messages=\"editprofile.facebook_profile_link.$error\">\n" +
    "								<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.twitter_profile_link.$invalid && editprofile.twitter_profile_link.$dirty }\">\n" +
    "						<label class=\"col-md-3 col-sm-3 control-label\" for=\"twitter_profile_link\">{{'Twitter profile link'|translate}}</label>\n" +
    "						<div class=\"col-md-5 col-sm-9\">\n" +
    "							<input type=\"url\" class=\"form-control\" name=\"twitter_profile_link\" id=\"twitter_profile_link\" placeholder=\"{{'Twitter profile link'|translate}}\" ng-model=\"model.user_profile.twitter_profile_link\" />\n" +
    "							<span class=\"text-danger help-block\">{{'Enter your twitter URL start with http:// or https://'|translate}}</span>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"editprofile.twitter_profile_link.$dirty\" ng-messages=\"editprofile.twitter_profile_link.$error\">\n" +
    "								<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.google_plus_profile_link.$invalid && editprofile.google_plus_profile_link.$dirty }\">\n" +
    "						<label class=\"col-md-3 col-sm-3 control-label\" for=\"google_plus_profile_link\">{{'Google Plus profile link'|translate}}</label>\n" +
    "						<div class=\"col-md-5 col-sm-9\">\n" +
    "							<input type=\"url\" class=\"form-control\" name=\"google_plus_profile_link\"  id=\"google_plus_profile_link\" placeholder=\"{{'Google Plus profile link'|translate}}\" ng-model=\"model.user_profile.google_plus_profile_link\" />\n" +
    "							<span class=\"text-danger help-block\">{{'Enter your google plus URL start with http:// or https://'|translate}}</span>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"editprofile.google_plus_profile_link.$dirty\" ng-messages=\"editprofile.google_plus_profile_link.$error\">\n" +
    "								<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.linkedin_profile_link.$invalid && editprofile.linkedin_profile_link.$dirty }\">\n" +
    "						<label class=\"col-md-3 col-sm-3 control-label\" for=\"linkedin_profile_link\">{{'LinkedIn profile link'|translate}}</label>\n" +
    "						<div class=\"col-md-5 col-sm-9\">\n" +
    "							<input type=\"url\" class=\"form-control\" name=\"linkedin_profile_link\" id=\"linkedin_profile_link\" placeholder=\"{{'LinkedIn profile link'|translate}}\" ng-model=\"model.user_profile.linkedin_profile_link\" />\n" +
    "							<span class=\"text-danger help-block\">{{'Enter your LinkedIn URL start with http:// or https://'|translate}}</span>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"editprofile.linkedin_profile_link.$dirty\" ng-messages=\"editprofile.linkedin_profile_link.$error\">\n" +
    "								<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"form-group has-feedback\" ng-class=\"{ 'has-error' : editprofile.youtube_profile_link.$invalid && editprofile.youtube_profile_link.$dirty }\">\n" +
    "						<label class=\"col-md-3 col-sm-3 control-label\" for=\"youtube_profile_link\">{{'Youtube profile link'|translate}}</label>\n" +
    "						<div class=\"col-md-5 col-sm-9\">\n" +
    "							<input type=\"url\" class=\"form-control\" name=\"youtube_profile_link\" id=\"youtube_profile_link\" placeholder=\"{{'Youtube profile link'|translate}}\" ng-model=\"model.user_profile.youtube_profile_link\"/>\n" +
    "							<span class=\"text-danger help-block\">{{'Enter your youtube URL start with http:// or https://'|translate}}</span>\n" +
    "							<div class=\"help-block text-danger\" ng-if=\"editprofile.youtube_profile_link.$dirty\" ng-messages=\"editprofile.youtube_profile_link.$error\">\n" +
    "								<div ng-message=\"url\">{{'URL is invalid'|translate}}.</div>\n" +
    "							</div>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "					<div class=\"well well-sm clearfix\">\n" +
    "						<div class=\"pull-right\">\n" +
    "							<label class=\"sr-only\" for=\"user_profile_save\">{{'Save'|translate}}</label>\n" +
    "							<input type=\"submit\" class=\"btn btn-primary btn-lg\"  id=\"user_profile_save\" value=\"{{'Save'|translate}}\" ng-hide=\"disableSave\" >\n" +
    "							<button type=\"submit\" class=\"btn btn-primary btn-lg\" ng-disabled=\"true\" id=\"user_profile_save\" ng-hide=\"!disableSave\" >{{' Validating'|translate}} <span><i class=\"fa fa-spinner fa-pulse fa-lg\"></i></span></button>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</form>\n" +
    "		</div>\n" +
    "		   \n" +
    "	</div>		  		\n" +
    "</section>\n" +
    "<div oc-lazy-load='loadSeo'>\n" +
    "	<user-profile-seo></user-profile-seo>\n" +
    "</div>");
}]);
