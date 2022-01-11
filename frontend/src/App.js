import {useEffect} from 'react';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8008',
  headers: { Accept: 'application/json;charset=UTF-8' }
});

function App() {

  useEffect(()=>{
    const taskId = 'classification';

    axiosClient.post('/execute', {
      taskId
    }).then((response)=>{
      console.log("execute response", response.data)
    })
    .catch((error)=>{
      console.log("execute error", error);
    })
  }, []);

  return (
    <div className="App">
      <h1>Pair coding exercise</h1>
    </div>
  );
}

export default App;
