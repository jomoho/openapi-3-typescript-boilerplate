declare module "*.json" {
  const value: any;
  export const name: string;
  export default value;
}

declare module "oas-tools" {
  export function configure(options: any): void;

  export function init_checks(specDoc: any, callback: any): void;

  export function initialize(oasDoc: any, app: any, callback: any): void;

  export function initializeMiddleware(
    specDoc: any,
    app: any,
    callback: any
  ): void;
}

declare module "perfy";
