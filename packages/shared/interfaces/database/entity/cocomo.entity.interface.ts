import { ICAF } from '../../project';
import { BaseCocomo } from './base.entities';

interface IOverRidedJSONField {
  cafJson: ICAF;
}

type TCocomo = IOverRidedJSONField & Omit<BaseCocomo, 'cafJson'>;

export interface ICocomoEntity extends TCocomo {}
