import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route, Link } from 'react-router-dom';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';
import PageNotFound from './PageNotFound';
import s from '../styles/exampleComponent.style';
import lifecycle from 'react-pure-lifecycle';
import Fade from 'react-reveal/Fade';
import img from '../imgs/me.jpg';
import d3 from 'd3-timelines';
import ReactFitText from 'react-fittext';

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

/*<Interactive
                as={Link}
                {...s.link}
                to="/example/two-deep?field1=foo&field2=bar#boom!"
              >Example two deep with query and hash</Interactive>*/

const ExamplePageText = () => (
  <p style={s.p}>
    <div id="#timeline1"></div>
    
    <span style={s.styleone}>I'm <span style={s.styletwo}>Andy Acosta</span> and I am a <span style={s.styletwo}>software developer</span>! 
    At twelve, I decided to teach myself to code, leading to a B.S. in <span style={s.styletwo}>Computer Science</span> from The George Washington University.
    I am currently doing Salesforce development but have a background in <span style={s.styletwo}>full stack web development</span>. I specialize in <span style={s.styletwo}>Java</span> and <span style={s.styletwo}>JavaScript</span>, but 
    I'm always looking for new languages and frameworks to learn.</span>
    
    <br/>
    <br/>
      <span style={s.styleone}>When I'm not coding, you can find me <span style={s.styletwo}>running</span> on the trails, <span style={s.styletwo}>traveling</span> to new places, or <span style={s.styletwo}>eating chicken tenders</span> with ranch.</span>
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
            <ReactFitText compressor={2.75}>
              <ExamplePageText />
            </ReactFitText>
            <div style={s.pageLinkContainer}>
              
            </div>
          </div>
        )}
      />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default lifecycle(methods)(ExampleComponent);