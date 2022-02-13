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
      id: 1,
      name: 'Jackson',
      status: "online"
    },
    {
      id: 2,
      name: 'Lansing',
      status: "online"
    },
    {
      id: 3,
      name: 'Grand Rapids',
      status: "offline"
    },
  ];

}
