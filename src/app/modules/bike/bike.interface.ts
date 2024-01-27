export interface IInsurance {
  provided?: boolean;
  policyNumber?: number;
  expirationDate?: string;
}

export interface IBike {
  userEmail: string;
  name: string;
  price: number;
  quantity: number;
  releaseDate: string;
  brand: string;
  model: string;
  size: string;
  type: string;
  color: string;
  mileage: number;
  isDeleted: boolean;
  isVisible: boolean;
  insurance?: IInsurance;
}
