import { CodeIconPipe } from './code-icon.pipe';

describe('CodeIconPipe', () => {

  const pipe = new CodeIconPipe();
  
  it('create an instance', () => {
    // const pipe = new CodeIconPipe();
    expect(pipe).toBeTruthy();
  });

it('passando alla funzione transform il numero 65,la stinga risultante la parola "rain"', () => {
  // const pipe = new CodeIconPipe()
  expect(pipe.transform(65)).toContain("rain")
});


it('passando alla funzione transform il numero 2000,la stinga risultante la parola "clear"', () => {
  // const pipe = new CodeIconPipe()
  expect(pipe.transform(2000)).toContain("clear")
});

});
