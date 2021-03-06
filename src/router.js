import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import RouteInfo from './views/RouteInfo.vue'

Vue.use(Router)

/**
 * 自定义的路由元信息（注意配置了meta的路由才会显示到侧边栏）:
 * meta: {
 *   title: 'title',                  显示在侧边栏、面包屑中的名字
 *   icon: 'svg-name',                该页面在侧边栏中显示的图标
 *   hidden: 'true',                  此级路由是否出现在左侧菜单栏和面包屑中，默认为false
 *   role: ['super_admin','admin']    可访问该页面的权限数组，默认为空，所有用户可访问
 * }
 */

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/login',
            name: 'login',
            meta: {
                title: '登陆',
                hidden: true
            },
            component: () =>
                import( /* webpackChunkName: "login" */ './views/Login.vue')
        },
        {
            path: '/loginx',
            name: 'loginx',
            component: () => import('./views/Loginx.vue')
        },
        {
            path: '/',
            name: 'root',
            redirect: '/home',
            meta: {
                hidden: true,
            }
            //component: Home
        },
        {
            path: '/main',
            name: 'main',
            meta: {
                hidden: true
            },
            component: Main
        },
        {
            path: '/home',
            name: 'home',
            meta: {
                title: '首页',
                icon: 'el-icon-menu'
            },
            component: Main,
        },
        {
            path: '/sysmanage',
            name: 'sysmanage',
            meta: {
                title: '系统管理',
                icon: 'el-icon-setting',
                role: ['super_admin']
            },
            component: Main,
            children: [{
                    path: 'user',
                    name: 'user',
                    meta: {
                        title: '用户管理',
                        icon: 'el-icon-menu'
                    },
                    component: () =>
                        import('./views/user/UserTable.vue')
                },
                {
                    path: 'permission',
                    name: 'permission',
                    meta: {
                        title: '权限管理',
                        icon: 'el-icon-menu',
                        role: ['super_admin']
                    },
                    component: RouteInfo
                },
                {
                    path: 'role',
                    name: 'role',
                    meta: {
                        title: '角色管理',
                        icon: 'el-icon-share',
                    },
                    component: RouteInfo
                },
            ]
        },
        {
            path: '/test1',
            name: 'test1',
            meta: {
                title: '管理员账号',
                icon: 'el-icon-circle-plus-outline',
            },
            component: Main,
            children: [{
                    path: 'test1-1',
                    name: 'test1-1',
                    meta: {
                        title: '账号管理',
                        icon: 'el-icon-user',
                        // role: ['admin']
                    },
                    component: () =>
                        import('./views/guanli/guanliTable.vue')
                },
                {
                    path: 'test1-2',
                    name: 'test1-2',
                    meta: {
                        title: '测试1-2',
                        icon: 'el-icon-star-on'
                    },
                    component: RouteInfo
                },
            ]
        },

        {
            path: '/test2',
            name: 'test2',
            meta: {
                title: '资讯审核',
                icon: 'el-icon-postcard'
            },
            component: Main,
            children: [{
                    path: 'test2-1',
                    name: 'test2-1',
                    meta: {
                        title: '资讯审核管理',
                        icon: 'el-icon-tickets'
                    },
                    component: () =>
                        import('./views/news/newstable.vue')
                },
                {
                    path: 'test2-2',
                    name: 'test2-2',
                    meta: {
                        title: '测试2-2',
                        icon: 'el-icon-star-on'
                    },
                    component: RouteInfo,
                    children: [{
                            path: 'test2-2-1',
                            name: 'test2-2-1',
                            meta: {
                                title: '测试2-2-1',
                                icon: 'el-icon-phone'
                            },
                            component: RouteInfo
                        },
                        {
                            path: 'test2-2-2',
                            name: 'test2-2-2',
                            meta: {
                                title: '测试2-2-2',
                                icon: 'el-icon-star-on'
                            },
                            component: RouteInfo
                        }
                    ]
                },
            ]
        },
        {
            path: '/test3',
            name: 'test3',
            meta: {
                title: '寺庙审核',
                icon: 'el-icon-office-building'
            },
            component: Main,
            children: [{
                    path: 'test3-1',
                    name: 'test3-1',
                    meta: {
                        title: '寺庙审核列表',
                        icon: 'el-icon-film'
                    },
                    component: () =>
                        import('./views/simiao/simiaotable.vue')
                },
                {
                    path: 'test3-3',
                    name: 'test3-3',
                    meta: {
                        title: '寺庙列表',
                        icon: 'el-icon-files'
                    },
                    component: () =>
                        import('./views/simiaoliebiao/simiaolie.vue')
                },
                {
                    path: 'test3-2',
                    name: 'test3-2',
                    meta: {
                        title: '测试3-2',
                        icon: 'el-icon-star-on'
                    },
                    component: RouteInfo,
                    children: [{
                            path: 'test3-2-1',
                            name: 'test3-2-1',
                            meta: {
                                title: '测试3-2-1',
                                icon: 'el-icon-phone'
                            },
                            component: RouteInfo
                        },
                        {
                            path: 'test2-2-2',
                            name: 'test2-2-2',
                            meta: {
                                title: '测试2-2-2',
                                icon: 'el-icon-star-on'
                            },
                            component: RouteInfo
                        }
                    ]
                },
            ]
        },
        {
            path: '/401',
            name: 'error_401',
            meta: {
                hidden: true
            },
            component: () =>
                import('./views/401.vue')
        },
        {
            path: '*', //未匹配到的路径，返回404页面
            name: 'error_404',
            meta: {
                hidden: true
            },
            component: () =>
                import('./views/404.vue')
        },
        {
            path: '/moblie/login',
            name: 'moblie/login',
            component: () =>
                import('./views/moblie/login')
        },
        {
            path: '/homex',
            name: 'homex',
            component: () => import('./views/homex'),
            children: [{
                    path: '/homex',
                    redirect: '/homex/index'
                },
                {
                    path: '/homex/mine',
                    name: 'mine',
                    component: () => import('./views/moblie/substitute')
                },
                {
                    path: '/homex/ad',
                    name: 'ad',
                    component: () => import('./views/moblie/ad')
                },
                {
                    path: '/homex/index',
                    name: 'substitute',
                    component: () => import('./views/moblie/index')
                },
                {
                    path: '/homex/course',
                    name: 'course',
                    component: () => import('./views/moblie/ad')
                }
            ]
        }, {
            path: '/moblie/homev',
            name: 'moblie/namev',
            component: () => import('./views/moblie/homev')

        },

        {
            path: '/moblie/shouquan',
            name: 'moblie/shouquan',
            component: () =>
                import('./views/moblie/shouquan')
        },
        {
            path: '/moblie/substitute',
            name: 'moblie/substitute',
            component: () =>
                import('./views/moblie/substitute')
        },
        {
            path: '/moblie/publish',
            name: 'moblie/publish',
            component: () =>
                import('./views/moblie/publish')
        },
        {
            path: '/moblie/sengren',
            name: 'moblie/sengren',
            component: () =>
                import('./views/moblie/sengren')
        },
        {
            path: '/moblie/fabunews',
            name: 'moblie/fabunews',
            component: () =>
                import('./views/moblie/fabunews')
        },
        {
            path: '/moblie/fabushangpin',
            name: 'moblie/fabushangpin',
            component: () =>
                import('./views/moblie/fabushangpin')
        },
        {
            path: '/moblie/course',
            name: 'moblie/course',
            component: () =>
                import('./views/moblie/course')
        },
        {
            path: '/moblie/renlie',
            name: 'moblie/renlie',
            component: () =>
                import('./views/moblie/renlie')
        },
        {
            path: '/moblie/newslie',
            name: 'moblie/newslie',
            component: () =>
                import('./views/moblie/newslie')
        },
        {
            path: '/moblie/shanglie',
            name: 'moblie/shanglie',
            component: () =>
                import('./views/moblie/shanglie')
        },
        {
            path: '/moblie/test',
            name: 'moblie/test',
            component: () =>
                import('./views/moblie/test')
        },
        {
            path: '/moblie/dingwei',
            name: 'moblie/dingwei',
            component: () => import('./views/moblie/dingwei')
        }


    ]
})