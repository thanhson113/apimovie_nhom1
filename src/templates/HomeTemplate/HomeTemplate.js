import { Route } from 'react-router-dom'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'
import {useEffect} from 'react'
export const HomeTemplate = (props) => {
    useEffect(() => {
        window.scrollTo(0,0)
    })
    return (
        <Route exact path={props.path} render={
            (propsRouter) => {
                return (
                    <>
                        <Header />
                        <props.component {...propsRouter} />
                        <Footer />
                    </>
                )
            }
        }
        />
    )
}