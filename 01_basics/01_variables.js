const accountId = 144343
let accountEmail = "sudhir@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let acccountState;


// accountId = 2
accountEmail = "ss@ss.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var
because of issue on block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,acccountState])