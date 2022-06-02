import styles from './Filme.module.css';

function Filme(props) {
    return (

        <div className={styles.filme}>
            <p className={styles.title}>Title: {props.episodio.title}</p>
            <br />
            <p> Director: {props.episodio.director}</p><br />
            <th>
                <p>{props.episodio.opening_crawl}</p><br />
                <p>Release Date: {props.episodio.release_date}</p>
            </th>
        </div>
    );
}

export default Filme;