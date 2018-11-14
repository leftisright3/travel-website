import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestService {

  private globalHeaders = new Headers({'Content-Type': 'application/json'});
  private globalUrl = '';

  constructor(private http: Http) {
  }

  private handleError(error: Response): Promise<any> {
    return Promise.reject(error.text() || error);
  }

  getFromUrl(url: string): Promise<any> {
    const fullUrl = `${this.globalUrl}/${url}`;
    return this.http.get(fullUrl).toPromise().then( resp => {
      return resp.json() as any;
    });
  }

  createNewDeckAndDraw(drawCount: number): Promise<any> {
    const newDeck = `${this.globalUrl}/new/draw?count=${drawCount}`;
    return this.http.get(newDeck).toPromise().then( resp => {
      return resp.json() as any;
    });
  }


}
