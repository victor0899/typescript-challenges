export type Permutation<T extends string | number | symbol> = 
    T extends any ? (Exclude<T, T> extends never ? [T] : [T, ...Permutation<Exclude<T, T>>]) : never;

type Test = Permutation<'A' | 'B' | 'C'>;