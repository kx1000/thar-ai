<template>
  <main>
    <section class="w-full max-w-5xl mx-auto">
      <h1 class="title">Contact</h1>
      <form name="contact" netlify-honeypot="bot-field" data-netlify="true">
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
    </section>
  </main>
</template>