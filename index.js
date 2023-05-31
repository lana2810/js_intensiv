// Создать объект counter всеми возможными способами

const counter1 = {
  count: 0,
  increment: function () {
    this.count++;
  },
  decrement: function () {
    this.count--;
  },
};
//--------------------------------------------
const counter2 = Object.create(counter1);
//--------------------------------------------
const counter3 = new Object();
counter3.count = 0;
counter3.increment = function () {
  this.count++;
};
counter3.decrement = function () {
  this.count--;
};
//--------------------------------------------
const counter4 = Object.create(
  {},
  {
    count: { value: 0, writable: true, enumerable: true, configurable: false },
    increment: {
      get: function () {
        this.count++;
      },
    },
    decrement: {
      get: function () {
        this.count--;
      },
    },
  }
);
//--------------------------------------------
const counter5 = Object.create({});
Object.defineProperties(counter5, {
  count: { value: 0, writable: true, enumerable: true, configurable: false },
  increment: {
    get: function () {
      this.count++;
    },
  },
  decrement: {
    get: function () {
      this.count--;
    },
  },
});

//Скопировать объект counter всеми возможными способами
const copyCounter1 = Object.assign({}, counter1);
const copyCounter2 = { ...counter1 };

// Создать функцию makeCounter всеми описанными и возможными способами
function makeCounter1() {
  const count = 0;
  return function () {
    count++;
  };
}
//--------------------------------------------
const makeCounter2 = function () {
  const count = 0;
  return function () {
    count++;
  };
};

//--------------------------------------------
const makeCounter3 = () => {
  const count = 0;
  return function () {
    count++;
  };
};
//Написать функцию глубокого сравнения двух обьектов

function deepEqual(obj1, obj2) {
  console.log();
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for (key in obj1) {
    if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      if (deepEqual(obj1[key], obj2[key])) {
        continue;
      } else {
        return false;
      }
    }
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}
const obj1 = {
  here: { is: "on", other: { is: "on", other: 2 } },
  object: "Z",
};

const obj2 = {
  here: { is: "on", other: { is: "on", other: 2 } },
  object: "Z",
};

const tmp = deepEqual(obj1, obj2);
console.log(tmp);
//Развернуть строку в обратном направлении при помощи методов массивов

function reverseStr(str) {
  return str.split("").reverse().join("");
}
