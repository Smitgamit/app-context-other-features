import React, { useContext } from 'react'
import { ThemeContext } from './App';
export default function UserProfile() {
    const theme = useContext(ThemeContext);
    return (
        <div>UserProfile  {theme}</div>
    )
}
