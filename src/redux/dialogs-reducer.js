let initialState = {
    dialogs: [
        {id: 1, name: 'Руслан Мальсагов', message: "Сообщение"},
        {id: 2, name: 'Аслан Мальсагов', message: "Сообщение"},
        {id: 3, name: 'Али Мальсагов', message: "Сообщение"},
        {id: 4, name: 'Вахит Мальсагов', message: "Сообщение"}
    ]
}

const dialogsReducer = (state = initialState, action) => {
    return state
}

export default dialogsReducer;