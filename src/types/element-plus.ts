import type { ElForm, ElDialog, ElTree } from "element-plus";
import type { FormItemRule } from "element-plus/es/tokens";

export type IElForm = InstanceType<typeof ElForm>;
export type IElDialog = InstanceType<typeof ElDialog>;
export type IElTree = InstanceType<typeof ElTree>;

export type IFormItemRule = Record<string, FormItemRule[]>;
