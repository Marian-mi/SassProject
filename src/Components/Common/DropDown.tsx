import React from 'react'

type Props = {
    content: {
        text: string;
        id: number;
    }[];
    className : string;
}

const DropDown = ({ content, className }: Props) => {
    return (
        <ul className={className}>
            {content.map((item) => (
                <li key={item.id}>
                    {item.text}
                </li>
            ))}
        </ul>
    )
}

export default DropDown
