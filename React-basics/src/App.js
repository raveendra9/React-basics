import logo from './logo.svg';
import './App.css';
import Hi from './components/Hi';
import Welcome from './components/welcome';
import LifeCycle from './components/LifeCycle';
import Login from './components/Login';
import UsestatePractice from './components/usestate';
import Form from './components/Form';
import Formvalidation from './components/Formvalidation';
import HookCounter from './components/HookCounter';
import FunctionalComponent from './components/FunctionalComponent';


function App() {
  return (
    <div className="App">
    {/* <FunctionalComponent name={Welcome} /> */}
      {/* { <HookCounter /> } */}
      {  <Formvalidation /> }
      { <Form />}
      {/* <UsestatePractice /> */}
       <Login />
       {/* <Hi /> */}
      {/* <LifeCycle /> */}
      {/* <Welcome /> */}
    </div>
  );
}

export default App;
