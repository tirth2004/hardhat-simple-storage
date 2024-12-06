# Hardhat Simple Storage
This project demonstrates a simple storage contract using Hardhat. The contract allows you to store and retrieve a single integer value.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- Hardhat

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/hardhat-simple-storage.git
    ```
2. Navigate to the project directory:
    ```sh
    cd hardhat-simple-storage
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
    or
    ```sh
    yarn install
    ```

### Usage

1. Compile the contract:
    ```sh
    npx hardhat compile
    ```
2. Deploy the contract:
    ```sh
    npx hardhat run scripts/deploy.js --network localhost
    ```
3. Run tests:
    ```sh
    npx hardhat test
    ```

### Test Coverage

To generate a test coverage report, run:
```sh
npx hardhat coverage
```
The coverage report will be available in the `coverage/` directory.

### Gas Fees

To estimate gas fees for contract deployment and function calls, you can use the Hardhat Gas Reporter plugin. Install it by running:
```sh
npm install hardhat-gas-reporter --save-dev
```
Then, add the following to your `hardhat.config.js`:
```js
require("hardhat-gas-reporter");

module.exports = {
  // other configurations
  gasReporter: {
    enabled: true,
    currency: 'USD',
  },
};
```
Run your tests to see the gas usage report:
```sh
npx hardhat test
```

### Project Structure

- `contracts/`: Contains the Solidity contracts.
- `scripts/`: Contains the deployment scripts.
- `test/`: Contains the test scripts.

### License

This project is licensed under the MIT License.