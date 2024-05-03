import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ItemsService } from "../../Services/items-service";
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from "@angular/material/button";
import { Item } from "../../Models/item";

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatDividerModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [ItemsService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeComponent {
  items: Item[] = [];

  constructor(private _itemsService: ItemsService) {
    this._getAllitems();
  }

  deleteItem(itemId: number) {
    this._itemsService.deleteItem(itemId).subscribe(() => {
      this._getAllitems();
    });
  }

  trackItemId(index: number, item: Item) {
    return item.id;
  }

  private _getAllitems() {
    this._itemsService.getAllItems().subscribe(res => {
      this.items = res;
    });
  }
}
