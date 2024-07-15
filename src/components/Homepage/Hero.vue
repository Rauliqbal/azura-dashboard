<script setup></script>
<template>
  <section class="container max-w-5xl text-center overflow-hidden h-screen">
    <h1
      class="mt-8 text-4xl md:text-5xl lg:text-6xl text-center font-extrabold !leading-tight capitalize"
    >
      organize work and life easily,
      <br />
      <span
        class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-400"
        >for productivity</span
      >
    </h1>
    <p class="mt-8 desc text-center capitalize">
      organisir pekerjaan dan hidupmu dengan mudahm untuk meningkatkan
      produktifitasmu
    </p>
    <div class="flex flex-col md:flex-row gap-4 justify-center mt-8">
      <router-link to="/login" class="btn-primary">Start now</router-link>
      <router-link to="#" class="btn-secondary">Learn More</router-link>
    </div>
    <div class="aspect-video overflow-hidden mt-10 rounded-xl">
      <img
        class="object-cover w-full"
        src="https://bigsondev.com/static/d97398793360511574d5c56cb5445fc6/ee604/note-app.png"
        alt=""
      />
    </div>
  </section>
</template>
