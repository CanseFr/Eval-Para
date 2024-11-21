
function getRandomWithRange(min, max) {
    return Math.random() * (max - min) + min;
}

function createTask(name, min, max, duration) {
    return new Promise((resolve) => {
        console.log(`${name} démarre`);
        setTimeout(() => {
            const result = Math.floor(getRandomWithRange(min, max));
            console.log(`${name} termine`);
            resolve(result);
        }, duration);
    });
}

const task1 = createTask("task1", 1, 100, 2000);
const task2 = createTask("task2", 101, 200, 7000);
const task3 = createTask("task3", 201, 300, 7000);

Promise.all([task1, task2, task3])
    .then((results) => {
        results.forEach((res, index) => {
            console.log(`Résultat de la tâche ${index + 1} : ${res}`);
        });

        const sum = results.reduce((acc, val) => acc + val, 0);
        console.log(`Somme des résultats : ${sum}`);
    })
    .catch((error) => {
        console.error("Error :", error);
    });


//OLD
// function getRandomWithRange(min, max) {
//     return Math.random() * (max - min) + min;
// }
//
// const task1 = new Promise((resolveOuter) => {
//     console.log("task1 démarre");
//     resolveOuter(
//         new Promise((resolveInner) => {
//             setTimeout(() => resolveInner(Math.floor(getRandomWithRange(1, 100))), 2000);
//             console.log("task1 termine");
//         })
//     );
// });
//
// const task2 = new Promise((resolveOuter) => {
//     console.log("task2 démarre");
//     resolveOuter(
//         new Promise((resolveInner) => {
//             setTimeout(() => resolveInner(Math.floor(getRandomWithRange(101, 200))), 7000);
//             console.log("task2 termine");
//         })
//     );
// });
//
// const task3 = new Promise((resolveOuter) => {
//     console.log("task3 démarre");
//     resolveOuter(
//         new Promise((resolveInner) => {
//             setTimeout(() => resolveInner(Math.floor(getRandomWithRange(201, 300))), 7000);
//             console.log("task3 termine");
//         })
//     );
// });
//
// const responseList = Promise.all([task1, task2, task3]);
//
// responseList
//     .then((results) => {
//         results.map((res, index) => {
//             console.log(`Résultat de la tâche ${index + 1} : ${res}`);
//         });
//
//         const sum = results.reduce((acc, val) => acc + val, 0);
//         console.log(`Résultats somme : ${sum}`);
//     })
//     .catch((error) => {
//         console.error("Error :", error);
//     });


// NON
//
// function getRandomWithRange(min:number , max: number): number {
//     return Math.random() * (max - min) + min;
// }
//
// const task1 = new Promise((resolveOuter) => {
//     console.log("task1 démarre")
//     resolveOuter(
//         new Promise((resolveInner) => {
//             setTimeout(() => resolveInner(getRandomWithRange(1,100)), 2000);
//             console.log("task1 termine")
//         })
//     );
// });
//
// const task2 = new Promise((resolveOuter) => {
//     console.log("task2 démarre")
//     resolveOuter(
//         new Promise((resolveInner) => {
//             setTimeout(() => resolveInner(getRandomWithRange(101,200)), 7000);
//             console.log("task2 termine")
//         })
//     );
// });
//
// const task3 = new Promise((resolveOuter) => {
//     console.log("task3 démarre")
//     resolveOuter(
//         new Promise((resolveInner) => {
//             setTimeout(() => resolveInner(getRandomWithRange(201,300)), 7000);
//             console.log("task3 termine")
//         })
//     );
// });
//
//
// const responseList = Promise.all([task1,task2, task3])
//
// responseList.map((res, index) => console.log(`Resultat de la tache ${index} : ${res}`))
//
//
//