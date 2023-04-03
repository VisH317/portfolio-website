
export interface Project {
    name: string,
    desc: string,
    technologies: String[],
    url: string,
    image: string
}

const projects: Project[] = [
    {
        name: "Video Inpainting App",
        desc: "This project involves the creation of a mobile app where you can upload a video and select a certain part of object from the video to be removed. It then uses AI Video Inpainting to remove the selected object and replace the background.",
        technologies: ["React Native", "Python", "FastAPI", "PyTorch", "JavaScript", "Android"],
        url: "https://github.com/VisH317/deep-video-inpainting-server",
        image: "inpaint.PNG"
    },
    {
        name: "InternetGPT",
        desc: "A Python library that provides smart internet access to ChatGPT for integration into internet-powered ChatGPT apps in Python. It uses a smart recursive search to determine important and rare words that need more context and compiles information on them to provide to ChatGPT",
        technologies: ["Python", "OpenAI", "Selenium", "Machine Learning", "CircleCI"],
        url: "https://github.com/VisH317/InternetGPT",
        image: "internetgpt.PNG"
    },
    {
        name: "Question Generator",
        desc: "A full stack app with an AI powered backend that allows users to generate practice quiz questions based on notes from different classes. It works using a pretrained T5 transformer model to take the notes as input and output possible questions. It also has a frontend UI written with React and designed with Figma",
        technologies: ["PyTorch", "HuggingFace", "Flask", "PostgreSQL", "React", "Figma", "Python", "JavaScript"],
        url: "https://github.com/VisH317/QuestionGenerationServer",
        image: "qgen.PNG"
    },
    {
        name: "Better Classroom",
        desc: "A full stack app that is an enhanced version of google classroom. It creates monitored sessions for lectures along with interactive questions and surveys to be asked by teachers. It also provides services for monitoring during tests and makes group work organization easier",
        technologies: ["Next.js", "JavaScript", "TypeScript", "Go", "Python", "OpenAI", "GoFiber", "Express", "Passport", "Docker", "MongoDB", "PostgreSQL", "Redis"],
        url: "https://github.com/VisH317/tsa-software-dev",
        image: "classroom.PNG"
    },
]

export default projects