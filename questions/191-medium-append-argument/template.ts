export type AppendArgument<Fn extends (...args: any[]) => any, A> = 
Fn extends (...args: infer Params) => infer R 
? (...args: [...Params, A]) => R 
: never;


type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;  
