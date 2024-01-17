'use client'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Thumbnail from "./thumbnail";
import styles from '@/app/page.module.scss';
import Image from "next/image";

const Carousel = ({movies}) => {
    const[idx, setIdx] = useState(0)
    let movie = movies[idx]

    const handlePreviousClick = (e) =>{
        let newIdx = Math.floor((idx - 1) % movies.length)
        if (newIdx < 0) newIdx = movies.length - 1
        setIdx(newIdx)
    }
    const handleNextClick = (e) => {
        let newIdx = Math.floor((idx + 1) % movies.length)
        setIdx(newIdx)
    }
    return(
        <div className = {styles['home-page']}>
            <div className={styles['background-image']}>
                <Image src={movie.Poster} alt={movie.Title} fill={true} />
                <div className={styles["background-gradient"]}></div>
            </div>
            <div className={styles['carousel-container']}>
                <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow} onClick={(e) => { handlePreviousClick(e) }} />
                <Thumbnail movie={movie} />
                <FontAwesomeIcon icon={faChevronRight} className={styles.arrow} onClick={(e) => { handleNextClick(e) }} />
            </div>
        </div>
    )  
}

export default Carousel