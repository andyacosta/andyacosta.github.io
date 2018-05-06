import style from './style';

const s = Object.create(style);

s.repoLink = {
  fontSize: '14px',
};

s.breadcrumbs = {
  margin: '3vh 0',
};

s.footer = {
  position: 'absolute',
  left:'0',
  bottom: '0',
  height: '100px',
  textAlign: 'center',
  width: '100%',
};

s.footerIcons = {
  width: '200px',
  margin: '0 auto',
  paddingTop: '30px',
};

s.creditLine = {
  color: '#A0A0A0',
  fontSize: '14px',
  fontFamily: 'Open Sans, sans-serif',
};

export default s;
