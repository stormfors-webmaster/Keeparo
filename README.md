# Keeparo Job Listing Script

A lightweight script for fetching and displaying job listings.

## Description

This script automatically fetches job listings from Jobbland using Duunitori's API and dynamically creates job listing elements on your webpage. It's designed to work with a predefined HTML structure using custom attributes.

## Setup

1. Add the script to your project:

```html
<script
  defer
  src="https://cdn.jsdelivr.net/gh/stormfors-webmaster/Keeparo@latest/script.js"
></script>
```

2. Prepare your HTML structure with the following required attributes:

```html
<!-- Container for job listings -->
<div stormfors="container">
  <!-- Template for individual job item -->
  <a stormfors="item">
    <span stormfors="title"></span>
  </a>
</div>
```

## Configuration

The script uses the following attributes which can be customized in the script:

- `containerAttribute`: Container element for all job listings (`[stormfors=container]`)
- `itemAttribute`: Template for individual job items (`[stormfors=item]`)
- `titleAttribute`: Element for job title (`[stormfors=title]`)
- `fetchUrl`: API endpoint URL

## Features

- Automatic data fetching from Duunitori API
- Dynamic creation of job listing elements
- Error handling for failed API requests
- Clickable job listings that link to the original posting

## Code Structure

The script is organized into three main sections:

1. Variables - Contains configuration and state variables
2. Script Initiation - Automatically starts the fetch process
3. Functions:
   - `fetchData()`: Handles API data retrieval
   - `createJobs()`: Manages DOM manipulation and job listing creation

## Dependencies

- No external dependencies required
- Uses native Fetch API for HTTP requests

## Error Handling

The script includes built-in error handling for:

- Network errors
- Invalid API responses
- Missing DOM elements

## Author

Created by Felix Hellström
Website: www.stormfors.com
