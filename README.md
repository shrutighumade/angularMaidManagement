# MaidManagementSystem

### Overview

The MaidManagementSystem is a web application developed using Angular. It aims to provide a comprehensive solution for managing maid services, enabling users to efficiently handle tasks related to maid registration, client management, and service reviews.

### Features

**Maid Registration:** Allows maids to register their profiles, including personal information, skills, and availability.
Client Management: Enables clients to search for maids based on their preferences and requirements.
**Dashboard:** Provides a centralized dashboard for both maids and clients to manage their profiles, bookings, and payments.
Review System: Allows clients to leave feedback and ratings for the maid services they've received.
**About Page:** Provides information about the MaidManagementSystem, its purpose, and how to use it.

### Purpose

The MaidManagementSystem aims to streamline the process of hiring maid services by providing a user-friendly platform for both maids and clients. It seeks to enhance transparency, efficiency, and satisfaction in the maid service industry.

## Folder Structure

```
|-- app/
|   |-- core/
|   |   |-- authentication/              # Authentication related services and guards
|   |   |-- http/                        # HTTP interceptors and error handling
|   |   |-- services/                    # Core services (logger, etc.)
|   |   |-- core.module.ts               # Core module definition
|   |
|   |-- shared/
|   |   |-- components/                  # Reusable components (navbar, footer, etc.)
|   |   |-- directives/                  # Reusable directives
|   |   |-- pipes/                       # Reusable pipes
|   |   |-- services/                    # Shared services
|   |   |-- shared.module.ts             # Shared module definition
|   |
|   |-- modules/
|   |   |-- user-registration/
|   |   |   |-- components/              # User registration related components
|   |   |   |-- services/                # User registration services
|   |   |   |-- user-registration.module.ts  # User registration module definition
|   |   |
|   |   |-- dashboard/
|   |   |   |-- components/              # Dashboard components
|   |   |   |-- services/                # Dashboard services
|   |   |   |-- dashboard.module.ts      # Dashboard module definition
|   |   |
|   |   |-- client-panel/
|   |   |   |-- components/              # Client panel components
|   |   |   |-- services/                # Client panel services
|   |   |   |-- client-panel.module.ts   # Client panel module definition
|   |   |
|   |   |-- about/
|   |   |   |-- components/              # About page components
|   |   |   |-- services/                # About page services
|   |   |   |-- about.module.ts          # About module definition
|   |   |
|   |   |-- review/
|   |   |   |-- components/              # Review components
|   |   |   |-- services/                # Review services
|   |   |   |-- review.module.ts         # Review module definition
|   |
|   |-- layouts/
|   |   |-- components/                  # Layout components (header, footer, etc.)
|   |   |-- layouts.module.ts            # Layouts module definition
|   |
|   |-- app.component.html               # Root component template
|   |-- app.component.scss               # Root component styles
|   |-- app.component.ts                 # Root component logic
|   |-- app.module.ts                    # App module definition
|
|-- assets/                              # Static assets (images, fonts, etc.)
|-- environments/                        # Environment configuration
|-- index.html                           # Main HTML file
|-- styles.scss                          # Global styles
|-- main.ts                              # Main entry point
|-- app-routing.module.ts                # App routing module definition
```

### Development Server

To run the development server, use the following command:

```
ng serve
```

Navigate to http://localhost:4200/ in your browser. The application will automatically reload if you change any of the source files.
