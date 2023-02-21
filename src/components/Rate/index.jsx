import {useState} from 'react'
import Names from './Names'

const Rate = (props) => {
    const [storageType, setStorageType] = useState('hdd')
    const [isMulti, setIsMulti] = useState('single')
    return (
        <div className="rate">
            <div className="container_rate" >
                <Names gbValues={props.gbValues} storageType={storageType} isMulti={isMulti} setStorageType={setStorageType} setIsMulti={setIsMulti} />
            </div>
        </div>
    )
}

export default Rate