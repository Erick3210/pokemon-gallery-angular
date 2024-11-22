import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CardComponent } from './component/card/card.component';

const routes: Routes = [


  { path: '', component: MainPageComponent },  
  { path: 'pokemon/:id', component: CardComponent }  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
