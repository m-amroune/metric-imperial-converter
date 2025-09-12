# Metric/Imperial Converter - FreeCodeCamp Project

## Overview
This is a FreeCodeCamp boilerplate project for building a Metric/Imperial unit converter. The project has been configured to run properly in the Replit environment with full functionality implemented.

## Recent Changes (2025-09-12)
- Configured server to bind to 0.0.0.0:5000 for Replit compatibility
- Implemented full ConvertHandler functionality for unit conversion
- Added proper API error handling per FCC specification
- Set up deployment configuration for Replit autoscale

## Project Architecture
- **Backend**: Node.js with Express server
- **Frontend**: Static HTML with jQuery for API interaction
- **API**: RESTful endpoint at `/api/convert` for unit conversions
- **Testing**: Mocha test framework (tests are stubs for student implementation)

## Features
- Converts between gallons ↔ liters, pounds ↔ kilograms, miles ↔ kilometers
- Handles fractional inputs (e.g., "1/2km")
- Proper error responses for invalid units or numbers
- Interactive frontend form for testing conversions

## User Preferences
- Standard FreeCodeCamp project structure maintained
- Error handling follows FCC specification exactly
- All conversion logic fully implemented for immediate functionality