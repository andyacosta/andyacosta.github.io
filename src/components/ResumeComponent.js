import React, { Component } from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import Repos from './Repos';
import PageNotFound from './PageNotFound';
import s from '../styles/exampleComponent.style';
import lifecycle from 'react-pure-lifecycle';
import GitHub from 'github-api';


/*const gh = new GitHub({
	'token' : '32cb6ae8a3df7dfafe93e43f091b48fd099af9f0',
});

const me = gh.getUser();

var repoText;
const repos = me.listRepos()
	.then((result) => {
		console.log(JSON.stringify(result.data));
		this.repoText == JSON.parse(result.data);
	});

*/

const componentWillMount = () => {
  console.log('I mounted!');
  const ele = document.getElementById('loader')
  const ele2 = document.getElementById('root')
  if(ele){
      ele.outerHTML = ''
      ele2.className = ''
  }
};

const methods = {
  componentWillMount
};

const ResumePageText = () => (
  <p style={s.p}>
    This is a resume page. Refresh the page or copy/paste the url to
    test out the redirect functionality (this same page should load
      after the redirect).
  </p>
);

const ResumeComponent = () => {
  return (
    <Switch>
      <Route
        exact path="/resume"
        render={() => (
          <div>
            <ResumePageText />
            <Repos />
            <div style={s.pageLinkContainer}>
            	stuff~
            </div>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default lifecycle(methods)(ResumeComponent);

/*class ResumeComponent extends React.Component{
  render(){
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

export default ResumeComponent

 const ResumePageText = () => (
   <p style={s.p}>
     Here is the resume information.
   </p>
 );

 export default function ResumeComponent() {
   return (
     <Switch>
       <Route
         exact path="/resume"
         render={() => (
           <div>
             <ResumePageText />
           </div>
         )}
       />
       <Route component={PageNotFound} />
     </Switch>
   );
 }
*/