import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorMsg } from '../interfaces/error.interface';
import { Atractivo } from '../interfaces/atractivos.interface';

const apiUrl = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class AtractivosService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerAtractivos(): Observable<HttpResponse<Atractivo[]>> {
    /* const headers = new HttpHeaders({
      Token: token,
      UniqueCode: UniqueCode,
    });
    let params = new HttpParams();
    params = params.set('idPersona', idPersona); */
    return this.http
      .get<Atractivo[]>(
        `${apiUrl}/atractivos`,
        { responseType: 'json', observe: 'response' }
      )
      .pipe(
        catchError(this.handleError),
        map((data: HttpResponse<Atractivo[]>) => {
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
