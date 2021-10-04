import { Route } from '@angular/router';
import { LayoutComponent } from '@shop-nx/layout';

export const shellWebRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('@shop-nx/products').then((m) => m.ProductsModule),
      },
      {
        path: 'users',

        loadChildren: () => import('@shop-nx/users').then((m) => m.UsersModule),
      },
      {
        path: '',
        pathMatch:'full',
        redirectTo: '/users',
      },
    ],
  },
];
