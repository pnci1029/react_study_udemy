import classes from './User.module.css';
import {Component} from "react";

/**
 순수 자바스크립트 클래스
 아래와 같은 동작을 하는 클래스

 다만 함수형이 더 깔끔하고 이 때문에 사람들이 아래를 더 선호함
 */
class User extends Component{

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}



// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
