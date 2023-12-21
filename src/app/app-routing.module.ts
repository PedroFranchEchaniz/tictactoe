import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { GamePageComponent } from './ui/game-page/game-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'game/:id', component: GamePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
