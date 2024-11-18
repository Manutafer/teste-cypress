describe('Teste de Login', () => {
  beforeEach(() => {
      cy.visit('index.html'); 
  });

  it('Deve exibir um erro ao inserir credenciais inválidas', () => {
      cy.get('input#username').type('usuarioerrado');
      cy.get('input#password').type('senhaerrada');
      cy.get('button[type="submit"]').click();

      cy.get('#errorMessage').should('be.visible').and('contain', 'Usuário ou senha incorretos!');
  });

  it('Deve redirecionar após login bem-sucedido', () => {
      cy.get('input#username').type('admin');
      cy.get('input#password').type('admin123');
      cy.get('button[type="submit"]').click();
      cy.on('window:alert', (str) => {
          expect(str).to.equal('Login bem-sucedido!');
      });
  });

  it('Deve preencher e enviar o formulário', () => {
      cy.get('input#username').type('admin');
      cy.get('input#password').type('admin123');
      cy.get('button[type="submit"]').click();
      
      cy.url().should('include', 'index.html'); 
  });
});
