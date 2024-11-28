export type AppendToObject<T, K extends string, V> = {
    [P in keyof T]: T[P];
  } & {
    [P in K]: V;
  };


type Test = { id: '1' };
type Result = AppendToObject<Test, 'value', 4>;
