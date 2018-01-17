import React from 'react';

import c from './HelpYourLibrary.scss';

function HelpYourLibrary() {
  return (
    <div className={c.container}>
      <p>
        Шановні добродії! Будемо вдячні, якщо ви знайдете можливість перерахувати посильний внесок на рахунок
        бібліотеки.
      </p>
      <p>
        Це допоможе наповнити наші полиці новими книжками, зробити бібліотеку ще кращою, ще комфортнішою для
        відвідувачів.
      </p>
      <p>Дякуємо вам за те, що ви є другом нашої бібліотеки!</p>
      <p>Рахунок Львівської обласної бібліотеки для дітей:</p>
      <p className={c.details}>
        р/р <strong>31558373124404</strong><br />
        ГУДКСУ у Львівській області<br />
        МФО <strong>825014</strong> <br />
        ЗКПО <strong>02221768</strong><br />
      </p>
      <p>
        79008, м.Львів, вул.В. Винниченка, 1,<br />
        тел. 235-87-48<br />
        e-mail: <a href="mailto:biblioteka@lodb.org.ua">biblioteka@lodb.org.ua</a><br />
        <a href="https://www.lodb.org.ua">www.lodb.org.ua</a>
      </p>
    </div>
  )
}

export default HelpYourLibrary;
