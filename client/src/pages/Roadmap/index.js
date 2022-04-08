import { RoadmapComp } from "components";
import { Context } from "context/context";
import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Roadmap.scss";

export const Roadmap = () => {
  const { feedbacks, fetchSuggestions } = useContext(Context);

  const isActive = feedbacks?.map((feedback) => {
    if (
      feedback.status === "planned" ||
      feedback.status === "in-progress" ||
      feedback.status === "live"
    ) {
      return true;
    }
    return false;
  });
  console.log(feedbacks);

  useEffect(() => {
    fetchSuggestions();
  }, []);
  const history = useHistory();
  return (
    <div className="roadmap">
      {isActive && (
        <>
          <div className="head">
            <div className="left">
              <div className="go-back" onClick={() => history.goBack()}>
                <i className="fas fa-chevron-left"></i> <span>Go Back</span>
              </div>
              <h3>Roadmap</h3>
            </div>
            <Link to="/add-feedback">
              <button>+ Add Feedback</button>
            </Link>
          </div>
          <div className="container">
            <div className="category planned">
              <h2>
                Planned ({" "}
                {
                  feedbacks.filter((feedback) => feedback.status === "planned")
                    .length
                }
                )
              </h2>
              <p>Ideas priortized for research</p>
              {feedbacks
                ?.filter((prod) => prod.status === "planned")
                .map((prod) => {
                  console.log(prod);
                  return (
                    <Link to={`/details/${prod.id}`}>
                      <RoadmapComp
                        key={prod.id}
                        suggestion={prod}
                        color="#F49F85"
                      />
                    </Link>
                  );
                })}
              {/* <RoadmapComp />
          <RoadmapComp />
          <RoadmapComp /> */}
            </div>
            <div className="category in-progress">
              <h2>
                In-Progress ({" "}
                {
                  feedbacks.filter(
                    (feedback) => feedback.status === "in-progress"
                  ).length
                }
                )
              </h2>
              <p>Currently being developed</p>
              {feedbacks
                ?.filter((prod) => prod.status === "in-progress")
                .map((prod) => {
                  console.log(prod);
                  return (
                    <Link to={`/details/${prod.id}`}>
                      <RoadmapComp
                        key={prod.id}
                        suggestion={prod}
                        color="#AD1FEA"
                      />
                    </Link>
                  );
                })}
              {/* {products.map(prod => {
            return <RoadmapComp key={prod.id} suggestion={prod} color="#F49F85"/>
          })} */}
            </div>
            <div className="category live">
              <h2>
                Live ({" "}
                {
                  feedbacks.filter((feedback) => feedback.status === "live")
                    .length
                }
                )
              </h2>
              <p>Released features</p>

              {feedbacks
                ?.filter((prod) => prod.status === "live")
                .map((prod) => {
                  console.log(prod);
                  return (
                    <Link to={`/details/${prod.id}`}>
                      <RoadmapComp
                        key={prod.id}
                        suggestion={prod}
                        color="#62BCFA"
                      />
                    </Link>
                  );
                })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
