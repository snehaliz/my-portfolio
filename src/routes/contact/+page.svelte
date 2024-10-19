<svelte:head>
   <title>Contact Me</title>
</svelte:head>

<h1>Contact</h1>
<form class="contact-form" action="mailto:sns002@ucsd.edu" method="GET">

   <label for="subject">Subject:</label>
   <input type="text" name="subject" id="subject" required>

   <label for="body">Message:</label>
   <textarea name="body" id="body" required></textarea>

   <button>Submit</button>
</form>
