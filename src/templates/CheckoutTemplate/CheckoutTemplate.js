import { Route, Redirect } from 'react-router-dom'
import { USER_LOGIN } from '../../util/Setting'

export const CheckoutTemplate = (props) => {
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