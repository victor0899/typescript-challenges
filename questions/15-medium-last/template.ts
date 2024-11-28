export type Last<T extends any[]> = T extends [...infer Rest, infer L] ? L : never;

type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

type tail1 = Last<arr1>;
type tail2 = Last<arr2>; 
