export default function Pagination({ membersPerPage, totalMembers, paginate , currentPage}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMembers / membersPerPage); i++) {
    pageNumbers.push(i);
    console.log(i);
  }
  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      paginate(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };
  return (
    <>
      <nav>
        <ul className="pagination">
        <button onClick={handlePrev} className="page-items mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
          </button>
          {pageNumbers.map((number) => (
            
            <li key={number} className="page-item">
              <button onClick={() => paginate(number)} className="page-link mx-1 rounded-full">
                {number}
              </button> 
            </li>
          ))}
          <button onClick={handleNext} className="page-items ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRul="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
              </button>
        </ul>
      </nav>
    </>
  );
}
