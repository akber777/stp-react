import React, {useLayoutEffect} from "react";

// css
import "../product/css/_product.scss";
import "./css/_download.scss";
import "../static/css/_static.scss";

// helper
import {resizeBody} from "../../helper/helper";

// react query
import {useQuery} from "react-query";

// myQueries
import {download, downloadCategory} from "../../queries/queries";

// react router dom
import {NavLink, useParams} from "react-router-dom";

// components
import DownloadMenu from "./downloadMenu";

//renderHtml
import renderHtml from 'react-render-html';

import Collapse from 'react-bootstrap/Collapse'

const Download = (props) => {
    const {slug} = useParams();

    useLayoutEffect(() => {
        resizeBody();
    });

    const {data, isLoading} = useQuery(
        ["downloadAll", slug !== undefined ? slug : ""],
        slug !== undefined ? downloadCategory : download,
        {
            refetchOnWindowFocus: false,
        }
    );

    return (
        <main>
            <div className="product__breadCrumbs static myPad">
                <NavLink to={"/"}>HomePage</NavLink>
                <NavLink to={"/download"}>Download</NavLink>

                {slug !== undefined && (
                    <NavLink to={"/download" + slug}>{slug}</NavLink>
                )}
            </div>
            <div className="download  product productDetail myPad">
                <div className="product__left">
                    <DownloadMenu/>
                </div>
                <div className="product__right">
                    <div className="product__right--title">
                        <h1>Download</h1>
                    </div>
                    <div className='download__description'>
                        <p>
                            {
                                isLoading === false && (
                                    data.data.description !== null && data.data.description !== undefined && (
                                        renderHtml(data.data.description)
                                    )
                                )
                            }
                        </p>
                    </div>
                    <div className="productDetail__tabBox">
                        {slug === undefined &&
                        isLoading === false &&
                        data !== undefined &&
                        data.data.map((item, index) => (
                            <div
                                className="product__right--title download__info"
                                key={index}
                            >
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={item.file !== null ? item.file.path : ""}
                                    download
                                >
                                    <h4>
                                        <img
                                            src={require("../../images/pdf.png").default}
                                            alt=""
                                        />
                                        {item.name}
                                    </h4>

                                    <p>
                                        <span>{item.size}</span>
                                        <span>{item.created_at}</span>
                                    </p>
                                </a>
                            </div>
                        ))}

                        {slug !== undefined &&
                        isLoading === false &&
                        data !== undefined &&
                        data.data.dowloads.data.map((item, index) => (
                            <div
                                className="product__right--title download__info"
                                key={index}
                            >
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href={item.file !== null ? item.file.path : ""}
                                >
                                    <h4>
                                        <img
                                            src={require("../../images/pdf.png").default}
                                            alt=""
                                        />
                                        {item.name}
                                    </h4>

                                    <p>
                                        <span>{item.size}</span>
                                        <span>{item.created_at}</span>
                                    </p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Download;
