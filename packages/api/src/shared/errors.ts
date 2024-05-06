export class RecordNotFoundError extends Error {
  public errorCode: number = 1;
  public details?: string;

  constructor(message: string = 'UNDEFINED') {
    super(message);
    this.details = this.stack;
  }
}

export class RecordOperationError extends Error {
  public errorCode: number = 1;
  public details?: string;

  constructor(message: string = 'UNDEFINED') {
    super(message);
    this.details = this.stack;
  }
}
