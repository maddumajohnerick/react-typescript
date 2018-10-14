export interface IArt {
    _id: string,
    title: string,
    src: string,
    createdAt: string,
    liked: boolean,
}

export interface IArtState {
    byIds: {
        [key: number]: IArt;
    },
    allIds?: string[]
}