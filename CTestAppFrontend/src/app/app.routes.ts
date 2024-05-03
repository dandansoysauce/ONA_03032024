import { Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { HomeComponent } from './components/home/home.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home',  pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add-item', component: AddItemComponent },
  { path: 'item-detail/:id', component: ItemDetailComponent }
];
