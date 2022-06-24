export interface PublicApisPagedDto {
  count: number;
  entries: PublicApiDto[];
}

export interface PublicApiDto {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  API: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Description: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Auth: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  HTTPS: boolean;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Cors: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Link: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Category: string;
}
