class SpecificError extends Error {
  public statusCode: number;

  constructor(code: number, message: string) {
    super(message);
    this.statusCode = code;
  }

  static invalidParameter = (message = 'Id must have 24 hexadecimal characters') => new SpecificError(400, message);
  static notFound = (message = 'Object not found') => new SpecificError(404, message);
}

export { SpecificError };
