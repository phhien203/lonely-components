import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
