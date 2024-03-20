import { Pipe, PipeTransform } from '@angular/core';
import { Vehicle } from '../Model/Vehicle';

@Pipe({
  name: 'vehsearch'
})

export class VehsearchPipe implements PipeTransform {
 
  transform(vehicle : Vehicle[], vehsearch : string) {
    if(vehsearch.length > 3)
    return vehicle.filter(vehicle => {
      return vehicle.company_name?.toLowerCase().includes(vehsearch.toLowerCase()) || vehicle.veh_model?.toLowerCase().includes(vehsearch.toLowerCase())
    });
    return vehicle;
  }

}
