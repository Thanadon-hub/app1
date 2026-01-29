import React from "react";
import { UserContext } from './context';

export default function Content() {
    let user = React.useContext(UserContext)

    const ContentStyle = {
        backgroundColor: '#ddd',
        textAlign: 'center',
        padding: '10',
        margin: '10'
    }

    return (
        <div style={ContentStyle}>
            Hello {user}
        </div>
    )
}
