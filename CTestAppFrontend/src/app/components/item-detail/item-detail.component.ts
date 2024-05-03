import { Component } from "@angular/core";
import { ItemsService } from "../../Services/items-service";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'item-detail',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss',
  providers: [ItemsService]
})
export class ItemDetailComponent {
  form: FormGroup;
  itemId: number;

  constructor(
    private _itemsService: ItemsService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.itemId = Number(this._activatedRoute.snapshot.paramMap.get('id'));

    this.form = this._formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      price: [null, Validators.min(0)],
      quantity: [null, Validators.min(0)]
    });

    this._itemsService.getItem(Number(this.itemId)).subscribe(res => {
      this.form.setValue({
        name: res.name,
        description: res.description,
        price: res.price,
        quantity: res.quantity
      });
    });
  }

  handleEditItem() {
    if (!this.form.valid) return;

    this._itemsService.editItem(this.itemId, {
      id: this.itemId,
      name: this.form.get('name')?.value,
      description: this.form.get('description')?.value,
      price: this.form.get('price')?.value,
      quantity: this.form.get('quantity')?.value,
    }).subscribe(() => {
      console.log('edited');
      this._router.navigateByUrl('home');
    });
  }
}
