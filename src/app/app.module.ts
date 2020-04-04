import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent} from './product-list.component'
import { WelcomeComponent} from './welcome.component'
import { ErrorComponent} from './error.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'products', component:ProductListComponent},
      {path:'',redirectTo:'welcome', pathMatch:'full'},
      {path:'**',component:ErrorComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
