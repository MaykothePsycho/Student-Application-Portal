import React from 'react'
import { AiOutlineContacts } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineForm } from 'react-icons/ai';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const SidebarData = [
    {
        title: 'Home',
        path: '/home',
        icon: <AiOutlineHome/>,
        cName: 'nav-text',
    },
    {
        title: 'User',
        path: '/about',
        icon: <AiOutlineInfoCircle/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <AiOutlineContacts/>,
        cName: 'nav-text'
    },
    {
        title: 'Application',
        path: '/application',
        icon: <AiOutlineForm/>,
        cName: 'nav-text'
    },
]