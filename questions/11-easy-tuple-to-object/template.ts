export type TupleToObject<T extends readonly string []> = {
    [K in T[number]]: K;
}
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;
type Result = TupleToObject<typeof tuple>;
