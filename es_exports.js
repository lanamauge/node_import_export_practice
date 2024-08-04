// export f1 as named export
export function f1() {
    console.log("Hi from Function 1 -- I am an ES export");
};

function f2() {
    console.log("Hi from Function 2 -- I am an ES export");
}

function f3() {
    console.log("Hi from Function 3 -- I am an ES export")
}

// export f2 as default export
// you can only have one default per file
export default f2;

// another way of exporting a named export
export { f3 };