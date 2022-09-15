import Layout from '../components/Layout'
import styles from '../styles/About.module.css'

import Image from 'next/image'
import img_1 from '../public/images/certification_01.jpeg'
import img_2 from '../public/images/certification_02.jpeg'
import img_3 from '../public/images/certification_03.jpeg'
import img_4 from '../public/images/certification_04.jpeg'
import pro_img from '../public/images/profile-img.jpg'

import Fade from 'react-reveal/Fade'

function about() {
    return (
     <Layout title="About" description="角についてのページです。">
       <Fade>
       <div className="text-5xl font-bold py-14 text-center">
        About
      </div>
       </Fade>
      <div className={styles.bg_1}>
      <div className={styles.container}>
        <Fade>
          <div>
            <Image className="w-full rounded-full" src={pro_img} alt="" width={500} height={500}/>
          </div>
        </Fade>
        <div className="flex flex-col justify-center m-5">
          <Fade>
            <h2>My Profile</h2>
            <dl className={styles.dl_wrapper}>
              <dt>名前</dt>
              <dd>角　修人(かく しゅうと)</dd>
              <br />
              <dt>年齢</dt>
              <dd>35歳</dd>
              <br />
              <dt>出身地</dt>
              <dd>埼玉県</dd>
              <br />
              <dt>子供</dt>
              <dd>1歳児の娘</dd>
              <br />
              <dt>趣味</dt>
              <dd>水泳、サッカー、読書、キャンプ、旅行</dd>
            </dl>
            </Fade>
        </div>
      </div>
    
      </div>

      <div className={styles.bg_2}>
      <div className={styles.container}>
      <Fade>
        <div>
            <h2>Skills</h2>
            
            <ul>
              <li className={styles.badge_1}><span>HTML</span><span>CSS</span><span>JavaScript</span></li>
              <li className={styles.badge_2}><span>React.js</span><span>Next.js</span><span>Bootstrap</span><span>Tailwindcss</span></li>
              <li className={styles.badge_3}><span>Google Firebase</span><span>Heroku</span><span>Vercel</span></li>
              <li className={styles.badge_3}><span>Wordpress</span><span>Strapi(Headless CMS)</span></li>
              <li className={styles.badge_4}><span>API Postman</span></li>
              <li className={styles.badge_5}><span>MongoDB</span></li>
              <li className={styles.badge_6}><span>Photoshop</span><span>Illustrator</span><span>Adobe XD</span><span>Adobe Premiere Pro</span><span>Adobe Premiere rush</span></li>
            </ul>
            
        </div>
        </Fade>
      </div>
    
      </div>

      <div className={styles.bg_3}>
      <div className={styles.container}>
        <Fade>
        <div>
            <h2>Certifications</h2>
            <p>オンライン学習システム Udemyでは、コース終了後に下記のような修了証が発行されます。</p>
            
            <ul>
              <li><Image className="w-full" src={img_1} alt="" width={400} height={300}/></li>
              <li><Image className="w-full" src={img_2} alt="" width={400} height={300}/></li>
              <li><Image className="w-full" src={img_3} alt="" width={400} height={300}/></li>
              <li><Image className="w-full" src={img_4} alt="" width={400} height={300}/></li>
              
            </ul>
        </div>
        </Fade>
      </div>
    
      </div>


      <div className={styles.bg_4}>
      <div className={styles.container}>
        <Fade>
        <div>
            <h2>Background</h2>
            <p>これまでは、Front End Developerとして５年間従事していました。メイン業務は、静的サイト、CMSでのHP制作、及び印刷物、パンフレットデザイン等幅広い領域でした。最近は、Backendについても学習中で、一通りのアプリケーションを制作できるようになりました。また、今後発展すると言われている、『Blockchain』技術についてもSmart Contract, Solidityを学習中。チャレンジ精神旺盛で現状のことについては維持し、新しいことに関して学ぶことが何よりの生きがいです。IT業界に入る前は、海外文化に触れるべくニュージーランドに移住したり、語学留学でフィリピンに行くなど、いろんなことにチャレンジしてきました。</p>
        </div>
        </Fade>
      </div>
    
      </div>
      
      </Layout>
    )
}

export default about
