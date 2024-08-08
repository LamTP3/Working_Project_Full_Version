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

export type BasicInformationValues = {
  project_name: string;
  contact_name: string;
  contact_telegram_handle: string;
  email: string;
  project_logo: string;
  project_cover: string;
};

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

export type LinksValues = {
  project_website: string;
  project_telegram: string;
  project_twitter: string;
  project_medium: string;
  project_other_link: string;
};

export type TokenInformationValues = {
  token_name: string;
  token_symbol: string;
  token_contract_address: string;
  tokennomics: Array<{
    tokennomics_title: string;
    tokennomics_value: number;
  }>;
};

export type Capital = {
  rounds: Array<{
    roundName: string;
    startDate: string;
    endDate: string;
  }>;
};

export type PublicTokenSale = {
  total_amount?: number;
  amount_through_Galaxy?: number;
  flexible_amount: string;
  planned_FDV?: number;
  other_information: string;
  sale: string;
};

export type StatusOfPartnerships = Array<{
  value: string;
}>;

export type Project_Status = {
  id: string;
  value: string;
};
