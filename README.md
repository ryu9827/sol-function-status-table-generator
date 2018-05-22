# Solidity Function Status Table Generator

This is a command line tool based on solidity function profiler. It generates a table of all the functions in the smart contract with a colomn named "status" in the table. And you can compare to the framework they refered to, whether there are huge differences or staying the same.

## Usage Example:

```
$ npm install
...
$ node index.js ~/contracts/mytoken.sol
```
## Output：
Legend:
:white_check_mark: : the function is absolutely same with the framework.
:ballot_box_with_check: : the function has slight difference with the framework, and the difference doesn't affect the logic and the feature.
:small_red_triangle: : the function has different logic with framework, or it is totally self-developed.
 <br>
- Contract name: TokenController

|             Function             | Visibility | Constant | Returns | Modifiers |                             Status                             |
|----------------------------------|------------|----------|---------|-----------|----------------------------------------------------------------|
| proxyPayment(address)            | public     | false    | bool    | payable   | :white_check_mark::ballot_box_with_check::small_red_triangle:  |
| onTransfer(address,address,uint) | public     | false    | bool    |           | :white_check_mark::ballot_box_with_check::small_red_triangle:  |
| onApprove(address,address,uint)  | public     | false    | bool    |           | :white_check_mark::ballot_box_with_check::small_red_triangle:  |
 <br>
- Contract name: Controlled

|         Function          | Visibility | Constant | Returns |   Modifiers    |                             Status                             |
|---------------------------|------------|----------|---------|----------------|----------------------------------------------------------------|
| Controlled()              | public     | false    |         |                | :white_check_mark::ballot_box_with_check::small_red_triangle:  |
| changeController(address) | public     | false    |         | onlyController | :white_check_mark::ballot_box_with_check::small_red_triangle:  |
 <br>