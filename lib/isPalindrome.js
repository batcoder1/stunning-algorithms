/**
 * isPalindrome
 *  Palindrome word has the same chats from right to left than left to right 
 * @param {string} inputString
 * @returns {boolean} - true when is palindrome and false is not
 */
function isPalindrome(inputString){
    const regex = new RegExp("^[a-zA-Z0-9_]*$")
    const lowcase = inputString.toLowerCase();
    const filtered  = lowcase.split('').filter(char => regex.test(char)).join('')

    const reverse =filtered.split('').reverse().join('');
    return (reverse === filtered)?true:false;
    
}
module.exports = isPalindrome;