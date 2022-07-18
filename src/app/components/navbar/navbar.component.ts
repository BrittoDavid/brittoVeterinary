import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit(): void {
  }

  user(){
    this.router.navigate(["/users"]);
  }

  pet(){
    this.router.navigate(["/pets"]);
  }

  employee(){
    this.router.navigate(["/employee"]);
  }

  history(){
    this.router.navigate(["/history"]);
  }
}
