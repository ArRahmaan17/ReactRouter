import React from "react";
import { data } from "../Data";
import "../App.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = { info: data };
  }
  handleClick = (id) => {
    this.props.history.push(`/news/${id}`)
  }
  render() {
    return (
      <div>
        <div className="navbar">
          <p> News App </p>
        </div>
        {this.state.info.map(param => {
          return (
            <div className="news">
              <div className="poto">
                <p>
                  <img src={param.thumbnail} />
                </p>
              </div>
              <div className="text">
                <a href="#">
                  <p onClick={() => this.handleClick(param.id)}>{param.title} </p>
                  <br />
                </a>
                <br />
              </div>
            </div>
          );
        })
        }
        <br /> <br /> <br /> <br />
      </div >
    );
  }
}

export default Home;
