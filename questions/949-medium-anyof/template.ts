export type AnyOf<T extends readonly unknown[]> = T extends [infer F, ...infer Rest]
? F extends false | 0 | '' | [] | { [key: string]: never } | null | undefined
  ? AnyOf<Rest>
  : true
: false;

type Sample1 = AnyOf<[1, '', false, [], {}]>;  
type Sample2 = AnyOf<[0, '', false, [], {}]>; 