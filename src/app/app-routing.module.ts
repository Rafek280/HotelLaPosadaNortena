import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosotrosComponent } from './pages/about/sobre-nosotros.component';
import { ContactoComponent } from './pages/contact/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GaleriaComponent } from './pages/menu/galeria.component';
import { MenupageComponent } from './pages/menupage/menupage.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'galeria',component:GaleriaComponent},
  {path:'galeria/:id',component:MenupageComponent},
  {path:'sobrenosotros',component:SobreNosotrosComponent},
  {path:'contacto',component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
