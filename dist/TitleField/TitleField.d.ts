import { FieldProps } from "@rjsf/core";
export interface TitleFieldProps extends Partial<FieldProps> {
    title: string;
}
declare const TitleField: ({ title }: Partial<FieldProps>) => JSX.Element;
export default TitleField;
