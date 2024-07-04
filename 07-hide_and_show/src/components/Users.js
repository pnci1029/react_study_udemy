import {Component, useState} from 'react';
import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class Users extends Component{
  /**
   함수형 컴포넌트에서는 상태들이 각각의 객체로 관리되나,
   클래스 컴포넌트는 그렇지 않다.

   클래스 컴포넌트는 선언하려는 모든 상태를 하나의 객체로 만들어야한다.
   */
  constructor() {
    super();
    this.state = {
      showUsers: true,
      more: 'test',
    };
  }

  // 2. 페이지 렌더링시 필요한 함수 선언
  toggleUsersHandler(){
    this.setState((curState) => {
      return{showUsers : !curState.showUsers}
    })
  }

  render() {
    // 1. 클래스 컴포넌트내에서 페이지 렌더링
    return (
        <div className={classes.users}>
          <button onClick={this.toggleUsersHandler.bind(this)}>
            {this.showUsers ? 'Hide' : 'Show'} Users
          </button>
          {this.state.showUsers && usersList}
        </div>
    )
  }
}

const Users = () => {
  const [showUsers, setShowUsers] = useState(true);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'Hide' : 'Show'} Users
      </button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;
