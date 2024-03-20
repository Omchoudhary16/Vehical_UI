import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Vehicle } from '../Model/Vehicle';
import { VehService } from '../Service/veh.service';

@Component({
  selector: 'app-catalog-view',
  templateUrl: './catalog-view.component.html',
  styleUrls: ['./catalog-view.component.css']
})
export class CatalogViewComponent implements OnInit {
  
  p = 1;
  title = '';
  vehSearch : string | any ='';
  vehicle : Vehicle[] | any;

  constructor(private vehicleService : VehService,) {
   vehicleService.GetVehicles().subscribe( res => {
     this.vehicle = res;
   });
   }

  ngOnInit(): void {
  }


  onDelete(id: any) {
    Swal.fire({
      title: 'Are You Sure ?',
      text: ' Remove This Vehicle Record',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Remove',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        this.vehicleService.DeleteVehicle(id).subscribe( res =>{
          if (res.status == 200) {
            Swal.fire('Delete!', 'This Vehicle Record Successfully Remove.', 'success');
            this.refreshUI();
           
          }
        });
      } 
      else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Vehicle Record Not Delete.', 'error');
        this.refreshUI();
      }
    });
  }

  refreshUI() {
    this.vehicleService.GetVehicles().subscribe(res => {
      this.vehicle = res;
    });
  }

  
}


