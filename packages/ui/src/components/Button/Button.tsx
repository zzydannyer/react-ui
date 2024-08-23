import React from 'react'

export interface ButtonProps {
    title?: string
    children: React.ReactNode
}

export const Button = () => {
    return <button>Click me</button>
}
