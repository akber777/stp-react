import React from "react";

// css
import "../static/css/_static.scss";
import "../product/css/_product.scss";


//react router dom
import {NavLink} from "react-router-dom";

//usequery
import {useQuery} from "react-query";

//queries
import {mediaMenu} from "../../queries/queries";


const NewsMenu = (props) => {

    const {data, isLoading} = useQuery(['mediaMenu', ''], mediaMenu, {
        refetchOnWindowFocus: false
    })

    return (
        <>
            <div className="static">
                <div className="product__info">
                    {
                        isLoading === false && data !== undefined && (
                            data.map(item => (
                                <NavLink to={item.url} key={item.id}>
                                    {
                                        item.title
                                    }
                                </NavLink>
                            ))
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default NewsMenu;
