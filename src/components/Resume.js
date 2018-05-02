import React, { Component } from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import s from '../styles/exampleComponent.style';

class ResumeComponent extends React.Component{
  render(){
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

export default ResumeComponent

// const ResumePageText = () => (
//   <p style={s.p}>
//     Here is the resume information.
//   </p>
// );

// export default function ResumeComponent() {
//   return (
//     <Switch>
//       <Route
//         exact path="/example/two-deep"
//         render={({ location }) => (
//           <div>
//             <ResumePageText />
//             <ExampleTwoDeepComponent location={location} />
//           </div>
//         )}
//       />
//       <Route
//         exact path="/resume"
//         render={() => (
//           <div>
//             <ResumePageText />
//           </div>
//         )}
//       />
//       <Route component={PageNotFound} />
//     </Switch>
//   );
// }
