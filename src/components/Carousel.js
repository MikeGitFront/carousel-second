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
    &:disabled {
        color:rgba(0,0,0,.2);
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
    &:disabled {
        color:rgba(0,0,0,.2);
    }
`

const Container = styled.div`
    display:flex;
    min-height:400px;
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

const Dots = styled.div`
    display:flex;
    padding:10px 0;
`

const Dot = styled.button`
    width:20px;
    height:20px;
    outline:none;
    border:none;
    cursor:pointer;
    transition:0.5s all ease;
    background-color:${({ active }) => active ? 'red' : 'white'};
    border-radius:20px;
    box-shadow:${({ active }) => active ? 'inset 0px 0px 2px 2px black' : 'inset 0px 0px 2px 2px black'};

    &:hover {
        box-shadow:inset 0px 0px 2px 2px black;
        background-color:blue;
    }
`

const Carousel = ({ children, toShow = 1, toScroll = 1, infinite }) => {
    const [slidesToShow, setSlidesToShow] = useState(toShow)
    const [slidesToScroll, setSlidesToScroll] = useState(toScroll)
    const [items] = useState(children)
    const [translation, setTranslation] = useState(0)
    const [transition, setTransition] = useState(0.7)
    const [leftDisabled, setLeftDisabled] = useState(true)
    const [rightDisabled, setRightDisabled] = useState(false)
    const [clickX, setClickX] = useState(null)
    const [isMoving, setIsMoving] = useState(false)
    const [startPos, setStartPos] = useState(null)
    const [index, setIndex] = useState(0)


    if (slidesToShow > items.length - 1 || slidesToScroll > slidesToShow) {
        alert('incorrent slidesToShow or slidesToScroll prop!')
        setSlidesToShow(1)
        setSlidesToScroll(1)
    }

    const toLeft = () => {
        setRightDisabled(false)
        if (translation.toFixed() == 0) {
            return
        }
        if (translation > -(100 / slidesToShow * slidesToScroll)) {
            setLeftDisabled(true)
            setTranslation(prev => prev - translation)
        }
        else {
            if (translation === -(100 / slidesToShow * slidesToScroll)) {
                setLeftDisabled(true)
            }
            setTranslation(prev => prev + 100 / slidesToShow * slidesToScroll)
        }
        setIndex(prev => prev - slidesToShow)
    }

    const toRight = () => {
        setLeftDisabled(false)
        if (translation.toFixed(2) === ((-items.length * 100 / slidesToShow) + 100).toFixed(2)) {
            return
        }
        if (translation - (100 / slidesToShow * slidesToScroll) < ((-items.length * 100 / slidesToShow) + 100)) {
            const diff = ((-items.length * 100 / slidesToShow) + 100) - translation
            setRightDisabled(true)
            setTranslation(prev => prev + diff)
        }
        else {
            if (translation - (100 / slidesToShow * slidesToScroll) === ((-items.length * 100 / slidesToShow) + 100)) {
                setRightDisabled(true)
            }
            setTranslation(prev => prev - 100 / slidesToShow * slidesToScroll)
        }
        setIndex(prev => prev + slidesToShow)
    }

    const swipeStart = (e) => {
        setIsMoving(true)
        setClickX(e.clientX)
        setStartPos(translation)
    }
    const swipeMove = () => {
        if (isMoving) {
            if (clickX < window.innerWidth && clickX > window.innerWidth / 2) {
                if (translation === ((-items.length * 100 / slidesToShow) + 100)) {
                    return
                }
                setTranslation(prev => prev - 1)
            }
            if (clickX > 0 && clickX < window.innerWidth / 2) {
                if (translation >= 0) {
                    return
                }
                setTranslation(prev => prev + 1)
            }
            else {
                return
            }
        }
    }
    const swipeEnd = (e) => {
        if (clickX > 0 && clickX < window.innerWidth / 2) {
            if (e.clientX - clickX > window.innerWidth / 2) {
                toLeft()
                const diff = startPos - translation
                if (translation < -(100 / slidesToShow * slidesToScroll)) {
                    setTranslation(prev => prev + diff)

                }
            }
        }
        if (clickX > window.innerWidth / 2 && clickX < window.innerWidth) {
            if (clickX - e.clientX > window.innerWidth / 2) {
                toRight()
                const diff = startPos - translation
                if (translation - (100 / slidesToShow * slidesToScroll) > ((-items.length * 100 / slidesToShow) + 100)) {
                    setTranslation(prev => prev + diff)
                }
            }
        }

        if ((clickX - e.clientX < window.innerWidth / 2) && (clickX > window.innerWidth / 2 && clickX < window.innerWidth)) {
            const diff = startPos - translation
            setTranslation(prev => prev + diff)
        }
        if ((e.clientX - clickX < window.innerWidth / 2) && (clickX > 0 && clickX < window.innerWidth / 2)) {
            const diff = startPos - translation
            setTranslation(prev => prev + diff)
        }
        setIsMoving(false)
    }

    const swipeLeave = () => {
        setIsMoving(false)
    }




    const swipeMobileStart = (e) => {
        setIsMoving(true)
        setClickX(e.changedTouches[0].clientX)
        setStartPos(translation)
    }
    const swipeMobileMove = () => {
        if (isMoving) {
            if (clickX < window.innerWidth && clickX > window.innerWidth / 2) {
                if (translation === ((-items.length * 100 / slidesToShow) + 100)) {
                    return
                }
                setTranslation(prev => prev - 1)
            }
            if (clickX > 0 && clickX < window.innerWidth / 2) {
                if (translation >= 0) {
                    return
                }
                setTranslation(prev => prev + 1)
            }
            else {
                return
            }
        }
    }
    const swipeMobileEnd = (e) => {
        if (clickX > 0 && clickX < window.innerWidth / 2) {
            if (e.changedTouches[0].clientX - clickX > window.innerWidth / 2) {
                toLeft()
                const diff = startPos - translation
                if (translation < -(100 / slidesToShow * slidesToScroll)) {
                    setTranslation(prev => prev + diff)

                }
            }
        }
        if (clickX > window.innerWidth / 2 && clickX < window.innerWidth) {
            if (clickX - e.changedTouches[0].clientX > window.innerWidth / 2) {
                toRight()
                const diff = startPos - translation
                if (translation - (100 / slidesToShow * slidesToScroll) > ((-items.length * 100 / slidesToShow) + 100)) {
                    setTranslation(prev => prev + diff)
                }
            }
        }

        if ((clickX - e.changedTouches[0].clientX < window.innerWidth / 2) && (clickX > window.innerWidth / 2 && clickX < window.innerWidth)) {
            const diff = startPos - translation
            setTranslation(prev => prev + diff)
        }
        if ((e.changedTouches[0].clientX - clickX < window.innerWidth / 2) && (clickX > 0 && clickX < window.innerWidth / 2)) {
            const diff = startPos - translation
            setTranslation(prev => prev + diff)
        }

        setIsMoving(false)
    }

    const goToSlide = (i) => {
        setIndex(i)
        if (i >= items.length - slidesToShow) {
            setRightDisabled(true)
            setLeftDisabled(false)
        }
        if (i === 0) {
            setRightDisabled(false)
            setLeftDisabled(true)
        }
        if (i !== 0 && i < items.length - slidesToShow) {
            setRightDisabled(false)
            setLeftDisabled(false)
        }
        if (i < items.length - slidesToShow + 1) {
            setTranslation(-i * 100 / slidesToShow)
        }
        else {
            setTranslation(-(items.length - slidesToShow) * 100 / slidesToShow)
        }
    }


    return (
        <Wrapper>
            <div style={{ display: 'flex' }}>
                <ButtonLeft disabled={leftDisabled} onClick={toLeft}><FaArrowLeft /></ButtonLeft>
                <ButtonRight disabled={rightDisabled} onClick={toRight}><FaArrowRight /></ButtonRight>
            </div>
            <ViewBox className="view-box">
                <Container
                    onTouchStart={swipeMobileStart}
                    onTouchMove={swipeMobileMove}
                    onTouchEnd={swipeMobileEnd}
                    onMouseDown={swipeStart}
                    onMouseMove={swipeMove}
                    onMouseUp={swipeEnd}
                    onMouseLeave={swipeLeave}
                    transition={transition}
                    translation={translation}
                    className="container"
                >
                    {items.map((item, i) => <Item
                        width={slidesToShow}
                        key={i}
                        {...item.props}
                    />)}
                </Container>
            </ViewBox>
            <Dots>
                {items.map((item, i) =>
                    <Dot
                        active={index === i ? true : false}
                        key={i}
                        onClick={() => goToSlide(i)}
                    />)}
            </Dots>
        </Wrapper>
    )
}

export default Carousel