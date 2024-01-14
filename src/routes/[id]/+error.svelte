
<script>
    import { page } from "$app/stores";
    console.log($page.error);
</script>
<p>error {$page.error?.message}:{$page.status}</p>