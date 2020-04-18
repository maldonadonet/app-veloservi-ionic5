import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'carrito', loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)},
  { path: 'contacto', loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)},
  { path: 'detalle-pedidos',loadChildren: () => import('./pages/detalle-pedidos/detalle-pedidos.module').then( m => m.DetallePedidosPageModule)},
  { path: 'login',loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)},
  { path: 'nosotros',loadChildren: () => import('./pages/nosotros/nosotros.module').then( m => m.NosotrosPageModule)},
  { path: 'pedidos',loadChildren: () => import('./pages/pedidos/pedidos.module').then( m => m.PedidosPageModule)},
  { path: 'politicas',loadChildren: () => import('./pages/politicas/politicas.module').then( m => m.PoliticasPageModule)},
  { path: 'productos',loadChildren: () => import('./pages/productos/productos.module').then( m => m.ProductosPageModule)},
  { path: 'registro',loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)},
  { path: 'welcome',loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
