# Defi-staking
 Decentralized Finance Staking Application
  DeFi staking is a process that requires users to lock a certain amount of native tokens. This enables them to contribute to a PoS network. The PoS mechanism relies only upon validators having to stake in the chain. Thus, users become validators soon after the locking process.
  
  This app not only promotes staking but also yields 10% rewards for the users/validators analogous to fixed deposit in real life centralised banking systems.

# Requirements:
  1. Metamask Browser Extension
  2. Ganache (for TestNet Ether)
  3. Node.js 
  4. Truffle 

# Steps to run the App:
  1. Install the dependencies:
     ~~~ 
     npm install 
     ~~~
  2. Connect Ganache TestNet to your Metamask client.
  3. Test if the functionalities run:
     ~~~ 
     truffle test 
     ~~~
  4. If Successful , deploy and migrate contracts:
     ~~~ 
     truffle migrate --reset
     ~~~
  5. Initiate localhost development server:
     ~~~ 
     npm run start
     ~~~
  # This is how it looks:
   ![defi-demo](https://user-images.githubusercontent.com/93778359/203020785-4b514d39-e975-4a45-be6e-5e2eb24fda26.jpg)

  
