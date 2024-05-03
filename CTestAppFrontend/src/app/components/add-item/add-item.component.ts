import { Component } from "@angular/core";
import { ItemsService } from "../../Services/items-service";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Validators, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from "@angular/router";

@Component({
  selector: 'add-item',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss',
  providers: [ItemsService]
})
export class AddItemComponent {
  form: FormGroup;

  constructor(
    private _itemsService: ItemsService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) {
    this.form = this._formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      price: [null, Validators.min(0)],
      quantity: [null, Validators.min(0)]
    });
  }

  addItem(): void {
    if (!this.form.valid) return;

    this._itemsService.addItem({
      name: this.form.get('name')!.value,
      description: this.form.get('description')!.value,
      price: this.form.get('price')!.value,
      quantity: this.form.get('quantity')!.value
    }).subscribe(() => {
      console.log('added');
      this._router.navigateByUrl('home');
    });
  }
}
