
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'
import Zoom from 'react-reveal/Zoom'

import img from '../public/images/top-img.jpg'

export default function Home() {
  return (
    <Layout title="Home">
      <div className={styles.hero}>
      
        <div className={styles.image}>
        <Zoom>
          <Image src={img} alt="" width={300} height={300}/>
          </Zoom>
        </div>
     
        
      </div>
      <div className={styles.desc}>
        <Zoom>
        <h1>角 修人</h1>
        <p>ようこそ角 修人のポートフォリオへ。<br />もし、よろしければページ内をご覧ください。</p>

        <div className={styles.badge_wrapper}>
          <h2>このサイトの使用ツール</h2>
          <ul>
              <li className={styles.badge_1}>
                <span>Adobe XD</span>
                <span>Next.js</span>
                <span>Tailwindcss</span>
                <span>daisyUI</span>
                <span>Github</span>
                <span>Vercel</span>
                </li>
          </ul>
        </div>

        <Link href="/about">
          <button className="btn btn-outline py-2 px-4 mt-5 rounded">About me</button>
        </Link>
        </Zoom>
      </div>
    </Layout>

  )}

