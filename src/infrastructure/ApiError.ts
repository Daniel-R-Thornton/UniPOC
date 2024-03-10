export interface APIError {
  errors: [{ message: string; errorType: string }];
}
// disable no any rule for this file
// literally the whole point of this file is to be able to handle any error from the API and return a consistent type o.O
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isApiError = (e: any): e is APIError => {
  return e.errors !== undefined;
};
