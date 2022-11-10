import React from 'react';

export const Todo: React.FC<{text: string}> = ({text}): JSX.Element =>{
    return (
        <div className="w-full flex flex-col rounded">
            <div className="w-full text-start flex flex-wrap justify-between border-b-2">
                <ul className="pt-4">
                    <li>
                        {text}
                    </li>
                </ul>
                <div className="space-x-2 mt-4 items-end text-white">
                    <button>Complete</button>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}