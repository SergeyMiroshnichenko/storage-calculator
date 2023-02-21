import React from 'react'
import { pricesConfig } from '../utils'

const DataThumb = (props) => {
    console.log(props)
    const fillColor = props.min === props.sum && props.sum !== 0 ? pricesConfig[props.configKey].color : 'grey'
    const percent = (props.sum / props.max) *100
    console.log(percent)

  return (
    <div className='thumb_container' >
        <div className={`data_fill ${fillColor}`} style={{width: `${percent}%`}} >
            {props.sum}
        </div>
    </div>
  )
}

export default DataThumb