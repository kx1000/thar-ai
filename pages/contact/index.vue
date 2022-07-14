<template>
  <main>
    <section class="w-full max-w-5xl mx-auto">
      <h1 class="title">Contact</h1>
      <form name="contact" netlify-honeypot="bot-field" method="post" data-netlify="true" class="text-content">
        <input type="hidden" name="form-name" value="contact" />
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
          <button type="submit" class="text-content hvr-grow">SEND</button>
        </p>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  head: {
    title: 'CONTACT ∙ THAR AI',
  },
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