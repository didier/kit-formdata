<script>
	let email= 'your@email.com'
	let password = 'super-secure-password'
</script>

<form action="/login" method="post" id="login">
	<label for="email">your e-mail address</label>
  <input type="email" id="email" name="email" bind:value={email} placeholder="Email" />
	<label for="password">your secure password</label>
  <input type="password" id="password" name="password" bind:value={password} placeholder="Password" />
  <input type="submit" value='signin'>
</form>

<style>
	form {
		display: grid;
		max-width: 65ch;
		margin: 0 auto;
	}
	
	label {
		margin-bottom: 0.5em;
	}

	input {
		margin-bottom: 1em;
	}
</style>