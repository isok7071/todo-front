type boardType = ?{
    id: number,
    name: string,
}
type activeBoard = {
    id: number,
    content: string,
    name: string,
    stages_id: number,
}
type boardForm = {
    isOpened: boolean,
    isLoading: boolean,
    data: {
        name: null | string,
    }
}