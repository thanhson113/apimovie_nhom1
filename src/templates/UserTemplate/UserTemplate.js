import { Route, Redirect } from 'react-router-dom'

export const UserTemplate = (props) => {
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