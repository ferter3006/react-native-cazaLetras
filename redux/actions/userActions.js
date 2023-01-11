export const incrementStage = (x) => {
    return {
        type: 'STAGE_INCREMENT',
        payload: x,
    };
}

export const setNickName = (nick) => {
    return {
        type: 'SET_NICKNAME',
        payload: nick,
    }
}