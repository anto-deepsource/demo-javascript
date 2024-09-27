class Calculator {
  constructor(public a: unknown, private b: any, private c: any) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum(a: any = 0, b: number, c: number = 0) {
    return a + b;
  }

  getPercentage(c?: any, a: unknown, b = 1) {
    if (c) {
      // @ts-ignore
      return (a * b * 100) / c;
    } else {
      return;
    }
  }
}
