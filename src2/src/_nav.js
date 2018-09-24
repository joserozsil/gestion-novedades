export default {
  items: [
    {
      title: true,
      name: 'Inicio',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      },
      role: ['ALL']
    },
    {
      name: 'Inicio',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'danger',
        text: 'Nuevo'
      },
      role: ['ALL']
    },
    {
      name: 'Cronologías',
      url: '/cronologias/consultar',
      icon: 'icon-speedometer',
      role: ['ALL']
    },
    {
      name: 'Recepción',
      url: '/base',
      icon: 'icon-puzzle',
      role: ['ADMINISTRADOR', 'RECEPCION'],
      children: [
        {
          name: 'Consultar',
          url: '/recepcion/consultar',
          icon: 'icon-puzzle'
        },
        {
          name: 'Agregar Nuevo',
          url: '/recepcion/crear',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Balística',
      url: '/base',
      icon: 'icon-puzzle',
      role: ['ADMINISTRADOR', 'OPERADOR_BALISTICA'],
      children: [
        {
          name: 'Consultar',
          url: '/balistica/armas-de-fuego',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Laboratorio',
      url: '/base',
      icon: 'icon-puzzle',
      role: ['ADMINISTRADOR', 'OPERADOR_LABORATORIO'],
      children: [
        {
          name: 'Consultar',
          url: '/laboratorio/prendas-de-vestir',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Reconstrucción',
      url: '/base',
      icon: 'icon-puzzle',
      role: ['ADMINISTRADOR', 'OPERADOR_HECHOS'],
      children: [
        {
          name: 'Consultar',
          url: '/reconstruccion-de-hechos/consultar',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Usuarios',
      url: '/base',
      icon: 'icon-puzzle',
      role: ['ADMINISTRADOR'],
      children: [
        {
          name: 'Consultar',
          url: '/usuarios/consultar',
          icon: 'icon-puzzle'
        },
        {
          name: 'Agregar Nuevo',
          url: '/usuarios/crear',
          icon: 'icon-puzzle'
        },
        {
          name: 'Historial de Acceso',
          url: '/usuarios/historial-acceso',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Seguridad',
      url: '/base',
      icon: 'icon-puzzle',
      role: ['ADMINISTRADOR'],
      children: [
        {
          name: 'Alertas',
          url: '/seguridad/historial-de-alertas',
          icon: 'icon-puzzle'
        },
        {
          name: 'Historial de Acciones',
          url: '/seguridad/historial-de-acciones',
          icon: 'icon-puzzle'
        }
      ]
    },
    /*
    {
      title: true,
      name: 'Theme',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Colors',
      url: '/theme/colors',
      icon: 'icon-drop'
    },
    {
      name: 'Typography',
      url: '/theme/typography',
      icon: 'icon-pencil'
    },
    {
      title: true,
      name: 'Components',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Base',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'icon-puzzle'
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'icon-puzzle'
        },
        {
          name: 'Forms',
          url: '/base/forms',
          icon: 'icon-puzzle'
        },
        {
          name: 'Jumbotrons',
          url: '/base/jumbotrons',
          icon: 'icon-puzzle'
        },
        {
          name: 'List Groups',
          url: '/base/list-groups',
          icon: 'icon-puzzle'
        },
        {
          name: 'Navs',
          url: '/base/navs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Navbars',
          url: '/base/navbars',
          icon: 'icon-puzzle'
        },
        {
          name: 'Paginations',
          url: '/base/paginations',
          icon: 'icon-puzzle'
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'icon-puzzle'
        },
        {
          name: 'Progress Bars',
          url: '/base/progress-bars',
          icon: 'icon-puzzle'
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tables',
          url: '/base/tables',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabs',
          url: '/base/tabs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/standard-buttons',
          icon: 'icon-cursor'
        },
        {
          name: 'Button Dropdowns',
          url: '/buttons/dropdowns',
          icon: 'icon-cursor'
        },
        {
          name: 'Button Groups',
          url: '/buttons/button-groups',
          icon: 'icon-cursor'
        },
        {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor'
        }
      ]
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW'
          }
        },
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'icon-star'
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell'
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell'
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell'
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/pages/iniciar-sesion',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/pages/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/pages/500',
          icon: 'icon-star'
        }
      ]
    }*/
  ]
}
