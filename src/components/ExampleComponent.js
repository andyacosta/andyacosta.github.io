import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import s from '../styles/exampleComponent.style';
import lifecycle from 'react-pure-lifecycle';
import Fade from 'react-reveal/Fade';
import img from '../imgs/me.jpg';

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

//<img src={img} height="200"/>

const ExamplePageText = () => (
  <p style={s.p}>
    
    I'm Andy Acosta and I am a software developer! 
    At twelve, I decided to teach myself to code, leading to a B.S. in Computer Science from The George Washington University.
    I am currently doing Salesforce development but have a background in front-end/back-end web. I specialize in Java and JavaScript, but 
    I'm always looking for new languages and frameworks to learn. 
    <br/>
    When I'm not coding, you can find me running on the trails, traveling to new places, or eating chicken tenders with ranch.

  </p>
);

const ExampleComponent = () => {
  return (
    <Switch>
      <Route
        exact path="/example/two-deep"
        render={({ location }) => (
          <div>
            <ExamplePageText />
            <ExampleTwoDeepComponent location={location} />
          </div>
        )}
      />
      <Route
        exact path="/example"
        render={() => (
          <div>
            <Fade bottom>
              <ExamplePageText />
            </Fade>
            <div style={s.pageLinkContainer}>
              <Interactive
                as={Link}
                {...s.link}
                to="/example/two-deep?field1=foo&field2=bar#boom!"
              >Example two deep with query and hash</Interactive>
            </div>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default lifecycle(methods)(ExampleComponent);

/*export default function ExampleComponent() {
  return (
    <Switch>
      <Route
        exact path="/example/two-deep"
        render={({ location }) => (
          <div>
            <ExamplePageText />
            <ExampleTwoDeepComponent location={location} />
          </div>
        )}
      />
      <Route
        exact path="/example"
        render={() => (
          <div>
            <ExamplePageText />
            <div style={s.pageLinkContainer}>
              <Interactive
                as={Link}
                {...s.link}
                to="/example/two-deep?field1=foo&field2=bar#boom!"
              >Example two deep with query and hash</Interactive>
            </div>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
}*/
