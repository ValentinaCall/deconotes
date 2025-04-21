import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will contact you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      privacy: false,
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Contáctanos
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ponte en contacto con nuestro equipo para consultas, soporte o para
            obtener más información sobre nuestros productos y servicios.
          </p>
        </div>

        {/* Grid de iconos de redes sociales */}
        <div className="grid grid-cols-2 gap-6 mb-12">
          <a
            href="https://www.instagram.com/_.bioart._?igsh=MTc2N3lyNWJqMGhmbA=="
            target="_blank"
            className="flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 h-[50vh] rounded-lg transition-transform hover:scale-105"
          >
            <i className="fab fa-instagram text-6xl text-white"></i>
          </a>
          <a
            href="https://www.tiktok.com/@bioart._?_t=ZM-8vhf0jAasS5&_r=1"
            target="_blank"
            className="flex items-center justify-center bg-gradient-to-br from-black to-gray-800 h-[50vh] rounded-lg transition-transform hover:scale-105"
          >
            <i className="fab fa-tiktok text-6xl text-white"></i>
          </a>
        </div>
      </div>
    </section>
  );
  
};

export default Contact;
