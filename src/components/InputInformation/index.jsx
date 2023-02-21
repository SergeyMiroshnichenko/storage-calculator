import React from 'react'
import RangeItem from './RangeItem'

const InputInformation = (props) => {

  return (
    <div className="input_information">
        <RangeItem gbValue={props.gbValues.storage} changeGbValue={props.changeStorageValue} label="Storage"/>
        <RangeItem gbValue={props.gbValues.transfer} changeGbValue={props.changeTransferValue} label="Transfer" />
    </div>
  )
}

export default InputInformation