export type Pop<T extends any[]> = T extends [...infer Rest, any] ? Rest : never;

type arr1 = ['a', 'b', 'c', 'd'];
type arr2 = [3, 2, 1];

type re1 = Pop<arr1>; 
type re2 = Pop<arr2>; 
