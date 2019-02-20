//var Mailchimp = require('mailchimp-api-v3')
const fs = require('fs');

function add(email, callback) {
    fs.appendFile('public/subscribers.txt', email + '\n', err => {
        if (err) {
            return callback(err);
        }
        console.log('Saved email: ' + email);
        callback(null);
    });
}
 
//var mailchimp = new Mailchimp(api_key);
// 
////Callback style
//mailchimp.get({
//  path : '/lists/id1'
//}, function (err, result) {
//})
// 
////Promise style
//mailchimp.get({
//  path : '/lists/id1'
//})
//.then(function (result) {
//})
//.catch(function (err) {
//})

exports.add = add;