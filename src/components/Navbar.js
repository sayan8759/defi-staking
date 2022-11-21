import React, { Component } from 'react';
import bank from '../bank.png';

class Navbar extends Component {
    render() {
        return(
            <nav className='navbar navbar-dark fixed-top shadow p-0' 
                            style={{backgroundColor:'black', color:'white', height:'60px'}}>
                <div>
                    <img src={bank} width='50px' className='d-inline-block ml-2' alt='bank' href='#'/>
                    <a className='navbar-brand col-sm-3 col-md-2 mr-0 align-middle' style={{color:'white'}}>
                        DeFi Staking
                    </a>
                </div>
                
                <ul className='navbar-nav px-3'>
                    <li className='text-nowrap d-none nav-item d-sm-none d-sm-block'>
                        <small style={{color:'white'}}>
                            ACCOUNT NUMBER: {this.props.account}
                        </small>
                    </li>
                </ul>
                
            </nav>
        );
    }
}


export default Navbar;