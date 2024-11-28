export type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

//EXAMPLE 

type ExampleType = { name: string; age: number };
type Unwrapped = UnwrapPromise<Promise<ExampleType>>; 
