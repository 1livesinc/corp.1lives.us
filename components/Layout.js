import Head from 'next/head';




export const Layout = ({ title, children }) => {


  return (
    <>
      <Head>
        <title>
          {title
            ? title + '- Dubai Business Connections | DBC'
            : 'Dubai Business Connections | DBC'}
        </title>
        <meta
          name="description"
          content="Real Estate Commerce Minerals (Diamond & Gold) Consultancy
                   Travel & Tourism Marketing Technology B2B in Dubai"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    


      <div className="flex min-h-screen flex-col justify-between">
       
        <main className="container m-auto mt-4 px-4">{children}</main>
      
      </div>
    </>
  );
};
export default Layout;
