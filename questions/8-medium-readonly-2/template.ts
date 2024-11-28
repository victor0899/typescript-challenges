export type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in K] : T[P]
} & {
    [P in Exclude<keyof T,K>] : T [P]
}

interface Todo {
    title: string
    description: string
    completed: boolean
  }
  
  const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: 'Hey',
    description: 'foobar',
    completed: false,
  }