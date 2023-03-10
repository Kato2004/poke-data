import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
