import React, { useEffect } from "react"
import Logo from "../img/logo-future-eats_2019-11-25/logo-future-eats.png"
import styled from "styled-components"

const Main = styled.div`
    background-color: #000000
    display: grid;
    align-items: center;
    justify-items: center;
    width: 100vw;
    height: 100vh;
`
const ImgLogo = styled.img`
    width: 126px;
    height: 65px;
    object-fit: contain;
`


const OpeningPage = () => {
    useEffect( ()=>{ setTime()
        },[])

    const  setTime = () => {
        setTimeout(()=>console.log("oi"), 3000)
    }

    return(
        <Main>
            <ImgLogo src={Logo}/>
        </Main>
    )
}

export default OpeningPage;