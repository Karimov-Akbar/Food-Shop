import ReactPaginate from "react-paginate";
import './Pagination.css';

const Paginaton = ({ totalPages, onPageChange, forcePage}) => {
    return(
        <ReactPaginate
            pageCount={totalPages}
            onPageChange={({selected}) => onPageChange(selected)}
            forcePage={forcePage}
            previousLabel="←"
            nextLabel="→"
            breakLabel="..."
            containerClassName="pagination"
            pageClassName="pagination__item"
            activeClassName="pagination__item--active"
            previousClassName="pagination__prev"
            nextClassName="pagination__next"
            disabledClassName="pagination__disabled"
            pageRangeDisplayed={3}
            marginPagesDisplayed={3}
        />
    )
}

export default Paginaton;