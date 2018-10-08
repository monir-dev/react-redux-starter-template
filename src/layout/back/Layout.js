import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Asidebar from './components/Asidebar';

class Layout extends Component {

  render() {
    return (
      <div>
        <Header/>

        <div className="app-body">

          <Sidebar />


          <main className="main">

            <ol className="breadcrumb">
              <li className="breadcrumb-item">Home</li>
              <li className="breadcrumb-item"><a href="#">Admin</a></li>
              <li className="breadcrumb-item active">Dashboard</li>

              <li className="breadcrumb-menu d-md-down-none">
                <div className="btn-group" role="group" aria-label="Button group">
                  <a className="btn" href="#">
                    <i className="icon-speech"></i>
                  </a>
                  <a className="btn" href="./">
                    <i className="icon-graph"></i> &nbsp;Dashboard</a>
                  <a className="btn" href="#">
                  <i className="icon-settings"></i> &nbsp;Settings</a>
                </div>
              </li>
            </ol>

            <div className="container-fluid">
              <div id="ui-view"></div>
            </div>

          </main>


          <Asidebar />

        </div>

        <Footer />
      </div>
    );
  }
}


export default Layout;
