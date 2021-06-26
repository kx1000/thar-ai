<template>
  <main>
    <section class="w-full max-w-5xl mx-auto">
      <h1 class="title">Contact</h1>
      <form v-if="!isDoneScreen" id="contact" name="contact" v-on:submit.prevent="handleSubmit" data-netlify="true">
        <p>
          <label>Your Name<br>
            <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email<br>
            <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message<br>
            <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <div v-else>
        Email has sent.
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      isDoneScreen: false,
    }
  },
  methods: {
    handleSubmit() {
      let myForm = document.getElementById('contact');
      let formData = new FormData(myForm)
      fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      }).then(() => {
        this.isDoneScreen = true;
      }).catch((error) =>
          alert(error))
    }
  }
}
</script>