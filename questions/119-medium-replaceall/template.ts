export type ReplaceAll<S extends string, From extends string, To extends string> = 
S extends `${infer Start}${From}${infer End}`
? `${Start}${To}${ReplaceAll<End, From, To>}`
: S;

type Replaced = ReplaceAll<'t y p e s', ' ', ''>; 
