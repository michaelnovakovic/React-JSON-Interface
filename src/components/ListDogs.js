import React, { Component } from 'react';

import { FaWeight } from 'react-icons/fa';
import { FaTape } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaDog } from 'react-icons/fa';

class ListDogs extends Component {
  
  render() {
    const listItems = this.props.dogs.map((item) => (
      <div class="col-sm-4">
      <div class="card">
        <div class="card-header">{item.dogName}</div>
        <img class="card-img-top" src={item.dogImage} alt=""/>
        <div class="card-body">
          <p><FaDog /> {item.dogBreedGroup}</p>
          <p><FaTape /> {item.dogHeight}</p>
          <p><FaWeight /> {item.dogWeight}</p>
          <p><FaCalendarAlt /> {item.dogLifeSpan}</p>
        </div>
      </div>
      </div>
    ));

    return <div className="row spaceBelow">{listItems}</div>

  }
}

export default ListDogs;
