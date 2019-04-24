"use strict";

const moleculer = require('moleculer');
const { Service, Action, Event, Method } = require('moleculer-decorators');
const foo = require('./foo.service');

console.log(foo);

@Service({
  mixins: [foo],
  settings: {
  }
})
class main extends moleculer.Service {

  // Optional constructor
  constructor(broker, s) {
    super(broker, s)
    this.settings = { // Overrides above by default, to prevent this, add "constructOverride: false" to @Service
      foo: "mainbaz"
    }
  }

  // @Action({
  //   skipHandler: true // Any options will be merged with the mixin's action.
  // })
  // foo() { // this function will never be called since a mixin will override it, unless you specify skipHandler: false.

  // }

  // With options
  // No need for "handler:{}" here
  @Action()
  yo(ctx) {
    return "yo"
  }

}


const broker = new moleculer.ServiceBroker({
  namespace: "test",
  logger: console,
  logLevel: "debug",
});
broker.createService(main);
broker.start();
broker.repl();
export {}