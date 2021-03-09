import React from 'react'
import { connect } from 'react-redux'
import { sendMessageActionCreator } from '../../../redux/messages-reducer'
import Messages from './Messages'

let mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageActionCreator(newMessageBody))
    }
  }
}

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer