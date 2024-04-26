import { CAF } from '@prisma/client';

export default class CAFEntity implements CAF {
  public cafID: number;

  public DC: number;

  public DP: number;

  public DS: number;

  public P: number;

  public S: number;

  public UI: number;

  public R: number;

  public EoI: number;

  public OE: number;

  public ODS: number;

  public OTV: number;

  public CU: number;

  public ISPF: number;

  public ICC: number;
}
