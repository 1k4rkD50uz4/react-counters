import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

class App extends Component {
    constructor() {
        super();
        this.state = {
            counters: 5
        };
        this.increaseCounters = this.increaseCounters.bind(this);
        this.decreaseCounters = this.decreaseCounters.bind(this);
    }
    increaseCounters() {
        let counters = this.state.counters + 1;
        this.setState({ counters });
    }
    decreaseCounters() {
        let counters = this.state.counters - 1;
        this.setState({ counters });
    }
    render() {
        return (
            <div className="App">
                <Header
                    increaseCounters={this.increaseCounters}
                    decreaseCounters={this.decreaseCounters}
                />
                <CounterList counters={this.state.counters} />
            </div>
        );
    }
}

export default App;