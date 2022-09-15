import Img from '../../public/images/static_01.jpg'
import Img2 from '../../public/images/static_02.jpg'
import Img3 from '../../public/images/static_03.jpg'
import Img4 from '../../public/images/static_04.jpg'
import Img5 from '../../public/images/static_05.jpg'

import Img_w from '../../public/images/wordpress_01.jpg'
import Img_w2 from '../../public/images/wordpress_02.jpg'
import Img_w3 from '../../public/images/wordpress_03.jpg'
import Img_w4 from '../../public/images/wordpress_04.jpg'

import Img_e from '../../public/images/others_01.jpg'
import Img_e2 from '../../public/images/others_02.jpg'
import Img_e3 from '../../public/images/others_03.jpg'


const data_1 = [
    {
        id: 1,
        img: Img,
        title: "シーテック株式会社",
        description: "IOT製品開発を専門に行うIT会社。ピッとシュ！が主力商品。",
        link: "https://www.swiftechie.com"
    },
    {
        id: 2,
        img: Img2,
        title: "有井製作所",
        description: "社会の基盤である電力、その安定した供給を製品の開発と製造を行なっている会社。WEBサイト制作と同時に会社案内も制作。",
        link: "https://www.arii.co.jp/"
    },
    {
        id: 3,
        img: Img3,
        title: "東京精工",
        description: "金属部品の精密加工を行う製造業。",
        link: "https://www.tokyo-seiko.ne.jp/"
    },
    {
        id: 4,
        img: Img4,
        title: "株式会社 丸富",
        description: "組紐や装飾ゴム・房紐の製造販売会社。",
        link: "https://www.marutomi-asakusa.co.jp/"
    },
    {
        id: 5,
        img: Img5,
        title: "株式会社 不二ダイカスト",
        description: "工場地域にベースを構えるダイカスト企業",
        link: "https://www.fujidc.co.jp/"
    }
]
    
    
const data_2 = [
    {
        id: 1,
        img: Img_w,
        title: "足立学園中学校・高等学校",
        description: "足立のスポーツの強豪校で有名な足立学園",
        link: "https://www.adachigakuen-jh.ed.jp/"
    },
    {
        id: 2,
        img: Img_w2,
        title: "潤徳女子高等学校",
        description: "足立学園の姉妹校である潤徳女子高等学校。投稿記事の自動化を実現。",
        link: "https://www.juntoku.ac.jp/"
    },
    {
        id: 3,
        img: Img_w3,
        title: "豊栄トランスポート株式会社",
        description: "豊栄通商株式会社の子会社で東南アジア諸国への輸出入事業を展開。",
        link: "https://houeitransport.co.jp/"
    },
    {
        id: 4,
        img: Img_w4,
        title: "協和精工株式会社",
        description: "医療機器、精密機器、小型プラスチック成形部品の製造企業。",
        link: "https://kyowaseiko-i.co.jp/"
    }   
]


const data_3 = [
    {
        id: 1,
        img: Img_e,
        title: "Starbucks",
        description: "API動作の実装で上記のアプリを作成",
        link: "https://starbucks-app.vercel.app/",
        sitedesc: "使用ツール及びフレームワーク",
        tools: [
            "フレームワーク: Next.js",
            "プラットフォーム: Vercel",
            "APIテストツール: Postman",
            "Designツール: Adobe XD"
        ]
    },
    {
        id: 2,
        img: Img_e2,
        title: "House Marketplace",
        description: "AirbnbのようなWEBアプリを作成。ログインするとRent, Saleに出したい物件を掲載できます。",
        link: "https://house-markectplace.vercel.app/",
        sitedesc: "使用ツール及びフレームワーク",
        tools: [
            "フレームワーク: React.js",
            "プラットフォーム: Vercel",
            "データベース: Google Firebase",
            "APIテストツール: Postman"
        ]
    },
    {
        id: 3,
        img: Img_e3,
        title: "Support Desk App",
        description: "サポートセンターを想定したアプリ。特徴は、Reactならではのページ移動、動作のレスポンスが早いこと。",
        link: "https://shutosupprtdesk.herokuapp.com/",
        sitedesc: "使用ツール及びフレームワーク",
        "tools": [
            "フレームワーク: React.js",
            "プラットフォーム: Heroku",
            "データベース: MongoDB",
            "APIテストツール: Postman"
        ]
    }

]



export {data_1, data_2, data_3}