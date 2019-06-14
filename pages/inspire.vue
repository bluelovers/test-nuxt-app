<template>
  <v-layout>
    <v-flex text-xs-center>
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>


      <nuxt-link to="/test-import-some-module">test-import-some-module.vue</nuxt-link>

      <nuxt-link to="/ssr">ssr.vue</nuxt-link>

      <nuxt-link to="/parent/child">parent/child</nuxt-link>

    </v-flex>
  </v-layout>
</template>
