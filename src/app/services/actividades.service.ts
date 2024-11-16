import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorMsg } from '../interfaces/error.interface';
import { Actividad } from '../interfaces/actividades.interface';

const apiUrl = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  constructor(
    private http: HttpClient
  ) { }

  obtenerActividades(): Observable<HttpResponse<Actividad[]>> {
    return this.http
      .get<Actividad[]>(
        `${apiUrl}/actividades`,
        { responseType: 'json', observe: 'response' }
      )
      .pipe(
        catchError(this.handleError),
        map((data: HttpResponse<Actividad[]>) => {
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
