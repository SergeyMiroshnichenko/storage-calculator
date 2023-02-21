
const RangeItem = (props) => {
    return (
        <div className="range-wrap">
            <div className="container_storage">
                <div className="text_storage">{props.label}</div>
                <output className="storage">{props.gbValue}</output>
            </div>
            <input type="range" className="range" onChange={(e) => props.changeGbValue(e.target.value)} min="0" max="1000" value={props.gbValue} />
        </div>
    )
}

export default RangeItem