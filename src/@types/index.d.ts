export interface BaseResponse<T> {
  data: T;
}

export interface University {
  "state-provice": string;
  name: string;
  web_pages: string[];
  country: string;
  alpha_two_code: string;
  domains: string[];
}
