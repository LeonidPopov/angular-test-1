import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Photo }                    from './photo';
import { UserService }              from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './photos.component.html',
  styleUrls: [ './photos.component.css' ]
})
export class PhotosComponent implements OnInit {
  photos: Photo[];
  title = 'Photos';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  getPhotos(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getPhotos(+params.get('id')))
      .subscribe(photos => this.photos = photos);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getPhotos();
  }
}
