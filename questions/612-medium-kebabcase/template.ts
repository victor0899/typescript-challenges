export type KebabCase<S extends string> = S extends `${infer Head}${infer Tail}`
? Head extends Uppercase<Head> 
  ? `${Lowercase<Head>}-${KebabCase<Tail>}` 
  : `${Head}${KebabCase<Tail>}` 
: S;

type result = KebabCase<'FooBarBaz'>; 
