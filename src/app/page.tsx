import React from 'react';
import { PrimaryBtn } from "../components/atoms/PrimaryBtn";

const Home: React.FC = () => {
  return (
    <main className="pt-[50px] bg-gradient-to-r from-lime-100 to-lime-200 h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-7xl logo">スケジュール管理</h1>
        <p className="pt-[10vh] text-5xl">
          お互いのスケジュールを管理するアプリです。
        </p>
        <div className="pt-[20vh]">
          <PrimaryBtn>ログイン</PrimaryBtn>
        </div>
      </div>
    </main>
  );
};

export default Home;
