export type TrimLeft<S extends string> = S extends ` ${infer Rest}` ? TrimLeft<Rest> : S;
export type TrimRight<S extends string> = S extends `${infer Rest} ` ? TrimRight<Rest> : S;

export type Trim<S extends string> = TrimLeft<TrimRight<S>>;

type Trimmed = Trim<'  Hello World  '>;
