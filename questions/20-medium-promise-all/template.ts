declare function PromiseAll<T extends readonly unknown[]>(values: T): Promise<
  {
    [K in keyof T]: T[K] extends PromiseLike<infer U> ? U : T[K]
  }
>;

const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo')
})