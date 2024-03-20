import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';

import { VehService } from './veh.service';

fdescribe('VehService', () => {
  let service: VehService;
  let mockRes : any | undefined;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule,
        HttpClientModule,
        ],
      providers: [VehService]
    });
    service = TestBed.inject(VehService);
  });

  it('should be get data form API', () => {
   mockRes = [{
      id: 1, company_name: "MG",
      gst: 1773000,
      localTax: 5000,
      roadPrice: 555644,
      seating_capacity: "Two",
      showroomPrice: 9850000,
      veh_model: ""
  }];
  let getRes;
  spyOn(service, 'GetVehicles').and.returnValue(of(mockRes));
  service.GetVehicles().subscribe(res => {
      getRes = res
  });

  expect(getRes).toEqual(mockRes);


});
});
