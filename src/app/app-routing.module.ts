import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosotrosComponent } from './pages/sobrenosotros/sobre-nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
// import { GaleriaComponent } from './pages/menu/galeria.component';
import { MenupageComponent } from './pages/menupage/menupage.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'sobrenosotros',component:SobreNosotrosComponent},
  {path:'contacto',component:ContactoComponent},
  {path:':id',component:MenupageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
