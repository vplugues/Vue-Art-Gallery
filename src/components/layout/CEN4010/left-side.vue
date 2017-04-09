<template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="left-side sidebar-offcanvas">
        <!-- sidebar: style can be found in sidebar-->
        <section class="sidebar">
            <div id="menu" role="navigation">
                <div class="nav_profile">
                    <div class="media profile-left">
                        <div class="content-profile">

                            <h4 class="media-heading">
                                ART GALLERY
                            </h4>
                        </div>
                    </div>
                </div>
                <ul class="navigation">
                    <li class="menu-dropdown">
                        <a href="javascript:void(0)">
                            <i class="menu-icon ti-gallery"></i>
                            <span class="mm-text">Browse</span>
                            <span class="fa arrow"></span>
                        </a>
                        <ul class="sub-menu">
                            <li>
                                <a href="javascript:void(0)">
                                    <i class="fa fa-fw ti-receipt"></i> Styles
                                    <span class="fa arrow"></span>
                                </a>
                                <ul class="sub-menu form-submenu">
                                    <router-link tag="li" to="/user/form-elements" exact>
                                        <a class="logo"><i class="menu-icon ti-cup"></i><span class="mm-text">Paintings</span></a>
                                    </router-link>
                                    <router-link tag="li" to="/user/realtime_form" exact>
                                        <a class="logo"><i class="menu-icon ti-write"></i><span class="mm-text">Photography</span></a>
                                    </router-link>
                                    <router-link tag="li" to="/user/form-validations" exact>
                                        <a class="logo"><i class="menu-icon ti-alert"></i><span class="mm-text">Drawings</span></a>
                                    </router-link>
                                    <router-link tag="li" to="/user/form_layouts" exact>
                                        <a class="logo"><i class="menu-icon ti-layout-width-default"></i><span class="mm-text">Sculptures</span></a>
                                    </router-link>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    <i class="fa fa-fw ti-clipboard"></i> Exhibits
                                    <span class="fa arrow"></span>
                                </a>
                                <ul class="sub-menu form-submenu">
                                    <router-link tag="li" to="/user/form_editors" exact>
                                        <a class="logo"><i class="menu-icon ti-pencil"></i><span class="mm-text">Now Showing</span></a>
                                    </router-link>
                                    <router-link tag="li" to="/user/form_wizards" exact>
                                        <a class="logo"><i class="menu-icon ti-settings"></i><span class="mm-text">Coming Soon</span></a>
                                    </router-link>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <!-- / .navigation -->
            </div>
            <!-- menu -->
        </section>
        <!-- /.sidebar -->
    </aside>
</template>
<script>
export default {
    name: "left-side"
}
</script>
