export type Merge<F, S> = Omit<F,keyof S> & S;

type Foo = {
    a: number;
    b: string;
  };
  
  type Bar = {
    b: number;
  };
  