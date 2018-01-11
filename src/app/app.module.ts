import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ServicesComponent} from '././services/services.component';
import { UserService } from '././services/user/user.service'
import { ApiService } from '././services/api/api.service'
import {HttpClientModule} from '@angular/common/http';
import { AuthorizationService } from '././services/user/authorization.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductenComponent } from './components/producten/producten.component';
import { ProductserviceService } from '././services/producten/productservice.service';
import { RegistrerenComponent } from './components/registreren/registreren.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { WinkelwagenComponent } from './components/winkelwagen/winkelwagen.component';
import { WinkelwagenserviceService } from './services/winkelwagen/winkelwagenservice.service';
import { GuardAdminGuard } from './guards/guard-admin.guard'
import { InventarisComponent } from './components/inventaris/inventaris.component';
import { ZoekFilterPipe } from './pipes/zoek-filter.pipe';
import { ToevoegenComponent } from './components/toevoegen/toevoegen.component';
import { KlantenComponent } from './components/klanten/klanten.component'


//import { ApiService } from './services/api.service';
//import { AuthorizationService } from './services/authorization.service';

// Create routes
const appRoutes:Routes = [
  { path:'login', component:LoginComponent },
  { path: 'producten', component:ProductenComponent},
  { path: 'registreren', component:RegistrerenComponent},
  { path: 'winkelwagen', component:WinkelwagenComponent },
  { path: 'inventaris', component:InventarisComponent, canActivate: [GuardAdminGuard] },
  { path: 'toevoegen', component:ToevoegenComponent, canActivate: [GuardAdminGuard]},
  { path: 'klanten', component:KlantenComponent, canActivate: [GuardAdminGuard] },
  { path: '', component:HomepageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ServicesComponent,
    NavBarComponent,
    ProductenComponent,
    RegistrerenComponent,
    HomepageComponent,
    WinkelwagenComponent,
    InventarisComponent,
    ZoekFilterPipe,
    ToevoegenComponent,
    KlantenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [GuardAdminGuard, ProductserviceService, UserService, ApiService, AuthorizationService, WinkelwagenserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
