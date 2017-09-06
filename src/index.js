import Actor from "./actor";
import { canAddAndRemoveTodos } from "./behaviors";

const nick = Actor.start(canAddAndRemoveTodos);

Actor.send(nick, ["addTodo", "Build a new blockchain"]);
Actor.send(nick, ["addTodo", "????"]);
Actor.send(nick, ["addTodo", "$$$ Profit $$$$"]);
Actor.send(nick, ["removeTodo", 1]);
