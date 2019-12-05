import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <Head title='About' />
                <h1>About Page</h1>
                <p>I currently do nothing</p>
                <p>Contact: <Link to="/contact"> Contact Me</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage