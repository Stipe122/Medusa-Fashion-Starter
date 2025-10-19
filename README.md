## Description

This project implements a product page based on the provided Figma design. The goal of this project is to reproduce the given design, by paying close attention to detail, for both desktop and mobile devices, also by keeping a strong focus on code structure and readability. Special attention was given to performance optimization and reusable UI components.

## Tech Stack
- **Framework:** Next.js  
- **Language:** TypeScript  
- **Styling:** TailwindCSS  
- **Backend:** Medusa js
- **Database:** PostgreSQL

## Prerequisites
- Node.js v20+
- Git CLI tool
- PostgreSQL

## Installation
 
```bash
git clone https://github.com/Stipe122/Medusa-Fashion-Starter.git
cd Medusa-Fashion-Starter
```

```bash
cd medusa
pnpm install
# you can use npm or yarn instead
```
```bash
cd nextjs
pnpm install
```

Before running the project, make sure to set up your environment variables.

Medusa (`Medusa-Fashion-Starter/medusa/.env`)

Nextjs (`Medusa-Fashion-Starter/nextjs/.env.local`)

```bash
cd Medusa-Fashion-Starter/nextjs
pnpm run dev
# click on link: http://localhost:8000
```
```bash
cd Medusa-Fashion-Starter/medusa
pnpm run dev
# click on link: http://localhost:9000
```

# Reflection

**Time Spent:** aprox. 3-4 hours for 5 days

**Challenges:** 

The most challenging part of the project was fetching data from Medusa and handling it efficiently in the frontend. This included understanding how Medusa’s API and SDK structure data, as well as managing multiple product variants and state updates.
