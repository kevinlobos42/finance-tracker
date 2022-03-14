import { Route, Routes } from 'react-router-dom';
import './App.less';
import LoggedIn from './components/LoggedIn';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import useStore from './store';

function App() {
  const isLoggedIn = useStore(state=>state.user.loggedIn)
  return (
    
    <div className="App">
      
        <Routes>
        {
          isLoggedIn?
          <>
            <Route path='/' element={<LoggedIn />} />
          </>
          :
          <>
            <Route path='/' element={<SignIn />} />
            <Route path='signup' element={<SignUp />} />
          </>
        }
        </Routes>

    </div>
  );
}

export default App;
