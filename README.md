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
|-- app
|   |
|   |-- shared
|   |   |-- components
|   |   |-- services
|   |   |-- shared.module.ts
|   |
|   |-- modules
|   |   |-- dashboard
|   |   |   |-- components
|   |   |   |-- services
|   |   |   |-- dashboard.module.ts
|   |   |
|   |   |-- client-panel
|   |   |   |-- components
|   |   |   |-- services
|   |   |   |-- client-panel.module.ts
|   |   |
|   |   |-- user-registration
|   |   |   |-- components
|   |   |   |-- services
|   |   |   |-- user-registration.module.ts
|   |   |
|   |   |-- about
|   |   |   |-- components
|   |   |   |-- services
|   |   |   |-- about.module.ts
|   |   |
|   |   |-- review
|   |   |   |-- components
|   |   |   |-- services
|   |   |   |-- review.module.ts
|   |
|   |-- layouts
|   |   |-- components
|   |   |-- services
|   |   |-- layouts.module.ts
|   |
|   |-- app.component.html
|   |-- app.component.scss
|   |-- app.component.ts
|   |-- app.module.ts
|
|-- assets
|-- index.html
|-- main.ts
|-- styles.scss
|-- app-routing.module.ts
```

### Development Server

To run the development server, use the following command:

```
ng serve
```

Navigate to http://localhost:4200/ in your browser. The application will automatically reload if you change any of the source files.
