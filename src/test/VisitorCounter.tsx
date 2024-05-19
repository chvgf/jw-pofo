import React, { useEffect, useState } from "react";

const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // 로컬 스토리지에서 방문자 수를 가져옵니다.
    const storedCount = localStorage.getItem("visitorCount");
    if (storedCount) {
      setCount(parseInt(storedCount, 10));
    }

    // 세션 스토리지에서 방문자 상태를 확인합니다.
    const sessionVisited = sessionStorage.getItem("visited");

    if (!sessionVisited) {
      // 방문자가 현재 세션에서 처음 방문한 경우
      const newCount = (storedCount ? parseInt(storedCount, 10) : 0) + 1;
      setCount(newCount);
      localStorage.setItem("visitorCount", newCount.toString());
      sessionStorage.setItem("visited", "true"); // 세션에 방문 기록을 저장합니다.
    }
  }, []);

  return (
    <div>
      <h1>Visitor Count: {count}</h1>
    </div>
  );
};

export default VisitorCounter;
