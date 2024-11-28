export type TupleToUnion<T extends any[]> = T[number];

// Example usage:
type Arr = ['1', '2', '3'];

const a: TupleToUnion<Arr> = '1'; 
const b: TupleToUnion<Arr> = '2'; 
const c: TupleToUnion<Arr> = '3'; 
