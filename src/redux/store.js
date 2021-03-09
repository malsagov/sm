import postsReducer from './posts-reducer'
import messagesReducer from './messages-reducer'

let store = {
    _state: {
        posts: [
            {id: 1, message: 'Всем привет', likes:"10"},
            {id: 2, message: 'Это мой второй пост', likes:"110"}
        ],
        dialogs: [
            {id: 1, name: 'Руслан Мальсагов', message: "Сообщение"},
            {id: 2, name: 'Аслан Мальсагов', message: "Сообщение"},
            {id: 3, name: 'Али Мальсагов', message: "Сообщение"},
            {id: 4, name: 'Вахит Мальсагов', message: "Сообщение"}
        ],
        messages: [
            {id: 1, message: 'Hello boy', name: "Руслан"},
            {id: 1, message: 'How are you?', name: "Руслан"},
            {id: 2, message: 'Hello', name: "Линара"},
        ]
    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log('state was changed');
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer
    },
    dispatch(action) {

        this._state.posts = postsReducer(this._state.posts, action)
        this._state.messages = messagesReducer(this._state.messages, action)
        this.rerenderEntireTree()

    }
}
  
export default store
window.store = store