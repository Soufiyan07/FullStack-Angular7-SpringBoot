import { Component, OnInit } from '@angular/core';
import { HardcodedAuthentificationService } from '../service/hardcoded-authentification.service';
import { getSymbolIterator } from '@angular/core/src/util';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isLogged : boolean;
  username:string=sessionStorage.getItem('username');
  type:string=sessionStorage.getItem('type');

  constructor(private hardcodedAuth : HardcodedAuthentificationService) { }
 
  ngOnInit() {
    this.isLogged = this.hardcodedAuth.isLoggedin();
    this.username=sessionStorage.getItem('username')
    this.type=sessionStorage.getItem('type')
  }

  localStorageFunctionUsername(){
    return sessionStorage.getItem('username')
  }

  localStorageFunctionPassword(){
    return sessionStorage.getItem('type')
  }
}
