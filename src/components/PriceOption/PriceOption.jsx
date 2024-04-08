import PropTypes from "prop-types";

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-blue-500 rounded-lg p-4 text-white">
            <h2 className="text-center">
                <span className="text-6xl font-extrabold">{price}</span>
                <span className="text-3xl">/mon</span>
            </h2>
            <h4 className="text-3xl py-2 text-center my-8">{name}</h4>
        </div>
    );
}; 

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;