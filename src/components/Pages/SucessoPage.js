import { useLocation } from "react-router-dom"
import Recibo from "../SucessoList/Recibo";

export default function SucessoPage(){

    const location = useLocation();

    return(
        <>
        <Recibo dataUser={location.state.dataUser}/>
        </>
    )
}
