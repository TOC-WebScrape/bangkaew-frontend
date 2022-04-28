import axios_base from "../http-common";

class ExchangeService {
  suggest() {
    return axios_base.get<any>(`/currency-name`);
  }

  currency(name: string) {
      return axios_base.get<any>(`/currency/${name}`);
  }
}

export default new ExchangeService();
