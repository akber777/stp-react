import React from "react";
import { Accordion } from "react-accessible-accordion";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import { tendersLatest } from "../../queries/queries";

const HomeTenders = () => {
  const { data, isLoading } = useQuery(["TENDERS_LATEST"], tendersLatest);

  return (
    <div className="homePageTender">
      <div className="video__title">
        <h4>TENDERS</h4>
      </div>
      <Container>
        <Accordion>
          {!isLoading &&
            data?.data.map((item, index) => (
              <div
                className="accordion__button"
                key={index.toString() + item.name}
              >
                <NavLink to={`/tenders/${item.slug}`}>
                  <h2>{item.name}</h2>
                  <div className="accordionFlex">
                    <div>
                      <span>Published: {item.published_at}</span>
                      <span>
                        Deadline for Clarifications: {item.clarifictions_at}{" "}
                      </span>
                      <span>
                        Deadline for Submissions: {item.submissions_at}
                      </span>
                    </div>

                    <div className="email">
                      <a href="mailto:Tender@stpglobalcable.com">
                        Email: Tender@stpglobalcable.com
                      </a>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
        </Accordion>
      </Container>
    </div>
  );
};

export default HomeTenders;
