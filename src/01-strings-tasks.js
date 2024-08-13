/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}


/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  return value.substring(7, value.length - 1);
}


/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  return value[0];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  let indexStart = 0;
  for (let i = 0; i < value.length; i += 1) {
    if (value[i] !== '\t' && value[i] !== ' ') {
      indexStart = value.indexOf(value[i]);
      break;
    }
  }

  let indexEnd = value.length - 1;
  for (let i = value.length - 1; i >= 0; i -= 1) {
    if (value[i] !== '\t' && value[i] !== ' ') {
      indexEnd = i;
      break;
    }
  }
  return value.slice(indexStart, indexEnd + 1);
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  return value.repeat(count);
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  return str.replace(value, '');
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  return str.slice(1, str.length - 1);
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  let str = '';
  for (let i = 1; i <= height; i += 1) {
    let subStr = '';
    if (i === 1) {
      for (let j = 1; j <= width; j += 1) {
        if (j === 1) {
          subStr += '┌';
        } else if (j === width) {
          subStr += '┐';
        } else {
          subStr += '─';
        }
      }
      subStr += '\n';
      str += subStr;
    } else if (i === height) {
      for (let j = 1; j <= width; j += 1) {
        if (j === 1) {
          subStr += '└';
        } else if (j === width) {
          subStr += '┘';
        } else {
          subStr += '─';
        }
      }
      subStr += '\n';
      str += subStr;
    } else {
      for (let j = 1; j <= width; j += 1) {
        if (j === 1 || j === width) {
          subStr += '│';
        } else {
          subStr += ' ';
        }
      }
      subStr += '\n';
      str += subStr;
    }
  }
  return str;
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  return str.replace(/[a-z]/gi, (char) => {
    if (char.toLowerCase() > 'm') {
      return String.fromCharCode(char.charCodeAt(0) - 13);
    }
    return String.fromCharCode(char.charCodeAt(0) + 13);
  });
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  return typeof value === 'string' || value instanceof String;
}


/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  const map = new Map();
  map.set('A♣', 0);
  map.set('2♣', 1);
  map.set('3♣', 2);
  map.set('4♣', 3);
  map.set('5♣', 4);
  map.set('6♣', 5);
  map.set('7♣', 6);
  map.set('8♣', 7);
  map.set('9♣', 8);
  map.set('10♣', 9);
  map.set('J♣', 10);
  map.set('Q♣', 11);
  map.set('K♣', 12);
  map.set('A♦', 13);
  map.set('2♦', 14);
  map.set('3♦', 15);
  map.set('4♦', 16);
  map.set('5♦', 17);
  map.set('6♦', 18);
  map.set('7♦', 19);
  map.set('8♦', 20);
  map.set('9♦', 21);
  map.set('10♦', 22);
  map.set('J♦', 23);
  map.set('Q♦', 24);
  map.set('K♦', 25);
  map.set('A♥', 26);
  map.set('2♥', 27);
  map.set('3♥', 28);
  map.set('4♥', 29);
  map.set('5♥', 30);
  map.set('6♥', 31);
  map.set('7♥', 32);
  map.set('8♥', 33);
  map.set('9♥', 34);
  map.set('10♥', 35);
  map.set('J♥', 36);
  map.set('Q♥', 37);
  map.set('K♥', 38);
  map.set('A♠', 39);
  map.set('2♠', 40);
  map.set('3♠', 41);
  map.set('4♠', 42);
  map.set('5♠', 43);
  map.set('6♠', 44);
  map.set('7♠', 45);
  map.set('8♠', 46);
  map.set('9♠', 47);
  map.set('10♠', 48);
  map.set('J♠', 49);
  map.set('Q♠', 50);
  map.set('K♠', 51);
  return map.get(value);
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
