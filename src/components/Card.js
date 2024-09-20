import { useState } from "react";

function Card({ id, img, info, name, price, removeTour }) {
    const [readMore, setReadMore] = useState(false);
    const description = readMore ? info : `${info.substring(0, 200)}...`;

    const readmoreHandler = () => {
        setReadMore(!readMore);
    };

    return (
        <div className="card">
            <img src={img} className="image" alt={name} />
            <div className="tour-info">
                <div className="tours-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readMore ? "show less" : "read more"}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}
export default Card;
