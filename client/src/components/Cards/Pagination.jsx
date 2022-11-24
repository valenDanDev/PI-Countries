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
      {i-1!==0?
      
    <div>
             <div className={styles.tittle}>
      page  {props.currentPage}/{i-1}
      </div>
     
      <ul className={styles.pagination}>
      <li className={styles.page_item}>
          <Link to={props.currentPage}  className="page-link-s"  onClick={() =>  props.currentPage>1?props.paginate(props.currentPage-1): props.paginate(props.currentPage)} aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">Previous</span>
          </Link>
        </li>
    
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number} className={styles.page_item}>
              <Link 
               className={`page-link ${props.currentPage === number ? "actives" : ""}`}
                onClick={() => props.paginate(number)}
                to={number}
              >
                {number}
              </Link>
            </li>
          ))}
                  <li className={styles.page_item}>
          <Link  to={props.currentPage}  className="page-link-s" onClick={() => props.currentPage<i-1?props.paginate(props.currentPage+1): props.paginate(props.currentPage)} aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Next</span>
          </Link>
        </li>
      </ul>

    </div>:<p></p>}

    </div>
  );
}