import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicApisComponent } from './public-apis.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PublicApisComponent],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [PublicApisComponent],
})
export class PublicApisModule {}
