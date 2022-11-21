const decentralBank = artifacts.require('DecentralBank');




module.exports = async function issueRewards(callback) {
    let deBank = await decentralBank.deployed();
    await deBank.issueTokens();
    console.log('Tokens have been issued successfully!');
    callback();
}