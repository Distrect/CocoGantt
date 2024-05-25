import { ICAF } from '../../project';
import { BaseCocomo } from './base.entities';

export enum CocomoMode {
  ORGANIC = 'Organic',
  SEMIDETACHED = 'Semi-detached',
  EMBEDDED = 'Embedded',
}

interface IOverRidedJSONField {
  cafJson: ICAF;
}

type TCocomo = IOverRidedJSONField & Omit<BaseCocomo, 'cafJson'>;

export interface ICocomoEntity extends TCocomo {}
