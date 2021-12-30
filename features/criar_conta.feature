# encoding: utf8
#language: pt

Funcionalidade: Criar Conta

  Contexto: Usuário na página inicial
    Dado que o usuário tenha acessado a página de login

  @automated
  Cenário: Criar conta com sucesso
    Quando ele preenche o formulário para criar uma conta
    E ele envia o formulário para criar uma conta
    Então ele deve ver a mensagem de sucesso 'Seu usuário foi criado com sucesso.'
    E ele deve ver que a conta foi criada na base

  @automated
  Esquema do Cenário: Criar conta com dados inválidos
    Quando ele preenche o campo '<campo>' do formulário para criar uma conta com o valor '<valor>'
    E ele envia o formulário para criar uma conta
    Então ele deve ver a mensagem de erro '<mensagem>' abaixo do campo '<campo>' do formulário para criar uma conta

    Exemplos:
    | campo | valor       | mensagem                                  |
    | email | teste@teste | Email inválido.                           |
    | senha | 12345       | A senha deve ter entre 6 e 10 caracteres. |
    | senha | 12345678901 | A senha deve ter entre 6 e 10 caracteres. |
