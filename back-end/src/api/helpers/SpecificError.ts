class SpecificError extends Error {
  protected statusCode: number;

  constructor(code: number, message: string) {
    super(message);
    this.statusCode = code;
  }

  static invalidParameter = (message = 'Id must have 24 hexadecimal characters') => new SpecificError(400, message);
  static notFound = (message = 'Object not found') => new SpecificError(404, message);
  static undefined = (message = 'Internal server error') => new SpecificError(500, message);
}

export { SpecificError };
