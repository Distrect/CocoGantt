import { Functionpoint } from '@prisma/client';

export class FunctionPointEntity implements Functionpoint {
  public fpID: number;
  public EI: string;
  public EO: string;
  public EQ: string;
  public ILF: string;
  public ELF: string;
}
