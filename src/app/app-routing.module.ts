import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
 { path: '',redirectTo: 'productos',pathMatch: 'full' },
 { path: 'productos', component: ProductosComponent },
 { path: 'about', component: AboutComponent },
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
