<template>
  <main>
    <section class="w-full max-w-5xl mx-auto">
      <h1 class="title">Contact</h1>
        <p>
          <label>Your Name<br>
            <input type="text" name="name" v-model="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email<br>
            <input type="email" name="email" v-model="email" />
          </label>
        </p>
        <p>
          <label>
            Message<br>
            <textarea name="message" v-model="message"></textarea>
          </label>
        </p>
        <div class="mt-3">
          <button @click="send" v-if="!isLoading" type="submit" class="text-content hvr-grow">
            SEND
          </button>
          <div v-else class="animate__animated animate__fadeIn">
            Sending...
          </div>
        </div>
    </section>
  </main>
</template>

<script>
const EMAIL_API_TARGET = 'tharai';
const EMAIL_API_URL = 'https://htp55ft4al.execute-api.us-east-1.amazonaws.com/dev/email';

export default {
  head: {
    title: 'CONTACT ∙ THAR AI',
  },
  data() {
    return {
      email: '',
      name: '',
      message: '',
      isLoading: false,
    }
  },
  methods: {
    async send() {
      this.isLoading = true;
      try {
        await fetch(EMAIL_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: this.email,
            name: this.name,
            message: this.message,
            target: EMAIL_API_TARGET,
          })
        });
        alert('Message has been sent');
      } catch (e) {
        alert('Error. Unable to send the message.');
      }
      this.isLoading = false;
    }
  }
}
</script>

<style scoped>
input, textarea {
  width: 100%;
  border-radius: 0;
  color: #fff;
  background: black;
  padding: 5px 10px;
  border: #E3061E solid 2px;
  transition: .5s;
  letter-spacing: 2px;
}

button {
  background-color: #E3061E;
  padding: 5px 10px;
}

textarea:focus, input:focus{
  border-color: rgb(255, 255, 255);
  outline: none;
}
</style>