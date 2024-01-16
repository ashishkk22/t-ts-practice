//what is function overload

/**
 * This time let's solve this with function overloads !
 * return what i pass in
 */

// const returnWhatIPassIn = (t) => {
//     return t;
// }

// const one = returnWhatIPassIn(1);
// const matt=  returnWhatIPassIn("ashish")

function returnWhatIPassIn(t: "ashish"): "ashish";
function returnWhatIPassIn(t: 1): 1;
function returnWhatIPassIn(t: unknown) {
  return t;
}

const one = returnWhatIPassIn(1);
const ashish = returnWhatIPassIn("ashish");

const returnWhatPass = <T>(t: T) => {
  return t;
};

const ak = returnWhatPass(1);
