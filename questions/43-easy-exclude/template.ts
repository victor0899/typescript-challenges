export type MyExclude<T, U> = T extends U ? never : T;


type First = string | number | boolean;
type Second = string | boolean;

type Result = Exclude<First, Second>; 
