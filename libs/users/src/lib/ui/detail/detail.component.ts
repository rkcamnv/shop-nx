import { Component, Input, OnInit } from '@angular/core';
import { ID } from '@datorama/akita';

@Component({
  selector: 'shop-nx-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() id: ID = '';

  constructor() {}

  ngOnInit(): void {}
}
