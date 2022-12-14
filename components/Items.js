import Image from "next/image"
import Link from "next/link"
import {FaExternalLinkAlt} from 'react-icons/fa'
import styles from '../styles/Items.module.css'

function Items({data}) {

    const {tools} = data;
    
    return (
    <>
        <div key={data.id} className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col justify-between">
            <Image className="w-full" src={data.img} alt="" width={400} height={250}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.title}</div>
                <p className="text-gray-700 text-base">{data.description}</p>
                    {data.tools && ( 
                        <div className={styles.badge_wrapper}>
                        <h2>このサイトの使用ツール</h2>
                        <ul className="flex flex-wrap justify-center">
                            {tools.map((tool, index) => (
                                <li key={index} className={styles.badge_1}>
                                <span>{tool}</span>
                                </li>
                            ))}
                        </ul>
                        </div>
                    )}
                    
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link href={data.link}>
                    <a target="_blank">
                    <button className="btn btn-outline py-2 px-4 mt-5 rounded w-full btn-sm md:btn-md"><FaExternalLinkAlt style={{display: "inline"}} /> <span className="pl-3">More</span></button>
                    </a>
                </Link>
            
            </div>
        </div>
        </>
    )
}

export default Items
