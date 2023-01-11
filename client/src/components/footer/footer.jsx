import styles from "./footer.module.css"

export default function Footer (){
    return (
        <div className={styles.footer}>          
            <p className={styles.infor}>This website was created in 2022. </p>
        </div>
    );
}