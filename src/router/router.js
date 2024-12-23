import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Layout from '@/views/layout/Layout.vue'

/*
路由说明：
    新增的路由可挂载到路由'/'的子路由下，也可直接新增路由项。
    带有子路由的路由项默认在侧边栏菜单呈现嵌套结构，支持多重路由嵌套。
    name：应该与路由对应的组件名称一致，否则KeepAlive无法正常工作
    meta{
        title:侧边栏菜单名
        icon：显示在侧边栏的图标（本项目使用阿里图标库的css图标）
        limit：权限控制，列表项为能访问到当前路由的角色，与当前角色权限不符的路由不会显示在侧边栏菜单
        fixCache：是否固定缓存该路由对应的组件，选择此项的路由同时会固定在tagViews不可删除
        cache：是否缓存该路由对应的组件，可在tagViews中清除
        isLink：表明该路由对应外链
        hideInMenu:决定当前路由是否在侧边栏菜单隐藏
    }
*/ 

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/Login.vue'),
        meta:{ hideInMenu:true }
    },
    {
        path: '/',
        component: Layout,
        redirect:'/homepage',
        meta:{ hideInMenu:true },
        children:[
            {
                path:'homepage',
                name:'HomePage',
                component : () => import( '@/views/userpages/HomePage.vue' ),
                meta:{ title:'首页' , icon:"icon-shouye" , limit:["manager","trainer","employee"] , fixCache:true }
            },
            {
                path:'userinfo',
                name:'userinfoMenu',
                redirect:'/userinfo/account',
                meta:{ title:'用户信息' , icon:"icon-user-circle" , limit:["manager","trainer","employee"] },
                children:[
                    {
                        path:'account',
                        name:'UserInfo',
                        component : () => import( '@/views/userpages/UserInfo.vue' ),
                        meta:{ title:'查看个人信息' , icon:"" , limit:["manager","trainer","employee"] },
                    },
                    {
                        path:'update-profile',
                        name:'UpdateProfile',
                        component : () => import( '@/views/userpages/UpdateProfile.vue' ),
                        meta:{ title:'修改个人信息' , icon:"" , limit:["manager","trainer","employee"] , cache:true },
                    },
                    {
                        path:'update-password',
                        name:'UpdatePassword',
                        component : () => import( '@/views/userpages/UpdatePassword.vue' ),
                        meta:{ title:'修改密码' , icon:"" , limit:["manager","trainer","employee"] , cache:true },
                    }
                ]
            },
            {
                path:'classroom',
                name:'classroomMenu',
                redirect:'/classroom/classroom-query',
                meta:{ title:'教室' , icon:"icon-jiaoshi" , limit:[] },
                children:[
                    {
                        path:'classroom-query',
                        name:'ClassRoom',
                        component : () => import( '@/views/userpages/ClassRoom.vue' ),
                        meta:{ title:'教室查询' , icon:"" , limit:["manager","trainer","employee"] , cache:true },
                    },
                    {
                        path:'arrange-classroom',
                        name:'ArrangeClassroom',
                        component : () => import( '@/views/userpages/ArrangeClassroom.vue' ),
                        meta:{ title:'预约教室' , icon:"" , limit:["manager","trainer","employee"] },
                    },
                ]
            },
            {
                path:'course-select',
                name:'course-select',
                redirect:'/course-select/selected-course',
                meta:{ title:'课程' , icon:"icon-kechengguanli" , limit:["employee"] },
                children:[
                    {
                        path:'selected-course',
                        name:'SelectedCourse',
                        component : () => import( '@/views/userpages/student/SelectedCourse.vue' ),
                        meta:{ title:'已选课程' , icon:"" , limit:["manager","employee"] },
                    },
                    {
                        path:'select-course',
                        name:'SelectCourse',
                        component : () => import( '@/views/userpages/student/SelectCourse.vue' ),
                        meta:{ title:'选择课程' , icon:"" , limit:["manager","employee"] },
                    },
                ]
            },
            {
                path:'course-publish',
                name:'course-publish',
                redirect:'/course-publish/published-course',
                meta:{ title:'课程' , icon:"icon-kechengguanli" , limit:["trainer"] },
                children:[
                    {
                        path:'published-course',
                        name:'PublishedCourse',
                        component : () => import( '@/views/userpages/teacher/CoursePublish.vue' ),
                        meta:{ title:'已发布的课程' , icon:"" , limit:["manager","trainer"] },
                    },
                    {
                        path:'publish-course',
                        name:'PublishCourse',
                        component : () => import( '@/views/userpages/teacher/AddCourse.vue' ),
                        meta:{ title:'发布新课程' , icon:"" , limit:["manager","trainer"] },
                    },
                ]
            },
            {
                path:'timetable',
                name:'UserTimeTable',
                component : () => import( '@/views/userpages/student/UserTimeTable.vue' ),
                meta:{ title:'课程表' , icon:"icon-calendar-alt" , limit:[] , cache:true }
            },
            {
                path:'studentinfo',
                name:'StudentInfo',
                component : () => import( '@/views/userpages/teacher/StudentInfo.vue' ),
                meta:{ title:'学生信息' , icon:"icon-xuesheng" , limit:["trainer"] , cache:true }
            },
            {
                path:'teaching',
                name:'Teaching',
                component : () => import( '@/views/userpages/teacher/Teaching.vue' ),
                meta:{ title:'教学安排' , icon:"icon-calendar-alt" , limit:[] , cache:true }
            },
            {
                path:'userlist',
                name:'UserList',
                redirect:'/userlist',
                meta:{ title:'用户管理' , icon:"icon-user-circle" , limit:["manager"] },
                children:[
                    {
                        path:'register',
                        name:'Register',
                        component : () => import( '@/views/userpages/manager/Register.vue' ),
                        meta:{ title:'添加用户' , icon:"" , limit:["manager"] },
                    },
                    {
                        path:'users',
                        name:'Users',
                        component : () => import( '@/views/userpages/manager/UserList.vue' ),
                        meta:{ title:'用户列表' , icon:"" , limit:["manager"] },
                    },
                ]
            },
        ]
    },
    {
        path: '/menu',
        name: 'menu',
        redirect:'/menu/menu1',
        component: Layout,
        meta:{ title:'menu' , icon:"icon-caidan" , limit:["admin"] },
        children:[
            {
                path:'menu1',
                name:'submenu1',
                component : () => import( '@/views/userpages/submenu_dome/submenu1' ),
                meta:{ title:'menu1' , icon:"icon-caidan" , limit:["admin"] },
                children:[
                    {
                        path:'menu1-1',
                        name:'submenu1-1',
                        component : () => import( '@/views/userpages/submenu_dome/submenu1-1' ),
                        meta:{ title:'menu1-1' , icon:"icon-caidan" , limit:["admin"] },
                    },
                    {
                        path:'menu1-2',
                        name:'submenu1-2',
                        component : () => import( '@/views/userpages/submenu_dome/submenu1-2' ),
                        meta:{ title:'menu1-2' , icon:"icon-caidan" , limit:["admin"] },
                    },
                ]
            },
            {
                path:'menu2',
                name:'submenu2',
                component : () => import( '@/views/userpages/submenu_dome/submenu2' ),
                meta:{ title:'menu2' , icon:"icon-caidan" , limit:["admin"] },
            },
        ]
    },
    {
        path:"/external-link",
        component: Layout,
        meta:{title:'外链' , icon:"icon-lianjie" , isLink:true , limit:["admin"]},
        children:[
            {
                path:"https://cn.vuejs.org/",
                meta:{title:'Vue' , icon:"" , isLink:true},
            },
            {
                path:"https://github.com/",
                meta:{title:'Github' , icon:"" , isLink:true},
            },
        ]
    },
    {
        path:"/error",
        component: Layout,
        meta:{title:'错误页面' , icon:"icon-caidan",limit:["admin"]},
        children:[
            {
                path:"404",
                name:"404",
                component : () => import( '@/views/error/404.vue' ),
                meta:{title:'404' , icon:"",limit:["admin"]},
            },
            {
                path:"401",
                name:"401",
                component : () => import( '@/views/error/401.vue' ),
                meta:{title:'401' , icon:"",limit:["admin"]},
            },
        ]
    },
    {
        path:"/404",
        component : () => import( '@/views/error/404.vue' ),
        meta:{ hideInMenu:true },
    },
    {
        path:"/401",
        component : () => import( '@/views/error/401.vue' ),
        meta:{ hideInMenu:true },
    },
    {
        path:"/:pathMatch(.*)*",
        redirect:"/404",
        meta:{ hideInMenu:true },
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router