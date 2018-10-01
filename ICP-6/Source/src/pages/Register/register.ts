// @ts-ignore
import { Component,viewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import {createElementCssSelector} from "@angular/compiler";
// @ts-ignore


@Component({
  selector: 'page-Register',
  templateUrl: 'register.html'
})
export class Register {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
}
