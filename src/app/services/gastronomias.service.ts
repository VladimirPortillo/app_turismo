import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorMsg } from '../interfaces/error.interface';
import { Gastronomia } from '../interfaces/gastronomias.interface';

const apiUrl = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class GastronomiasService {

  constructor(
    private http: HttpClient
  ) { }

  obtenerGastronomias(): Observable<HttpResponse<Gastronomia[]>> {
    /* const headers = new HttpHeaders({
      Token: token,
      UniqueCode: UniqueCode,
    });
    let params = new HttpParams();
    params = params.set('idPersona', idPersona); */
    return this.http
      .get<Gastronomia[]>(
        `${apiUrl}/gastronomias`,
        { responseType: 'json', observe: 'response' }
      )
      .pipe(
        catchError(this.handleError),
        map((data: HttpResponse<Gastronomia[]>) => {
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
