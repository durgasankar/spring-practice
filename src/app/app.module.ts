import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// for two way data binding
import { FormsModule } from "@angular/forms";
// bootstrap date picker
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
// Http client
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EventBindingComponent } from "./event-binding/event-binding.component";
import { TwoWayDataBindingComponent } from "./two-way-data-binding/two-way-data-binding.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxBootStrapDemoComponent } from "./ngx-boot-strap-demo/ngx-boot-strap-demo.component";
import { NgIfDirectiveComponent } from "./ng-if-directive/ng-if-directive.component";
import { NgSwitchComponent } from "./ng-switch/ng-switch.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SchoolComponent } from "./about/school/school.component";
import { CollegeComponent } from "./about/college/college.component";
import { BuyProductsComponent } from "./buy-products/buy-products.component";
import { ParentAppComponent } from "./parent-app/parent-app.component";
import { ChildAppComponent } from "./parent-app/child-app/child-app.component";
import { HttpPracticeComponent } from "./http-practice/http-practice.component";
import { MaterialModule } from "./material/material.module";
import { AngFormComponent } from './ang-form/ang-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    NgxBootStrapDemoComponent,
    NgIfDirectiveComponent,
    NgSwitchComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    PageNotFoundComponent,
    SchoolComponent,
    CollegeComponent,
    BuyProductsComponent,
    ParentAppComponent,
    ChildAppComponent,
    HttpPracticeComponent,
    AngFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
