import { useUser } from '../context/Context.js'    
import { Zoom, Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import styles from '../styles/Banner.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Link from 'next/link'


export default function Banner({ ruta, carpeta, click }) {

    const { userDB, setUserData, setUserSuccess, success, postsIMG, setUserPostsIMG, date, monthAndYear } = useUser()
    // console.log(userDB[ruta])
    const router = useRouter()
    const buttonStyle = {
        width: "30px",
        background: 'none',
        border: '0px'
    };

    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}></button>,
        nextArrow: <button style={{ ...buttonStyle }}></button>
    }

    function redirect(ruta) {
        ruta != '#' ? window.open(ruta, '_blank') : ''
    }


    console.log(Object.keys(userDB[ruta][carpeta]).length)

    return (
        <div className={`${styles.containerFade} ${styles.containerFadeBanner}`} >
            {userDB[ruta] && postsIMG &&



                <>
                    {
                        Object.keys(userDB[ruta][carpeta]).length == 1 ?
                            Object.keys(userDB[ruta][carpeta]).map((i, index) =>
                                <div className="each-slide" key={index}>
                                    <div>
                                        {
                                            router.pathname === "/Admin" ?
                                                <span onClick={() => click({ carpeta, i })}><img className={styles.sliderIMG} src={postsIMG[`Banners/${i}`]} /></span>
                                                : <span onClick={() => redirect(userDB[ruta][carpeta][i].enlace ? userDB[ruta][carpeta][i].enlace : '#')}><img className={styles.sliderIMG} src={postsIMG[`Banners/${i}`]} style={{ objectPosition: `center` }} /></span>
                                        }
                                        <Link href={`https://api.whatsapp.com/send?phone=${userDB[ruta][carpeta][i].whatsapp}&text=Hola%20vi%20su%20anuncion%20en%20el%20PERIODICO%20HOY%20`} legacyBehavior>
                                            <a target="_blank"><span><img className={styles.sliderWhatsapp} src={`/SocialMedia/whatsapp.svg`} /></span></a>
                                        </Link>
                                    </div>
                                </div>
                            )
                            :
                            <Fade transitionDuration={800} duration={2000} scale={1}{...properties} indicators={true}>

                                {Object.keys(userDB[ruta][carpeta]).map((i, index) =>
                                    <div className="each-slide" key={index}>
                                        <div>
                                            {
                                                router.pathname === "/Admin" ?
                                                    <span onClick={() => click({ carpeta, i })}><img className={styles.sliderIMG} src={postsIMG[`Banners/${i}`]} /></span>
                                                    : <span onClick={() => redirect(userDB[ruta][carpeta][i].enlace ? userDB[ruta][carpeta][i].enlace : '#')}><img className={styles.sliderIMG} src={postsIMG[`Banners/${i}`]} style={{ objectPosition: `center` }} /></span>
                                            }
                                            <Link href={`https://api.whatsapp.com/send?phone=${userDB[ruta][carpeta][i].whatsapp}&text=Hola%20vi%20su%20anuncion%20en%20el%20PERIODICO%20HOY%20`} legacyBehavior>
                                                <a target="_blank"><span><img className={styles.sliderWhatsapp} src={`/SocialMedia/whatsapp.svg`} /></span></a>
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </Fade>

                    }
                </>




            }
        </div>)
}
