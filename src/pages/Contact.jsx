import "./Contact.css";

function Contact() {
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
        <form className="contact-form">

          <input type="text" placeholder="Nama" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Pesan" rows="5"></textarea>

          <button type="submit">Kirim Pesan</button>

        </form>

      </div>

    </div>
  );
}

export default Contact;