import React, {Fragment} from 'react';

import axios from 'axios';
import {Badge} from "reactstrap";
import serviceUrls from "../../common/ServicesConfig";

export default class OperationsClv extends React.Component {
    state = {
        content_clv: [],
        content_rfm: [],
    }
    
    componentDidMount() {
        // http://ec2-18-224-7-158.us-east-2.compute.amazonaws.com:5002/clv/client/data?client=0x75AF4A2FB5CFCF126516796FB59B145D
        axios.get("http://ec2-18-224-7-158.us-east-2.compute.amazonaws.com:5002/clv/client/data?client=" + this.props.userId )
            .then(res => {
                const cont = res.data;
                this.setState({
                    content_rfm: this.state.content_rfm,
                    content_clv: cont,
                });
            });
        axios.get("http://ec2-18-224-7-158.us-east-2.compute.amazonaws.com:5002/rfm/client/data?client=" + this.props.userId )
        .then(res => {
            const cont = res.data;
            this.setState({
                content_clv: this.state.content_clv,
                content_rfm: cont,
            });
        });
    }

    render() {
        var data_clv = this.state.content_clv;
        var data_rfm = this.state.content_rfm;
        if (data_clv.length === 0) {
            return <p/>;
        }
        if (data_rfm.length === 0) {
            return <p/>;
        }
        return <div>
                    <h3>Datos de CLV</h3>
                    <div className="row">
                        <div className="col-6">
                            <label><strong>CLV a 10 años</strong></label>
                            <p>{data_clv["clv"]}</p>
                        </div>
                    <div className="col-6">
                        <label><strong>Categoría RFM</strong></label>
                        <p>{data_rfm["rfm_label"]}</p>
                    </div>
                </div>
                </div>
    }
}
