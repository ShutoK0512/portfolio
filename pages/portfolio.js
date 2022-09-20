import Layout from '../components/Layout'
import styles from '../styles/portfolio.module.css'
import {useEffect, useState} from 'react'
import Items from '../components/Items'
import data_1 from './data/data.json'
import data_2 from './data/data_2.json'
import data_3 from './data/data_3.json'

import Fade from 'react-reveal/Fade'

function portfolio() {

    return (
      <Layout title="Portfolio" description="ポートフォリオのページです。このページでは、今までの実績などを掲載しています。">
        <Fade>
          <div className="text-5xl font-bold py-14 text-center">
          Portfolio
          </div>
        </Fade>
        <div className={styles.wrapper}>
          <div className={styles.container}>
          <Fade top>
            <h2 className="text-3xl font-bold">静的サイト</h2>
            <p>代表作品一覧</p>
            <p className="pb-8">受注〜デザイン〜検証〜納品まで一括担当</p>
          </Fade>
            
          </div>
          <div className={styles.container}>
          <Fade>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data_1.map((data) => (
              <Items key={data.id} data={data} />
           ))}
            </div>
          </Fade>
           
          
          </div>
        </div>

        <div className={styles.wrapper_2}>
          <div className={styles.container}>
          <Fade top>
            <h2 className="text-3xl font-bold">Wordpress</h2>
            <p>代表作品一覧</p>
            <p className="pb-8">チームで制作を行い、メンテナンス、更新作業も担当</p>
          </Fade>
          </div>
          <div className={styles.container}>
          <Fade>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data_2.map((data) => (
              <Items key={data.id} data={data} />
           ))}
            </div>
          </Fade>
            
           
          
          </div>
        </div>


        <div className={styles.wrapper}>
          <div className={styles.container}>
          <Fade top>
            <h2 className="text-3xl font-bold">その他</h2>
            <p className="pb-8">趣味でWEBアプリを制作</p>
          </Fade>
          </div>
          <div className={styles.container}>
          <Fade>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data_3.map((data) => (
              <Items key={data.id} data={data} />
           ))}
            </div>
          </Fade>
          </div>
        </div>


      </Layout>
    )
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/data/data_1.json`);
//   // const data_1 = res.json();
  
//   console.log(res)
//   return {
    
//     props: {
      
//     }
//   }
// }

export default portfolio
