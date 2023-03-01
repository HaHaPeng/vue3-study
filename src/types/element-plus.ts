import type { ElForm, ElDialog, ElTree } from "element-plus";
import type { FormItemRule } from "element-plus/es/tokens";

export type IElForm = InstanceType<typeof ElForm>;
export type IElDialog = InstanceType<typeof ElDialog>;
export type IElTree = InstanceType<typeof ElTree>;

export type IFormItemRule = Record<string, FormItemRule[]>;

export interface ISelectOptions {
  label: string;
  value: number;
}

export interface IFormRule {
  title: string;
  field: string;
  props?: Record<string, any>;
  type: string;
  validate?: FormItemRule[];
  value: string;
  options?: ISelectOptions[];
}

export interface IFormData {
  action: string;
  info: string;
  method: string;
  status: boolean;
  title: string;
  rules: IFormRule[];
}
