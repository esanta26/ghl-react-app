import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountBarchart from "./components/topic-analysis/barchart/CountBarchart";
import GHLNavbar from "./common/GHLNavbar";
import CountPerServiceChart from "./components/topic-analysis/per-service/CountPerServiceChart";
import Example from "./components/recommender-system/Example";

function App() {
    return (
        <div className="App">

            <GHLNavbar/>
            <div className="container-fluid">
                <div className="row">
                    <CountBarchart/>
                    {/*<CountPerServiceChart/>*/}
                    <Example/>
                </div>
            </div>
        </div>
    );
}

export default App;
