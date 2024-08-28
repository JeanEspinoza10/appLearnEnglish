
import React from 'react'
import { AuthContext, useAuth } from '@components/auth/Auth'
import { FormLogin } from '../form/FormLogin'


export const Protect = ({children}) => {
    let {isAuthenticated} = useAuth()
    if (!isAuthenticated) {
        return (
            <FormLogin/>
        )
    }
    return children
}


