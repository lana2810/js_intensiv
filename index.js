// Какие бывают алгоритмы сортировок ?

// Сортировка пузырьком (сравниваются соседние пары)
// Сортировка выбором (список на две группы, 1 -отсортированная, 2 -нет. Ищем min во второй части и помещаем в конец первой)
// Сортировка вставками (берем каждый элемент и вставляем его между его min и max)
// Сортировка слиянием (список пополам - каждая часть рекурсивно сортируется и затем сливаются)
// Быстрая сортировка (весь список делится на больше или меньше опрного элемента. Рекурсия)

//  Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам

function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person = new Person("Ivan", 30);
const person2 = Object.create(Object.getPrototypeOf(person));

person2.name = "Masha";
person2.age = 30;

Person.prototype.logInfo = function () {
  console.log(`Hello ${this.name}`);
};
person2.logInfo();

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const personClass = new Person("Ivan", 30);
const person2Class = new personClass.constructor("Masha", 31);

PersonClass.prototype.logInfo = function () {
  console.log(`Hello ${this.name}`);
};
personClass.logInfo();

// Бонус
// Сложность у этого алгоритма O(n^2)
const firstSum = (arr, total) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(i).includes(total - arr[i])) return [arr[i], total - arr[i]];
  }
  return [];
};
arr = [1, 2, 3, 4, 5, 6, 7, 8];
total = 13;
const tmp = firstSum(arr, total);
