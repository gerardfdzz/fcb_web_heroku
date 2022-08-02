import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  url: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPlayerById(id: number): Observable<any> {
    return this.http.get(this.url + "/?id=" + id)
  }

  getAllPlayers(): Observable<any> {
    return this.http.get(this.url)
  }

  // TODO
  getGoalkeepers(position: string): Observable<any> {
    return this.http.get(this.url + "/?position=" + position);
  }

  getDefenders(position: string): Observable<any> {
    return this.http.get(this.url + "/?position=" + position);
  }

  getMidfielders(position: string): Observable<any> {
    return this.http.get(this.url + "/?position=" + position);
  }

  getForwards(position: string): Observable<any> {
    return this.http.get(this.url + "/?position=" + position);
  }

  getCoach(position: string): Observable<any> {
    return this.http.get(this.url + "/?position=" + position);
  }
}
