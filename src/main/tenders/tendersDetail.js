import React, { useState } from "react";
import { useLayoutEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { resizeBody } from "../../helper/helper";
import DownloadMenu from "./downloadMenu";
import { Accordion } from "react-accessible-accordion";
// css
import "../product/css/_product.scss";
import "./css/_download.scss";
import "../static/css/_static.scss";
import "react-accessible-accordion/dist/fancy-example.css";
import { useMutation, useQuery } from "react-query";
import { tendersApply, tendersDetail } from "../../queries/queries";
import renderHtml from "react-render-html";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../loader/loader";

const Tenders = () => {
  const { slug } = useParams();

  useLayoutEffect(() => {
    resizeBody();
  });

  const { data, isLoading } = useQuery(["TENDERS_DETAIL", slug], tendersDetail);

  const [formParams, setFormParams] = useState({
    company: "",
    phone: "",
    responsible: "",
    email: "",
    bank_details: "",
    address: "",
  });

  const { mutate, isLoading: isLoadingMutate } = useMutation(
    (params) => tendersApply(params),
    {
      onSuccess: () => {
        toast.success("Success", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setFormParams({
          company: "",
          phone: "",
          address: "",
          responsible: "",
          email: "",
          bank_details: "",
        });
      },
      onError: () => {
        toast.error("Error", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      },
    }
  );

  const [apply, setApply] = useState(false);

  const form = new FormData();

  const handleFile = (e) => {
    const { name, files } = e.currentTarget;

    if (files[0]) {
      setFormParams((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (id) => {
    form.append("id", id);
    for (const key in formParams) {
      form.append(key, formParams[key]);
    }

    if (
      formParams.phone &&
      formParams.company &&
      formParams.responsible &&
      formParams.proporsal &&
      formParams.company_registration &&
      formParams.bank_details &&
      formParams.address &&
      formParams.email &&
      !isLoadingMutate
    )
      mutate(form);
  };

  return (
    <main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="product__breadCrumbs static myPad">
        <NavLink to={"/"}>HomePage</NavLink>
        <NavLink to={"/tenders"}>Tenders</NavLink>
        {slug !== undefined && <NavLink to={"/tenders" + slug}>{slug}</NavLink>}
      </div>
      <div className="download  product productDetail myPad">
        <div className="product__left">
          <DownloadMenu />
        </div>
        <div className="product__right">
          <div className="product__right--title">
            <h1>Tenders</h1>
          </div>
          {/* <div className="download__description">
            fwefew
          </div> */}
          <div className="productDetail__tabBox">
            <Accordion>
              {!isLoading && (
                <>
                  <div className="accordion__button detail">
                    <h2 className="detail">{data.data.name}</h2>
                    <div className="accordionFlex">
                      <div>
                        <span className="detail">
                          Published: {data.data.published_at}
                        </span>
                        <span className="detail">
                          Deadline for Clarifications:{" "}
                          {data.data.clarifictions_at}{" "}
                        </span>
                        <span className="detail">
                          Deadline for Submissions: {data.data.submissions_at}
                        </span>
                      </div>
                      <div className="email">
                        <a href="mailto:Tender@stpglobalcable.com">
                          Email: Tender@stpglobalcable.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="accordion__panel">
                    {!apply ? (
                      <>
                        {renderHtml(data?.data.description)}
                        {data.data?.files.map((item) => (
                          <a
                            className="xls_download"
                            target="_blank"
                            href={item.path}
                          >
                            <img
                              src={require("../../images/pdf.png").default}
                              alt=""
                            />
                            {item.file_name}
                          </a>
                        ))}
                      </>
                    ) : (
                      <div className="accordian__form">
                        <h3>Please fill the form to apply tender</h3>
                        <form
                          className="accordion__flexForm"
                          onSubmit={(e) => e.preventDefault()}
                        >
                          <div className="accordion__inputBox">
                            <input
                              required
                              placeholder="Company name"
                              name="company"
                              value={formParams.company}
                              onChange={handleChange}
                            />
                            <input
                              required
                              placeholder="Phone number"
                              name="phone"
                              value={formParams.phone}
                              onChange={handleChange}
                            />
                            <input
                              required
                              placeholder="Responsible person name and surname"
                              name="responsible"
                              value={formParams.responsible}
                              onChange={handleChange}
                            />
                            <input
                              required
                              placeholder="Email"
                              name="email"
                              value={formParams.email}
                              onChange={handleChange}
                            />
                            <div className="proporsal">
                              <span>
                                {formParams["proporsal"]
                                  ? formParams["proporsal"].name
                                  : "Attach proposal"}{" "}
                              </span>
                              <input
                                required
                                name="proporsal"
                                type="file"
                                onChange={handleFile}
                              />
                            </div>
                            <input
                              required
                              placeholder="Adress"
                              name="address"
                              value={formParams.address}
                              onChange={handleChange}
                            />
                            <div className="proporsal">
                              <span>
                                {formParams["company_registration"]
                                  ? formParams["company_registration"].name
                                  : " Attach company registration document"}{" "}
                              </span>
                              <input
                                required
                                name="company_registration"
                                type="file"
                                onChange={handleFile}
                              />
                            </div>
                            <input
                              required
                              placeholder="Bank details"
                              name="bank_details"
                              value={formParams.bank_details}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="applyTendersFlex">
                            <button
                              className="applyTenders"
                              onClick={() => {
                                setApply(true);
                                handleSubmit(data?.data.id);
                              }}
                            >
                              {isLoadingMutate ? <Loader /> : "APPLY"}
                            </button>
                          </div>
                        </form>
                      </div>
                    )}

                    {!apply ? (
                      <div className="applyTendersFlex">
                        <button
                          className="applyTenders"
                          onClick={() => {
                            setApply(true);
                          }}
                        >
                          APPLY
                        </button>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tenders;
