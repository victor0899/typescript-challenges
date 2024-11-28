export type Split<S extends string> = S extends `${infer Head}${infer Tail}` ? [Head, Tail] : never;

type LengthOfString<S extends string, T extends any[] = []> = 
  S extends '' ? T['length'] : Split<S> extends [any, infer Rest extends string] ? LengthOfString<Rest, [any, ...T]> : never;
