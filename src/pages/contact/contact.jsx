export default function Contact() {
  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    formData.append("access_key", import.meta.env.WEB3_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  }

  return (
    <main>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </main>
  );
}
