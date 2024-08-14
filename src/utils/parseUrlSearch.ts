export function parseUrlSearch<T>(search: string) {
  const parsedObj = new URLSearchParams(search) as any;
  const result = {} as T;
  parsedObj.entries().forEach((entries: any) => {
    (result as any)[entries[0]] = entries[1];
  });
  return result;
}
