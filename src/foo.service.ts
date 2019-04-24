'use strict';
const moleculer = require('moleculer');
const { Service, Action, Method, Event } = require('moleculer-decorators');

@Service({})
class foo extends moleculer.Service {
  // Optional constructor
  constructor(broker,s?) {
    super(broker,s);
  }

  @Action()
  foo() {
     return this.foo2(); 
   }

   @Method
   foo2(){
     return 'baz';
   }
}

module.exports = foo;

export {};
