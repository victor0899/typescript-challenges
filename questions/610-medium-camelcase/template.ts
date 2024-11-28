export type CamelCase<S extends string> = S extends `${infer F}-${infer Rest}`
? `${Lowercase<F>}${Capitalize<CamelCase<Rest>>}`
: S;

type result = CamelCase<'for-bar-baz'>; 
