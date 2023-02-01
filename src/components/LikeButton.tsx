import React, {useState, useEffect} from "react"; 
import useMousePosition from "../hooks/useMousePosition";

const LikeButton : React.FC = ()=>{
    const [like, setLike] = useState(0)
    const positions = useMousePosition()
    useEffect(() => {
        document.title = `点击了${like}次`
    })
    return (
        <>
        <h2>x:{positions.x}, y:{positions.y}</h2>
        <button onClick={()=>setLike (1+like)}>{ like }👍</button>
        </>
    )
}
export default LikeButton