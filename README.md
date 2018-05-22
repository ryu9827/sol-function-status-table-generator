# Solidity Function Status Table Generator

This is a command line tool based on solidity function profiler. It generates a table of all the functions in the smart contract with a colomn named "status" in the table. And you can compare to the framework they refered to, whether there are huge differences or staying the same.

## Usage Example:

```
$ npm install
...
$ node index.js ~/contracts/mytoken.sol
```
## Output：
Legend:<br>
:heavy_check_mark: : the function is absolutely same with the framework.<br>
:white_check_mark: : the function has slight difference with the framework, and the difference doesn't affect the logic and the feature.<br>
:warning: : the function has different logic with framework, or it is totally self-developed. <br>
- Contract name: TokenController

|             Function             | Visibility | Constant | Returns | Modifiers |                             Status                             |
|----------------------------------|------------|----------|---------|-----------|----------------------------------------------------------------|
| proxyPayment(address)            | public     | false    | bool    | payable   | :heavy_check_mark::white_check_mark::warning:  |
| onTransfer(address,address,uint) | public     | false    | bool    |           | :heavy_check_mark::white_check_mark::warning:  |
| onApprove(address,address,uint)  | public     | false    | bool    |           | :heavy_check_mark::white_check_mark::warning:  |
 <br>
 
- Contract name: Controlled

|         Function          | Visibility | Constant | Returns |   Modifiers    |                             Status                             |
|---------------------------|------------|----------|---------|----------------|----------------------------------------------------------------|
| Controlled()              | public     | false    |         |                | :heavy_check_mark::white_check_mark::warning:  |
| changeController(address) | public     | false    |         | onlyController | :heavy_check_mark::white_check_mark::warning:  |
 <br>