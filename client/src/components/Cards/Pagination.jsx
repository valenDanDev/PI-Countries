import styles from "./Pagination.module.css"

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
      <ul className={styles.pagination}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number} className={styles.page_item}>
              <button
                onClick={() => props.paginate(number)}
               
              >
                {number}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}