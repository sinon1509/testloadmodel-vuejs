<template>
    <div>
      <h3>Babylon JS Model</h3>
      <canvas></canvas>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from "vue";

import { BasicScene } from "@/Babylonjs/BasicScene";

  export default defineComponent({
    name: "BasicScene",
    mounted() {
      const canvas = document.querySelector("canvas")!;
      new BasicScene(canvas);
    },
  });
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  canvas{
    height: 70%;
    width: 70%;
  }
  </style>
