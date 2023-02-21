import React from 'react'
import { pricesConfig, getSumRestricted } from '../utils'
import DataThumb from './DataThumb'

const Names = (props) => {

    const backblazePrice = (pricesConfig.backblaze.storage + pricesConfig.backblaze.transfer)
    const bunnyPrice = (pricesConfig.bunny[props.storageType]?.storage + pricesConfig.bunny[props.storageType]?.transfer)
    const scalewayPrice = ((Number(props.gbValues.storage) < 75 ? 0 : pricesConfig.scaleway[props.isMulti]?.storage) + (Number(props.gbValues.transfer) < 75 ? 0 : pricesConfig.scaleway[props.isMulti]?.transfer))
    const vultrPrice = (pricesConfig.vultr?.storage + pricesConfig.vultr?.transfer)

    const backblazeSum = +(pricesConfig.backblaze.storage * Number(props.gbValues.storage)
    + pricesConfig.backblaze.transfer * Number(props.gbValues.transfer)).toFixed(4)
    const bunnySum = +(pricesConfig.bunny[props.storageType]?.storage * Number(props.gbValues.storage) + pricesConfig.bunny[props.storageType]?.transfer * Number(props.gbValues.transfer)).toFixed(4)
    const scalewaySum = +((Number(props.gbValues.storage) < 75 ? 0 : pricesConfig.scaleway[props.isMulti]?.storage) * Number(props.gbValues.storage) + (Number(props.gbValues.transfer) < 75 ? 0 : pricesConfig.scaleway[props.isMulti]?.transfer * Number(props.gbValues.transfer))).toFixed(4)
    const vultrSum = +(pricesConfig.vultr?.storage * Number(props.gbValues.storage) + pricesConfig.vultr?.transfer * Number(props.gbValues.transfer)).toFixed(4)

    const minSum = Math.min(getSumRestricted(backblazeSum, 'backblaze'), getSumRestricted(bunnySum, 'bunny'), scalewaySum, getSumRestricted(vultrSum, 'vultr'))
    const maxSum = Math.max(getSumRestricted(backblazeSum, 'backblaze'), getSumRestricted(bunnySum, 'bunny'), scalewaySum, getSumRestricted(vultrSum, 'vultr'))

    return (
        <div className="wrapper_names">
            <div className="wrapper_provider">
                <div className='rt'>
                    <div className="provider_name_item" id="backblaze"><span>{`Backblaze: ${backblazePrice.toFixed(3)} $`}</span></div>
                    
                </div>
               
                <DataThumb min={minSum} max={maxSum} configKey='backblaze' gbValues={props.gbValues} sum={getSumRestricted(backblazeSum, 'backblaze')}/>
            </div>
            <div className="wrapper_provider">
                <div className='rt'>
                    <div className="provider_name_item" id="bunny">
                        <p>Bunny: <span id="storageValue">{`${bunnyPrice.toFixed(3)} $`}</span></p>
                        <div className="wrapper_btn">
                            <button className="hddBtn" onClick={() => props.setStorageType('hdd')}>HDD</button>
                            <button className="ssdBtn" onClick={() => props.setStorageType('ssd')} >SSD</button>
                        </div>
                    </div>
                </div>
                <DataThumb min={minSum} max={maxSum} configKey='bunny' gbValues={props.gbValues} sum={getSumRestricted(bunnySum, 'bunny')}/>
            </div>
            <div className="wrapper_provider">
                <div className='rt'>
                    <div className="provider_name_item" id="scaleway">
                        <p>Scaleway: <span id="scalewayValue">{` ${scalewayPrice.toFixed(3)} $`}</span></p>
                        <div className="scaleway_btn">
                            <button className="multi" onClick={() => props.setIsMulti('multi')}>Multi</button>
                            <button className="single" onClick={() => props.setIsMulti('single')}>Single</button>
                        </div>
                    </div>
                </div>
                <DataThumb min={minSum} max={maxSum} configKey='scaleway' gbValues={props.gbValues} sum={scalewaySum}/>
            </div>
            <div className="wrapper_provider">
                <div className='rt'>
                    <div className="provider_name_item" id="vultr"><span id="vultrValue">{`Vultr: ${vultrPrice.toFixed(3)} $`}</span></div>
                </div>
                <DataThumb min={minSum} max={maxSum} configKey='vultr' gbValues={props.gbValues} sum={getSumRestricted(vultrSum, 'vultr')}/>
            </div>
        </div>
    )
}

export default Names