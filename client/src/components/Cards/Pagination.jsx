import styles from "./Pagination.module.css"
import { Link } from "react-router-dom";

export default function Pagination(props) {
  const pageNumbers = [];

  for (var i = 1;
    i <= Math.ceil(props.countries / 9);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className={styles.tittle}>
      page  {props.currentPage}/{i-1}
      </div>
     
      <ul className={styles.pagination}>
      <li class={styles.page_item}>
          <Link class="page-link-s" to={props.currentPage-1} onClick={() => props.paginate(props.currentPage-1)} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </Link>
        </li>
    
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number} className={styles.page_item}>
              <Link 
               className={`page-link ${props.currentPage === number ? "active" : ""}`}
                onClick={() => props.paginate(number)}
                to={number}
              >
                {number}
              </Link>
            </li>
          ))}
                  <li class={styles.page_item}>
          <Link class="page-link-s" to={props.currentPage+1} onClick={() => props.paginate(props.currentPage+1)} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}