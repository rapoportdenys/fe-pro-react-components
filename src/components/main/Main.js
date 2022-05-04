import React from 'react';
import MainList from './Main-list';

const Main = () => {
  const Articles = [
    {
      headlineArticles: '15 полезных однострочных выражений JavaScript',
      bodyArticles:
        'Улучшение JavaScript-кода за пару минут перевод 15 Helpful JavaScript One-Liners',
    },
    {
      headlineArticles: 'Полиморфизм простыми словами',
      bodyArticles:
        'Скорее всего вы уже встречались с понятием “полиморфизм” и даже помните примеры с наследованием, но они показывают далеко не всё',
    },
    {
      headlineArticles: 'Начало работы с Node.js',
      bodyArticles: ' Node Hero: Глава 1',
    },
    {
      headlineArticles:
        'Нейросети с нуля для JavaScript разработчиков (Часть 1: Перцептрон)',
      bodyArticles:
        'Перевод статьи Elyx0: Neural networks from scratch for Javascript linguists (Part1 The Perceptron).',
    },
    {
      headlineArticles:
        '8 практичных хитростей веб-разработчика применить немедленно!',
      bodyArticles:
        'HTML, CSS и JS хинты, которые полезно знать перевод 8 Tricks for Web Developers You Can Put Into Practice Immediately',
    },
    {
      headlineArticles: 'Насколько JavaScript сильный?',
      bodyArticles:
        'Погружение в тему неявных преобразований. Где и как возникают и вычисляются неявные преобразования в JavaScript?',
    },
    {
      headlineArticles: 'Девшахта-подкаст',
      bodyArticles: '#114: Мониторинг node.js на примере интересного кейса',
    },
    {
      headlineArticles: 'Изучите CSS-переменные за 5 минут',
      bodyArticles:
        ' Перевод статьи Per Harald Borgen: Learn CSS Variables in 5 minutes.',
    },
    {
      headlineArticles: 'Создание MEVN-приложения (Часть 1/2)',
      bodyArticles:
        ' Создание full-stack приложения на основе Vue.js и Express.js (+MongoDB)',
    },
    {
      headlineArticles: 'Реактивность Vue.js',
      bodyArticles:
        'Реактивность фреймворка Vue.js и использование метода Vue.set',
    },
    {
      headlineArticles: 'Микроптимизации производительности и JavaScript',
      bodyArticles:
        'Недавно в комментариях на Hexlet я поучаствовал в дискуссии на тему «Что важнее — оптимизации производительности или качество кода?» Если…',
    },
    {
      headlineArticles: 'Девшахта-подкаст',
      bodyArticles:
        '#108: Производительность кода — это важнейший критерий качества?',
    },
    {
      headlineArticles:
        'Одна из самых красивых идей в информатике: Y-Combinator',
      bodyArticles:
        'Перевод статьи Lucas Fernandes da Costa “Y: The Most Beautiful Idea in Computer Science explained in JavaScript”',
    },
  ];
  return (
    <main>
      <section className="posts">
        <div className="constainer">
          <MainList items={Articles} />
        </div>
      </section>
    </main>
  );
};

export default Main;
