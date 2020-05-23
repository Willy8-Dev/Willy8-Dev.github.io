import React from 'react'

export default function Header(props) {
    return (
        <div className="header">
            <h1 className="p-5 text-center display-3 text-light">{props.heading}</h1>
        </div>
    )
}
