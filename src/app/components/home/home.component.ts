import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onLoadStatus() {
    this.router.navigate(['/status']);
  }

  onReloadPage() {
    // access current route with ActivatedRoute
    this.router.navigate(['home'], {relativeTo: this.route});
  }

}
