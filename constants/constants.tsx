export const translateTypes: {[type: string]: string} = {
    'news' : "Vijest",
    'review' : "Recenzija",
    'special' : "Specijal",
    'video' : "Video",
}

export interface IImage {
    url: string,
}

export interface IType {
    type: string,
}