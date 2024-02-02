import { getProject } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import Image from "next/image";

type Props = {
    params: {
        project: string;
    }
};

export default async function project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);




return <div>
    <header className="flex items-center justify-between">
        <h1 className="text-5xl drop-shadow font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{project.name}</h1>
        <a href={project.url} title="view Project" target="_blank" rel="noopener noreferrer" className="font-bold py-3 px-4 whitespace-nowrap bg-gradient-to-l from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition"> 
            View Project
        </a>
    </header>

    {/* content goes here */}

    <div> 
        <PortableText value={project.content}/>
    </div>

    {/* image goes here */}
    <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-10 border-2 border-gray-700 object-cover rounded-xl"/>


    </div>;

}