// function useData<T>(params: { fetchData: () => Promise<T>; initialData?: T }): {
//   getData: () => T | undefined;
// } {
//   let data = params.initialData;
//   params.fetchData().then(d => {
//     data = d;
//   });

//   return {
//     getData: () => data,
//   };
// }

// here if we have the initial data then it should return the T but not undefined

function useData<T>(params: { fetchData: ()=> Promise<T> }): {
    getData: () => T | undefined;
}
function useData<T>(params: { fetchData: ()=> Promise<T>, initialData: T}): {
    getData: () => T ;
}
function useData<T>(params: { fetchData: () => Promise<T>; initialData?: T }) {
  let data = params.initialData;
  params.fetchData().then(d => {
    data = d;
  });

  return {
    getData: () => data,
  };
}
