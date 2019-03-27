import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public contacts : Array<Object> = [];

  private baseURL: string = 'https://api.themoviedb.org/3/';

  constructor(public http: Http){
    this.contacts =[
      {'name': 'Finn',
       'image': 'https://ionicframework.com/docs/demos/api/list/avatar-finn.png',
       'message': 'Hey, I am Finn'
      },
    {
      'name': 'Han',
      'image':'https://ionicframework.com/docs/demos/api/list/avatar-han.png',
      'message':'Whats app Finn?'

    },
    {
      'name': 'Rey',
      'image': 'https://ionicframework.com/docs/demos/api/list/avatar-rey.png',
      'message': 'Hey, shut up both!'

    },
    {
      'name': 'Luke',
      'image': 'https://ionicframework.com/docs/demos/api/list/avatar-luke.png',
      'message': 'Easy guys...'
    },
    ]
  }

  test():void{
    alert('This function is working!');
  }

  ngOnInit(){
  this.test();
  this.http.get(this.baseURL + 'movie/latest').subscribe(
    data =>{
      const obj = (data as any);
      const objJson = JSON.parse(obj);
      
    }, error =>{
      
    }
  )
  }
  
  private getAPIKey(): string {
    return '?api_key=9fbf871906b3002cee8377baed60521c';
  }
}
