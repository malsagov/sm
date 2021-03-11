import React from 'react'
import { connect } from 'react-redux'
import { followSuccess, unfollowSuccess, setCurrentPage, requestUsers, follow, unfollow } from '../../redux/users-ruducer'
import Users from './Users'
import Preloader from '../common/Preloader'
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors'

class UsersContainer extends React.Component {
  componentDidMount = () => {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.requestUsers(pageNumber, this.props.pageSize)
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

// let mapStateToProps = (state) => {
//   return {
//     users: state.users.users,
//     pageSize: state.users.pageSize,
//     totalUsersCount: state.users.totalUsersCount,
//     currentPage: state.users.currentPage,
//     isFetching: state.users.isFetching,
//     followingInProgress: state.users.followingInProgress
//   }
// }
let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default connect(mapStateToProps, {followSuccess, unfollowSuccess, setCurrentPage, requestUsers, follow, unfollow})(UsersContainer)

 