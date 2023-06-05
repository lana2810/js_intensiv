// Массив в JS не имеет постоянной длины,
// Стек - Array.prototype.push, Array.prototype.pop;
// Очередь -  Array.prototype.push,  Array.prototype.shift;
// Также с помощью массива в JS можно реализовать - дерево, граф, связанный список

// 2) Привязать контекст объекта к функции logger, чтобы при вызове this.item
//выводило - some value (Привязать через bind, call, apply)
function logger() {
  console.log(`I output only external context: ${this.item}`);
}
const obj = { item: "some value" };

const bindedLogger = logger.bind(obj);
bindedLogger();

logger.call(obj);
logger.apply(obj);

// Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind()

Function.prototype.bind = null;
if (!Function.prototype.bind) {
  Function.prototype.bind = function (context, ...arg1) {
    const id = Date.now();
    context[id] = this;
    return function (...arg2) {
      const result = context[id](...arg1, ...arg2);
      delete context[id];
      return result;
    };
  };
}

function greet(name) {
  console.log(`Привет, ${name}! Меня зовут ${this.name}.`);
}

const person = {
  name: "John",
};

const bindedGreet = greet.bind(person);
bindedGreet("Alice");
const bindedGreet2 = greet.bind(person, "Sveta");
bindedGreet2();
