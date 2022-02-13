import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  datacenters = [
    {
      name: 'Jackson',
      status: "online"
    },
    {
      name: 'Lansing',
      status: "online"
    },
    {
      name: 'Grand Rapids',
      status: "offline"
    },
  ];

}
