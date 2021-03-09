const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = [
        {id: 1, message: 'Hello boy', name: "Руслан"},
        {id: 1, message: 'How are you?', name: "Руслан"},
        {id: 2, message: 'Hello', name: "Линара"},
    ]

const messagesReducer = (state = initialState, action) => {
    if(action.type === SEND_MESSAGE){
        let newMessage = { 
            id: 1, 
            message: action.newMessageBody, 
            name: 'Руслан'
        }
        return [...state, newMessage]
    } else {
        return state
    }
}

export const sendMessageActionCreator = (newMessageBody) => {
    return {
      type: SEND_MESSAGE,
      newMessageBody: newMessageBody
    }
} 

export default messagesReducer;