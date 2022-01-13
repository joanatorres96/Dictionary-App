import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
     <Dictionary />
     <div className='text-center pb-2 fs-5'>
        <p> <a href='https://github.com/joanatorres96/Dictionary-App'title='Github Link' target={"_blank"} rel={"noreferrer"} className='link'>Open-source code</a>{" by "}<a href='https://cranky-poincare-a3701c.netlify.app/' target={"_blank"} rel={"noreferrer"} className='link'>Joana Torres</a>. </p>
      </div>
    </div>
  );
}

export default App;
