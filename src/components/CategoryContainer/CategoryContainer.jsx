import CategoryItem from "../CategoryItem/CategoryItem";
import "../CategoryContainer/CategoryContainer.scss";
const CategoryContainer = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} />
      ))}
    </div>
  );
};

export default CategoryContainer;
