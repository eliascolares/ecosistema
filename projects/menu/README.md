# Ecosistema Dcide
## Menu

#### Instalando
`npm install @eliascolares/menu --save`

#### Configurando
Adicione o MenuModule no exports do `SharedModule`

#### Parametros obrigatórios
A lib espera como configuração um objeto com os seguintes valores  
```
    fullName: string; 
    logoUrl: string; 
    company: string; 
    token: string; 
    name: string;
    menuItems: []; 
    produtos: []; 
```
Como saída a lib retorna para o component um valor `true` quando o usuário clica no botão sair para deslogar, 
deve ser implementado no código o service para deslogar o usuário na api

#### Exemplo entrada
```
parametros = {
    fullName: 'Elias Colares',
    logoUrl: '../../../../assets/images/image.png',
    company: 'Company Teste',
    name: 'Elias',
    token: '123456789',
    menuItems: [
        {
            label: 'Url 1',
            link: '/path'
        },
        {
            label: 'Url 2',
            items: [
                {
                  label: 'Url child 1',
                  link: '/path/path'
                }
            ]
        }
    ]
    
}
```
#### Exemplo saída
```
onLogout(event): void {
    if(event) {
        this.authService.logout().subscribe(() => {});
    }
}
```

`<lib-ecosistema-menu [params]="parametros" [logout]="onLogout($event)"></lib-ecosistema-menu>`
