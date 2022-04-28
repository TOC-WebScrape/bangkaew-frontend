import axios_base from "../http-common";

class ExchangeService {
  suggest(keyword: string) {
    return axios_base.get<any>(`/suggest?text=${keyword}`);
  }

  currency(name: string) {
      return axios_base.get<any>(`/currency/${name}`);
  }
}

export default new ExchangeService();
