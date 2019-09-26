import { Component, OnInit } from '@angular/core';
import { HardcodedAuthentificationService } from '../service/hardcoded-authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router,
    private HardcodedAuthentificationService: HardcodedAuthentificationService) { }

  ngOnInit() {

    this.HardcodedAuthentificationService.logout(); 
  }


}
