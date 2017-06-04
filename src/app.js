/**
 * Created by kernel-72 on 08.05.17.
 */

import React from 'react';
import routes from './routes';
import {connect} from 'react-redux';

import {
    Switch,
    Route,
} from "react-router-dom"

const LoadRoute = ({exact, path, component, loadData}) => {
    return (
        <Route
            exact={exact}
            path={path}
            render={({location}) => {
                return <LoadPage location={location} page={component} loadData={loadData}/>
        }}/>
    );
};

class _LoadPage extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){

        const {loadData, dispatch, location} = this.props;
        if(this.isLoaded) return;

        dispatch({
            type: "LOAD",
            url: location.pathname
        });

        loadData().then(data => {
            dispatch({
                type: "LOAD_COMPLETE",
                url: location.pathname,
                data
            })
        })
    }

    render(){
        const {currentPage, location} = this.props;
        this.isLoaded = currentPage.url === location.pathname && !currentPage.isLoading;
        const Page = this.props.page;

        return(
            this.isLoaded ? <Page pageData={this.props.currentPage.data}/> : <div>Loading...</div>
        )
    }
}
const LoadPage = connect(
    state => ({
        currentPage: state.page
    }))(_LoadPage);





const App = () => (
    <Switch>
        {
            routes.map((route, i) => (
                <LoadRoute key={i} {...route}/>
            ))
        }
    </Switch>

);

export default App;

