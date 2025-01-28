/// <reference types="cypress" />
import greenApiConfig from '../../support/greenApiConfig';

describe('Отправка сообщения через Green API', () => {
  it('Успешная отправка сообщения в личный чат', () => {
    let requestUrl = `${greenApiConfig.apiUrl}/waInstance${greenApiConfig.idInstance}/sendMessage/${greenApiConfig.apiTokenInstance}`

    // Загружаем тело запроса из /fixtures
    cy.fixture('sendMessageToPrivate').then((body) => {
      cy.request({
        method: 'POST',
        url: requestUrl,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body, // Используем данные из fixtures
      }).then((response) => {
        expect(response.status).to.eq(200); // Проверяем статус
        cy.log('Response:', response.body); // Логируем тело ответа
      });
    });
  });

//Не разобрался с валидным chatId: 'g.us'

  // it('Успешная отправка сообщения в групповой чат', () => {
  //   let requestUrl = `${greenApiConfig.apiUrl}/waInstance${greenApiConfig.idInstance}/sendMessage/${greenApiConfig.apiTokenInstance}`

  //   // Загружаем тело запроса из /fixtures
  //   cy.fixture('sendMessageToGroup').then((body) => {
  //     cy.request({
  //       method: 'POST',
  //       url: requestUrl,
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: body, // Используем данные из fixtures
  //     }).then((response) => {
  //       expect(response.status).to.eq(400); // Проверяем статус
  //       cy.log('Response:', response.body); // Логируем тело ответа
  //     });
  //   });
  // });

  it('Успешная отправка сообщения с цитированием', () => {
    let requestUrl = `${greenApiConfig.apiUrl}/waInstance${greenApiConfig.idInstance}/sendMessage/${greenApiConfig.apiTokenInstance}`

    // Загружаем тело запроса из /fixtures
    cy.fixture('sendMessageWithQuote').then((body) => {
      cy.request({
        method: 'POST',
        url: requestUrl,
        headers: {
          'Content-Type': 'application/json',
        },
        body: body, // Используем данные из fixtures
      }).then((response) => {
        expect(response.status).to.eq(200); // Проверяем статус
        cy.log('Response:', response.body); // Логируем тело ответа
      });
    });
  });
});



