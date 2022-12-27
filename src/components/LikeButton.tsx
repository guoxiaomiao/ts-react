import React, {useState, useEffect} from "react"; 

const LikeButton : React.FC = ()=>{
    const [like, setLike] = useState(0)
    const [on, setOn] = useState(true)
    useEffect(() => {
        document.title = `点击了${like}次`
    })
    return (
        <>
        <button onClick={()=>setLike (1+like)}>{ like }👍</button>
        <button onClick={()=>setOn(!on)}>{ on ? "on" : "off" }</button>
        </>
    )
}
export default LikeButton