import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
// import { GaleriaComponent } from './pages/menu/galeria.component';
import { SobreNosotrosComponent } from './pages/sobrenosotros/sobre-nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MenupageComponent } from './pages/menupage/menupage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    // GaleriaComponent,
    SobreNosotrosComponent,
    ContactoComponent,
    MenupageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
