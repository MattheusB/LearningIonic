import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public welcome:string = 'Welcome to Ionic 4!';
  public int:number = 13;
  public bool:boolean = true;
  public list:Array<String> = ['test', 'nice'];
  public listAny:Array<any> = ['cool', 10, true];

  constructor(public nacCtrl: NavController){
    
  }

  public test():void{
    alert("The function is working!");
  }

  ionViewDidLoad(){
   this.test();
  }

}
