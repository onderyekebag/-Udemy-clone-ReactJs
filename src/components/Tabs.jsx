import React from "react";
import styled from "styled-components";
import Course from "./Course";
import courses from "../utils/data";
import {
  PYTHON,
  AWS,
  DATA_SCIENCE,
  DESIGN,
  MARKETING,
  WEB_DEVELOPMENT,
} from "../utils/constants";
import { useState } from "react";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(PYTHON);
  const tabHandler = (category) => {
    setActiveTab(category);
  };

  return (
    <TabsWrapper>
      <div className="tabs">
        <ul className="flex flex-wrap">
          <li className="tabs-head-item">
            <button
              type="button"
              className={`tab-btn ${activeTab === PYTHON}`}
              onClick={() => tabHandler(PYTHON)}
            >
              Python
            </button>
          </li>
          <li className="tabs-head-item">
            <button
              type="button"
              className={`tab-btn ${activeTab === AWS}`}
              onClick={() => tabHandler(AWS)}
            >
              AWS
            </button>
          </li>
          <li className="tabs-head-item">
            <button
              type="button"
              className={`tab-btn ${activeTab === DATA_SCIENCE}`}
              onClick={() => tabHandler(DATA_SCIENCE)}
            >
              DATA_SCIENCE
            </button>
          </li>
          <li className="tabs-head-item">
            <button
              type="button"
              className={`tab-btn ${activeTab === DESIGN}`}
              onClick={() => tabHandler(DESIGN)}
            >
              DESIGN
            </button>
          </li>
          <li className="tabs-head-item">
            <button
              type="button"
              className={`tab-btn ${activeTab === MARKETING}`}
              onClick={() => tabHandler(MARKETING)}
            >
              MARKETING
            </button>
          </li>
          <li className="tabs-head-item">
            <button
              type="button"
              className={`tab-btn ${activeTab === WEB_DEVELOPMENT}`}
              onClick={() => tabHandler(WEB_DEVELOPMENT)}
            >
              WEB_DEVELOPMENT
            </button>
          </li>
        </ul>
        <div className="tabs-body">
          {courses
            .filter((course) => course.category === activeTab)
            .map((course) => {
              return <Course key={course.id} {...course} />;
            })}
        </div>
      </div>
    </TabsWrapper>
  );
};
const TabsWrapper = styled.div`
  .tabs {
    margin-top: 16px;
    .tabs-head-item button {
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      margin-bottom: 10px;
      &:hover {
        background-color: var(--clr-black);
        color: var(--clr-white);
      }
    }
    .tabs-body {
      margin-top: 32px;
    }
    @media screen and (min-width: 600px) {
      .tabs-body {
        display: grid;
        gap: 26px;
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media screen and (min-width: 992px) {
      .tabs-body {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    @media screen and (min-width: 1400px) {
      .tabs-body {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;
export default Tabs;
