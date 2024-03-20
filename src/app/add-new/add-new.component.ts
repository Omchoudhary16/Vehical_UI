import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Vehicle } from '../Model/Vehicle';
import { VehService } from '../Service/veh.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
   
  id : number | any;
  addForm : FormGroup;
  vehicle : Vehicle[] | any;
  LT : number = 0;
  G : number = 0;
  RP : number = 0;


  constructor(private fb : FormBuilder, private vehService : VehService, private route : ActivatedRoute, private router: Router) {
   this.addForm = this.fb.group({
     company : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
     model : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
     capacity : [null, [Validators.required]],
     showroomPrice : [null,  [Validators.required] ],
     localTax : [null,  [Validators.required]],
     gst : [null,  [Validators.required]],
     roadPrice : [null,  [Validators.required]],
   });
   }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.id = res['id'];
    });
    if(this.id != null){
    this.vehService.GetVehicleById(this.id).subscribe(res => {
     this.addForm.setValue({
       company : res.company_name,
       model : res.veh_model,
       capacity : res.seating_capacity,
       showroomPrice  : res.showroomPrice,
       localTax : res.localTax,
       gst : res.gst,
       roadPrice : res.roadPrice
     });
    
    });}
  }

  onAddNew(){
    if(this.id == null){
    let newModel : Vehicle = new Vehicle ();
    newModel.company_name = this.addForm.value.company;
    newModel.veh_model = this.addForm.value.model;
    newModel.seating_capacity = this.addForm.value.capacity;
    newModel.showroomPrice = Number(this.addForm.value.showroomPrice);

    newModel.localTax = Number(this.onLocalTax(newModel.showroomPrice));
    newModel.gst = Number(this.onGST(newModel.showroomPrice));
    newModel.roadPrice = Number(newModel.showroomPrice) + Number(this.onLocalTax(newModel.showroomPrice)) + Number(this.onGST(newModel.showroomPrice));
    //console.log(newModel);
    this.vehService.AddVehicle(newModel).subscribe( res => {
      console.log(newModel);
      if (res.status == 201) {
        
        this.addNotification();
        this.router.navigateByUrl('view');
        
      }
    });
   }
   else{
    let Model : Vehicle = new Vehicle ();
    Model.id = this.id;
    Model.company_name = this.addForm.value.company;
    Model.veh_model = this.addForm.value.model;
    Model.seating_capacity = this.addForm.value.capacity;
    Model.showroomPrice = Number(this.addForm.value.showroomPrice);

    Model.localTax = Number(this.onLocalTax(Model.showroomPrice));
    Model.gst = Number(this.onGST(Model.showroomPrice));
    Model.roadPrice = Number(Model.showroomPrice) + Number(this.onLocalTax(Model.showroomPrice)) + Number(this.onGST(Model.showroomPrice));

    console.log(Model);
    this.vehService.UpdateVehicle(Model, this.id).subscribe( res => {
      if (res.status == 200) {
        this.updateNotification();
        this.router.navigateByUrl('view');
      }
    });
   }
  }

  // resetForm() {
  //   if(this.id != null){
  //   var form = document.getElementById('addForm') as HTMLFormElement;
  //   form.reset();}
  // }

  addNotification() {
    Swal.fire('Thank You', 'Vehicle Registration Successfully Done', 'success');
  }
  updateNotification() {
    Swal.fire('Thank You', 'Vehicle Record Update Successfully Done', 'success');
  }


  onLocalTax(SP : number){
    let tax : number = 0;
    if(SP <= 50000){
      tax = 1000;
    }
    else if(SP <= 100000 && SP >= 50001){
      tax = 2000;
    }
    else if(SP >= 100000){
      tax = 5000;
    }
    return tax;
  }

  onGST(SP : number){
    let Gst : number = 0;
    Gst = (SP * 0.18) 
    return Gst;
  }

  AddValue(){
    this.LT = Number(this.onLocalTax(this.addForm.value.showroomPrice));
    this.G = Number(this.onGST(this.addForm.value.showroomPrice));
    this.RP = Number(this.addForm.value.showroomPrice) + Number(this.onLocalTax(this.addForm.value.showroomPrice)) + Number(this.onGST(this.addForm.value.showroomPrice));
    this.addForm.patchValue({
      localTax : this.LT,
      gst : this.G,
      roadPrice : this.RP
    });
  }
}
