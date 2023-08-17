import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserAuth = ({children}) => {
   
    const [currentUser, setcurrentUser] = useState(
    
        JSON.parse(sessionStorage.getItem('user'))
    );
    if(currentUser!==null){
        return children;
    }
    else{
        Swal.fire({
            icon: 'error',
            title:'oops.....',
            text:'You are not logged in! '
        })
        return <Navigate to = "/login"/>
    }
  
}


export default UserAuth;