import React from 'react'
import { Progress } from 'antd';
export default function Dashboard() {
  return (
    <>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
    
  </>
  )
}
