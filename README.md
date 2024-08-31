# YourHR - Job Search Service

YourHR is a job search service designed to help job seekers find ideal job roles based on their qualifications and preferences. This project was developed as part of an assessment for a full stack internship at Kudosware.

## Project Overview

The YourHR web application allows job seekers to sign up and submit their resumes. It features a responsive design and secure storage of user information and resumes.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for building the web application
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Clerk](https://clerk.com/) - User authentication and management
- [UploadThing](https://uploadthing.com/) - File upload functionality
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling

## Features

- User signup and authentication
- Resume upload functionality
- Responsive design
- Secure storage of user information and resumes

## Project Structure

```
yourhr/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── uploadthing/
│   │   │       ├── core.ts
│   │   │       └── route.ts
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── LandingPage.tsx
│   ├── utils/
│   │   └── uploadthing.ts
│   └── middleware.ts
├── public/
├── .env.local
├── next.config.js
├── package.json
└── README.md
```

## Setup and Installation

1. Clone the repository:
   ```
   git clone https://github.com/nayanbamnote/Kudosware-Assignment.git
   cd yourhr
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:
   ```
   UPLOADTHING_SECRET=your_uploadthing_secret
   UPLOADTHING_APP_ID=your_uploadthing_app_id
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Contributing

As this is an assessment project, contributions are not currently being accepted. However, feedback and suggestions are always welcome.

## Acknowledgements

- Kudosware for providing the opportunity and project brief
- The Next.js, Clerk, and UploadThing communities for their excellent documentation and support

## Contact

For any queries regarding this project, please contact Nayan Bamnote at nareshbamnote52@gamil.com.