export interface IArt {
    _id: string,
    title: string,
    src: string,
    createdAt: string,
    liked: string,
}

export interface IArtState {
    byIds: {
        [key: number]: IArt;
    },
    allIds?: string[]
}