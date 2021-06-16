let app = new Vue({
    el: "#root",
    data: {
        counter: 0,
        about: "",
        transport: "",
        support: "",
        link: "",
        navbar: [
            { name: "Home" },
            { name: "About" },
            { name: "Services" },
            { name: "Process" },
            { name: "Testimonial" },
        ],
        abouts: [
            { name: "The Company" },
            { name: "Institutional" },
            { name: "Social & Events" },
            { name: "Innovation" },
            { name: "Environment" },
            { name: "Technology" },    
        ],
        transports: [
            { name: "Industrialized" },
            { name: "Chemicals" },
            { name: "Packaged Liquids" },
            { name: "Construction" },
            { name: "Laminated Wood" },
            { name: "And Others" },
        ],
        supports: [
            { name: "Responsibility" },
            { name: "Therms of Use" },
            { name: "About Cookies" },
            { name: "Privacy Policy" },
            { name: "Accessibility" },
            { name: "Information" },
        ]
    },
    methods:{}
})