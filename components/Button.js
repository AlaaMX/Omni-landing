import styles from "./Button.module.css";
import React from 'react'


function AndroidIcon() {
    return (
        <svg className={styles.icon} width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.6106 12.7342L24.9506 8.68141C24.9919 8.61203 25.0162 8.52766 25.0162 8.43766C25.0162 8.16859 24.7987 7.95109 24.5297 7.95109C24.3506 7.95109 24.1941 8.04766 24.1097 8.19203L24.1087 8.19391L21.7397 12.2973C19.9706 11.4845 17.9016 11.0102 15.7219 11.0102C13.5422 11.0102 11.4731 11.4845 9.61219 12.3348L9.70406 12.2973L7.335 8.19297C7.24969 8.04672 7.09219 7.94922 6.91312 7.94922C6.64406 7.94922 6.42656 8.16672 6.42656 8.43578C6.42656 8.52578 6.45094 8.60922 6.49312 8.68141L6.49219 8.67953L8.83219 12.7323C4.81406 14.9514 2.04844 19.0108 1.66688 23.7423L1.66406 23.7911H29.7806C29.3962 19.0108 26.6306 14.9514 22.6837 12.768L22.6125 12.7323L22.6106 12.7342ZM9.24937 19.787C8.6025 19.787 8.07844 19.263 8.07844 18.6161C8.07844 17.9692 8.6025 17.4452 9.24937 17.4452C9.89625 17.4452 10.4203 17.9692 10.4203 18.6161C10.4194 19.262 9.89625 19.7861 9.24937 19.787ZM22.1906 19.787C21.5437 19.787 21.0197 19.263 21.0197 18.6161C21.0197 17.9692 21.5437 17.4452 22.1906 17.4452C22.8375 17.4452 23.3616 17.9692 23.3616 18.6161C23.3606 19.262 22.8375 19.7861 22.1906 19.787Z" />
        </svg>
    )
}

function AppleIcon() {
    return (
        <svg className={styles.icon} width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2329_1667)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7817 5.39673C20.8388 4.12924 21.5514 2.36389 21.3564 0.607422C19.833 0.667422 17.99 1.61414 16.8976 2.88013C15.9167 4.00361 15.0604 5.79877 15.2906 7.52075C16.99 7.65124 18.7245 6.6657 19.7817 5.39673ZM23.5924 16.5449C23.635 21.0854 27.6099 22.5957 27.6539 22.6152C27.6216 22.7217 27.019 24.7674 25.5601 26.8823C24.2977 28.7093 22.9883 30.5289 20.9254 30.5679C18.899 30.6054 18.2465 29.377 15.9284 29.377C13.6118 29.377 12.8875 30.5287 10.9696 30.6052C8.97848 30.6787 7.46092 28.6286 6.1897 26.8076C3.5886 23.0832 1.60185 16.2826 4.2704 11.6926C5.59587 9.41416 7.96384 7.9691 10.5356 7.9331C12.4901 7.8956 14.3361 9.23682 15.5311 9.23682C16.7261 9.23682 18.9694 7.62433 21.3271 7.86133C22.3139 7.90183 25.0851 8.2557 26.8636 10.8372C26.7199 10.9257 23.5572 12.75 23.5924 16.5449Z" />
            </g>
            <defs>
                <clipPath id="clip0_2329_1667">
                    <rect width="30" height="30" transform="translate(0.828125 0.611328)" />
                </clipPath>
            </defs>
        </svg>
    )
}

function Button({ type }) {
    return (
        <button className={styles.buttonColor}>
            {type == "ANDROID" ? <AndroidIcon /> : <AppleIcon />}
            Get on the Play store
        </button>
    )
}

export default Button