import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter)

var routes = [{
    path: '/',
    component: resolve => require(['./../layout.vue'], resolve),
    children: [{
        path: '',
        component: resolve => require(['./../components/CEN4010/home.vue'], resolve),
        meta: {
            title: "Gallery",
            breadcrumb: `<li>Home</li>`
        }
    }, {
        path: '/sign-in',
        component: resolve => require(['./../components/CEN4010/login.vue'], resolve),
        meta: {
            title: "Log In",
            breadcrumb: `<li><a href="/"><i class="ti-home"></i> Home</a></li>`
        }
    }, {
        path: '/register',
        component: resolve => require(['./../components/CEN4010/register.vue'], resolve),
        meta: {
            title: "Register",
            breadcrumb: `<li><a href="javascript:history.back()">
            <i class="ti-home"></i></a></li>`
        }
    }]
},{
    path: '/500',
    component: resolve => require(['./../components/500.vue'], resolve),
    meta: {
        title: "500",
        breadcrumb: ``
    }
}, {
    path: '*',
    component: resolve => require(['./../components/404.vue'], resolve),
    meta: {
        title: "404",
        breadcrumb: ``
    }
}];


const router = new VueRouter({
    routes,
    linkActiveClass: "active"
});

router.beforeEach((to, from, next) => {
    $('.preloader img').fadeIn("fast");
    $('.preloader').fadeIn("fast");
    $("#menu .sub-menu").addClass("hidden");
    $("#menu").find("ul,li").removeClass("active collapse in").css("height", "auto");
    $("#menu a").off("click");
    next()
})

router.afterEach((to, from) => {
    document.title = to.meta.title;
    //scroll to top when changing pages
    $('body,html').animate({
        scrollTop: 0
    }, 300);
    $('.row-offcanvas').removeClass('active').removeClass("relative");
    $('.left-side').removeClass("collapse-left");
    $(".right-side").removeClass("strech");
    setTimeout(function() {
        $("#menu").find("li.active").parents("li").addClass("active");
        $("#menu .sub-menu").removeClass("hidden");
        $("#menu").metisMenu();
        $('.preloader img').fadeOut("slow");
        $('.preloader').fadeOut("slow");
    }, 0);
});

export default router;
