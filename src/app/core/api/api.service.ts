import { BLOB_HEADERS, FILE_HEADERS } from './../constants/api/api.const';
import { GenericHash } from './../interfaces/commons/generic-hash';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FileModel } from '../interfaces/commons';
import { DEFAULT_HEADERS } from '../constants/api/api.const';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  protected apiUrl: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {}

  setNewApiUrl(newApiUrl: string) {
    this.apiUrl = newApiUrl;
  }

  defaultHeaders() {
    this.headers = new HttpHeaders(DEFAULT_HEADERS);
  }

  get<I>(endPoint: string, headers?: HttpHeaders): Observable<I> {
    this.setHeaders(headers);
    return this.http.get(`${this.apiUrl}${endPoint}`, {
      headers: this.headers,
    }) as Observable<I>;
  }

  getFile(endPoint: string, headers?: HttpHeaders): Observable<FileModel> {
    this.setHeaders(headers);
    return this.http.get(`${this.apiUrl}${endPoint}`, BLOB_HEADERS).pipe(
      map((response: HttpResponse<Blob>) => {
        const objToReturn = {
          fileName: /filename[^;=\n]*=((['']).*?\2|[^;\n]*)/.exec(
            response.headers.get('Content-Disposition')
          )[1],
          contentType: response.body.type,
          bodyBlob: response.body,
        } as FileModel;
        return objToReturn;
      })
    );
  }

  post<T, I>(
    endPoint: string,
    request: T,
    headers?: HttpHeaders
  ): Observable<I> {
    this.setHeaders(headers);
    return this.http.post(
      `${this.apiUrl}${endPoint}`,
      request
    ) as Observable<I>;
  }

  postFile(endPoint: string, request: GenericHash) {
    return this.http.post(`${this.apiUrl}${endPoint}`, request, {
      responseType: 'arraybuffer',
    });
  }

  postFileFormData(endPoint: string, fileData: File) {
    this.setHeaders(new HttpHeaders(FILE_HEADERS));
    const formData: FormData = new FormData();
    formData.append('fileKey', fileData, fileData.name);
    return this.http.post(`${this.apiUrl}${endPoint}`, formData, {
      headers: this.headers,
    });
  }

  delete(endPoint: string, headers?: HttpHeaders) {
    this.setHeaders(headers);
    return this.http.delete(`${this.apiUrl}${endPoint}`, {
      headers: this.headers,
    });
  }

  setHeaders(headers?: HttpHeaders) {
    if (!headers) {
      this.defaultHeaders();
    } else {
      this.headers = headers;
    }
  }
}
