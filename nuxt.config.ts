// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        {
          innerHTML: "(function(){try{if(localStorage.getItem('darkMode')==='1'){document.documentElement.classList.add('dark')}}catch(e){}})()",
          type: 'text/javascript',
          tagPosition: 'head',
        },
      ],
    },
  },
})
