import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



// import { CharacterDetailComponent }  from './character-detail/character-detail.component';
// import { CharacterDetailComponent }  from './character-detail/character-detail.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard', component: DashboardComponent },
//   { path: 'detail/:id', component: CharacterDetailComponent },
//   { path: 'characters', component: CharactersComponent }
// ];

import { CharactersComponent }      from './characters/characters.component';
import { CharacterDetailComponent }  from './character-detail/character-detail.component';

const routes: Routes = [
 
  { path: 'detail/:id', component: CharacterDetailComponent },
  { path: 'characters', component: CharactersComponent }
];




@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}