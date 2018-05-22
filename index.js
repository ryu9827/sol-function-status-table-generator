const parser     = require("solidity-parser");
const asciiTable = require('ascii-table');

if(process.argv.length < 3) {
  console.log("Error: Missing argument for sol file to scan");
  process.exit(1);
}

var target   = process.argv[2],
    contract = parser.parseFile(target);

console.log('Legend:\n'
+ ':heavy_check_mark: : the function is absolutely same with the framework.\n'
+ ':white_check_mark: : the function has slight difference with the framework, and the difference doesn\'t affect the logic and the feature.\n'
+ ':warning: : the function has different logic with framework, or it is totally self-developed.\n <br>');

//Add remove border functions to ascii-table framework;
asciiTable.prototype.removeBottomBorder = function() {
  this.__bottom = ' ';
}

asciiTable.prototype.removeTopBorder = function() {
  this.__top = ' ';
}

//Actually generate the tables
generateReport(target, contract);      

function generateReport(target, contract) {
  var contractName;
  contract.body.forEach(function(contract){
    if(contract.type == 'ContractStatement'){
      var table = new asciiTable();
      console.log('- Contract name: ' + contract.name + '\n');
      contract.body.forEach(function(part){
        if(part.type == 'FunctionDeclaration' 
        // && part.is_abstract == false  //If the contract is abstract and you still want to log it out, then comment this line.
          ){
          table.setHeading('Function', 'Visibility', 'Constant', 'Returns', 'Modifiers', 'Status');
         
          table.removeBottomBorder();
          table.removeTopBorder();
          var func = parseFunctionPart(contract, part);
          table.addRow(func.function, func.visibility, func.constant, func.returns, func.modifiers, func.Status)
        }
      });
      console.log(table.toString() + '\n <br> \n');
    }
  })
}



function parseFunctionPart(contract, part) {
  var contractName = contract.name,
      funcName     = part.name || "",
      params       = [];

  if(part.params) {
    part.params.forEach(function(param) {
      params.push(param.literal.literal);
    });
    funcName += "(" + params.join(',') + ")"
  } else {
    funcName += "()"
  }

  // Default is public
  var visibility = "public"
      isConstant = false,
      returns    = [],
      custom     = [];

  if(part.modifiers) {
    part.modifiers.forEach(function(mod) {
      switch(mod.name) {
        case "public":
          break;
        case "private":
          visibility = "private";
          break;
        case "internal":
          visibility = "internal";
          break;
        case "external":
          visibility = "external";
          break;
        case "constant":
          isConstant = true;
          break;
        case "returns":
          mod.params.forEach(function(param) {
            returns.push(param.name);
          });
          break;
        default:
          custom.push(mod.name);
      }
    });
  }

  return {
    contract:   contractName,
    function:   funcName,
    visibility: visibility,
    constant:   isConstant,
    returns:    returns,
    modifiers:  custom,
    Status: ':heavy_check_mark::white_check_mark::warning: ',  
  }
}
