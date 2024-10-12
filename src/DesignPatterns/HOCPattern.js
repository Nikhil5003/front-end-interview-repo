// this is a pattern where we take one component as a props in another functional components and write some logic amd render that component by passing down some props for better reusability
//  function abc(ELe , data){
// return <Ele {...data} />

// }

//Example is connect in redux where we connect the component to redux with some states and actions

//connect(mapStateToProps, userActions)(MyComponent) => connect(a,v) return a function which accept a component (MyComponent)

//Pseudo code for connect

// export function connect(a, b) {
//   return function connectRedux(Component) {
//     return <Component a={a} b={b} />;
//   };
// }

//this is a closure implementaion
