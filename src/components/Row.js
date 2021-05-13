import React from 'react';

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coinName: props.coinName,
            index: props.index
          };
    }

    render() {
        const { coinName, index } = this.state;
        return (
          <div className = "gridRow">
              <ul>
                  <li> {index}. {coinName}</li>
              </ul>
          </div>
        );
    }
}

export default Row;