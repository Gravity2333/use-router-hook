export function parseUrlSearch<T>(search: string) {
  const parsedObj = new URLSearchParams(search) as any;
  const result = {} as T;
  for (const entries of parsedObj.entries()) {
    (result as any)[entries[0]] = entries[1];
  }
  return result;
}
