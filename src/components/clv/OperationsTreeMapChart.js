import React from "react";
import axios from "axios";
import TreeMapChart from "./TreeMapChart";

export default class OperationsTreeMapChart extends React.Component {
    state = {
        content: [],
    }


    handleChange = (event) => {
        axios.get("http://ec2-18-224-7-158.us-east-2.compute.amazonaws.com:5002/rfm/groups/data?hotel=" + event.target.value)
            .then(res => {
                const cont = res.data;
                this.setState({
                    content: cont,
                });
            });
    }

    componentDidMount() {
        axios.get("http://ec2-18-224-7-158.us-east-2.compute.amazonaws.com:5002/rfm/groups/data?hotel=GHL")
            .then(res => {
                const cont = res.data;
                this.setState({
                    content: cont,
                });
            })
    }

    render() {
        var data = this.state.content;
        var h = this.state.hotel;
        if (data === undefined || data.length === 0 ) {
            return <p/>;
        }
        // TODO: Send real data
        return <div>
                    <div>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="GHL">Todos</option>
                            <option value="Hotel++2">Hotel 2</option>
                            <option value="Hotel++3">Hotel 3</option>
                            <option value="Hotel++5">Hotel 5</option>
                            <option value="Hotel++8">Hotel 8</option>
                            <option value="Hotel++10">Hotel 10</option>
                            <option value="Hotel++12">Hotel 12</option>
                            <option value="Hotel++67">Hotel 67</option>
                            <option value="Hotel++252">Hotel 252</option>
                            <option value="Hotel++254">Hotel 254</option>
                            <option value="Hotel++315">Hotel 315</option>
                            <option value="Hotel++367">Hotel 367</option>
                            <option value="Hotel++380">Hotel 380</option>
                            <option value="Hotel++392">Hotel 392</option>
                            <option value="Hotel++393">Hotel 393</option>
                            <option value="Hotel++515">Hotel 515</option>
                            <option value="Hotel++531">Hotel 531</option>
                            <option value="Hotel++547">Hotel 547</option>
                            <option value="Hotel++548">Hotel 548</option>
                            <option value="Hotel++549">Hotel 549</option>
                            <option value="Hotel++592">Hotel 592</option>
                            <option value="Hotel++597">Hotel 597</option>
                            <option value="Hotel++611">Hotel 611</option>
                            <option value="Hotel++615">Hotel 615</option>
                            <option value="Hotel++620">Hotel 620</option>
                            <option value="Hotel++631">Hotel 631</option>
                            <option value="Hotel++644">Hotel 644</option>
                            <option value="Hotel++2176">Hotel 2176</option>
                            <option value="Hotel++2199">Hotel 2199</option>
                            <option value="Hotel++2241">Hotel 2241</option>
                            <option value="Hotel++2284">Hotel 2284</option>
                            <option value="Hotel++2292">Hotel 2292</option>
                            <option value="Hotel++2320">Hotel 2320</option>
                        </select>
                    </div>
                    <div>
                        {TreeMapChart({parents: data["parents"], labels: data["labels"], values: data["values"]})}
                    </div>
                </div>
        
        
    }

    
}
