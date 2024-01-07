export type ElementState =
  | undefined
  | "loading"
  | "disable"
  | "error"
  | "success"
  | null;

export type Tab = {
  id?: string;
  title: string | React.ReactNode;
  key: string;
  description?: string;
  icon?: React.ReactNode;
  bodyComponent: React.ReactNode;
  renderBodyComponent?: (...args: any[]) => React.ReactNode;
};

export type IAccordionItem = {
  title: React.ReactNode;
  key: string;
  content?: React.ReactNode;
  customOpenTriggerIcon?: React.ReactNode;
  customCloseTriggerIcon?: React.ReactNode;
  renderContent?: (...args: any[]) => React.ReactNode;
} & (
  | {
      customOpenTriggerIcon: React.ReactNode;
      customCloseTriggerIcon: React.ReactNode;
    }
  | {
      customOpenTriggerIcon?: never;
      customCloseTriggerIcon?: never;
    }
);

export type IOption = { label: string; value: string };

export interface ObjectType {
  [k: string]: any;
}
