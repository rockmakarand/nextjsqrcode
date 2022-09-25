/* eslint-disable @next/next/no-sync-scripts */
import React from 'react'
import Login from './Login'
import Qr from './Qr'
import Head from 'next/head'

const index = () => {
  return (
    <div>
       <Head>
        <title>
         QR CODE Generator by NIT TRICHY students
        </title>
        <meta
          name="description"
          content="Gautham Vijayan's Portfolio showcasing his React and React Native Projects. Also read Gautham Vijayan's 
          blogs about 
          Stripe
          ,Razorpay and other Payment Integration Blogs."
        />
        <meta
          name="keywords"
          content="Makarand R React JS Developer React Native Developer NIT Trichy QR code generator"
        />

        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content={"Makarand R is a React JS & a React Native Developer."}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={
            "https://pbs.twimg.com/profile_images/1435255967743049730/D1812u9x_400x400.jpg"
          }
        />
        <meta property="og:url" content={`https://gauthamvijay.com`} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://pbs.twimg.com/profile_images/1435255967743049730/D1812u9x_400x400.jpg"
        />
        <meta property="twitter:site" content="@Makarand2003" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
        <script
          type="text/javascript"
          src="../public/Static/Jotform.js"
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
          integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
          integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
          crossOrigin="anonymous"
        ></script>

        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <Login></Login>
      <Qr/>
    </div>
  )
}

export default index