import styles from "./Home.module.css" ;
import Navbar from '../Navigation/Navbar';
import Cards from '../Cards/Cards';
import Footer from "../footer/footer";

export default function Home() {
    return (
        <div className={styles.home_container}>
            <Navbar/>
            <Cards/>
            <Footer/>
        </div>
    )}