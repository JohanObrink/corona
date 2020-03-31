import React from 'react'
import { useParams } from 'react-router-dom'

export default () => {
  const { reportId } = useParams()
  return (
    <div>Report {reportId}</div>
  )
}
