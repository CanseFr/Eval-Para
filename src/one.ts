console.log("Happy developing ✨");

function createTask(name, duration = 2000) {
    return () => new Promise((resolve) => {
        console.log(`${name} démarre`);
        setTimeout(() => {
            console.log(`${name} termine`);
            resolve();
        }, duration);
    });
}

const A = createTask("A");
const B = createTask("B");
const C = createTask("C");
const D = createTask("D");

A()
    .then(() => Promise.all([B(), C()]))
    .then(() => D())
    .then(() => console.log("Terminé"));



// Base
//
// const A = new Promise((resolve) => {
//     console.log("A démarre");
//     setTimeout(() => {
//         console.log("A termine");
//         resolve("A resolved");
//     }, 2000);
// });
//
// const B = new Promise((resolve) => {
//     console.log("B démarre");
//     setTimeout(() => {
//         console.log("B termine");
//         resolve("B resolved");
//     }, 2000);
// });
//
// const C = new Promise((resolve) => {
//     console.log("C démarre");
//     setTimeout(() => {
//         console.log("C termine");
//         resolve("C resolved");
//     }, 2000);
// });
//
// const D = new Promise((resolve) => {
//     console.log("D démarre");
//     setTimeout(() => {
//         console.log("D termine");
//         resolve("D resolved");
//     }, 2000);
// });
//
// A.then(() => B)
//     .then(() => C)
//     .then(() => D)
//     .then(() => console.log("OK"));
