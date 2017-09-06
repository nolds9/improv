import EventEmitter from "events";

const mailbox = new EventEmitter();

const Actor = {
  start(behavior = {}) {
    const address = Symbol();

    let state = typeof behavior.init === "function" ? behavior.init() : {};

    mailbox.on(address, ([method, message]) => {
      state = (behavior[method] && behavior[method](state, message)) || state;
      console.log("next state: ", state);
    });

    return address;
  },
  send(target, message) {
    mailbox.emit(target, message);
  }
};

export default Actor;
