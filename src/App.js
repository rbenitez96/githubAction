import logo from './logo.svg';
import './App.css';
import { S3Uploader} from './components/S3Uploader';
import { S3Viewer } from './components/S3Viewer';
import { useState } from 'react';
import {LambdaForm} from "./components/LambdaForm";
import { DynamoViewer } from './components/DynamoViewer';
function App() {

  return (
    <div className="App">
      <header className="App-header">
          <S3Uploader></S3Uploader>
          <S3Viewer></S3Viewer>
          <LambdaForm></LambdaForm>
          <DynamoViewer></DynamoViewer>
      </header>
    </div>
  );
}

export default App;
