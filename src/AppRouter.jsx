import React from 'react';
import { Button, message } from 'antd';


export default function AppRouter() {

  return (
    <Button onClick={ () => {
      message.info( '开启!' );
    } }>click to Start</Button>
  )
}