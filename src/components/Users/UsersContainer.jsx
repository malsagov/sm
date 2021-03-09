import React from 'react'
import { connect } from 'react-redux'
import { followSuccess, unfollowSuccess, setCurrentPage, getUsers, follow, unfollow } from '../../redux/users-ruducer'
import Users from './Users'
import Preloader from '../common/Preloader'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

class UsersContainer extends React.Component {
  componentDidMount = () => {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {
      return (
      <>
        { this.props.isFetching ? <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        onPageChanged={this.onPageChanged}
        followSuccess={this.props.followSuccess}
        unfollowSuccess={this.props.unfollowSuccess}
        followingInProgress={this.props.followingInProgress}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        />
      </>
      )
      
  }   
}

let mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
    followingInProgress: state.users.followingInProgress
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//         dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//         dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//         dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (currentPage) => {
//         dispatch(setCurrentPageAC(currentPage))
//     },
//     setTotalUsersCount: (totalCount) => {
//         dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//         dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }

export default compose(withAuthRedirect, connect(mapStateToProps, {followSuccess, unfollowSuccess, setCurrentPage, getUsers, follow, unfollow}))(UsersContainer)

 