
import { Vehicle } from '../Model/Vehicle';
import { VehsearchPipe } from './vehsearch.pipe';



fdescribe('VehsearchPipe', () => {
  const pipe = new VehsearchPipe();
  it('should be crete', () => {
    expect(pipe).toBeTruthy();
  });
  
  it('should be search', () => {
    const vehsearch = 'honda';
    const veh = Vehicle;
    const pipe = new VehsearchPipe();
    const result = pipe.transform([],vehsearch)
    expect(result).toEqual([],vehsearch);
  });
  

});
