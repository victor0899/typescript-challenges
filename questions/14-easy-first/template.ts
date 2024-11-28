export type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never;

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type head1 = First<arr1>;
type head2 = First<arr2>; 