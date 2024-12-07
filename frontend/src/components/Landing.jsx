import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";


function App() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        address: "",
    });
    const [responseMessage, setResponseMessage] = useState("");
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/submit", formData);
            setResponseMessage(response.data.message);
            setError(false);
            setFormData({ name: "", email: "", date: "", address: "" });
        } catch (err) {
            setResponseMessage(err.response?.data?.error || "An error occurred");
            setError(true);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 p-5">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Submit Your Details</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
                            placeholder="Enter your address"
                            required
                        ></textarea>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700"
                    >
                        Submit
                    </motion.button>
                </form>

                {responseMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`mt-4 p-3 rounded-md text-center ${error ? "bg-red-500 text-white" : "bg-green-500 text-white"
                            }`}
                    >
                        {responseMessage}
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default App;