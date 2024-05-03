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

  /**
   * Gets all the Items.
   * @returns Item[]
   */
  public getAllItems(): Observable<Item[]> {
    return this._http.get<Item[]>(`${this.BASE_URL}/api/Items`);
  }

  /**
   * Adds an Item.
   * @param item the item to add
   * @returns the post response
   */
  public addItem(item: Item) {
    return this._http.post(`${this.BASE_URL}/api/Items`, item, { headers: this.HEADERS });
  }

  /**
   * Deletes and Item given its ID.
   * @param itemId ID of the Item
   * @returns the delete response
   */
  public deleteItem(itemId: number) {
    return this._http.delete(`${this.BASE_URL}/api/Items/${itemId}`);
  }

  /**
   * Edits an Item.
   * @param itemId ID of the Item
   * @param item the edited item
   * @returns the put response
   */
  public editItem(itemId: number, item: Item) {
    return this._http.put(`${this.BASE_URL}/api/Items/${itemId}`, item, { headers: this.HEADERS });
  }

  /**
   * Gets an Item given its ID.
   * @param itemId ID of the item
   * @returns the requested item
   */
  public getItem(itemId: number): Observable<Item> {
    return this._http.get(`${this.BASE_URL}/api/Items/${itemId}`);
  }
}
