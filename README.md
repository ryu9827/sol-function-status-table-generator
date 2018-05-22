# Solidity Function Profiler

A command line tool that generates a human-consumable report listing a contract's functions. This is useful during manual code review to understand what functions are made public, use which modifiers, and so on.

Usage Example:

```
$ npm install
...
$ node index.js ~/contracts/mytoken.sol
```


| Contract |          Function           | Visibility | Constant | Returns |  Modifiers  | Static Analysis | Test Coverage | Functional Analysis |
|----------|-----------------------------|------------|----------|---------|-------------|-----------------|---------------|---------------------|
| Managed  | Managed()                   | public     | false    |         |             | :white_check_mark: :ballot_box_with_check:             | :white_check_mark:           | :white_check_mark:                 |
| Managed  | transferManagement(address) | public     | false    |         | managerOnly | :white_check_mark: :ballot_box_with_check:            | :white_check_mark:           | :white_check_mark:                 |
| Managed  | acceptManagement()          | public     | false    |         |             | :white_check_mark: :ballot_box_with_check:            | :white_check_mark:           | :white_check_mark:                 |



Note that you may have to delete the title and some lines to make it looks like the table above.