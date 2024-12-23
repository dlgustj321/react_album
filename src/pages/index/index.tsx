import styles from './styles/index.module.scss'

function index() {
    return ( 
       <div className={styles.page}>
            {/*공통 헤더 부분*/}
            {/*공통 네비게이션 부분*/}
            <div className={styles.page_contents}>
                <div className={styles.page_contents_introBox}>
                    <div className={styles.wrraper}>
                        <span className={styles.wrraper_title}>PhotoSplash</span>
                        <span className={styles.wrraper_desc}>
                            인터넷의 시각 자료 출처입니다.
                            모든 지역에 있는 크리에이터들의 지원을 받습니다.
                        </span>
                        {/* 검색창 UI 부분*/}
                    </div>
                </div>
                <div className={styles.page_contents_imageBox}></div>
            </div>
            {/*공통 푸터 부분*/}
        </div>
    )
}

export default index