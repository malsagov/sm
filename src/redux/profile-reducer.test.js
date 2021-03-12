import profileReducer, { addPostActionCreator } from "./profile-reducer";
import ReactDOM from 'react-dom'
import React from 'react'

it('new post should be added',() => {
    let action = addPostActionCreator('ADD-POST')
    let state = {
        posts: [
            {id: 1, post: 'Всем привет', likes:"10"},
            {id: 2, post: 'Это мой второй пост', likes:"110"}
        ]
    }
    let newState = profileReducer(state, action)
    expect (newState.posts.length).toBe(3)
})