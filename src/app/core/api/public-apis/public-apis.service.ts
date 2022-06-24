import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PublicApisPagedDto } from '@app/core/interfaces/api/public-apis-dto';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable()
export class PublicApisService extends ApiService {
  constructor(protected http: HttpClient) {
    super(http);
    this.apiUrl = 'https://api.publicapis.org/';
  }

  getEntries(): Observable<PublicApisPagedDto> {
    return super.get<PublicApisPagedDto>('entries');
  }
}
