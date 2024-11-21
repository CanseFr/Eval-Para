// Exercice 3 : Différentes utilisation de Task...

function simulateDownload(name, duration) {
    return new Promise((resolve) => {
        console.log(`${name} commence`);
        setTimeout(() => {
            console.log(`${name} est terminé`);
            resolve(name);
        }, duration);
    });
}

const download1 = simulateDownload("Telechargement 1", 6000);
const download2 = simulateDownload("Telechargement 2", 3000);
const download3 = simulateDownload("Telechargement 3", 4000);

Promise.race([download1, download2, download3])
    .then((firstFinished) => {
        console.log(`Premiere tâche terminée est le ${firstFinished}`);
    });

Promise.all([download1, download2, download3])
    .then(() => {
        console.log("________________________________________");
        console.log("Tous les telechargements sont terminés !");
        console.log("________________________________________");
    })
    .catch((error) => {
        console.error("ERROR :", error);
    });

// BASE
// function simulateDownload(name, duration) {
//     return new Promise((resolve) => {
//         console.log(`${name} commence`);
//         setTimeout(() => {
//             console.log(`${name} est terminé`);
//             resolve(name);
//         }, duration);
//     });
// }
//
// const download1 = new Promise((resolve) => {
//     console.log("Telchargement 1 commence");
//     setTimeout(() => {
//         console.log("Telchargement 1 est terminé");
//         resolve("Telchargement 1");
//     }, 6000);
// });
//
// const download2 = new Promise((resolve) => {
//     console.log("Telchargement 2 commence");
//     setTimeout(() => {
//         console.log("Telchargement 2 est terminé");
//         resolve("Telchargement 2");
//     }, 3000);
// });
//
// const download3 = new Promise((resolve) => {
//     console.log("Telchargement 3 commence");
//     setTimeout(() => {
//         console.log("Telchargement 3 est terminé");
//         resolve("Telchargement 3");
//     }, 4000);
// });
//
// Promise.race([download1, download2, download3])
//     .then((firstFinished) => {
//         console.log(`Premiere tâche terminée est le ${firstFinished}`);
//     });
//
// Promise.all([download1, download2, download3])
//     .then(() => {
//         console.log("Terminés !");
//     })
//     .catch((error) => {
//         console.error("ERROR :", error);
//     });

// MDN INFO
// Promise.race : Utilisez lorsque vous voulez savoir quelle tâche termine la première, par exemple pour des courses entre tâches, des timeouts ou des tests de performance.
// Promise.all : Utilisez lorsque vous avez besoin des résultats de toutes les tâches (par exemple, pour agréger des données ou attendre plusieurs actions).