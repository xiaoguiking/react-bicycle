export const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        isPublic: true,
        title: '首页'
      },
      children: [
        {
          path: '/welcome',
          name: 'welcome',
          component: Welcome,
          meta: {
            title: '欢迎页'
          }
        },
        {
          path: '/system/user',
          name: 'user',
          component: User,
          meta: {
            title: '用户管理'
          }
        },
        {
          path: '/system/menu',
          name: 'menu',
          component: Menu,
          meta: {
            title: '菜单管理'
          }
        },
        {
          path: '/system/role',
          name: 'role',
          component: Role,
          meta: {
            title: '角色管理'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      meta: {
        isPublic: true
      }
    }
  ]