import React from 'react';
import {Link} from 'react-router-dom';



const Sidebar = () => {

    return (

        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div class="sb-sidenav-menu">
            <div class="nav">
                <div class="sb-sidenav-menu-heading">Core</div>
                <Link class="nav-link" to="/admin/dashboard">
                    <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                    Dashboard
                </Link>
                <Link class="nav-link" to="/admin/profile">
                    <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                    Profile
                </Link>
                <div class="sb-sidenav-menu-heading">Interface</div>
                <Link class="nav-link collapsed" to="#" data-bs-toggle="collapse"
                    data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                    <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                    Layouts
                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                </Link>
                <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne"
                    data-bs-parent="#sidenavAccordion">
                    <nav class="sb-sidenav-menu-nested nav">
                        <Link class="nav-link" to="layout-static.html">Static Navigation</Link>
                        <Link class="nav-link" to="layout-sidenav-light.html">Light Sidenav</Link>
                    </nav>
                </div>
                <div class="sb-sidenav-menu-heading">Addons</div>
                <Link class="nav-link" to="charts.html">
                    <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                    Charts
                </Link>
            </div>
        </div>
            <div class="sb-sidenav-footer">
                <div class="small">Logged in as:</div>
                Start Bootstrap
            </div>
        </nav>

        );
    
    }
    
export default Sidebar;