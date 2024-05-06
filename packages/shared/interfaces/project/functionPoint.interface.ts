interface IFunctionPointValues {
  low: number;
  avarage: number;
  high: number;
}

export interface IFunctionPointAttributes {
  EI: IFunctionPointValues;
  EO: IFunctionPointValues;
  EQ: IFunctionPointValues;
  ILF: IFunctionPointValues;
  ELF: IFunctionPointValues;
}

export interface ICAF {
  'Data Communications': number;
  'Data Processing': number;
  'Distributed Processing': number;
  Performance: number;
  Security: number;
  'User Interfaces': number;
  Reusability: number;
  'Ease of Installation': number;
  'Operational Ease': number;
  'Online Data Storage': number;
  'Online Transaction Volume': number;
  'Concurrent Users': number;
  'Includes Specialized Processing Features': number;
  'Internal Communication Complexity': number;
}
