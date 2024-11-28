export type Diff<Foo, Bar> = {
    [K in Exclude<keyof Foo, keyof Bar>]: Foo[K];
  };

  type Foo = {
    name: string
    age: string
  }
  type Bar = {
    name: string
    age: string
    gender: number
  }

  type Result = Diff<Foo, Bar>;