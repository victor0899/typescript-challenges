type TrimLeft<T extends string> = T extends ` ${infer Rest}` ? TrimLeft<Rest> : T;

type Trimmed = TrimLeft<'  Hello World  '>; 
