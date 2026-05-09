console.log('Testing our first TypeScript file');

let name: string = 'name';

console.log(`Hello, ${name.toUpperCase()}!`);

let numbers: number[] = [1, 2, 3, 4, 5];
numbers.push(6);

console.log(numbers);

let booleanArray: Array<boolean> = [true, false, true];

console.log(booleanArray);

let numberArray: Array<number> = [1, 2, 3, 4, 5]; //interchangeable with number[] syntax
console.log(numberArray[0] * 2);

//let mixedArray = [1, "apple", true];  // TypeScript infers 'mixedArray' as (string | number | boolean)[]
// console.log(mixedArray[0].toFixed(2));  // Error: Property 'toFixed' does not exist on type 'string | boolean'

function printId (id: number | string) {
    console.log(`Your ID is: ${id}`);
}

printId(123);
printId("abc123");
// printId(true); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number | string'.

type ID = number | string;
function getIdwithType (id: ID) {
    console.log(`Your ID is: ${id}`);
}

getIdwithType(123);
getIdwithType("abc123");

function combineValues(value: number): number {
    let anotherValute: number = 10;
    return value + anotherValute;
}

const result = combineValues(5);
console.log(result);

// Unkbnown
// TypeScript requires you to narrow unknown to a specific type (e.g., string, number) using type guards (typeof, instanceof, etc.) before you can access its properties or methods.
function processValue(input: unknown): string{
    if (typeof input === 'string') {
        return `String value: ${input}`;
    } else if (typeof input === 'number') {
        return `Number value: ${input}`;
    } else {
        return 'Unknown type';
    }
}

console.log(processValue("Hello"));
console.log(processValue(42));
console.log(processValue(true));

let carObj = { car: 'Toyota', brand: 2024};
console.log(carObj);

let carOne: { car: string; brand: number } = { car: 'Honda', brand: 2023 };
console.log(carOne);

// carOne = { car: 'Ford', brand: 2022, color: 'red' }; 
// Error: Object literal may only specify known properties, and 'color' does not exist in type '{ car: string; brand: number; }'.  

//Readonly
// arrays
let veggies: readonly { name: string; color: string }[] = [
    { name: 'Carrot', color: 'orange' },
    { name: 'Spinach', color: 'green' }
];

// veggies.push({ name: 'Carrot', color: 'orange' }); 
// Error: Property 'push' does not exist on type 'readonly { name: string; color: string; }[]'.
veggies[0].name = 'Tomato'; // Allowed, we can modify the properties of the objects in the array

// values
let veggies2: {readonly name: string; readonly color: string}[] = [
    { name: 'Carrot', color: 'orange' },
    { name: 'Spinach', color: 'green' }
];

veggies2.push({name: 'Broccoli', color: 'green'}); // Allowed, we can add new objects to the array
// veggies2[0].name = 'Tomato'; // Error: Cannot assign to 'name' because it is a read-only property.

let veggies3: ReadonlyArray<{ readonly name: string; readonly color: string }> = [
    { name: 'Carrot', color: 'orange' },
    { name: 'Spinach', color: 'green' }
];

// veggies3.push({ name: 'Broccoli', color: 'green' }); 
// Error: Property 'push' does not exist on type 'readonly { name: string; color: string; }[]'.
// veggies3[0].name = 'Tomato'; 
// Error: Cannot assign to 'name' because it is a read-only property.

// Default params
function greet(name: string = 'Guest'): string {
    return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet('Alice')); // Output: Hello, Alice!

//Rest parameters
function joinWOrds(...words: string[]): string {
    return words.join(' ');
}

let sentence = joinWOrds('TypeScript', 'is', 'ok');
console.log(sentence);

function sumNumbers(...numbers: number[]): number{
    return numbers.reduce((total, num)=> total + num, 0);
}

let total = sumNumbers(10, 20, 30);
console.log(total);
let total2 = sumNumbers(...[10, 20, 30]);
console.log(total2);


function sumNumbers2(numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

let total3 = sumNumbers2([10, 20, 30]);
console.log(total3);

function mergeArrays(...arrays: number[][]): number[] {
    return arrays.reduce((merged, arr) => merged.concat(arr), []);
}

let mergedArray = mergeArrays([1, 2], [3, 4], [5]);
console.log(mergedArray);

// Rest parameters must always come last in the parameter list.
function restParamExample(a: number, b: number, ...rest: number[]): void {
    let sumRest = rest.reduce((total, num) => total + num, 0);
    console.log(`a: ${a}, b: ${b}, rest: ${sumRest}`);
}

restParamExample(1, 2, 3, 4, 5); // Output: a: 1, b: 2, rest: 12

function createEmployee({ id }: { id: number }): { id: number; isActive: boolean } {
  return { id, isActive: id % 2 === 0 };
}

const firstEmployee = createEmployee({ id: 1 });
console.log(firstEmployee); // { id: 1, isActive: false }

const secondEmployee = createEmployee({ id: 2 });
console.log(secondEmployee); // { id: 2, isActive: true }

function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome, ${student.name}!`);
}

const newStudent = { id: 1, name: "John" };
createStudent(newStudent); // "Welcome, John!"

const newStudent2 = { id: 2, name: "Makoto", age: 20 }; // Extra property 'age'

createStudent(newStudent2); // Does not error

//createStudent({ id: 2, name: "Makoto", age: 20 }); // Does error

// Type assertion to bypass excess property checks
const studentWithExtras = { id: 1, name: "John with extras", age: 20 };
createStudent(studentWithExtras as { id: number; name: string }); // No error, but not recommended
// While this works, it’s better to match the expected structure instead of using type assertion.

type UserInfo = { name: string, age: number, address: string };

// Type Aliases
function getUserInfo(user: UserInfo): void {
  console.log(`User Info: 
    Name: ${user.name}, 
    Age: ${user.age}, 
    Address: ${user.address}`);
}

const user: UserInfo = { name: 'Alice', age: 30, address: '123 Main St' };

getUserInfo(user);

//const invalidUser: UserInfo = { name: "Alice" };
// Error: getUserInfo(user); Type '{ name: string; }' is missing the following properties from type 'UserInfo': age, address

// Intersection Type
type Person = { name: string; age: number };
type Employee = { employeeId: number; department: string };

type EmployeeInfo = Person & Employee;

const employeeInfo: EmployeeInfo = {
    name: 'Bob',
    age: 25,
    employeeId: 12345,
    department: 'Engineering'
};

console.log(employeeInfo);

// interface
interface PersonInterface {
    name: string;
    age: number;
}

interface EmployeeInterface {
    employeeId: number;
    department: string;
}

interface EmployeeInfoInterface extends PersonInterface, EmployeeInterface {}

const employeeInfoInterface: EmployeeInfoInterface = {
    name: 'Bob',
    age: 25,
    employeeId: 12345,
    department: 'Engineering'
};

console.log(employeeInfoInterface);

interface Add {
  (a: number, b: number): number;
}

const add: Add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8
// console.log(add('test', 'ing')); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

interface StringDictionary {
  [key: string]: string;
}

const dictionary: StringDictionary = {
  hello: "world",
  name: "Alice",
};

const dictionaryNumber : StringDictionary = {
    1: "1",
    2: "2"
};