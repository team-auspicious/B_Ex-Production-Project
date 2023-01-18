import React from "react";
import CardContentsWrapper from "./CardContentsWrapper";
import { Card } from "@heejeong/component/dist/index";
import { cloneDeep } from 'lodash'

const CardWrapper = ({ cardInfo, handleSetCard }) => {
  console.log(cardInfo);
    const handleCreateCard = (key) => {
        let nextState = cloneDeep(cardInfo);
        nextState[key].data.push('');
        handleSetCard(nextState);
    };

    const handleSetContents = (key, nextContents) => {
        let nextState = cloneDeep(cardInfo);
        nextState[key] = nextContents;
        handleSetCard(nextState);
    };

  return (
    <>
      {cardInfo && cardInfo.map((card, idx1) => (
        <Card
          originData={cardInfo}
          idx1={idx1}
          status={card.status}
          data={card.data}
          handleCreateCard={handleCreateCard}
          handleSetContents={handleSetContents}
        >
          {card.data &&
            card.data.map((item, idx2) => (
              <CardContentsWrapper
                contents={item}
                originData={cardInfo}
                idx1={idx1}
                idx2={idx2}
                handleSetContents={handleSetContents}
              />
            ))}
        </Card>
        // <div className="column" data-card-category={card.status}>
        //   <div className="column-header">{card.status.toUpperCase()}</div>
        //   <div
        //     className="card card-create"
        //     onClick={() => handleCreateCard(idx1)}
        //   >
        //     +
        //   </div>
        //   <section
        //     className="card-container"
        //   >
        //     {card.data &&
        //       card.data.map((item, idx2) => (
        //         <CardContents
        //           contents={item}
        //           originData={cardInfo}
        //           idx1={idx1}
        //           idx2={idx2}
        //           handleSetContents={handleSetContents}
        //         />
        //       ))}
        //   </section>
        // </div>
      ))}
    </>
  );
};

export default CardWrapper;