import filter from '../../../shared/icons/filter.svg'
import search from '../../../shared/icons/search.svg'
import '../../../app/styles/index.css'
import './Menu.css'
import ProductCard from '../../../widgets/productcard/ui/ProductCard'
import { productsApi, searchProducts } from '../../../shared/api/products'
import { useEffect, useState } from 'react'
import Paginaton from '../../../shared/ui/pagination/Pagination'
import { useSearchParams } from 'react-router-dom'

const Menu = () => {
    const [searchQuery, setSearchQuery] = useState(''); 
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const currentPage = Number(searchParams.get('page') || 1);
    const LIMIT = 30;
    
    const fetchProducts = (page) => {
        const skip = (page - 1) * LIMIT;
        const request = searchQuery.trim() ? searchProducts(searchQuery, LIMIT, skip) : productsApi(LIMIT, skip);
        request.then(data => { 
            setProducts(data.products);
            setTotalPages(Math.ceil(data.total / LIMIT));
            window.scrollTo(0,0);
        });
    }

    useEffect(()=> {
        if(!searchQuery.trim()) return;
        const timer = setTimeout(()=>{
            setSearchParams({page: 1});
        }, 500);
        return () => clearTimeout(timer);
    }, [searchQuery, setSearchParams]);


    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage, searchQuery]);

    const handlePageChange = (page) => {
        setSearchParams({ page: page + 1});
    }

    return(
        <div className='container'>
            <header className="header">
                <div className="header__content">
                    <div className="header__filter">
                        <h1>Каталог</h1>
                        <button><img src={filter} alt="Filter" />Сортировать по:</button>
                    </div>
                    <div className="header__search">
                        <img src={search} alt="Search" />
                        <input type="text" 
                            placeholder='Введите название товара'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </header>
            <main className="main">
                <section className='product__cards'>
                    { products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </section>
                {totalPages > 1 && (
                    <Paginaton
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        forcePage={currentPage -1}
                    />
                )}
            </main>
        </div>
    );
}

export default Menu;