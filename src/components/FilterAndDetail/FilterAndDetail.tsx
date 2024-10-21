import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

const FilterAndDetail = () => {
    const products = useSelector((state: RootState) => state.products);

    //calculate the total number of the selected products
    const totalItems = products.reduce((total, product) => total + product.quantity, 0);

    return (
        <div className="w-full flex justify-between items-center">
            <p className={`${totalItems === 0 && "invisible"} text-fuchsia-500 font-semibold`}>{totalItems} محصول در سبد خرید شما وجود دارد</p> {/* نمایش مجموع تعداد */}
            <button className="rounded flex justify-center items-center gap-2 border border-fuchsia-500 text-fuchsia-500 font-semibold px-3 py-2">
                فیلتر ها
                <img src="/icons/FilterIcon.svg" alt="filterIcon" />
            </button>
        </div>
    );
};

export default FilterAndDetail;
