import { getAllSlugs, getPostData } from "../../services";
import { RichText } from "@graphcms/rich-text-react-renderer";
import styles from '../../styles/Post.module.scss'
import Head from 'next/head';


export async function getStaticPaths() {
    const paths = await getAllSlugs();
    return {
        paths,
        fallback: false
    };
};

export async function getStaticProps({ params }) {
    const response = await getPostData(params.slug);
    const postData = response.post;
    return {
        props: {
            postData
        }
    };
};

export default function Posts({ postData }) {

    return (
        <div className={styles.postContainer}>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <h1>{postData.title}</h1>

            <h3>{postData.excerpt}</h3>

            <img src={postData.featuredImage.url} alt="" />

            <RichText content={postData.content.raw}></RichText>

        </div>
    )
};