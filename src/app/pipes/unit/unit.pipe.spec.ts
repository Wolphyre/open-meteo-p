import { UnitPipe } from './unit.pipe';

describe('UnitPipe', () => {
  it('create an instance', () => {
    const pipe = new UnitPipe();
    expect(pipe).toBeTruthy();
  });

  it ('mi aspetto che la funzione transsform incovata con due argomenti il num 23 e la stringa m/s dia come risulato convertito nella stringa 23.00m/s', ( )=> {
 const pipe = new UnitPipe();
 expect (pipe.transform(23,'m/s')).toBe('23m/s')
  });


  it ('mi aspetto che la funzione transsform incovata con due argomenti il num 22.45679. e la stringa m/s dia come risulato convertito nella stringa 46m/s', ( )=> {
    const pipe = new UnitPipe();
    expect (pipe.transform(2245679,'m/s')).toBe('21,46m/s')
     });

    
  it ('mi aspetto che la funzione transsform incovata con due argomenti il num 0 e la stringa L dia come risulato diverso da 0.0001L', ( )=> {
    const pipe = new UnitPipe();
    expect (pipe.transform(0,'L')).not.toBe('000.1')
     });


});
