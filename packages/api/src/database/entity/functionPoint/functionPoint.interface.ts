import { ICAF, IFunctionPointAttributes } from 'shared';

export interface ICreateFunctionPointDATA {
  attributes: IFunctionPointAttributes;
  caf: ICAF;
  project?: {
    projectID: number;
  };
}

export interface IUpdateFunctionPointDATA {
  attributes?: IFunctionPointAttributes;
  caf?: ICAF;
  project?: {
    projectID: number;
  };
}
