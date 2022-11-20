<script>
  // @ts-ignore
  import { browser } from "$app/env";

  import "@fontsource/aileron";
  import "@fontsource/blackout-midnight"
  import "@fontsource/iosevka"
  import "../app.scss";
  import Navbar from '../components/navbar.svelte'
    $: if(browser){
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) { 
			window.document.body.classList.add('dark')
		}
	else{
		window.document.body.classList.remove('dark')
	}
  }
</script>
<Navbar/>
<slot />
