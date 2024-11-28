export type Includes<U extends readonly unknown[], T> = T extends U[number] ? true : false;


type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>;
type isKars = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>;
