import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  errorMessage: string;
  constructor(private route: ActivatedRoute) {
    this.errorMessage = this.route.snapshot.data['message'];
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    )
   }

  ngOnInit() {
  }

}
