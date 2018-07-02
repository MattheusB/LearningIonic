import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public object_feed = {
    title: "Mattheus Brito",
    date: "November 5, 1955",
    description: "I'm making an amazing app",
    likes: 12,
    comments: 4,
    time: "11h ago test"
  }

  public list_films = new Array<any>();

  public userName:string = "Mattheus Brito code";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }

  public sumTwoNumbers(num1:number, num2:number):void {
    //alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data =>{
        const response = (data as any);
        this.list_films = response.results
        console.log(response);
      },error =>{
        console.log(error);
      }
      
    );
  }



}
