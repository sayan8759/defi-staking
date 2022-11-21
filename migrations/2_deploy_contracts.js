const Tether = artifacts.require('Tether');
const RWD = artifacts.require('RWD')
const DecentralBank = artifacts.require('DecentralBank');


module.exports = async function (deployer, network, accounts){
    // deploy Tether contract
    await deployer.deploy(Tether);
    const tether = await Tether.deployed();

    // deploy RDW contract
    await deployer.deploy(RWD);
    // create a constant and wait until the RWD contract is deployed
    const rwd = await RWD.deployed();

    // deploy DecentralBank contract
    await deployer.deploy(DecentralBank, rwd.address, tether.address);
    const deBank = await DecentralBank.deployed();

    // transfer all the Reward Tokens - RWD to the DecentralBank address
    await rwd.transfer(deBank.address, '1000000000000000000000000');   

    // distribute 100 Tether tokens to the investor - this is the second account Ganache
    // accounts[1] the second account from Ganache first 10 accounts - transfer 100 tokens
    await tether.transfer(accounts[1], '100000000000000000000');
}
