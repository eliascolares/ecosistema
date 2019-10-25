export interface MenuInterface {
  footerPool: boolean;
  fullName: string;
  logoUrl: string;
  company: string;
  token: string;
  name: string;
  menuItems: [];
  produtos: [];
  idioma: string;
  tema: string;
  idiomas: Array<Idioma>;
  temas: Array<Temas>;
}

export interface Idioma {
  nome: string;
  value: string;
}

export interface Temas {
  nome: string;
  value: string;
}
