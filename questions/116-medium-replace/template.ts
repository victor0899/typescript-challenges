export type Replace<S extends string, From extends string, To extends string> = 
S extends `${infer Start}${From}${infer End}` 
? `${Start}${To}${End}` 
: S;


type Replaced = Replace<'types are fun!', 'fun', 'awesome'>;