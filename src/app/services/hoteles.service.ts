import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorMsg } from '../interfaces/error.interface';
import { Hotel } from '../interfaces/hoteles.interface';
const apiUrl = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

  constructor(private http: HttpClient) { }
  obtenerHoteles(): Observable<HttpResponse<Hotel[]>> {
    return this.http
      .get<Hotel[]>(
        `${apiUrl}/hoteles`,
        { responseType: 'json', observe: 'response' }
      )
      .pipe(
        catchError(this.handleError),
        map((data: HttpResponse<Hotel[]>) => {
          return data;
        })
      );
  }


  private handleError(error: HttpErrorResponse) {
    console.log('Error servicio ', error);
    if (error.status === 0) {
      console.log('Error servicio ', error);
      const err: ErrorMsg = {
        mensajes: [
          {
            tipo: 'error',
            descripcion: 'No tienes conexión a internet',
          },
        ],
      };
      return throwError(err);
    } else {
      return throwError(error.error);
    }
}
}
