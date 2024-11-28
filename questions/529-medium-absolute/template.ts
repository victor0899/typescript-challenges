export type ToString<T> = T extends number | bigint ? `${T}` : T;

export type Absolute<T extends string | number | bigint> = ToString<T> extends `-${infer R}` ? R : ToString<T>;

type Test1 = -100;
type Result1 = Absolute<Test1>; 
