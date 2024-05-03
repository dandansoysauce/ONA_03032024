import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Item } from "../Models/item";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private BASE_URL = 'http://localhost:5178';
  private HEADERS = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) {}

  public getAllItems(): Observable<Item[]> {
    return this._http.get<Item[]>(`${this.BASE_URL}/api/Items`);
  }

  public addItem(item: Item) {
    return this._http.post(`${this.BASE_URL}/api/Items`, item, { headers: this.HEADERS });
  }

  public deleteItem(itemId: number) {
    return this._http.delete(`${this.BASE_URL}/api/Items/${itemId}`);
  }

  public editItem(itemId: number, item: Item) {
    return this._http.put(`${this.BASE_URL}/api/Items/${itemId}`, item, { headers: this.HEADERS });
  }

  public getItem(itemId: number): Observable<Item> {
    return this._http.get(`${this.BASE_URL}/api/Items/${itemId}`);
  }
}
