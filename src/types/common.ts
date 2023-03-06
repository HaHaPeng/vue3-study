export interface IMate {
  title?: string;
  icon?: string;
}

export interface IRoute {
  path: string;
  name: string;
  component: never;
  children?: IRoute[];
  meta: IMate;
}
