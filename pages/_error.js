import Layout from '../components/MyLayout'

export default ({ statusCode}) => (
    <Layout title="Error!">
        {statusCode ? `Could not load your data mate: Status Code ${statusCode}`: `Couldn't get that page`}
    </Layout>
)