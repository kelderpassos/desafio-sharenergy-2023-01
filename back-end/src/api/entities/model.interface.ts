interface ModelInterface<I, O> {
  create(obj: I): Promise<O | null>,
  readAll(): Promise<O[]>,
  readOne(id: string): Promise<O | null>
  update(obj: Partial<I>): Promise<O | null>
  delete(id: string): Promise<O | null>
}

export { ModelInterface };
