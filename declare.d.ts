declare module '*.ts'
declare module '*.jpg'
declare module '*.svg'
declare module '*.module.scss' {
  const content: Record<string, string>;
  export default content;
}
