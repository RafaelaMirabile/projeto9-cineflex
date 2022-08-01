import { BannerContainer } from "./style"

export default function Banner ({filmesBanner}){
    
    return(
            <BannerContainer>
                <img src ={filmesBanner}/>
            </BannerContainer>
    )
}