import React, { useState } from "react";
import { Search, Briefcase, Users, Building2, MapPin, Upload, X, Download, CheckCircle } from "lucide-react";

const JobPortal = () => {
    const [showForm, setShowForm] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        dob: '',
        jobTitle: '',
        location: '',
        skills: [],
        resume: null,
        profilePicture: null
    });

    const featuredCompanies = [
        { name: 'Tech Corp', roles: 12, type: 'Technology' },
        { name: 'Design Studio', roles: 8, type: 'Creative' },
        { name: 'Finance Plus', roles: 15, type: 'Finance' },
        { name: 'Health Care', roles: 10, type: 'Healthcare' }
    ];

    const featuredJobs = [
        {
            title: 'Senior Frontend Developer',
            company: 'Tech Corp',
            location: 'Remote',
            salary: '$120k - $150k',
            type: 'Full-time'
        },
        {
            title: 'UX Designer',
            company: 'Design Studio',
            location: 'New York',
            salary: '$90k - $120k',
            type: 'Full-time'
        },
        {
            title: 'Product Manager',
            company: 'Tech Corp',
            location: 'San Francisco',
            salary: '$130k - $160k',
            type: 'Full-time'
        }
    ];

    const jobTitles = [
        'Frontend Developer',
        'Backend Developer',
        'Full Stack Developer',
        'QA Engineer',
        'Product Manager',
        'UI/UX Designer',
        'Project Manager'
    ];

    const skillsList = [
        'JavaScript',
        'Python',
        'Java',
        'SQL',
        'React',
        'Node.js',
        'Docker',
        'AWS'
    ];



    const handleSkillChange = (skill) => {
        setFormData(prev => ({
            ...prev,
            skills: prev.skills.includes(skill)
                ? prev.skills.filter(s => s !== skill)
                : [...prev.skills, skill]
        }));
    };

    const handleFileUpload = (event, type) => {
        const file = event.target.files[0];
        setFormData(prev => ({
            ...prev,
            [type]: file
        }));
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event, type) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setFormData(prev => ({
            ...prev,
            [type]: file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
            setShowForm(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
            {/* Hero Section */}
            <div className="relative bg-indigo-900 text-white">
                <div className="absolute inset-0">
                    <img
                        src="img/landing.jpg"
                        alt="Hero background"
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Find Your Dream Job Today
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-gray-200">
                            Discover thousands of job opportunities with the top companies
                        </p>
                        
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl p-6 flex items-center shadow-lg">
                        <div className="bg-indigo-100 p-3 rounded-lg">
                            <Briefcase className="w-8 h-8 text-indigo-600" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-2xl font-bold">10k+</h3>
                            <p className="text-gray-600">Job Listings</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 flex items-center shadow-lg">
                        <div className="bg-indigo-100 p-3 rounded-lg">
                            <Users className="w-8 h-8 text-indigo-600" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-2xl font-bold">8M+</h3>
                            <p className="text-gray-600">Active Users</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl p-6 flex items-center shadow-lg">
                        <div className="bg-indigo-100 p-3 rounded-lg">
                            <Building2 className="w-8 h-8 text-indigo-600" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-2xl font-bold">1.2k+</h3>
                            <p className="text-gray-600">Companies</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Jobs Section */}
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Featured Jobs</h2>
                    <p className="text-gray-600">Explore opportunities from companies around the world</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredJobs.map((job, index) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-between mb-4">
                                <img
                                    src="/img/tech.jpg"
                                    alt={job.company}
                                    className="w-16 h-16 rounded-lg"
                                />
                                <button className="border border-gray-200 px-3 py-1 rounded text-sm">
                                    {job.type}
                                </button>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                            <p className="text-gray-600 mb-4">{job.company}</p>
                            <div className="flex items-center text-gray-500 mb-4">
                                <MapPin className="w-4 h-4 mr-2" />
                                {job.location}
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-indigo-600 font-semibold">{job.salary}</span>
                                <button
                                    className="text-gray-600 hover:text-indigo-600 px-4 py-2 rounded transition-colors"
                                    onClick={() => setShowForm(true)}
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Companies Section */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Featured Companies</h2>
                        <p className="text-gray-600">Work with the most popular companies</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {featuredCompanies.map((company, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
                                <div className="flex items-center justify-center mb-4">
                                    <img
                                        src="/img/health.jpg"
                                        alt={company.name}
                                        className="w-20 h-20 rounded-lg"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold text-center mb-2">
                                    {company.name}
                                </h3>
                                <p className="text-gray-600 text-center mb-4">{company.type}</p>
                                <div className="text-center">
                                    <span className="text-indigo-600">
                                        {company.roles} open positions
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Application Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b flex justify-between items-center">
                            <div>
                                <h2 className="text-2xl font-semibold">Job Application Form</h2>
                                <p className="text-gray-600">Fill in your details to apply</p>
                            </div>
                            <button
                                onClick={() => setShowForm(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Basic Information */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                                        <input
                                            required
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Email *</label>
                                        <input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Date of Birth *</label>
                                        <input
                                            required
                                            type="date"
                                            value={formData.dob}
                                            onChange={(e) => setFormData(prev => ({ ...prev, dob: e.target.value }))}
                                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="block text-sm font-medium text-gray-700">Address</label>
                                        <input
                                            type="text"
                                            value={formData.address}
                                            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                                            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                            placeholder="Your address"
                                        />
                                    </div>
                                </div>

                                {/* Job Preferences */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-medium text-gray-700">Job Title *</label>
                                    <select
                                        required
                                        value={formData.jobTitle}
                                        onChange={(e) => setFormData(prev => ({ ...prev, jobTitle: e.target.value }))}
                                        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                    >
                                        <option value="">Select a job title</option>
                                        {jobTitles.map((title) => (
                                            <option key={title} value={title}>{title}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Location Preference */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-medium text-gray-700">Location Preference *</label>
                                    <div className="flex space-x-4">
                                        {['Remote', 'On-Site', 'Hybrid'].map((loc) => (
                                            <label key={loc} className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    name="location"
                                                    value={loc}
                                                    checked={formData.location === loc}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                                                    className="text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <span>{loc}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-medium text-gray-700">Skills</label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {skillsList.map((skill) => (
                                            <label key={skill} className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.skills.includes(skill)}
                                                    onChange={() => handleSkillChange(skill)}
                                                    className="text-indigo-600 focus:ring-indigo-500"
                                                />
                                                <span>{skill}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* File Upload Section */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Profile Picture</label>
                                        <div
                                            onDragOver={handleDragOver}
                                            onDrop={(e) => handleDrop(e, 'profilePicture')}
                                            className="border-2 border-dashed rounded-lg p-6 text-center"
                                        >
                                            <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                                            <p className="text-sm text-gray-600 mb-2">
                                                Drag and drop your profile picture here or
                                            </p>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleFileUpload(e, 'profilePicture')}
                                                className="hidden"
                                                id="profilePicture"
                                            />
                                            <label
                                                htmlFor="profilePicture"
                                                className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
                                            >
                                                browse files
                                            </label>
                                            {formData.profilePicture && (
                                                <p className="mt-2 text-sm text-gray-600">
                                                    Selected: {formData.profilePicture.name}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Resume *</label>
                                        <div
                                            onDragOver={handleDragOver}
                                            onDrop={(e) => handleDrop(e, 'resume')}
                                            className="border-2 border-dashed rounded-lg p-6 text-center"
                                        >
                                            <Upload className="w-8 h-8 mx-auto text-gray-400 mb-2" />
                                            <p className="text-sm text-gray-600 mb-2">
                                                Drag and drop your resume here or
                                            </p>
                                            <input
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={(e) => handleFileUpload(e, 'resume')}
                                                className="hidden"
                                                id="resume"
                                                required
                                            />
                                            <label
                                                htmlFor="resume"
                                                className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
                                            >
                                                browse files
                                            </label>
                                            {formData.resume && (
                                                <p className="mt-2 text-sm text-gray-600">
                                                    Selected: {formData.resume.name}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-end space-x-4">
                                    <button
                                        type="button"
                                        onClick={() => setShowForm(false)}
                                        className="px-4 py-2 border rounded-md hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                                    >
                                        Submit Application
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Alert */}
            {showAlert && (
                <div className="fixed top-4 right-4 bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 flex items-center shadow-lg z-50">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Application submitted successfully!
                </div>
            )}
        </div>
    );
};

export default JobPortal;