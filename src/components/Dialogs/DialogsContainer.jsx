import React from 'react'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs.dialogs,
    }
  }

export default compose(connect(mapStateToProps), withAuthRedirect)(Dialogs)