export const Button = (props)=>{
    return(
        <button className="btn btn-block btn-outline btn-warning hover:!bg-warning-content hover:!text-white">{props.text}</button>
    )
}