<template>
  <div>
    <div class="typed1">
      <vue-typed-js
        :strings="['Hello my name is Edward Stern ^1000 I am a ']"
        :showCursor="false"
        :loop="false"
        :typeSpeed="15"
      >
        <h2 class="typing"></h2>
      </vue-typed-js>
    </div>
    <div class="typed2">
      <vue-typed-js
        :strings="[
          'Self taught web developer',
          'MDA and United Hatzola volunteer EMT',
          'Kollel financial secretary'
        ]"
        :showCursor="false"
        :typeSpeed="15"
        :startDelay="2800"
        :backDelay="1500"
        loop="true"
      >
        <h2 class="typing"></h2>
      </vue-typed-js>
    </div>
  </div>
</template>

<script>
export default {
  name: "typedMyName"
};
</script>

<style scoped>
.typed1 {
  font-size: 4vh;
}
.typed2 {
  font-size: 4vh;
}
</style>
