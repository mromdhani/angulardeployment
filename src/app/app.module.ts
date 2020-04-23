import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import {  FormsModule, ReactiveFormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ParticipantsComponent } from './Components/participants/participants.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PostComponent } from './components/post/post.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TemplateDrivenLoginComponent } from './components/template-driven-login/template-driven-login.component';
import { ModelDrivenLoginComponent} from './Components/model-driven-login/model-driven-login.component';

const routingTable = [
   { path: 'posts', component : PostComponent },
   { path:'participants', component : ParticipantsComponent},
   { path: 'welcome', component : WelcomeComponent},
   { path:'',  redirectTo:'welcome', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ParticipantsComponent,
    FooterComponent,
    PostComponent,
    WelcomeComponent,
    TemplateDrivenLoginComponent,
    ModelDrivenLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routingTable)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
