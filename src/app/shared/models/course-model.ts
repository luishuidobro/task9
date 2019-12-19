export interface Course {
    // id: number,
    // title: string,
    // creationDate: Date,
    // duration: number,
    // description: string,
    // topRated: boolean,
    id: number,
    name: string,
    description: string,
    isTopRated: boolean,
    date: Date,
    authors: [
      {
        id: number,
        name: string,
        lastName: string,
      }
    ],
    length: number
};