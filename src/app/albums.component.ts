import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Album }                    from './album';
import { UserService }              from './user.service';
import { Router }                   from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './albums.component.html',
  styleUrls: [ './albums.component.css' ]
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  title = 'Albums';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) {}

  getAlbums(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getAlbums(+params.get('id')))
      .subscribe(albums => this.albums = albums);
  }

  goBack(): void {
    this.location.back();
  }

  onSelect(album: Album): void {
    let link = ['/photos', album.id];
    this.router.navigate(link);
  }

  ngOnInit(): void {
    this.getAlbums();
  }
}
