import React from 'react';
import "./Kanban.css";
import CardWrapper from "./components/CardWrapper";

const Kanban = () => {
    const [cardData, setCardData] = React.useState([
      { status: "todo", data: ["라이브 세션 4회차 듣기"]},
      { status: "working", data: []},
      { status: "test", data: ["디자인 스튜디오 테스트"]},
      { status: "done", data: ["코어 트래킹 완료", "component lib 적용", "foundation lib 적용"]},
    ]);

    return (
      <React.Fragment>
        <nav>
          <div></div>
          <div>Innercircle Kaban Board</div>
          <div></div>
        </nav>
        <div className="column-container">
          <CardWrapper cardInfo={cardData} handleSetCard={setCardData} />
        </div>
      </React.Fragment>
    );

}

export default Kanban;