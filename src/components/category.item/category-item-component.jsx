import './category-item-styles.css'




const CategoryItem = ({ category }) => {
    const { imageUrl, title } = category
    return (
        <div className="categories-container">
            <div className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }} />
            <div className="category-body-container">
                <h1>{title}</h1>
                <p>shop Now</p>
            </div>
        </div>)
}
export default CategoryItem;