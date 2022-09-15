import Image from "next/image"
import Link from "next/link"
import {FaExternalLinkAlt} from 'react-icons/fa'


function Items({data}) {
    
    return (
    <>
        <div key={data.id} className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between">
            <Image className="w-full" src={data.img} alt="Sunset in the mountains" width={400} height={250}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.title}</div>
                <p className="text-gray-700 text-base">{data.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link href={data.link}>
                    <a target="_blank">
                    <button className="bg-neutral-700 hover:bg-neutral-600 text-white font-bold py-2 px-4 rounded w-full"><FaExternalLinkAlt style={{display: "inline"}}/> More</button>
                    </a>
                </Link>
            
            </div>
        </div>
        </>
    )
}

export default Items
