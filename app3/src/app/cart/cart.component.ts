import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cData;

  constructor(private mys: ServiceService, private router:Router, private datePipe: DatePipe) { }

  ngOnInit(): void {
      this.mys.topFlightRoute().subscribe((data)=>{
        console.log(data);
        this.cData = data['data'];
      });

      var date = new Date();
      console.log(this.datePipe.transform(date,"yyyy-MM-dd"));
   }
  }

  // edittopflight(){
  //   this.router.navigate(['/edittopflight']);
  // }
