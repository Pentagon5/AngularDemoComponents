import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { IOModule } from './Input-Output/io.module';  //for @Input component
import { BindingComponent} from './Binding/binding.component';
import { NestedComponent} from './Binding/nestedcomponent';
import { DIModule } from './DependecyInjection/di.module';  // for dependency Injection
import { ChildComponent} from './CompLifecycle/complifecycle.component';
import { CompLifeCycleComponent} from './CompLifecycle/complifecycle.component';
import { ContactModule } from './Multicom-Promise/contact.module';   // for Promise
import {ReactiveFormsModule} from '@angular/forms';   // for observable
import {HttpModule} from '@angular/http';   //for Ajax call
import {WeatherComponent} from './Http-observable-OpenweatherMap/http.component';
import {ViewChildComponent} from './viewchild/viewchild.component';
import {ViewChildParentComponent}  from './viewchild/viewchildparent.component';
import { ShareModule } from './share-Custom-Directive/share.module';   // for custom directive
import {FormBuilderComponent} from'./Form-Builder/formbinding';
import {NewLoginComponent} from "./Form-Builder/newlogin.component";
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    BindingComponent,
    NestedComponent,
    CompLifeCycleComponent,
    ChildComponent,
    WeatherComponent,
    ViewChildParentComponent,
    ViewChildComponent,
    FormBuilderComponent,
    NewLoginComponent
    ],
  imports: [
    BrowserModule,FormsModule, IOModule,DIModule ,ContactModule,ReactiveFormsModule,HttpModule, ShareModule
    //if we already created Module.ts with all components listed der,
    // then list module name here else list omponents above in declarations
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
