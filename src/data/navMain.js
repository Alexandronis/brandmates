var themeNav = require('./navTheme');

module.exports = [
    {
        name: "Overview",
        content: [
            {
                label: "Dashboard",
                icon: "layout-sidebar-inset",
                path: "/home",
            },
            {
                label: "Analytics",
                icon: "graph-up",
                path: "/analytics",
            },
        ]
    },
    {
        name: "Content",
        content: [
            {
                label: "Integrations",
                icon: "terminal",
                path: "/pages/integrations",
                submenu: [
                    {
                        label: "Applications",
                        path: "/pages/integrations/applications.html"
                    },
                    {
                        label: "Manage Apps",
                        path: "/pages/integrations/manage-apps.html"
                    },
                    {
                        label: "Create",
                        path: "/pages/create.html"
                    }
                ]
            },
            {
                label: "User",
                icon: "people",
                path: "/pages/user",
                submenu: [
                    {
                        label: "Profile",
                        path: "/pages/user/profile.html"
                    },
                    {
                        label: "Table View",
                        path: "/pages/user/table-view.html"
                    },
                    {
                        label: "Permissions",
                        path: "/pages/user/permissions.html"
                    }
                ]
            }
        ]
    },
    {
        name: "Activity",
        content: [
            {
                label: "Settings",
                icon: "gear",
                path: "/pages/settings",
                submenu: [
                    {
                        label: "General",
                        path: "/pages/settings/general.html"
                    },
                    {
                        label: "Security",
                        path: "/pages/settings/security.html"
                    },
                    {
                        label: "Team",
                        path: "/pages/settings/team.html"
                    },
                    {
                        label: "Billing",
                        path: "/pages/settings/billing.html"
                    },
                    {
                        label: "Notifications",
                        path: "/pages/settings/notifications.html"
                    }
                ]
            },
            {
                label: "Authentication",
                icon: "person-bounding-box",
                path: "/pages/authentication",
                submenu: [
                    {
                        label: "Basic Login",
                        path: "/pages/authentication/basic-login.html"
                    },
                    {
                        label: "Basic Register",
                        path: "/pages/authentication/basic-register.html"
                    },
                    {
                        label: "Basic Recover",
                        path: "/pages/authentication/basic-recover.html"
                    },
                    {
                        label: "Side Login",
                        path: "/pages/authentication/side-login.html"
                    },
                    {
                        label: "Side Register",
                        path: "/pages/authentication/side-register.html"
                    },
                    {
                        label: "Side Recover",
                        path: "/pages/authentication/side-recover.html"
                    }
                ]
            }
        ]
    }
]
