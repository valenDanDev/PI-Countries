import styles from "./Pagination.module.css"

export default function Pagination(props) {
  const pageNumbers = [];

  for (var i = 1;
    i <= Math.ceil(props.countries / props.countriesXPage);
    i++
  ) {
    pageNumbers.push(i);
    // debugger
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number} className={styles.page_item}>
              <button
                onClick={() => props.paginate(number)}
                href="/#"
                className="page-link"
              >
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}