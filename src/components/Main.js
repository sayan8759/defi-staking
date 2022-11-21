import React, { Component } from 'react';
// import Web3 from 'web3';
import tether from '../tether.png';
import Airdrop from './Airdrop.js';


class Main extends Component {
    render() {
        // testing to see if the variable in Main in App.js are passing to props
        // console.log(this.props.stakingBalance)
        return(
            <div id='content' className='mt-3'>
                <table className='table text-muted text-center'>
                    <thead>
                        <tr style={{color:'white'}}>
                            <th scope='col'>Staking Balance</th>
                            <th scope='col'>Reward Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{color:'white'}}>
                            {/* the values are in wei and must be converted in ether */}
                            <td>{window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')} USDT</td>
                            <td>{window.web3.utils.fromWei(this.props.rwdBalance, 'Ether')} RWD</td>
                        </tr>
                    </tbody>
                </table>
                <div className='card mb-2' style={{opacity:'0.8', backgroundColor:'ff3855'}}>
                    <form className='mb-3'
                        onSubmit={(event) => {
                            event.preventDefault()
                            let amount
                            amount = this.input.value.toString()
                            amount = window.web3.utils.toWei(amount, 'Ether')
                            this.props.stakeTokens(amount)
                        }}
                    >
                        <div style={{borderSpace:'0 1em'}}>
                            <label className='float-left' style={{marginLeft:'15px'}}><b>
                                Stake Tokens</b></label>
                            <span className='float-right' style={{marginRight:'8px'}}>
                                <b>Balance: {window.web3.utils.fromWei(this.props.tetherBalance, 'Ether')} 
                                    USDT
                                </b>
                            </span>
                            <div className='input-group mb-4'>
                                <input
                                    ref={(input)=> {this.input = input} }  
                                    type="text"
                                    placeholder='0'
                                    required/>
                                <div className='input-group-open'>
                                    <div className='input-group-text'>
                                        <img src={tether} alt="tether" height='32' />
                                        &nbsp; &nbsp; &nbsp; USDT
                                    </div>
                                </div>
                            </div>
                            <button type='submit' className='btn btn-primary btn-lg btn-block'>
                                Deposit
                            </button>
                        </div>
                    </form>
                    <button 
                        type='submit' 
                        onClick={(event) =>{
                            event.preventDefault();
                            this.props.unstakeTokens();
                        }}
                        className='btn btn-primary btn-lg btn-block'>
                        Withdraw
                    </button>
                    <div className='card-body text-center' style={{color:'blue'}}>
                        AIRDROP 
                        <Airdrop 
                            stakingBal = {this.props.stakingBalance}
                            rwdBal = {this.props.rwdBalance}
                            issueRwdTokens = {this.props.issueRWDTokens}
                        />
                    </div>
                </div>
            </div>
        );
    }
}


export default Main;