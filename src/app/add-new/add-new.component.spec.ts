import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { VehService } from '../Service/veh.service';

import { AddNewComponent } from './add-new.component';

fdescribe('AddNewComponent', () => {
  let component: AddNewComponent;
  let fixture: ComponentFixture<AddNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      imports:[ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
      ],
      declarations: [AddNewComponent],
      providers:[VehService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Form should be seven formcontrols', () => {
    expect(component.addForm.contains('company')).toBeTruthy();
    expect(component.addForm.contains('model')).toBeTruthy();
    expect(component.addForm.contains('capacity')).toBeTruthy();
    expect(component.addForm.contains('showroomPrice')).toBeTruthy();
    expect(component.addForm.contains('localTax')).toBeTruthy();
    expect(component.addForm.contains('gst')).toBeTruthy();
    expect(component.addForm.contains('roadPrice')).toBeTruthy();
  });

 //Company 
  it('Company Name should be required.', () => {
    let control = component.addForm.get('company');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
    control?.setValue('Honda');
    expect(control?.valid).toBeTruthy();
  });

  it('Company Name length should be minimum 2 character.', () => {
    let control = component.addForm.get('company');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
    control?.setValue('Ho');
    expect(control?.valid).toBeTruthy();
  });

  it('Company Name length should be maximum 20 character.', () => {
    let control = component.addForm.get('company');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
    control?.setValue('abcdefghijklmnopqrst');
    expect(control?.valid).toBeTruthy();
  });

  //Model
  it('Model Name should be required.', () => {
    let control = component.addForm.get('model');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
    control?.setValue('Activa');
    expect(control?.valid).toBeTruthy();
  });

  it('Company Name length should be minimum 2 character.', () => {
    let control = component.addForm.get('model');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
    control?.setValue('Ac');
    expect(control?.valid).toBeTruthy();
  });

  it('Company Name length should be maximum 20 character.', () => {
    let control = component.addForm.get('model');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
    control?.setValue('abcdefghijklmnopqrst');
    expect(control?.valid).toBeTruthy();
  });

    //Capacity
    it('Capacity should be required.', () => {
      let control = component.addForm.get('capacity');
      control?.setValue('');
      expect(control?.valid).toBeFalsy();
      control?.setValue('two');
      expect(control?.valid).toBeTruthy();
    });

   //ShowroomPrice
   it('Showroom Price should be required.', () => {
    let control = component.addForm.get('showroomPrice');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
    control?.setValue('88000');
    expect(control?.valid).toBeTruthy();
  });

   //LocalTax
   it('LocalTax  should be required.', () => {
    let control = component.addForm.get('localTax');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
    control?.setValue('1000');
    expect(control?.valid).toBeTruthy();
  });

   //GST
   it('Gst  should be required.', () => {
    let control = component.addForm.get('gst');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
    control?.setValue('5600');
    expect(control?.valid).toBeTruthy();
  });

   //RoadPrice
   it('RoadPrice  should be required.', () => {
    let control = component.addForm.get('roadPrice');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
    control?.setValue('90000');
    expect(control?.valid).toBeTruthy();
  });
 

  
  it('Form should be valid when we set all form control values', () => {
    component.addForm.controls['company'].setValue('Bajaj');
    component.addForm.controls['model'].setValue('Pulsar 250');
    component.addForm.controls['capacity'].setValue(2);
    component.addForm.controls['showroomPrice'].setValue(65000);
    component.addForm.controls['localTax'].setValue(6000);
    component.addForm.controls['gst'].setValue(6500);
    component.addForm.controls['roadPrice'].setValue(90000);
    expect(component.addForm.valid).toBe(true);
});


});


