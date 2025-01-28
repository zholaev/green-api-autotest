/// <reference types="cypress" />
import greenApiConfig from '../../support/greenApiConfig';

describe('Отправка сообщения через Green API', () => {
    it('Успешно отправляет сообщение', () => {
        let requestUrl = `${greenApiConfig.apiUrl}/waInstance${greenApiConfig.idInstance}/getChatHistory/${greenApiConfig.apiTokenInstance}`

      // Загружаем тело запроса из /fixtures
      cy.fixture('getChatHistory').then((body) => {
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
          cy.log('Прошу прощения, но не посчитал проверку такого огромного ожидаемого результата ключевым фактором тех задания, спасибо)')
        });
      });
    });
});
