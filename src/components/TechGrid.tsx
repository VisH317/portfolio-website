import React from 'react'
import TechGridItem from './TechGridItem'

interface TechGridProps {
    hovered: boolean
}

export default function TechGrid(props: TechGridProps) {
    return (
        <div className="flex items-center lg:w-full md:w-3/4 sm:w-2/3">
        <div className="grid grid-flow-row-dense place-content-center place-items-center lg:grid-cols-3 xl:grid-cols-4 place-items-center md:grid-cols-4 m-auto sm:grid-cols-2 gap-5 w-full">
            <TechGridItem grow={false} hidden={false} image="react-1.svg">
                <p className="text-3xl font-semibold bg-gradient-to-r from-purple-200 to-purple-400 text-transparent bg-clip-text">React</p>
                <hr className="w-[60%] h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-10 dark:bg-slate-500"/>
                <p className="text-lg text-center font-normal bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text">{"Experience: 5 years\nRelated Libraries: Redux, Axios, Material UI"}</p>
            </TechGridItem>
            <TechGridItem grow={false} hidden={false} image="C++.png">
                <p className="text-3xl font-semibold bg-gradient-to-r from-purple-200 to-purple-400 text-transparent bg-clip-text">C++</p>
                <hr className="w-[60%] h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-10 dark:bg-slate-500"/>
                <p className="text-lg text-center font-normal bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text">{"Experience: 2 years\nRelated Libraries: LLVM, VEX, Multithreading"}</p>
            </TechGridItem>
            <TechGridItem grow={false} hidden={false} image="python.png">
                <p className="text-3xl font-semibold bg-gradient-to-r from-purple-200 to-purple-400 text-transparent bg-clip-text">Python</p>
                <hr className="w-[60%] h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-10 dark:bg-slate-500"/>
                <p className="text-lg text-center font-normal bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text">{"Experience: 5 years\nRelated Libraries: PyTorch, Pandas, NumPy, FastAPI, OpenAI, WebSocket, PostgreSQL"}</p>
            </TechGridItem>
            <TechGridItem grow={false} hidden={false} image="js.png">
                <p className="text-3xl font-semibold bg-gradient-to-r from-purple-200 to-purple-400 text-transparent bg-clip-text">JavaScript</p>
                <hr className="w-[60%] h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-10 dark:bg-slate-500"/>
                <p className="text-lg text-center font-normal bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text">{"Experience: 7 years\nRelated Libraries: Express, MongoDB, Passport, Svelte, Next.js, Browser API"}</p>
            </TechGridItem>
            <TechGridItem grow={false} hidden={true} image="next.svg"></TechGridItem>
            <TechGridItem grow={false} hidden={false} image="flask.png">
                <p className="text-3xl font-semibold bg-gradient-to-r from-purple-200 to-purple-400 text-transparent bg-clip-text">Flask</p>
                <hr className="w-[60%] h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-10 dark:bg-slate-500"/>
                <p className="text-lg text-center font-normal bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text">{"Experience: 5 years\nRelated Libraries: Authentication, PostgreSQL, Cookies, JWT"}</p>
            </TechGridItem>
            <TechGridItem grow={false} hidden={false} image="node.png">
                <p className="text-3xl font-semibold bg-gradient-to-r from-purple-200 to-purple-400 text-transparent bg-clip-text">Node JS</p>
                <hr className="w-[60%] h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-10 dark:bg-slate-500"/>
                <p className="text-lg text-center font-normal bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text">{"Experience: 5 years\nRelated Libraries: Backend frameworks, REST APIs"}</p>
            </TechGridItem>
            <TechGridItem grow={false} hidden={false} image="docker.png">
                <p className="text-3xl font-semibold bg-gradient-to-r from-purple-200 to-purple-400 text-transparent bg-clip-text">DevOps</p>
                <hr className="w-[60%] h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-10 dark:bg-slate-500"/>
                <p className="text-lg text-center font-normal bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text">{"Experience: 5 years\nRelated Libraries: Docker, Kubernetes, CircleCI, AWS"}</p>
            </TechGridItem>
            <TechGridItem grow={false} hidden={false} image="pytorch.png">
                <p className="text-3xl font-semibold bg-gradient-to-r from-purple-200 to-purple-400 text-transparent bg-clip-text">ML</p>
                <hr className="w-[60%] h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-10 dark:bg-slate-500"/>
                <p className="text-lg text-center font-normal bg-gradient-to-r from-slate-200 to-slate-400 text-transparent bg-clip-text">{"Experience: 5 years\nRelated Libraries: Pandas, PyTorch, Scikit-Learn, HuggingFace"}</p>
            </TechGridItem>
        </div>
        </div>
    )
}