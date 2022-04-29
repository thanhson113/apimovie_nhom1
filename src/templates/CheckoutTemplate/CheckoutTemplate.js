import { Route, Redirect } from 'react-router-dom'
import { USER_LOGIN } from '../../util/Setting'
import {useEffect} from 'react'
export const CheckoutTemplate = (props) => {
    useEffect(() => {
        window.scrollTo(0,0)
    })
    if(!localStorage.getItem(USER_LOGIN)){
        return <Redirect to="/login"/>
    }
    return (
        <Route exact path={props.path} render={
            (propsRouter) => {
                return (
                    <>
                        <props.component {...propsRouter} />
                    </>
                )
            }
        }
        />
    )
}