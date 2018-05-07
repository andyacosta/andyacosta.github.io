import style from './style';

const s = Object.create(style);

s.form = {
  padding: '15px 0',
};

s.input = {
  fontFamily: 'Open Sans, sans-serif',
};

s.inputText = {
  width: '100%',
  padding: '5px',
  border: 'none',
};

s.textArea = {
  width: '100%',
  border: 'none',
};

s.submitButton = {
  fontFamily: 'Open Sans, sans-serif',
  fontSize: '14px',
  padding: '5px',
  border: '1px solid black',
  backgroundColor: '#ffffff',
  float: 'right',
};

export default s;
