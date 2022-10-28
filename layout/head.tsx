import Head from "next/head";
export interface HeadCustomInterface {
  content?: string;
  name?: string;
  title: string;
}

export const HeadCustom = (props: HeadCustomInterface): JSX.Element => {
  return (
    <Head>
      <meta name={props.name} content={props.content} />

      <title>{props.title}</title>
    </Head>
  );
};
