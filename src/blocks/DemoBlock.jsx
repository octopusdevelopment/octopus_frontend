import React, { Component } from "react";

import '../../public/assets/css/table/demo.css'

class DemoBlock extends Component {

    render(){
        return(
             <div className="demo-overlay mb--30">
                 <div>
                 <div className="demo-content">
                    <div className="section-heading center-holder white-color">
                        <h4 className="ng-binding">
                            Les nouveaux clients peuvent essayer nos solutions E-commerce
                        </h4>
                        <h2><strong className="ng-binding">
                                Gratuitement pendant 15 jours
                            </strong></h2>
                        <h6 className="ng-binding">
                            En cliquant sur le bouton ci-dessous
                        </h6>
                        <i className="fa fa-angle-double-down"></i>
                        <br/>
                        <a className="rn-button-style--2 btn-solid white-bg" href="/services/web-development/e-commerce">
                            Essayez Maintenant
                        </a>
                        </div>
                 </div>
                 </div>
                
            </div>
        )
    }
}

export default DemoBlock;