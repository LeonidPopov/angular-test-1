import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { User } from './user';
import { Album } from './album';
import { Photo } from './photo';

@Injectable()
export class UserService {
	private headers = new Headers({'Content-Type': 'application/json'});
  	private usersUrl = 'https://jsonplaceholder.typicode.com/users';
	private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
	private photosUrl = 'https://jsonplaceholder.typicode.com/photos';

	constructor(private http: Http) { }
	
	getUsers(): Promise<User[]> {
	    return this.http.get(this.usersUrl)
	               .toPromise()
	               .then(response => response.json() as User[])
	               .catch(this.handleError);
	}

	getAlbums(id: number): Promise<Album[]> {
		//const url = `${this.albumsUrl}/${id}`;
		var albums = [];
		return this.http.get(this.albumsUrl)
				.toPromise()
				.then(response => {
					var jsonArray = response.json();
					for(var i=0;i<jsonArray.length;i++){
						if(jsonArray[i].userId==id){
							albums.push(jsonArray[i]);
						}
					}
					console.log(albums);
					return albums;
				})
				.catch(this.handleError);
		/*return this.http.get(this.albumsUrl)
				.toPromise()
				.then(response => response.json() as Album[])
				.catch(this.handleError);*/
	}
	
	getPhotos(id: number): Promise<Photo[]> {
		var photos = [];
		return this.http.get(this.photosUrl)
				.toPromise()
				.then(response => {
					console.log(response.json);
					var jsonArray = response.json();
					for(var i=0;i<jsonArray.length;i++){
						if(jsonArray[i].albumId==id){
							photos.push(jsonArray[i]);
						}
					}
					console.log(photos);
					return photos;
				})
				.catch(this.handleError);
		/*return this.http.get(this.photosUrl)
				.toPromise()
				.then(response => response.json() as Photo)
				.catch(this.handleError);*/
	}
  	
  	private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
	}
}