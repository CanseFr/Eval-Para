// Exercice 4 : Réalisation d'un graphe plus complexe avec gestion d'erreur

function createPromise(name, duration, shouldFail = false) {
    return new Promise((resolve, reject) => {
        console.log(`${name} demarre`);
        setTimeout(() => {
            if (shouldFail) {
                console.error(`${name} a echoué avec erreur : BUG DE L'AN 2000`);
                reject(new Error(`${name} failed`));
            } else {
                console.log(`${name} termine`);
                resolve(`${name} resolved`);
            }
        }, duration);
    });
}

const taskA = createPromise("A", 2000);

const taskB = taskA.then(() => createPromise("B", 3000));
const taskC = taskA.then(() => createPromise("C", 1000));

const taskD = Promise.all([taskB, taskC])
    .then(() => createPromise("D", 4000, true))
    .catch((error) => {
        console.log(`D a échoué : ${error.message}`);
        throw error;
    });

const taskE = taskD
    .then(() => createPromise("E", 3000))
    .catch(() => {
        console.log("E ne peut pas demarrer du a l'éche de D.");
    });

const taskF = taskC.then(() => createPromise("F", 2000));

Promise.all([taskE, taskF]).then(() => {
    console.log("Exécution du workflow terminée.");
});




// const A = new Promise(() => {
//     console.log("A démarre");
//     setTimeout(() => {
//         console.log("A termine");
//     }, 2000);
// });
//
// const B = new Promise(() => {
//     console.log("B démarre");
//     setTimeout(() => {
//         console.log("B termine");
//     }, 3000);
// });
//
// const C = new Promise(() => {
//     console.log("C démarre");
//     setTimeout(() => {
//         console.log("C termine");
//     }, 1000);
// });
//
// const D = new Promise(() => {
//     console.log("D démarre");
//     setTimeout(() => {
//         console.log("D termine");
//     }, 4000);
// });
//
// const E = new Promise(() => {
//     console.log("D démarre");
//     setTimeout(() => {
//         console.log("D termine");
//     }, 3000);
// });
//
// const F = new Promise(() => {
//     console.log("D démarre");
//     setTimeout(() => {
//         console.log("D termine");
//     }, 2000);
// });
//
//
//
// // A.then(() => Promise.all([B,C]))
//
// // const task1 = A
// // const task2 = Promise.all([B, C])
//
//
//     // .then(() => C)
//     // .then(() => D)
//     // .then(() => console.log("OK"));

//
// const A = new Promise((resolve) => {
//     console.log("A démarre");
//     setTimeout(() => {
//         console.log("A termine");
//         resolve("A resolved");
//     }, 2000);
// });
//
// function taskB() {
//     return new Promise((resolve) => {
//         console.log("B démarre");
//         setTimeout(() => {
//             console.log("B termine");
//             resolve("B resolved");
//         }, 3000);
//     });
// }
//
// function taskC() {
//     return new Promise((resolve) => {
//         console.log("C démarre");
//         setTimeout(() => {
//             console.log("C termine");
//             resolve("C resolved");
//         }, 1000);
//     });
// }
//
// function taskD() {
//     return new Promise((resolve, reject) => {
//         console.log("D démarre");
//         setTimeout(() => {
//             const shouldFail = true;
//             if (shouldFail) {
//                 console.error("D a échoué avec l'erreur : [Erreur simulée]");
//                 reject(new Error("D failed"));
//             } else {
//                 console.log("D termine");
//                 resolve("D resolved");
//             }
//         }, 4000);
//     });
// }
//
// function taskE() {
//     return new Promise((resolve) => {
//         console.log("E démarre");
//         setTimeout(() => {
//             console.log("E termine");
//             resolve("E resolved");
//         }, 3000);
//     });
// }
//
// function taskF() {
//     return new Promise((resolve) => {
//         console.log("F démarre");
//         setTimeout(() => {
//             console.log("F termine");
//             resolve("F resolved");
//         }, 2000);
//     });
// }
//
// A.then(() => {
//     return Promise.allSettled([taskB(), taskC()]);
// })
//     .then((results) => {
//         const bResult = results[0];
//         const cResult = results[1];
//
//         if (bResult.status === "fulfilled" && cResult.status === "fulfilled") {
//             return taskD();
//         }
//
//         if (bResult.status === "rejected") {
//             console.log(`B ne peut pas continuer : ${bResult.reason}`);
//         }
//         if (cResult.status === "rejected") {
//             console.log(`C ne peut pas continuer : ${cResult.reason}`);
//         }
//
//         return Promise.reject(new Error("D ne peut pas start en raison des échecs de B ou C."));
//     })
//     .then(