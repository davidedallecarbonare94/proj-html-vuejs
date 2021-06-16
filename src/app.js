let app = new Vue({
    el: "#root",
    data: {
        /* icon: <i class="far fa-user"></i>, */
        counter: 0,
        about: "",
        transport: "",
        support: "",
        navbar: [
            { link: "Home" },
            { link: "About" },
            { link: "Services" },
            { link: "Process" },
            { link: "Testimonial" },
            /* { link: this.icon }, */
            
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