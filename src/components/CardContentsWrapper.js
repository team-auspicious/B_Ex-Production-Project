import { cloneDeep } from "lodash";
import { CardContents } from "@heejeong/component/dist/index";
import React from "react";

const CardContentsWrapper = ({ contents, idx1, idx2, originData, handleSetContents }) => {
    const handleChange = (e) => {
        let nextData = cloneDeep(originData[idx1]);
        nextData.data[idx2] = e.target.value.trim();
        handleSetContents(idx1, nextData);
    }

    const handleDeleteCard = () => {
        let nextData = cloneDeep(originData[idx1]);
        nextData.data.splice(idx2, 1);
        handleSetContents(idx1, nextData);
    }

  return (
    <CardContents
      contents={contents}
      handleChange={handleChange}
      handleDeleteCard={handleDeleteCard}
    />
    // <div
    //   className="card"
    // >
    //   <div className="card-delete" onClick={handleDeleteCard}>
    //     x
    //   </div>
    //   <textarea
    //     rows="3"
    //     cols="1"
    //     name="title"
    //     className="card-title"
    //     onChange={handleChange}
    //     autoComplete="false"
    //     value={contents}
    //   />
    // </div>
  );
};

export default CardContentsWrapper;