import { useRef } from "react";

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name || !email || !message) {
      alert("Isi semua field dulu ya 😤");
      return;
    }

    alert(`Pesan dari ${name} berhasil dikirim 😆✨`);

    // reset form
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-desc">
        Silakan hubungi saya untuk kerja sama atau sekadar diskusi ✨
      </p>

      <div className="contact-wrapper">

        {/* LEFT */}
        <div className="contact-info">
          <h4>Get in Touch</h4>
          <p><strong>Email:</strong> sabrina.jrd.06@email.com</p>
          <p><strong>Phone:</strong> +62 81382726985</p>
          <p><strong>Location:</strong> Indonesia</p>
        </div>

        {/* RIGHT */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input ref={nameRef} type="text" placeholder="Nama" />
          <input ref={emailRef} type="email" placeholder="Email" />
          <textarea ref={messageRef} placeholder="Pesan" rows="5"></textarea>

          <button type="submit">Kirim Pesan</button>
        </form>

      </div>
    </div>
  );
}

export default Contact;