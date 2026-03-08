const accountId = 103
let accountEmail = "himanshu@google.com"
var accountPassword = "12345"
accountCity = "Amarpatan"

accountEmail = "HT@.com"
accountPassword = "765"
accountCity = "satna"
let accountState;

console.log(accountId);

/*
most of the time use let in variables formation because of isssue of block scope & functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
