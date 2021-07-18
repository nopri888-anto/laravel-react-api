import React, { useEffect, useState } from 'react';
import {Route, Redirect, useHistory} from 'react-router-dom';
import axios from 'axios';

import MasterLayout from './layouts/admin/MasterLayout';
import swal from 'sweetalert';

function AdminPrivateRoute({...rest}){

    const history = useHistory();
    const [Authenticated, setAuthenticated ] = useState(false);
    const [loading, setLoading ] = useState(true);

    useEffect(() => {

        axios.get(`/api/checkingAuthenticated`).then(res => {
            if(res.status === 200)
            {
                setAuthenticated(true);
            }
            setLoading(false);
        }); 

        return () => {
            setAuthenticated(false);
        };
    }, []);

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err){
        if(err.response.status === 401){
            swal("Unauthorized",err.response.data.message,"warning");
            history.push('/');
        }
        return Promise.reject(err);

    });

    axios.interceptors.response.use(function (response){
        return response;
    }, function (error){
        //access denined
        if(error.response.status === 403){
            swal("Forbidden",error.response.data.message,"warning");
            history.push('/403');
        }else if(error.response.status === 404)
        {
            //page not found
            swal("404 Error","Url/Page Not Found","warning");
            history.push('/404');
        }
        return Promise.reject(error);
    });

    if(loading){
        return <h3>Loading ...</h3>
    }

    return (
        <Route {...rest} 
            render={ ({props, location})=>
            // localStorage.getItem('auth_token') 
            Authenticated ? 
            ( <MasterLayout {...props} /> ) :
            ( <Redirect to={{ pathname: "/login", state: {from: location} }} /> )
             }
        />
    );
}

export default AdminPrivateRoute;