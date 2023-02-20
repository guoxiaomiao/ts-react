import React, {useState, useEffect, useContext} from "react"; 
import useMousePosition from "../hooks/useMousePosition";
import { IThemeContext } from "../App";

const LikeButton : React.FC = ()=>{
    const [like, setLike] = useState(0)
    const positions = useMousePosition()
    const theme = useContext(IThemeContext)
    useEffect(() => {
        document.title = `点击了${like}次`
    })
    return (
        <>
        <h2 style={theme}>x:{positions.x}, y:{positions.y}</h2>
        <button style={theme} onClick={()=>setLike (1+like)}>{ like }👍</button>
        </>
    )
}
export default LikeButton