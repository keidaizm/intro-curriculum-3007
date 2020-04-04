'use strict';

/**
 * 17で割り切れる数を判定する
 */
function isMultipleOfSeventeen(n){
    return n % 17 === 0 ;
}

module.exports = {
    isMultipleOfSeventeen: isMultipleOfSeventeen
}
