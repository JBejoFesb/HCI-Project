export const translateTypes: {[type: string]: string} = {
    'news' : "VIJEST",
    'review' : "RECENZIJA",
    'special' : "SPECIJAL",
    'video' : "VIDEO",
}

export interface IImage {
    url: string,
}

export interface IType {
    type: string,
}