import {useState} from 'react'
import './App.scss';
import InputInformation from './components/InputInformation';
import Rate from './components/Rate';

function App() {
  const [gbValues, setgbValues] = useState({storage: 0, transfer: 0})

  const changeStorageValue = (value) => setgbValues({...gbValues, storage: value})
  const changeTransferValue = (value) => setgbValues({...gbValues, transfer: value})

  return (
    <div className="wrapper">
      <InputInformation gbValues={gbValues} changeStorageValue={changeStorageValue} changeTransferValue={changeTransferValue}/>
      <Rate gbValues={gbValues} />
    </div>
  );
}

export default App;
