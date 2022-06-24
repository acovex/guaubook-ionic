import { PublicApisPagedDto } from './../../core/interfaces/api/public-apis-dto';
import { Component, OnInit } from '@angular/core';
import { PublicApisService } from '@app/core/api/public-apis/public-apis.service';

@Component({
  selector: 'app-public-apis',
  templateUrl: './public-apis.component.html',
  styleUrls: ['./public-apis.component.scss'],
})
export class PublicApisComponent implements OnInit {
  public publicApis: PublicApisPagedDto;

  constructor(private readonly publicApisService: PublicApisService) {}

  ngOnInit() {
    this.getPublicApis();
  }

  getPublicApis(): void {
    this.publicApisService.getEntries().subscribe((entries) => {
      this.publicApis = entries;
      console.warn(this.publicApis);
    });
  }
}
