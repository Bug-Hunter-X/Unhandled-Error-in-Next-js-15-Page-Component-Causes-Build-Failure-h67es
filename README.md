# Unhandled Error in Next.js 15 Page Component

This repository demonstrates a common, yet subtle, error in Next.js 15 applications.  An unhandled error thrown within a page component can cause the entire build process to fail.  This issue is particularly frustrating because the error message isn't always clear and might require digging into the build logs.

## The Problem

The `about.js` file contains a simple page component that throws an error.  Without an error boundary in place, this error is unhandled by Next.js during the build phase, resulting in a build failure.

## The Solution

The solution is to implement an error boundary.  This is a component that catches and gracefully handles errors, preventing build failures and allowing a more user-friendly fallback experience in case of problems.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev` (or `npm run build` to reproduce the build error).

## How to Fix

Refer to the `aboutSolution.js` file for a solution that utilizes an error boundary to handle the unhandled exception.