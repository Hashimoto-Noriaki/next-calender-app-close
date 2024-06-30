import React from 'react';

const Home: React.FC = () => {
  return(
    <div className="relative">
      <header className="bg-white line-height:50px; fixed top-0 left-0 right-0">
        <div className="container mx-auto flex justify-between">
          <p className="logo">スケジュール管理APP</p>
          <nav>
            <ul className="flex gap-5 text-lime-800">
              <li>ご利用方法</li>
              <li>ログイン</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="pt-[50px]">
        <div>
          <h1>スケジュール管理</h1>
          <p>
            お互いのスケジュールを管理するアプリです。
          </p>
          <div>
            <button>
              ログイン
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
