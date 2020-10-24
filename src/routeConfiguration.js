import React from 'react';
import {
    LoginPage,
    ProfilePage,
    SignupPage,
} from './containers';

export default function routeConfiguration() {
    return [
        {
            name: 'SignupPage',
            path: '/signup',
            component: props => <SignupPage {...props} />,
        },
        {
            name: 'LoginPage',
            path: '/login',
            component: props => <LoginPage {...props} />,
        },
        {
            name: 'ProfilePage',
            path: '/profile',
            component: props => <ProfilePage {...props} />,
            auth: true
        }
    ];
};