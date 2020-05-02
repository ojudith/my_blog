module.exports = {
  siteMetadata: {
    title: `Junik`,
    author: `Judith Oiku`,
    description: `A personal blog to share my experience.`,
    siteUrl: `https://judyblogbeta.netlify.com/`,
    social: {
      twitter: `OseJudith`,
    },
  },
  plugins: [
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [          
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-social-cards`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal Blog by Judith (Junik) Oiku`,
        short_name: `Judith Blog`,
        start_url: `/`,
        background_color: `#f2f2f2`,
        theme_color: `#f2f2f2`,
        display: `standalone`,
        icon: `content/assets/gatsby-icon.png`,
        // theme_color_in_head: false,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
