import {useCallback, useEffect, useState} from 'react';
import {Button} from 'antd'

import axiosInstance from './axiosInstance';
import useExecutionStatus from './hooks/useExecutionStatus'
import DataTable from './DataTable'

import 'antd/dist/antd.css';
import './App.css'

const taskId = 'classification';

function App() {
  const [dataSource, setDataSource] = useState(null)
  const {status: pollStatus, startPolling} = useExecutionStatus({ taskId })

  const onClick = useCallback(() => {
    axiosInstance.post('/execute', {
        taskId
      }).then((response)=>{
        console.log("execute response", response.data)
        startPolling()
      })
      .catch((error)=>{
        console.log("execute error", error);
      })
  }, [startPolling])

  useEffect(() => {
    axiosInstance.get('/executionResult').then((response) => {
      console.log("executionResult response", response.data)
      setDataSource(response.data.counter)
    })
  }, [])

  return (
    <div className="App">
      <h1>Pair coding exercise</h1>

      <div>
        {pollStatus}
      </div>

      <Button type="primary" onClick={onClick}>
        Primary Button
      </Button>

      {dataSource && <DataTable dataSource={dataSource}/>}
    </div>
  );
}

export default App;
