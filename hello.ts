import chai from 'chai';

declare global {
  namespace Chai {

    interface Assertion {
      new(obj: any): Assertion
    }

    interface ChaiStatic {
      Assertion: Assertion
    }
  }
}

new chai.Assertion('some')
