import { Fragment } from "react";
import myimg from "./photo/R1.jpeg";
const cdnimg="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg"
function Abc()
{
    return "this is first function";
}
export default Abc;

 export function One(){
    return <h1>this is first heading</h1>;
}
export function Two()
{
    return(
    <Fragment>
        <h1>this is second default</h1>
        <h2>omg oh my god</h2>
        <img src={myimg}width="500"alt="picture"/>
        <img src="MYPHOTO/R3.avif"width="300"alt="picture5"/>
        <img src={cdnimg}width="400"alt="picture5"/>
    </Fragment>
    )
}