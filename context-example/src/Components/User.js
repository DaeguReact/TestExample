import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const User = (props) => {
  let params = useParams()
  useEffect(() => {
    console.log(params)
  }, [])
  return <div>UserId: {params.id}</div>
}
export default User
