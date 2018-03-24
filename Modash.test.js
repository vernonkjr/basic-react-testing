import Modash from './Modash';

function assertEqual(description, actual, expected) {
  if (actual === expected) {
    console.log(`[PASS] ${description}`);
  } else {
    console.log(`[FAIL] ${description}`);
    console.log(`\tactual: '${actual}'`);
    console.log(`\texpected: '${expected}'`);
  }
}

let actual;
let expected;
let string;

string = 'there was one catch, and that was CATCH-22';
actual = Modash.truncate(string, 19);
expected = 'there was one catch...';

assertEqual('`truncate()`: truncates a string', actual, expected);

// second test
actual = Modash.truncate(string, string.length);
expected = string;
assertEqual('`truncate()`: no-ops if <= length', actual, expected);

// test capitalize
actual = Modash.capitalize(string);
expected = 'There was one catch, and that was catch-22';
assertEqual('`capitalize()`: capitalizes the string', actual, expected);

// test camelCase
// string with spaces
string = 'customer responded at';
actual = Modash.camelCase(string);
expected = 'customerRespondedAt';
assertEqual('`camelCase()`: string with spaces', actual, expected);

//string with underscore
string = 'customer_responded_at';
actual = Modash.camelCase(string);
expected = 'customerRespondedAt';
assertEqual('`camelCase()`: string with undersocre', actual, expected);
