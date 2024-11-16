import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorMsg } from '../interfaces/error.interface';
import { Comunidad } from '../interfaces/comunidades.interface';

const apiUrl = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class ComunidadesService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerComunidades(): Observable<HttpResponse<Comunidad[]>> {
    /* const headers = new HttpHeaders({
      Token: token,
      UniqueCode: UniqueCode,
    });
    let params = new HttpParams();
    params = params.set('idPersona', idPersona); */
    return this.http
      .get<Comunidad[]>(
        `${apiUrl}/comunidades`,
        { responseType: 'json', observe: 'response' }
      )
      .pipe(
        catchError(this.handleError),
        map((data: HttpResponse<Comunidad[]>) => {
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
