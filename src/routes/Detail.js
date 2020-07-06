import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;

    //직접 주소 입력시 자동으로 Home으로 돌아가도록
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {//간단 체크
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}
//render 끝나면 compoentDidMount로
export default Detail;