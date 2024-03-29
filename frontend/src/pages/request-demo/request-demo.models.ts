export interface IContactForm {
  name: string;
  email: string;
  phoneNumber: string;
  company: string;
  role: string;
}

export interface IArticle {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  text?: string;
}

