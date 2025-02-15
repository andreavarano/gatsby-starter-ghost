import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/common";

const NotFoundPage = () => (
    <Layout>
        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">About</h1>
                <section className="content-body">
                  About
                </section>
            </article>
        </div>
    </Layout>
);

export default NotFoundPage;
