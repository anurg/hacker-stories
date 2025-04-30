// setTimeout(() => {
//   console.log(`1 second passed`);
//   setTimeout(() => {
//     console.log(`2 second passed`);
//     setTimeout(() => {
//       console.log(`3 second passed`);
//       setTimeout(() => {
//         console.log(`4 second passed`);
//         setTimeout(() => {
//           console.log(`5 second passed`);
//           setTimeout(() => {
//             console.log(`6 second passed`);
//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const wait = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

wait(1000)
  .then(() => {
    console.log(`1 second passed`);
    return wait(1000);
  })
  .then(() => {
    console.log(`2 second passed`);
    // Let's say we want to simulate an error here
    throw new Error("Something went wrong at step 2");
    return wait(1000);
  })
  .catch((error) => {
    console.error(`Error in first 2 steps:`, error);
    // Continue the chain by returning a new promise
    return wait(1000);
  })
  .then(() => {
    console.log(`3 second passed.`);
    return wait(1000);
  })
  .then(() => {
    console.log(`4 second passed.`);
    return wait(1000);
  })
  .then(() => {
    console.log(`5 second passed.`);
    return wait(1000);
  })
  .then(() => {
    console.log(`5 second passed.`);
    return wait(1000);
  });

// const wait = (ms) => {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// };
// async function countSeconds() {
//   await wait(1000);
//   console.log(`1 second Passed`);

//   await wait(1000);
//   console.log(`2 second Passed`);

//   await wait(1000);
//   console.log(`3 second Passed`);

//   await wait(1000);
//   console.log(`4 second Passed`);

//   await wait(1000);
//   console.log(`5 second Passed`);

//   await wait(1000);
//   console.log(`6 second Passed`);
// }

// countSeconds();
