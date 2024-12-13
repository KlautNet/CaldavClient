export interface CalDAVOptions {
  baseUrl: string;
  username: string;
  password: string;
  requestTimeout?: number;
}

type SupportedComponent =
  | "VEVENT"
  | "VTODO"
  | "VJOURNAL"
  | "VFREEBUSY"
  | "VTIMEZONE";

export interface Calendar {
  displayName: string;
  url: string;
  ctag: string;
  supportedComponents: SupportedComponent[];
}

export interface Event {
  uid: string;
  summary: string;
  start: Date;
  end: Date;
  description?: string;
}

export type CalDAVResponse<T> = {
  status: number;
  data: T;
};
