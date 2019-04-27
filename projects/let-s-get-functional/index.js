// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-gmarinojr');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    let maleArray = [];
    _.filter(customers, function(i) {
        if (i.gender == 'male') {
            maleArray.push(i);
        }
    });
    return maleArray.length;
};

var femaleCount = function(array) {
    return _.reduce(array, function(count, customer) {
        if (customer.gender == 'female')
            count++;
        return count;
    }, 0);

};

var oldestCustomer = function(array) {
    let oldest = _.reduce(customers, function(prev, curr) {
        if (prev.age > curr.age) {
            return prev;
        }
        return curr;
    }, 0);
    return oldest.name;
};

var youngestCustomer = function(array) {
    let youngest = _.reduce(customers, function(prev, curr){
       if (prev.age < curr.age) {
           return prev;
       }
       return curr;
    }, 0);
    return youngest.name;
};

var averageBalance = function(array) {
    let avgBalances = _.map(array, function(customerObj) {
        return customerObj.balance;
    });
    let trimmedBal = _.map(avgBalances, function(balStr) {
        return Number(balStr.replace(',', '').replace('$', ''));
    });
    let totalBal = _.reduce(trimmedBal, function(seedTotal, num) {
        return seedTotal + num;
    });
    let avgBal = totalBal / trimmedBal.length;
    return avgBal;
};

var firstLetterCount = function(array, letter) {
    let firstLetter = _.filter(array, function(i) {
        if (i.name[0].toLowerCase() === letter.toLowerCase()) {
            return i;
        }
    });
    return firstLetter.length;
};

var friendFirstLetterCount = function(array, customer, letter) {
    let friendsLetter = _.filter(array, function(i) {
        if (customer === i.name) {
            return i.friends;
        }
    });
    let friendLetCount = _.reduce(friendsLetter[0].friends, function(count, cF) {
        if (cF.name[0].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
        return count;
    }, 0);
    return friendLetCount;
};

var friendsCount = function(array, name) {
    // loop through array of objects
   let friendArr = [];
   _.each(customers, function(custObj) {
    // access the friend's list of each customer (object)
    // loop through the array of objects (friends)
        _.each(custObj.friends, function(friendsObj){
            if (name === friendsObj.name){
                friendArr.push(custObj.name);
            }
        })
    })
    // check if given customer's name is in the array of objects
    // access the customer object and grab the name property
    // push names into the array
    // return the array
    return friendArr;
    
};

var topThreeTags = function(array) {
    let tagArray = _.reduce(customers, function(tagCount, custObj) {
        _.each(custObj.tags, function(element) {
            if (!tagCount[element]) {
                tagCount[element] = 1;
            }
            else {
                tagCount[element]++;
            }
        });
        return tagCount;
    }, {});
    let tagSort = [];
    for (var key in tagArray) {
        tagSort.push([key, tagArray[key]]);
    }
    tagSort.sort(function(a, b) {
        return b[1] - a[1];
    });
    return [tagSort[0][0], tagSort[1][0], tagSort[2][0]];
};

var genderCount = function(array) {
    let genderObj = _.reduce(customers, function(count, customer){
        if (!count[customer.gender]) {
            count[customer.gender] = 1;
        } else {
            count[customer.gender]++;
        }
        return count;
    }, {});
    return genderObj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
