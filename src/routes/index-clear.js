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
        component: resolve => require(['./../components/index.vue'], resolve),
        meta: {
            title: "Dashboard",
            breadcrumb: `<li><a href="/"><i class="ti-home"></i> Dashboard 1</a></li>`
        }
    }, {
        path: 'index2',
        component: resolve => require(['./../components/index2.vue'], resolve),
        meta: {
            title: "Dashboard2",
            breadcrumb: `<li><a href="#/index2"><i class="ti-home"></i> Dashboard 2</a></li>`
        }
    }, {
        path: 'form-elements',
        component: resolve => require(['./../components/form-elements.vue'], resolve),
        meta: {
            title: "Form Elements",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Forms</a></li><li><a>Features</a></li></li><li><a href="#/user/form-elements">Form Elements</a></li>`
        }
    }, {
        path: 'form-validations',
        component: resolve => require(['./../components/form-validations.vue'], resolve),
        meta: {
            title: "Form Validations",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Forms</a></li><li><a>Features</a></li></li><li><a href="#/user/form-validations">Form Validations</a></li>`
        }
    }, {
        path: 'form_layouts',
        component: resolve => require(['./../components/form-layouts.vue'], resolve),
        meta: {
            title: "Form Layouts",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Forms</a></li><li><a>Features</a></li></li><li><a href="#/user/form_layouts">Form Layouts</a></li>`
        }
    }, {
        path: 'complex_forms',
        component: resolve => require(['./../components/complex_forms.vue'], resolve),
        meta: {
            title: "Complex Forms",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Forms</a></li><li><a>Features</a></li></li><li><a href="#/user/complex_forms">Complex Forms</a></li>`
        }
    }, {
        path: 'realtime_form',
        component: resolve => require(['./../components/realtime_form.vue'], resolve),
        meta: {
            title: "Realtime Forms",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Forms</a></li><li><a>Features</a></li></li><li><a href="#/user/realtime_form">Realtime Forms</a></li>`
        }
    }, {
        path: 'radio_check',
        component: resolve => require(['./../components/radio_checkboxes.vue'], resolve),
        meta: {
            title: "Radio and Checkboxes",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Forms</a></li><li><a>Components</a></li></li><li><a href="#/user/radio_check">Radio and Checkboxes</a></li>`
        }
    }, {
        path: 'form_editors',
        component: resolve => require(['./../components/form_editors.vue'], resolve),
        meta: {
            title: "Form Editors",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Forms</a></li><li><a>Components</a></li></li><li><a href="#/user/form_editors">Form Editors</a></li>`
        }
    }, {
        path: 'form_wizards',
        component: resolve => require(['./../components/form_wizards.vue'], resolve),
        meta: {
            title: "Form Wizards",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Forms</a></li><li><a>Components</a></li></li><li><a href="#/user/form_wizards">Form Wizards</a></li>`
        }
    }, {
        path: 'dropdowns',
        component: resolve => require(['./../components/dropdowns.vue'], resolve),
        meta: {
            title: "Dropdowns",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Forms</a></li><li><a>Components</a></li></li><li><a href="#/user/dropdowns">Dropdowns</a></li>`
        }
    }, {
        path: 'date_pickers',
        component: resolve => require(['./../components/date_pickers.vue'], resolve),
        meta: {
            title: "Date Pickers",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Forms</a></li><li><a>Components</a></li></li><li><a href="#/user/date_pickers">Date Pickers</a></li>`
        }
    }, {
        path: 'advanced_date_pickers',
        component: resolve => require(['./../components/advanced_date_pickers.vue'], resolve),
        meta: {
            title: "Advanced Date Pickers",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Forms</a></li><li><a>Components</a></li></li><li><a href="#/user/advanced_date_pickers">Advanced Date Pickers</a></li>`
        }
    }, {
        path: 'vue_multiselect',
        component: resolve => require(['./../components/vue_multiselect.vue'], resolve),
        meta: {
            title: "Vue Multiselect",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Forms</a></li><li><a>Components</a></li></li><li><a href="#/user/vue_multiselect">Vue Multiselect</a></li>`
        }
    }, {
        path: 'vue_slider',
        component: resolve => require(['./../components/vue_slider.vue'], resolve),
        meta: {
            title: "Vue Slider",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Forms</a></li><li><a>Components</a></li></li><li><a href="#/user/vue_slider">Vue Slider</a></li>`
        }
    }, {
        path: 'general_components',
        component: resolve => require(['./../components/general_components.vue'], resolve),
        meta: {
            title: "General Components",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Features</a></li></li><li><a href="#/user/general_components">General Components</a></li>`
        }
    }, {
        path: 'buttons',
        component: resolve => require(['./../components/buttons.vue'], resolve),
        meta: {
            title: "Buttons",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Features</a></li></li><li><a href="#/user/buttons">Buttons</a></li>`
        }
    }, {
        path: 'advanced_modals',
        component: resolve => require(['./../components/advanced_modals.vue'], resolve),
        meta: {
            title: "Advanced Modals",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Features</a></li></li><li><a href="#/user/advanced_modals">Advanced Modals</a></li>`
        }
    }, {
        path: 'tabs_accordions',
        component: resolve => require(['./../components/tabs_accordions.vue'], resolve),
        meta: {
            title: "Tabs Accordions",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Features</a></li></li><li><a href="#/user/tabs_accordions">Tabs Accordions</a></li>`
        }
    }, {
        path: 'font_icons',
        component: resolve => require(['./../components/font_icons.vue'], resolve),
        meta: {
            title: "Font Icons",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Features</a></li></li><li><a href="#/user/font_icons">Font Icons</a></li>`
        }
    }, {
        path: 'themify_icons',
        component: resolve => require(['./../components/themify_icons.vue'], resolve),
        meta: {
            title: "Themify Icons",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Features</a></li></li><li><a href="#/user/themify_icons">Themify Icons</a></li>`
        }
    }, {
        path: 'fontawesome_icons',
        component: resolve => require(['./../components/fontawesome_icons.vue'], resolve),
        meta: {
            title: "Fontawesome Icons",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Features</a></li></li><li><a href="#/user/fontawesome_icons">Fontawesome Icons</a></li>`
        }
    }, {
        path: 'glyphicons',
        component: resolve => require(['./../components/glyphicons.vue'], resolve),
        meta: {
            title: "Glyphicons",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Features</a></li></li><li><a href="#/user/glyphicons">Glyphicons</a></li>`
        }
    }, {
        path: 'simple_line_icons',
        component: resolve => require(['./../components/simple_line_icons.vue'], resolve),
        meta: {
            title: "Simple Line Icons",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Features</a></li></li><li><a href="#/user/simple_line_icons">Simple Line Icons</a></li>`
        }
    }, {
        path: 'timeline',
        component: resolve => require(['./../components/timeline.vue'], resolve),
        meta: {
            title: "Timeline",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Features</a></li></li><li><a href="#/user/timeline">Timeline</a></li>`
        }
    }, {
        path: 'pickers',
        component: resolve => require(['./../components/pickers.vue'], resolve),
        meta: {
            title: "Pickers",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Components</a></li></li><li><a href="#/user/pickers">Pickers</a></li>`
        }
    }, {
        path: 'grid_layout',
        component: resolve => require(['./../components/grid_layout.vue'], resolve),
        meta: {
            title: "Grid Layout",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Components</a></li></li><li><a href="#/user/grid_layout">Grid Layout</a></li>`
        }
    }, {
        path: 'tags_input',
        component: resolve => require(['./../components/tags_input.vue'], resolve),
        meta: {
            title: "Tags Input",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Components</a></li></li><li><a href="#/user/tags_input">Tags Input</a></li>`
        }
    }, {
        path: 'nestable_list',
        component: resolve => require(['./../components/nestable_list.vue'], resolve),
        meta: {
            title: "Nestable List",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Components</a></li></li><li><a href="#/user/nestable_list">Nestable List</a></li>`
        }
    }, {
        path: 'sweet_alert',
        component: resolve => require(['./../components/sweet_alert.vue'], resolve),
        meta: {
            title: "Sweet Alert",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Components</a></li></li><li><a href="#/user/sweet_alert">Sweet Alert</a></li>`
        }
    }, {
        path: 'toastr_notifications',
        component: resolve => require(['./../components/toastr_notifications.vue'], resolve),
        meta: {
            title: "Toastr Notifications",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Components</a></li></li><li><a href="#/user/toastr_notifications">Toastr Notifications</a></li>`
        }
    }, {
        path: 'draggable_portlets',
        component: resolve => require(['./../components/draggable_portlets.vue'], resolve),
        meta: {
            title: "Draggable Portlets",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Components</a></li></li><li><a href="#/user/draggable_portlets">Draggable Portlets</a></li>`
        }
    }, {
        path: 'transitions',
        component: resolve => require(['./../components/transitions.vue'], resolve),
        meta: {
            title: "Transitions",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>UI Components</a></li></li><li><a href="#/user/transitions">Transitions</a></li>`
        }
    }, {
        path: 'widgets1',
        component: resolve => require(['./../components/widgets1.vue'], resolve),
        meta: {
            title: "Widgets",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a href="#/user/widgets1">Widgets</a></li>`
        }
    }, {
        path: 'simple_tables',
        component: resolve => require(['./../components/simple_tables.vue'], resolve),
        meta: {
            title: "Simple Tables",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Datatables</a></li></li><li><a href="#/user/simple_tables">Simple Tables</a></li>`
        }
    }, {
        path: 'datatables',
        component: resolve => require(['./../components/datatables.vue'], resolve),
        meta: {
            title: "Data Tables",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Datatables</a></li></li><li><a href="#/user/datatables">Data Tables</a></li>`
        }
    }, {
        path: 'advanced_datatables',
        component: resolve => require(['./../components/advanced_datatables.vue'], resolve),
        meta: {
            title: "Advanced Data Tables",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Datatables</a></li></li><li><a href="#/user/advanced_datatables">Advanced Data Tables</a></li>`
        }
    }, {
        path: 'responsive_datatables',
        component: resolve => require(['./../components/responsive_datatables.vue'], resolve),
        meta: {
            title: "Responsive Data Tables",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Datatables</a></li></li><li><a href="#/user/responsive_datatables">Responsive Data Tables</a></li>`
        }
    }, {
        path: 'bootstrap_tables',
        component: resolve => require(['./../components/bootstrap_tables.vue'], resolve),
        meta: {
            title: "Bootstrap Tables",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Datatables</a></li></li><li><a href="#/user/bootstrap_tables">Bootstrap Tables</a></li>`
        }
    }, {
        path: 'flot_charts',
        component: resolve => require(['./../components/flot_charts.vue'], resolve),
        meta: {
            title: "Flot Charts",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Charts</a></li></li><li><a href="#/user/flot_charts">Flot Charts</a></li>`
        }
    }, {
        path: 'nvd3_charts',
        component: resolve => require(['./../components/nvd3_charts.vue'], resolve),
        meta: {
            title: "NVD3 Charts",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Charts</a></li></li><li><a href="#/user/nvd3_charts">NVD3 Charts</a></li>`
        }
    }, {
        path: 'circle_sliders',
        component: resolve => require(['./../components/circle_sliders.vue'], resolve),
        meta: {
            title: "Circle Sliders",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Charts</a></li></li><li><a href="#/user/circle_sliders">Circle Sliders</a></li>`
        }
    }, {
        path: 'chartjs',
        component: resolve => require(['./../components/chartjs.vue'], resolve),
        meta: {
            title: "Chartjs Charts",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Charts</a></li></li><li><a href="#/user/chartjs">Chartjs Charts</a></li>`
        }
    }, {
        path: 'chartist',
        component: resolve => require(['./../components/chartist.vue'], resolve),
        meta: {
            title: "Chartist Charts",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Charts</a></li></li><li><a href="#/user/chartist">Chartist Charts</a></li>`
        }
    }, {
        path: 'calendar',
        component: resolve => require(['./../components/calendar.vue'], resolve),
        meta: {
            title: "Calendar",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Charts</a></li></li><li><a href="#/user/calendar">Calendar</a></li>`
        }
    }, {
        path: 'calendar2',
        component: resolve => require(['./../components/calendar2.vue'], resolve),
        meta: {
            title: "Advanced Calendar",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Charts</a></li></li><li><a href="#/user/calendar2">Advanced Calendar</a></li>`
        }
    }, {
        path: 'masonry_gallery',
        component: resolve => require(['./../components/masonry_gallery.vue'], resolve),
        meta: {
            title: "Masonry Gallery",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Gallery</a></li></li><li><a href="#/user/masonry_gallery">Masonry Gallery</a></li>`
        }
    }, {
        path: 'dropify',
        component: resolve => require(['./../components/dropify.vue'], resolve),
        meta: {
            title: "Dropify",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Gallery</a></li></li><li><a href="#/user/dropify">Dropify</a></li>`
        }
    }, {
        path: 'image_hover',
        component: resolve => require(['./../components/image_hover.vue'], resolve),
        meta: {
            title: "Image Hover",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Gallery</a></li></li><li><a href="#/user/image_hover">Image Hover</a></li>`
        }
    }, {
        path: 'image_filter',
        component: resolve => require(['./../components/image_filter.vue'], resolve),
        meta: {
            title: "Image Filter",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Gallery</a></li></li><li><a href="#/user/image_filter">Image Filter</a></li>`
        }
    }, {
        path: 'image_magnifier',
        component: resolve => require(['./../components/image_magnifier.vue'], resolve),
        meta: {
            title: "Image Magnifier",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Gallery</a></li></li><li><a href="#/user/image_magnifier">Image Magnifier</a></li>`
        }
    }, {
        path: 'gmaps',
        component: resolve => require(['./../components/gmaps.vue'], resolve),
        meta: {
            title: "Google Maps",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Maps</a></li></li><li><a href="#/user/gmaps">Google Maps</a></li>`
        }
    }, {
        path: 'vector_maps',
        component: resolve => require(['./../components/vector_maps.vue'], resolve),
        meta: {
            title: "Vector Maps",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Maps</a></li></li><li><a href="#/user/vector_maps">Vector Maps</a></li>`
        }
    }, {
        path: 'users_list',
        component: resolve => require(['./../components/users_list.vue'], resolve),
        meta: {
            title: "Users List",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Users</a></li></li><li><a href="#/user/users_list">Users List</a></li>`
        }
    }, {
        path: 'addnew_user',
        component: resolve => require(['./../components/addnew_user.vue'], resolve),
        meta: {
            title: "Add New User",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Users</a></li></li><li><a href="#/user/addnew_user">Add New User</a></li>`
        }
    }, {
        path: 'edit_user',
        component: resolve => require(['./../components/edit_user.vue'], resolve),
        meta: {
            title: "Edit User",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Users</a></li></li><li><a href="#/user/edit_user">Edit User</a></li>`
        }
    }, {
        path: 'user_profile',
        component: resolve => require(['./../components/user_profile.vue'], resolve),
        meta: {
            title: "User Profile",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Users</a></li></li><li><a href="#/user/user_profile">User Profile</a></li>`
        }
    }, {
        path: 'deleted_users',
        component: resolve => require(['./../components/deleted_users.vue'], resolve),
        meta: {
            title: "Deleted Users",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Users</a></li></li><li><a href="#/user/deleted_users">Deleted Users</a></li>`
        }
    }, {
        path: 'blank',
        component: resolve => require(['./../components/blank.vue'], resolve),
        meta: {
            title: "Blank",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Pages</a></li></li><li><a href="#/user/blank">Blank</a></li>`
        }
    }, {
        path: 'invoice',
        component: resolve => require(['./../components/invoice.vue'], resolve),
        meta: {
            title: "Invoice",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Pages</a></li></li><li><a href="#/user/invoice">Invoice</a></li>`
        }
    }, {
        path: 'boxed',
        component: resolve => require(['./../components/boxed.vue'], resolve),
        meta: {
            title: "Boxed",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Layouts</a></li></li><li><a href="#/user/boxed">Boxed</a></li>`
        }
    }, {
        path: 'fixed_menu',
        component: resolve => require(['./../components/fixed_menu.vue'], resolve),
        meta: {
            title: "Fixed Menu",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Layouts</a></li></li><li><a href="#/user/fixed_menu">Fixed Menu</a></li>`
        }
    }, {
        path: 'movable_header',
        component: resolve => require(['./../components/movable_header.vue'], resolve),
        meta: {
            title: "Movable Header",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Layouts</a></li></li><li><a href="#/user/movable_header">Movable Header</a></li>`
        }
    }, {
        path: 'boxed_movableheader',
        component: resolve => require(['./../components/boxed_movableheader.vue'], resolve),
        meta: {
            title: "Boxed & Movable Header",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Layouts</a></li></li><li><a href="#/user/boxed_movableheader">Boxed & Movable Header</a></li>`
        }
    }, {
        path: 'menubar_fold',
        component: resolve => require(['./../components/menubar_fold.vue'], resolve),
        meta: {
            title: "Menubar Fold",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Layouts</a></li></li><li><a href="#/user/menubar_fold">Menubar Fold</a></li>`
        }
    }, {
        path: 'mini_sidebar',
        component: resolve => require(['./../components/mini_sidebar.vue'], resolve),
        meta: {
            title: "Mini Sidebar",
            breadcrumb: `<li><a href="index.html"><i class="ti-home"></i> Dashboard</a></li><li><a>Layouts</a></li></li><li><a href="#/user/mini_sidebar">Mini Sidebar</a></li>`
        }
    }]
}, {
    path: '/500',
    component: resolve => require(['./../components/500.vue'], resolve),
    meta: {
        title: "500",
        breadcrumb: ``
    }
}, {
    path: '/login',
    component: resolve => require(['./../components/login.vue'], resolve),
    meta: {
        title: "Login",
        breadcrumb: ``
    }
}, {
    path: '/register',
    component: resolve => require(['./../components/register.vue'], resolve),
    meta: {
        title: "Register",
        breadcrumb: ``
    }
}, {
    path: '/lockscreen',
    component: resolve => require(['./../components/lockscreen.vue'], resolve),
    meta: {
        title: "Lockscreen",
        breadcrumb: ``
    }
}, {
    path: '/reset_password',
    component: resolve => require(['./../components/reset_pass.vue'], resolve),
    meta: {
        title: "Reset Password",
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
    mode: 'history',
    base: __dirname,
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
    // $(".right-side").removeClass("strech");
    setTimeout(function() {
        $("#menu").find("li.active").parents("li").addClass("active");
        $("#menu .sub-menu").removeClass("hidden");
        $("#menu").metisMenu();
        $('.preloader img').fadeOut("slow");
        $('.preloader').fadeOut("slow");
    }, 0);
});

export default router;