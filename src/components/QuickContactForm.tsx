import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function QuickContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.state
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await axios.post(
        "https://choir-anthony-warning-functioning.trycloudflare.com/api/contact/create",
        {
          name: formData.name,
          email: formData.email,
          subject: `Quick Contact - ${formData.state}`,
          message: `Phone: ${formData.phone}, State: ${formData.state}`,
        }
      );

      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", state: "" });
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry",
  ];

  return (
    <div className="bg-white border border-gray-200 shadow-lg rounded-2xl px-4 py-3 mt-8">
      <Toaster position="top-right" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap gap-3 items-center justify-center"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="flex-1 min-w-[180px] border border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="flex-1 min-w-[200px] border border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex items-center border border-gray-300 rounded-full overflow-hidden min-w-[180px]">
          <span className="bg-gray-100 px-3 py-3 text-sm text-gray-600">
            +91
          </span>
          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-3 text-sm focus:outline-none"
          />
        </div>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="flex-1 min-w-[180px] border border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select your state</option>
          {states.map((st, i) => (
            <option key={i} value={st}>
              {st}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-medium shadow-md transition-all duration-200"
        >
          {isSubmitting ? "Sending..." : "GET STARTED"}
        </button>
      </form>
    </div>
  );
}
