<template>
    <header class="header">
        <nav class="navbar navbar-fixed-top" role="navigation">
            <router-link to="/" class="logo"><img src="./../../../assets/img/logo.png" alt="logo" /></router-link>
            <!-- Header Navbar: style can be found in header-->
            <!-- Sidebar toggle button-->
            <div>
                <a href="javascript:void(0)" class="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button" @click="toggle_left"> <i class="fa fa-fw ti-menu"></i>
                </a>
            </div>

            <div class="navbar-right">
                <ul class="nav navbar-nav">    
                    <!-- User Account: style can be found in dropdown-->
                    <li class="dropdown user user-menu">
                        <a href="#" class="padding-user">
                            <div class="riot">
                                <div class="pull-right">
                                    <router-link to="/login" exact>
                                        <span style="color: white;">Log In</span><i style="color: white;" class="fa fa-fw ti-shift-right"></i>
                                    </router-link>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    name: "header",
    methods: {
        //Enable sidebar toggle
        toggle_left() {
            //If window is small enough, enable sidebar push menu
            if ($(window).width() <= 992) {
                $('.row-offcanvas').toggleClass('active').toggleClass("relative");
                $('.left-side').removeClass("collapse-left");
                $(".right-side").removeClass("strech");
            } else {
                //Else, enable content streching
                $('.left-side').toggleClass("collapse-left");
                $(".right-side").toggleClass("strech");
            }
        },
        toggle_right() {
            switch (true) {
                // Close right panel
                case $("body").hasClass("sidebar-right-opened"):
                    {
                        $("body").removeClass("sidebar-right-opened");
                        if ($("body").hasClass("boxed")) {
                            $('#right').css('right', '-270px');
                        }
                        break;
                    }
                default:
                    // Open right panel
                    {
                        $("body").addClass("sidebar-right-opened");
                        this.adjust_boxright();
                        $('.navbar-nav>.dropdown').removeClass("open");
                    }
            }
        },
        adjust_boxright() {
            if ($('body').hasClass('boxed') && $("body").hasClass("sidebar-right-opened")) {
                var window_w = $(window).width();
                var body_w = $('body').width();
                var margin_right = (window_w - body_w) / 2;
                $('#right').css('right', margin_right);
            }
        }
    }
}
</script>