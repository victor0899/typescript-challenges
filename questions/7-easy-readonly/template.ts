export type MyReadonly<T> = {
    readonly [P in keyof T] : T[P]

}

interface Todo {
    title: string
    description: string
}

const todo: MyReadonly <Todo> = {
    title: 'Hey',
    description: 'foobar '
}

