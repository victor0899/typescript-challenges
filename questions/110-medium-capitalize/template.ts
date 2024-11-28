export type Capitalize<T extends string> = T extends `${infer First}${infer Rest}`
? `${Uppercase<First>}${Rest}`
: T;

type Capitalized = Capitalize<'hello world'>; 


