/**
 * Created by kernel-72 on 04.06.17.
 */

import Home from './pages/Home'
import Page1 from './pages/Page1'

const routes = [{
        path: '/',
        exact: true,
        component: Home,
        loadData: () => {
            console.log('Loading home data');
            return new Promise((resolve, reject) =>{
                setTimeout(resolve.bind(resolve, {data: 'homeDataaaa'}), 500);
            })
        }
    }, {
        path: '/page1',
        component: Page1,
        loadData: () => {
            console.log("Loading page1 data");
            return new Promise((resolve, reject) =>{
                setTimeout(resolve.bind(resolve, {data: 'page1Data'}), 200);
            })
        }
}];

export default routes;

