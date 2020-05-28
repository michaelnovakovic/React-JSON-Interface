import React, { Component } from 'react';

class ListGames extends Component {

    render() {
        const listItems = this.props.dogs.map((item) => (
            <div className="col-sm-4">
          <div className="card-deck">
            <div className="card bg-primary">
              <div className="card-body text-center">
                <p className="card-text">{item.dogName}</p>
                <p>{item.dogBreedGroup}</p>
              </div>
            </div>
          </div>
          </div>
        ));

        return (
            <div className="row">
                {listItems}
            </div>
        )        
    }
}

export default ListGames;
