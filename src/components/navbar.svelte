<script lang="ts" >
    function toggle() {
        window.document.body.classList.toggle('dark')
    }
    </script>
    <a href="/">home</a>
    <button on:click={toggle}>dark mode</button>
    