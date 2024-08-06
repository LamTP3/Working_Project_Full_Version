// Định nghĩa kiểu type cho toàn bộ Project sử dụng các kiểu type đã định nghĩa
export interface Project {
  id?: string;
  basic_information: BasicInformationValues;
  project_detail: ProjectDetailValues;
  links: LinksValues;
  token_information: TokenInformationValues;
  capital: Capital;
  public_token_sale: PublicTokenSale;
  status_of_partnerships: StatusOfPartnerships;
  statusId: number;
  reject_reason: string;
}

// Định nghĩa kiểu type cho basic_information
export type BasicInformationValues = {
  project_name: string;
  contact_name: string;
  contact_telegram_handle: string;
  email: string;
  project_logo: string;
  project_cover: string;
};

// Định nghĩa kiểu type cho project_detail
export type ProjectDetailValues = {
  start_date: string;
  tags: Array<{
    tag_name: string;
    tag_value: string;
  }>;
  project_description: string;
  ecosystem: string;
  current_community: string;
  size_existing_user: string;
};

// Định nghĩa kiểu type cho links
export type LinksValues = {
  project_website: string;
  project_telegram: string;
  project_twitter: string;
  project_medium: string;
  project_other_link: string;
};

// Định nghĩa kiểu type cho token_information
export type TokenInformationValues = {
  token_name: string;
  token_symbol: string;
  token_contract_address: string;
  tokennomics: Array<{
    tokennomics_title: string;
    tokennomics_value: number;
  }>;
};

// Định nghĩa kiểu type cho capital
export type Capital = {
  rounds: Array<{
    roundName: string;
    startDate: string;
    endDate: string;
  }>;
};

// Định nghĩa kiểu type cho public_token_sale
export type PublicTokenSale = {
  total_amount?: number;
  amount_through_Galaxy?: number;
  flexible_amount: string;
  planned_FDV?: number;
  other_information: string;
  sale: string;
};

// Định nghĩa kiểu type cho status_of_partnerships
export type StatusOfPartnerships = Array<{
  value: string;
}>;

export type Project_Status = {
  id: string;
  value: string;
};
