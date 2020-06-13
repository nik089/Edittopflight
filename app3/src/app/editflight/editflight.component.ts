import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editflight',
  templateUrl: './editflight.component.html',
  styleUrls: ['./editflight.component.css']
})
export class EditflightComponent implements OnInit {
  myForm: FormGroup;
  resData;
  
  data = new FormGroup({
  id: new FormControl(''),
  DeparturePlace: new FormControl(''),
  ArrivalPlace: new FormControl(''),
  price: new FormControl(''),
 date: new FormControl(''),
 src: new FormControl('')
  })
 
    
  constructor(private fb: FormBuilder, private mys:ServiceService, private router: Router, private ar:ActivatedRoute) { 
    this.myForm = this.fb.group({
      id:['', Validators.required],
      DeparturePlace: ['', Validators.required],
      ArrivalPlace: ['', Validators.required],
      price: ['', Validators.required],
      date: ['', Validators.required],
      src: ['', Validators.required]
    });
  }

  editflight(){
    const fdata = this.myForm.getRawValue();
      console.log(fdata);
      this.mys.editTopFlight(fdata).subscribe(res => {
        this.resData = res;
       this.router.navigate(['/cart']);

  });
  }

  ngOnInit(): void {
    // this.mys.topFlightRoute().subscribe((result)=>
    // {
    //   this. editTopFlight = new FormGroup({
    //     id: new FormControl(result['id']),
    //     DeparturePlace: new FormControl(result['DeparturePlace']),
    //     ArrivalPlace: new FormControl(result['ArrivalPlace']),
    //     price: new FormControl(result['price']),
    //    date: new FormControl(result['date']),
    //    src: new FormControl(result['src'])
    //     })
    // })
    // this.ar.params.subscribe(par => {
    //   this.id = par.cid;
    //   this.mys.topFlightRoute(this.id)
    //     .subscribe(res => {
    //       console.log(res);
    //     })
    //   });
    // }
  }
}



