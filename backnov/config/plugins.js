module.exports = ({env}) => ({
  graphql: {
    endpoint: "/graphql",
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 7,
    amountLimit: 100,
    apolloServer: {
      tracing: false,
    },
  },

  upload: {
    config: {
      sizeLimit: 250 * 1024 * 1024 // 256mb in bytes
    }
  },


  email: {
    provider: "sendgrid", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
    providerOptions: {
      apiKey:
        "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",
    },
    settings: {
      defaultFrom: "amc@automotorsclub.com",
      defaultReplyTo: "amc@automotorsclub.com",
      testAddress: "",
    },
  },
  'email-designer': {
    enabled: true,
  }
});

