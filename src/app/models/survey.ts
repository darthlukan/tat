
export enum ISurveyFieldType {
  TEXT = 'text',    // text field
  EMAIL = 'email',  // text field
  TEL = 'tel',      // text field
  NUMBER = 'number',// text field
  SELECT = 'select',// select
  CHOICE = 'choice',// single- or multi-select, displayed as large buttons to tap. Usually the only field on the page.
  TEXTAREA = 'textarea', // usually the only field on the page.
  DATE = 'date'     // datepicker popup
}
  
export interface ISurveyField {
  type: ISurveyFieldType,
  name: string,
  labelTranslationKey?: string,
  defaultValue?: string,
  isRequired?: boolean,
  options?: {value: string, labelTranslationKey: string}[], // for 'SELECT' or 'CHOICE' input types
  multi?: boolean // for 'CHOICE' input type. allows selecting multiple options.
}
  
export interface ISurveyPage {
  topTextTranslationKey?: string,
  // `canContinue` whether the 'next' button is enabled
  canContinue?( formVals: any ): boolean,
  // `onContinue` executes when the 'next' button is clicked.
  // if it resolves, then the next page of the survey is loaded. if it rejects, then it stays on the same page.
  onContinue?( formVals: any ): Promise<any>,
  // if `isVisible` returns false, then this page is skipped
  isVisible?( formVals: any ): boolean,
  fields?: ISurveyField[],
}
  
export interface ISurvey {
  // if onComplete resolves, then the modal closes. If it rejects, the modal does not close.
  onSubmit( formVals: any ): Promise<any>,
  pages: ISurveyPage[]
}
