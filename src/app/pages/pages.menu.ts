export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Home',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: 'general.menu.chartis_statics',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'product',
            data: {
              menu: {
                title: 'general.menu.chartist_client',
              }
            }
          },
          {
            path: 'provider',
            data: {
              menu: {
                title: 'general.menu.chartist_provider',
              }
            }
          },
          {
            path: 'customer',
            data: {
              menu: {
                title: 'general.menu.chartist_product',
              }
            }
          },
          {
            path: 'sale',
            data: {
              menu: {
                title: 'general.menu.chartist_sale',
              }
            }
          },
        ]
      }
    ]
  }
]
