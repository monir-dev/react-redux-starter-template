import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SearchField from '../components/SearchField';
import ErrorBoundry from '../components/ErrorBoundry';

// Import layouts
import LayoutBack from '../layout/back/Layout';

// import {robots} from '../robots';
import CardArray from '../components/CardArray';
import Scroll from '../components/Scroll';

import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../Actions/Actions';


const mapStateToProps = (state) => {
  return {
    // searchField: state.searchRobots.searchField,
    // robots: state.requestRobots.robots,
    // isPending: state.requestRobots.isPending,
    // error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    // onRequestRobots: () => dispatch(requestRobots())
  }
}



class App extends Component {

  componentDidMount() {
    // this.props.onRequestRobots();
  }


  render() {
    // const { searchField, onSearchChange, robots, isPending } = this.props;
    //
    // const filteredRobots = robots.filter(robot => {
    //   return robot.name.toLowerCase().includes(searchField.toLowerCase());
    // });

    return (
        <div>
          <LayoutBack />
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
