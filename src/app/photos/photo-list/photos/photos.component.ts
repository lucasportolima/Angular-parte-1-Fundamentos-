import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos)
      this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: Photo[]) {
    const newRows = [];

    photos.forEach((photo, index) => {
      newRows.push(photos.slice(index, index + 3));
    });

    return newRows;
  }

}
