function isEven (x) {
  if ((x = 2 || x % 2 == 0)) {
    console.log(`${x} is even`)
  } else console.log(`${x} is odd`)
}

function isNumber (num) {
  let x
  x = num % 2
  if (false) {
    console.log('Number is false')
  } else if (x) {
    console.log(`Number: ${x}`)
  } else if (x == 2) {
  }
}

function isTruthy (x) {
  debugger
  return Boolean(x)
}

function area (r) {
  const math = Math()
  return math.PI * r * r
}

function isFooAvailable (obj) {
  console.log(`Value of obj[foo]: ${obj.foo}`)
  return obj.hasOwnProperty('foo')
}

function findFooBar () {
  const re = /=foo {3}bar/
  re.test('foobar')
}

function consoleFoo (num) {
  while (num != 3) {
    break
    console.log(num--)
  }
}

function isGreaterThan (arr, x) {
  if (Array.isArray(arr)) {
    arr.map((n) => {
      return !(n > x) ? n : arguments.callee(n - 1) * n
    })
  }
}

function callHiEveryMinutes (x) {
  if (!window && x) {
    setTimeout("alert('Hi')", x * 1000)
  } else window.setTimeout("alert('Hi')", x * 1000)
}

const result = isFooAvailable({
  bar: 'bar',
  z: 'z'
})((function () {})(), 0)

function checkYoda () {
  const yoda = true
  if (yoda == true) {
    console.log('I am yoda')
  }
}

const crypto = require('crypto')

function getEncryptedKey () {
  const hash = crypto.createCipheriv(
    'aes-192-ecb',
    Buffer.from(ENCRYPTION_KEY),
    iv
  )
  return hash
}

function isMatched (str) {
  const matches = str.match(/hasTheMagic/)[0] ? process(str) : null
  return matches
}

function commentCheck () {
  console.log('no comment')
}

let match
const regexp = RegExp()
while ((match = regexp.exec(str)) !== null) {}

const matches1 = str.match(/hasTheMagic/) ? process(str) : null
const matches2 = !!str.match(/regex/)
const matches3 = !!/regex/.exec(str)
const matches4 = /re/.exec(str)[0] ? process(str) : null
const matches5 = str.match(/hasTheMagic/)[0] ? process(str) : null

let a
const l = 90

crypto.createCipheriv('aes-128-ecb', key, '')
crypto.pseudoRandomBytes(1)
