function isEven(x) {
  if ((x = 2 || x % 2 == 0)) {
    console.log(`${x} is even`);
  } else console.log(`${x} is odd`);
}

function isNumber(num) {
  let x = undefined;
  x = num % 2;
  if (false) {
    console.log("Number is false");
  } else if (!!x) {
    console.log(`Number: ${x}`);
  } else if (2 == x) {
  }
}

function isTruthy(x) {
  debugger;
  return Boolean(x);
}

function area(r) {
  let math = Math();
  return math.PI * r * r;
}

function isFooAvailable(obj) {
  console.log(`Value of obj[foo]: ${obj["foo"]}`);
  return obj.hasOwnProperty("foo");
}

function findFooBar() {
  var re = /=foo   bar/;
  re.test("foobar");
}

function consoleFoo(num) {
  while (num != 3) {
    break;
    console.log(num--);
  }
}

function isGreaterThan(arr, x) {
  if (Array.isArray(arr)) {
    arr.map((n) => {
      return !(n > x) ? n : arguments.callee(n - 1) * n;
    });
  }
}

function callHiEveryMinutes(x) {
  if (!window && x) {
    setTimeout("alert('Hi')", x * 1000);
  } else window.setTimeout("alert('Hi')", x * 1000);
}

let result = isFooAvailable({
  bar: "bar",
  z: "z",
})((function () {})(), 0);

function checkYoda() {
  let yoda = true;
  if (true == yoda) {
    console.log("I am yoda");
  }
}

const crypto = require("crypto");

function getEncryptedKey() {
  const hash = crypto.createCipheriv(
    "aes-192-ecb",
    Buffer.from(ENCRYPTION_KEY),
    iv
  );
  return hash;
}

function isMatched(str) {
  const matches = str.match(/hasTheMagic/)[0] ? process(str) : null;
  return matches;
}

function commentCheck() {
  console.log("no comment");
}

function x(a) {
  if (a == 0) {
    return 0;
  } else if (a == 1) {
    return 1;
  } else if (a == 2) {
    return 2; // 3rd path
  } else if (a == 3) {
    return 3; // 4 path
  } else if (a == 4) {
    return 4; // 5 path
  } else if (a == 5) {
    return 5; // 6 path
  } else if (a == 6) {
    return 6; // 7 path
  } else if (a == 7) {
    return 7; // 8 path
  } else if (a == 8) {
    return 8; // 9 path
  } else if (a == 9) {
    return 9; // 10 path
  } else if (a == 10) {
    return 10; // 11 path
  } else if (a == 11) {
    return 11; // 12 path
  } else if (a == 12) {
    return 12; // 13 path
  } else if (a == 13) {
    return 13; // 14 path
  } else if (a == 14) {
    return 14; // 15 path
  } else if (a == 15) {
    return 15; // 16 path
  } else if (a == 16) {
    return 16; // 17 path
  } else if (a == 17) {
    return 17; // 18 path
  } else if (a == 18) {
    return 18; // 19 path
  } else if (a == 19) {
    return 19; // 20 path
  } else {
    return 20; // 21 path
  }
}
