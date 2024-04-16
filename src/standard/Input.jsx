export default Input(prop){
    return(
        <div>
            <input type="text" onChange={prop.change} value={prop.value} />
            <p>{prop.value}</p>
        </div>
    )
}