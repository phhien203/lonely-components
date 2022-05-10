import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
