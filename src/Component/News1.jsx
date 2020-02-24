import React, { Component } from 'react';
import { data } from "../Data";
import { Link } from "react-router-dom";

class News extends Component {
    constructor(props) {
        super(props)
        this.state = { datas: [] }
    }
    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id);
        const fil = data.filter(da => {
            return da.id == id
        })

        this.setState({
            info: fil
        })
    }
    render() {

        return (
            <div className="navbar">
                <Link to="/"><p> News App</p></Link>
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
                                    <p>{param.title} </p>
                                    <br />
                                </a>
                                <br />
                            </div>
                        </div>
                    )
                })
                }
            </div>
        );
    }
}

export default News