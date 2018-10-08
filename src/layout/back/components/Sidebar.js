import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="main.html">
              <i className="nav-icon icon-speedometer"></i> Dashboard
              <span className="badge badge-info">NEW</span>
            </a>
          </li>
          <li className="nav-title">Theme</li>
          <li className="nav-item">
            <a className="nav-link" href="colors.html">
            <i className="nav-icon icon-drop"></i> Colors</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="colors.html">
            <i className="nav-icon icon-drop"></i> Another Colors</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="typography.html">
            <i className="nav-icon icon-pencil"></i> Typography</a>
          </li>
          <li className="nav-title">Components</li>
          <li className="nav-item nav-dropdown">
            <a className="nav-link nav-dropdown-toggle" href="#">
            <i className="nav-icon icon-puzzle"></i> Base</a>
            <ul className="nav-dropdown-items">
              <li className="nav-item">
                <a className="nav-link" href="base/breadcrumb.html">
                <i className="nav-icon icon-puzzle"></i> Breadcrumb</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="base/cards.html">
                <i className="nav-icon icon-puzzle"></i> Cards</a>
              </li>
            </ul>
          </li>

          <li className="nav-item nav-dropdown">
            <a className="nav-link nav-dropdown-toggle" href="#">
            <i className="nav-icon icon-layers"></i> Apps</a>
            <ul className="nav-dropdown-items">
              <li className="nav-item nav-dropdown">
                <a className="nav-link nav-dropdown-toggle" href="#">
                <i className="nav-icon icon-speech"></i> Invoicing</a>
                <ul className="nav-dropdown-items">
                  <li className="nav-item">
                    <a className="nav-link" href="apps/invoicing/invoice.html">
                      <i className="nav-icon icon-speech"></i> Invoice
                      <span className="badge badge-danger">PRO</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>


          <li className="nav-divider"></li>
          <li className="nav-title">Labels</li>
          <li className="nav-item d-compact-none d-minimized-none">
            <a className="nav-label" href="#">
            <i className="fa fa-circle text-danger"></i> Label danger</a>
          </li>
          <li className="nav-item d-compact-none d-minimized-none">
            <a className="nav-label" href="#">
            <i className="fa fa-circle text-info"></i> Label info</a>
          </li>
          <li className="nav-item d-compact-none d-minimized-none">
            <a className="nav-label" href="#">
            <i className="fa fa-circle text-warning"></i> Label warning</a>
          </li>

          <li className="nav-divider"></li>
          <li className="nav-title">System Utilization</li>
          <li className="nav-item px-3 d-compact-none d-minimized-none">
            <div className="text-uppercase mb-1">
              <small>
                <b>CPU Usage</b>
              </small>
            </div>
            <div className="progress progress-xs">
              <div className="progress-bar bg-info" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small className="text-muted">348 Processes. 1/4 Cores.</small>
          </li>
          <li className="nav-item px-3 d-compact-none d-minimized-none">
            <div className="text-uppercase mb-1">
              <small>
                <b>Memory Usage</b>
              </small>
            </div>
            <div className="progress progress-xs">
              <div className="progress-bar bg-warning" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small className="text-muted">11444GB/16384MB</small>
          </li>
          <li className="nav-item px-3 mb-3 d-compact-none d-minimized-none">
            <div className="text-uppercase mb-1">
              <small>
                <b>SSD 1 Usage</b>
              </small>
            </div>
            <div className="progress progress-xs">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small className="text-muted">243GB/256GB</small>
          </li>

          <li className="nav-divider"></li>
          <li className="nav-title">System Utilization</li>
          <li className="nav-item px-3 d-compact-none d-minimized-none">
            <div className="text-uppercase mb-1">
              <small>
                <b>CPU Usage</b>
              </small>
            </div>
            <div className="progress progress-xs">
              <div className="progress-bar bg-info" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small className="text-muted">348 Processes. 1/4 Cores.</small>
          </li>
          <li className="nav-item px-3 mb-3 d-compact-none d-minimized-none">
            <div className="text-uppercase mb-1">
              <small>
                <b>SSD 1 Usage</b>
              </small>
            </div>
            <div className="progress progress-xs">
              <div className="progress-bar bg-danger" role="progressbar" style={{width: '95%'}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <small className="text-muted">243GB/256GB</small>
          </li>

        </ul>
      </nav>
      <button className="sidebar-minimizer brand-minimizer" type="button"></button>
    </div>
  )
}

export default Sidebar;
