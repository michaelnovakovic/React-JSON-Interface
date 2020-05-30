import React, { Component } from 'react';

class SearchDogs extends Component {
    render() {
        return (
          <div className="row">
            <div className="col-md-6 searchBar">
              <input
                id="SearchDogs"
                type="text"
                className="form-control"
                aria-label="Search Appointments"
                placeholder="Ex. Golden Retriever"
                onChange={e => this.props.SearchDogs(e.target.value)}
              />
              </div>
            <div className="input-group-append">
                  <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >
                    Sort by: <span className="caret" />
                  </button>
                  <div className="sort-menu dropdown-menu dropdown-menu-right">
                  <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'dogName' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('dogName', this.props.orderDir)
                  }
                  href="#"
                >
                  Breed Name
                </button>
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'dogBreedGroup' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('dogBreedGroup', this.props.orderDir)
                  }
                  href="#"
                >
                  Breed Class
                </button>
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'dogWeight' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('dogWeight', this.props.orderDir)
                  }
                  href="#"
                >
                  Weight
                </button>
                <div role="separator" className="dropdown-divider" />
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderDir === 'asc' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder(this.props.orderBy, 'asc')
                  }
                  href="#"
                >
                  Asc
                </button>
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderDir === 'desc' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder(this.props.orderBy, 'desc')
                  }
                  href="#"
                >
                  Desc
                </button>
              </div>
            </div>
          </div>
        );
    }
}

export default SearchDogs;
