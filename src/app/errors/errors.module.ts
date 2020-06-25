import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [NotFoundComponent],
    imports: [HttpClientModule, CommonModule]
})

export class ErrorsModule {}