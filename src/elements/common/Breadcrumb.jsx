import React, { Component } from "react"
import { Link } from "react-router-dom"

class Breadcrumb extends Component{
    render(){
        const { title , parent, mini} = this.props;
        return(
            <React.Fragment>
                <div className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1" data-black-overlay="6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner pt--100">
                                    <h1 className="title">{title}</h1>
                                    <ul className="page-list">
                                        <li className="breadcrumb-item"><Link to={`${process.env.PUBLIC_URL}`}>Accueil</Link></li>
                                        {parent? <li className="breadcrumb-item">{parent}</li>:''}
                                        <li className="breadcrumb-item active">{mini}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Breadcrumb;

