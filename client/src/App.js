import React, {Component} from "react";

import Title from "./components/title";
import BtcTable from "./components/btcTable";
import EthTable from "./components/ethTable";

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Title/>
        <BtcTable/>
        <EthTable/>

      </div>
    );
  }
}

export default App;
