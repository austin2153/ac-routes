import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-status-detail',
  templateUrl: './status-detail.component.html',
  styleUrls: ['./status-detail.component.css']
})
export class StatusDetailComponent implements OnInit {

  datacenter!: { id: number, name: string, status: string };
  name: any;
  sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // grab name from params
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
    })
  }

}
