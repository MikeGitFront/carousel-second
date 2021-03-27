import React, { useState } from 'react'
import styled from 'styled-components'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Wrapper = styled.div`
    min-width:100vw;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const ViewBox = styled.div`
    width:100%;
    min-height:300px;
    background-color:pink;
    overflow:hidden;
`

const ButtonLeft = styled.button`
    outline:none;
    border:none;
    background:transparent;
    font-size:40px;
    transition:0.4s ease;
    cursor:pointer;
    &:hover {
        color:red;
    }
`

const ButtonRight = styled.button`
    outline:none;
    border:none;
    background:transparent;
    font-size:40px;
    transition:0.4s ease;
    cursor:pointer;
    &:hover {
        color:red;
    }
`

const Container = styled.div`
    display:flex;
    min-height:300px;
    transform:translateX(${({ translation }) => translation}%);
    transition:${({ transition }) => transition}s all ease;
`

const Item = styled.div`
    background: url('${({ src }) => src}');
    background-position:center;
    background-size:cover;
    min-width:${({ width }) => 100 / width}%;
    min-height:300px;
    z-index:1;
`

const Carousel = ({ children, slidesToShow, infinite }) => {
    const [items] = useState(children)
    const [translation, setTranslation] = useState(0)
    const [transition, setTransition] = useState(0.7)

    const toLeft = () => {
        if (!infinite) {
            console.log(translation.toFixed())
            if (translation.toFixed() === '0') {
                return
            }
            else {
                setTranslation(prev => prev + 100 / slidesToShow)

            }
        }
        if (infinite) {

        }
    }

    const toRight = () => {
        if (!infinite) {
            console.log(translation)
            console.log(((-items.length * 100 / slidesToShow) + 100).toFixed(2))
            if (translation.toFixed(2) === ((-items.length * 100 / slidesToShow) + 100).toFixed(2)) {
                return
            }
            else {
                setTranslation(prev => prev - 100 / slidesToShow)

            }
        }
        if (infinite) {

        }
    }

    return (
        <Wrapper>
            <div style={{ display: 'flex' }}>
                <ButtonLeft onClick={toLeft}><FaArrowLeft /></ButtonLeft>
                <ButtonRight onClick={toRight}><FaArrowRight /></ButtonRight>
            </div>
            <ViewBox className="view-box">
                <Container
                    transition={transition}
                    translation={translation}
                    className="container"
                >
                    {console.log(items)}
                    {items.map((item, i) => <Item
                        width={slidesToShow}
                        key={i}
                        {...item.props}
                    />)}
                </Container>
            </ViewBox>
        </Wrapper>
    )
}

export default Carousel