import Head from "next/head";

interface IHeadProps {
    title: string;
}

const HeadTitle = ({ title }: IHeadProps) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
};
export default HeadTitle;
