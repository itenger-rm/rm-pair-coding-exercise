import { useCallback, useState } from 'react'
import {useInterval} from 'react-use'
import axiosInstance from '../axiosInstance'

const useExecutionStatus = ({taskId, interval = 1000}) => {
  const [isStatusCheckRunning, setIsStatusCheckRunning] = useState(false);
  const [status, setStatus] = useState('')
  
  useInterval(() => {
    axiosInstance.get(`/executionStatus?taskId=${taskId}`)
      .then((response)=>{
        setStatus(response.data.status)
        if (response.data.status === 'result') {
          setIsStatusCheckRunning(false)
        }
        console.log(response.data.status)
      })
      .catch((error) => {
        console.log(error.message)
        setStatus('error')
        setIsStatusCheckRunning(false)
      })
  }, isStatusCheckRunning ? interval : null)

  const startPolling = useCallback(() => {
    setIsStatusCheckRunning(true)
  }, [setIsStatusCheckRunning])

  return {
    status,
    startPolling,
    error: {}
  }
}

export default useExecutionStatus