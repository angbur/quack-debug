<script>
  import { onMount } from "svelte";

  let message = "";

  // Function to handle sending the message to the extension
  function sendMessage() {
    const messageData = { type: "onFetchText" };
    vscode.postMessage(messageData);
  }

  // Function to handle receiving messages from the extension
  window.addEventListener("message", (event) => {
    let message = event.data;
    if (message && message.type === "onSelectedText") {
      message = message.value;
    }
  });

  // Function to handle resizing the webview
  function handleResize() {
    vscode.postMessage({ type: "resize", content: document.body.scrollHeight });
  }

  // Initialize the webview
  onMount(() => {
    handleResize();
  });

  // Cleanup
  onDestroy(() => {
    window.removeEventListener("resize", handleResize);
  });
</script>

<div>
  <input type="text" bind:value={message} placeholder="Type your message..." />
  <button on:click={sendMessage}>Send</button>
</div>

<style>
  /* Add your CSS styles here */
</style>
