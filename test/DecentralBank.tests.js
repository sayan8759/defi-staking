// const assert = require('console');

const Tether = artifacts.require('Tether');
const RWD = artifacts.require('RWD')
const DecentralBank = artifacts.require('DecentralBank');

require('chai').use(require('chai-as-promised')).should();

contract('DecentralBank', ([owner, investor]) =>{
    let tether, rwd, decentralBank;

    // helper function
    // convert ether into wei
    function tokens(stringNum){
        return web3.utils.toWei(stringNum, 'ether');
    }

    before( async() =>{
        // load contracts
        tether = await Tether.new();
        rwd = await RWD.new();
        decentralBank = await DecentralBank.new(tether.address, rwd.address);

        // transfer 1000000 RWD tokens to DecentralBank 
        await rwd.transfer(decentralBank.address, tokens('1000000'));

        // transfer 100 USDT (Mock Tether) to investor account (second Ganache account)
        await tether.transfer(investor, tokens('100'), {from: owner});
    });

    describe('Mock Tether Deployment', async() => {
        it('Matches name successfully', async () => {
            const name = await tether.name();
            assert.equal(name, 'Mock Tether Token');
        });
    });

    describe('RWD Deployment', async() => {
        it('Matches name successfully', async () => {
            const name = await rwd.name();
            assert.equal(name, 'Reward Token');
        });
    });

    describe('Decentral Bank Deployment', async() => {
        it('Matches name successfully', async () => {
            const name = await decentralBank.name();
            assert.equal(name, 'Decentral Bank');
        });

        it('Contract has RWD tokens', async () => {
            let balance = await rwd.balanceOf(decentralBank.address);
            assert.equal(balance, tokens('1000000'));
        });
    });

    describe('Yield Farming', async() => {
        it('Rewards tokens for staking', async () => {
            let result;
            // check investor balance
            result = await tether.balanceOf(investor);
            assert.equal(result, tokens('100'), 'investor mock tether wallet balance BEFORE staking');

            // checking Staking for Investor
            // first approve from Decentral Bank to stake the amount of tokens from investor
            await tether.approve(decentralBank.address, tokens('100'), {from: investor});
            // second deposit tokens for staking
            await decentralBank.depositTokens(tokens('100'), {from: investor});

            // check investor updated balance (after depositing tokens with the Decentral Bank)
            result = await tether.balanceOf(investor);
            assert.equal(result, tokens('0'), 'investor mock tether wallet balance AFTER staking');

            // check the updated balance of the Decentral Bank after staking
            // work both statements
            //result = await decentralBank.stakingBalance(investor);
            result = await tether.balanceOf(decentralBank.address);
            assert.equal(result, tokens('100'), 'Decentral Bank wallet balance AFTER staking');

            // check the isStaking status
            result = await decentralBank.isStaking(investor);
            assert.equal(result.toString(), 'true', 'investor is staking status is true');

            // issue RWD tokens
            await decentralBank.issueTokens({from:owner});

            // Only owner can issue tokens
            await decentralBank.issueTokens({from:investor}).should.be.rejected;

            // Unstake tokens
            await decentralBank.unstakedTokens({from:investor});

            // check investor updated balance (after unstaking)
            result = await tether.balanceOf(investor);
            assert.equal(result, tokens('100'), 'investor mock tether wallet balance AFTER unstaking');

            // check the updated balance of the Decentral Bank after unstaking
            result = await tether.balanceOf(decentralBank.address);
            assert.equal(result, tokens('0'), 'Decentral Bank wallet balance AFTER unstaking');

            // check the isStaking status
            result = await decentralBank.isStaking(investor);
            assert.equal(result.toString(), 'false', 'investor is staking status is true');

        });
    });

});
