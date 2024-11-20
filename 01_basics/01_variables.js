const accountId = "35453";
let accountEmail = "bhuvi@gmail.com";
var accountPassword = "3456";
accountCity = "punjab";

accountEmail = "hello@google.com" ;
accountPassword = "1234";
accountCity = "lucknow";
let accountState;

/*
    prefer not to use var
    because of issue of block scope and functional scope
*/


console.table([accountEmail, accountPassword, accountCity, accountState]);
