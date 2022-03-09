import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Components/Home/Home';
import ContextAPI from '../ContextAPI/ContextAPI';
import Header from '../Share/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Students from '../Components/Students/Students';
import NotFound from '../Components/NotFound/NotFound';
import AddStudent from '../Components/AddStudent/AddStudent';

const Main = () => {
    return (
        <div className='Main'>
            <ContextAPI>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Route exact path={'/'}>
                            <Home></Home>
                        </Route>

                        <Route exact path={'/students'}>
                            <Students></Students>
                        </Route>

                        <Route exact path={'/students/add'}>
                            <AddStudent></AddStudent>
                        </Route>

                        <Route exact path={'*'}>
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </ContextAPI>
        </div>
    );
};

export default Main;