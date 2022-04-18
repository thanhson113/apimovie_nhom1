import { Route } from 'react-router-dom'
import Footer from './Layout/Footer/Footer'
import Header from './Layout/Header/Header'
export const HomeTemplate = (props) => {
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