export function noCopy(a: string, b: string) {
  return;
}

export function safeConcatenation(a: string, b: string) {
  return a + b
}

export var getKeyNumber = function () {
  return 13;
}

export var getKeyHolderName = () => 'Joe';


export const roles: Array<any> = ['admin', 'manager'];
  
  
export class MockUser {
  constructor(readonly name: string) {}
}

// dummy
// dummy

type A = 1 | 2 | 3 | "3"

type customtype = number
let a: string | customtype
let b: string & customtype

type A1 = 1 | 2 | 3 | 1
type B = "foo" | "bar" | "foo"
type C = A1 | B | A1 | B

let a1: number | number | string

function foobar(a: number | number): string | string { return 'a'}

type customtype11 = number
const a11: customtype11 | string | customtype11 | string = 'a'

let a111: number & number & string

export interface Foo {
  bar: string;
  quz?: string | undefined;
  baz?: string | undefined | number;
}

interface Foo2 {
  bar: string;
  quz?: string;
}

interface Foo1 {
  bar: string;
  quz?: string | undefined;
  baz?: string | undefined | number;
}