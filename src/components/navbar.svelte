<script lang="ts" >
    function toggle() {
        window.document.body.classList.toggle('dark')
    }
    </script>
    <button on:click={toggle}>dark mode</button>
    <a href="/">home</a>