import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input() 
  photoCover: string = ""; // Vão estar no home
  @Input() 
  cardTitle: string = "";
  constructor() { }
  @Input()
  id: string = "0";

  ngOnInit(): void {
  }

}
