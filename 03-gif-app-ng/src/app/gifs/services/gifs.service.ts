import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/cards.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];

  private apiKey: string = 'axX4JGPjLBKEpVYVqUzvdzJxlGtnIG0x';

  constructor(private http: HttpClient) {
    this.readLocalStorage();
  }

  get tagsHistory() {
    if (this._tagsHistory.length > 10) {
      this._tagsHistory = this._tagsHistory.slice(0, 10);
    }
    return [...this._tagsHistory];
  }

  private organizedHistory(tag: string): void {
    tag = tag.trim().toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    this._tagsHistory.unshift(tag);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem ( 'history', JSON.stringify(this._tagsHistory))
  }

  private readLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    this.searchTag(this._tagsHistory[0]);
  }

  searchTag(tag: string): void {
    // if (this._tagsHistory.includes(tag)) return;
    if (tag.trim().length === 0) return;
    this.organizedHistory(tag);



    this.http.get<SearchResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${tag}&limit=10`)
      .subscribe(resp => {
        this.gifList = resp.data;
        // console.log(resp.data);

      });
    // this._tagsHistory.unshift(tag);
  }

}
