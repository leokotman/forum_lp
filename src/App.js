import React from 'react';
import './App.scss';
import MainHeader from "./features/header/MainHeader";
import RegisterBtn from "./features/components/RegisterBtn.js";
import SpeakerCard from "./features/speakers/SpeakerCard";
import MainFooter from "./features/footer/MainFooter";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <section>
        <h1>Форум Microsoft</h1>
        <h1>«Finance industry trust in AI and IT-Security»</h1>
        <p>Масштабная кибератака и устаревшее оборудование может привести к потере клиентов, ухудшить отношения с партнёрами и учредителями, а невыполнение требований законодательства может привести к существенным штрафам и даже к блокировке ресурсов</p>
        <p>Узнайте как этого избежать, регистрируйтесь на наш форум</p>
        <RegisterBtn />
      </section>
      <section>
        <SpeakerCard />
        <SpeakerCard />
        <SpeakerCard />
      </section>
      <MainFooter />
    </div>
  );
}

export default App;
